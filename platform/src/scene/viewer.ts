/**
 * Scene assembly and render loop.
 *
 * The physical claims made by this scene, and nothing more:
 *  · planet and Moon positions are true for the displayed instant `[D]`
 *  · Earth's orientation and terminator follow the true sub-solar point `[D]`
 *  · corona brightness tracks measured X-ray flux `[M, driven by E]`
 *  · distances are compressed unless True scale is selected, and the mode is
 *    on screen at all times
 */

import {
  AmbientLight, Color, PointLight, Scene, Vector3, WebGLRenderer,
} from 'three';
import { Earth } from './earth.js';
import { Sun } from './sun.js';
import { calibrateCoronagraph, type CoronagraphCalibration } from './coronagraph-calibration.js';
import { Moon, OrbitRing, Planet, makePlanets } from './bodies.js';
import { makeStarfield } from './starfield.js';
import { CameraRig, type ViewName } from './camera-rig.js';
import {
  AU_KM, BODY_RADIUS_KM, distanceToScene, moonDistanceToScene, radiusToScene,
  type ScaleMode,
} from './scales.js';
import { gseBasis, moonGeo, planetState, solarNorth, sunGeo, toScene } from '../models/ephemeris.js';
import { FieldLines, Magnetosphere } from './magnetosphere.js';
import { SolarWind } from './solar-wind.js';
import { ActiveRegions } from './active-regions.js';
import { CmeCones } from './cmes.js';
import type { SpacecraftPos } from '../data/ephemerides.js';
import { SpacecraftMarkers } from './spacecraft.js';
import { calibrateDisk } from './disk-calibration.js';
import { pickAt, type Candidate, type Pick } from './picking.js';
import { activeCmes, type Cme } from '../data/cme.js';
import type { ActiveRegion } from '../data/swpc.js';
import { magnetopause } from '../models/shue1998.js';
import { gastDegrees } from '../models/ephemeris.js';
import type { PlanetName } from '../models/ephemeris.js';
import type { AuroraNow, Now } from '../contract/types.js';

/**
 * Render-scale ladder.
 *
 * This scene's GPU cost is almost exactly linear in the number of pixels drawn:
 * measured on an M2 Max it runs 0.29 ms per megapixel, from 0.78 ms at 2.5 MP to
 * 2.87 ms at 10 MP. There is nothing clever to do about that — the scene is
 * mostly large additively-blended surfaces, which is inherently fill-bound — so
 * the honest lever is how many pixels to draw, and the right number depends
 * entirely on the machine. A 10-megapixel frame is 3 ms on this GPU and could be
 * 30 ms on an integrated one.
 *
 * So the resolution adapts, and the HUD says when it has been reduced. Quietly
 * degrading quality without saying so would be the same class of dishonesty as
 * quietly degrading data.
 */
const LADDER = [2, 1.75, 1.5, 1.25, 1, 0.85, 0.75];

/**
 * How far down the ladder it is reasonable to go.
 *
 * Without multisampling, one rendered pixel per CSS pixel is the floor: below
 * that there is neither supersampling nor MSAA and the hairlines this scene is
 * made of break up badly. A machine that cannot hold 60 fps at 1.0 with MSAA
 * available can keep dropping, because it has antialiasing to fall back on.
 */
function ladderFloor(msaa: boolean): number {
  return msaa ? LADDER.length - 1 : LADDER.indexOf(1);
}

/** Highest rung at or below `want`. */
function nearestRung(want: number): number {
  return LADDER.find((r) => r <= want + 1e-6) ?? LADDER[LADDER.length - 1]!;
}

/** 60 fps is the goal, not the display's maximum — 120 Hz panels need no more. */
/** LASCO C3's published reach, and the widest frame the Corona view must hold. */
const WIDEST_CORONAGRAPH_RSUN = 30;
const SUN_RADIUS_AU = BODY_RADIUS_KM.Sun / AU_KM;

const TARGET_MS = 1000 / 60;
/** Below ~45 fps, drop a rung. */
const TOO_SLOW_MS = TARGET_MS * 1.35;
/** Comfortably inside the budget, with margin, before climbing back. */
const FAST_ENOUGH_MS = TARGET_MS * 1.05;
const LADDER_INTERVAL_MS = 1000;

export interface LadderState {
  current: number;
  medianFrameMs: number;
  /** Highest rung the display itself can use. */
  max: number;
  msaa: boolean;
  good: number;
  bad: number;
  /**
   * Highest rung still worth trying. Ratchets down when a rung has proved too
   * slow twice, so the ladder converges instead of cycling forever.
   */
  ceiling?: number;
  /** The rung most recently stepped down from. */
  demotedFrom?: number | null;
}

export interface LadderResult {
  ratio: number;
  good: number;
  bad: number;
  ceiling: number;
  demotedFrom: number | null;
}

/**
 * One step of the render-scale decision, as a pure function so the hysteresis
 * can be tested without a GPU.
 *
 * Frame interval can only see a deficit, never headroom — a frame that finishes
 * early still waits for vsync — and the rule leans on that asymmetry: a slow
 * frame is direct evidence, so dropping a rung needs two consecutive seconds,
 * while climbing back needs six.
 *
 * That alone is not enough. A machine that is comfortable at one rung and just
 * short at the next settles into a permanent cycle: six good seconds, a step
 * up, two bad seconds, a step down, forever — a quarter of its life at a
 * resolution it cannot hold, and a buffer reallocation every few seconds. So a
 * rung that has proved too slow *twice* is abandoned: the ceiling ratchets down
 * and the ladder stops reaching for it. Convergence is worth more than the
 * chance that conditions improved.
 */
export function nextRung(s: LadderState): LadderResult {
  const ceiling = s.ceiling ?? s.max;
  let demotedFrom = s.demotedFrom ?? null;
  let { good, bad } = s;

  if (s.medianFrameMs > TOO_SLOW_MS) { bad++; good = 0; }
  else if (s.medianFrameMs < FAST_ENOUGH_MS) { good++; bad = 0; }
  else { good = 0; bad = 0; }

  const i = LADDER.indexOf(s.current);
  if (i < 0) {
    return { ratio: nearestRung(s.current), good: 0, bad: 0, ceiling, demotedFrom };
  }

  if (bad >= 2 && i < ladderFloor(s.msaa)) {
    const ratio = LADDER[i + 1]!;
    // Second time this rung has failed: stop offering it.
    const nextCeiling = demotedFrom === s.current ? Math.min(ceiling, ratio) : ceiling;
    return { ratio, good: 0, bad: 0, ceiling: nextCeiling, demotedFrom: s.current };
  }
  if (good >= 6 && i > 0) {
    const up = LADDER[i - 1]!;
    if (up <= s.max && up <= ceiling) {
      return { ratio: up, good: 0, bad: 0, ceiling, demotedFrom };
    }
  }
  return { ratio: s.current, good, bad, ceiling, demotedFrom };
}

const STAT_WINDOW = 120;

function push(a: number[], v: number): void {
  a.push(v);
  if (a.length > STAT_WINDOW) a.shift();
}

function median(a: number[]): number {
  if (a.length === 0) return 0;
  const s = [...a].sort((x, y) => x - y);
  return s[s.length >> 1]!;
}

export interface FrameStats {
  fps: number;
  frames: number;
  /** Main-thread milliseconds spent building the frame, median of the window. */
  cpuMs: number;
  /** Of that, the part spent in ephemeris and scene update rather than draw submission. */
  updateMs: number;
  /** Current render scale. Below `maxPixelRatio` means quality was traded for frame rate. */
  pixelRatio: number;
  maxPixelRatio: number;
  /** Megapixels drawn per frame — the quantity this scene's cost is linear in. */
  megapixels: number;
}

export class Viewer {
  readonly scene = new Scene();
  readonly rig: CameraRig;
  private renderer: WebGLRenderer;
  private sun = new Sun();
  private earth = new Earth();
  private moon = new Moon();
  private planets = new Map<PlanetName, Planet>();
  private rings = new Map<PlanetName, OrbitRing>();
  private sunLight = new PointLight(0xfff2dd, 1.6, 0, 0);
  private fieldLines = new FieldLines();
  private magnetosphere = new Magnetosphere();
  private solarWind: SolarWind;
  private activeRegions = new ActiveRegions();
  private cmeCones = new CmeCones();
  private cmes: Cme[] = [];
  private regionsObservedAt: string | null = null;
  private readonly spacecraft = new SpacecraftMarkers();
  private spacecraftPos: SpacecraftPos[] = [];
  private sunImageUrl: string | null = null;
  /** Rebuilt each frame; picking needs current positions, not last second's. */
  private candidates: Candidate[] = [];
  private hovered: Pick | null = null;
  onHover: ((p: Pick | null) => void) | null = null;
  onSelect: ((p: Pick) => void) | null = null;
  private shieldVisible = true;
  private windVisible = true;
  private sunDirEarthFixed = new Vector3(1, 0, 0);

  private mode: ScaleMode = 'globe';
  private _reducedMotion = false;

  private raf = 0;
  private clockStart = performance.now();
  private now: Now | null = null;
  private aurora: AuroraNow | null = null;
  private auroraVisible = true;

  // Frame-rate accounting for the performance budget (plan §5.4).
  private frameTimes: number[] = [];
  private lastFrame = performance.now();
  stats: FrameStats = {
    fps: 0, frames: 0, cpuMs: 0, updateMs: 0,
    pixelRatio: 1, maxPixelRatio: 1, megapixels: 0,
  };
  private cpuTimes: number[] = [];
  private updateTimes: number[] = [];
  private pixelRatio = 1;
  private maxPixelRatio = 1;
  private msaa = false;
  private lastLadderCheck = 0;
  private goodStreak = 0;
  private badStreak = 0;
  private ladderCeiling = Infinity;
  private demotedFrom: number | null = null;

  constructor(private canvas: HTMLCanvasElement) {
    // Multisampling and a 2x pixel ratio buy the same thing — smoother edges —
    // and buying it twice is what makes this scene expensive. At DPR 2 the
    // buffer is already supersampled 4:1 against the CSS pixel, so MSAA on top
    // costs a large multisample buffer and a resolve for very little. Below
    // DPR 2 there is no supersampling to lean on and MSAA earns its place.
    this.msaa = devicePixelRatio < 2;
    this.renderer = new WebGLRenderer({
      canvas, antialias: this.msaa, powerPreference: 'high-performance',
    });
    this.pixelRatio = nearestRung(Math.min(devicePixelRatio, 2));
    this.maxPixelRatio = this.pixelRatio;
    this.ladderCeiling = this.pixelRatio;
    this.renderer.setPixelRatio(this.pixelRatio);
    this.scene.background = new Color(0x05070d);

    this.rig = new CameraRig(canvas, canvas.clientWidth / Math.max(1, canvas.clientHeight));

    this.scene.add(makeStarfield());
    this.scene.add(this.sun.group);
    this.sun.group.add(this.activeRegions.group);
    // Cones are heliocentric, so they hang off the scene root rather than the
    // Sun's group, which carries the Sun's own render scale.
    this.scene.add(this.cmeCones.group);
    this.scene.add(this.earth.group);
    this.scene.add(this.moon.mesh);
    this.scene.add(this.sunLight);
    // Field lines are Earth-fixed and ride the spin group; the magnetopause is
    // Sun-oriented and must NOT spin, so it hangs off the unrotated group.
    this.earth.spin.add(this.fieldLines.group);
    this.earth.group.add(this.magnetosphere.group);
    this.earth.group.add(this.spacecraft.group);
    // Mid-range devices choke on a large point cloud; halve it when the GPU
    // reports a modest pixel budget.
    this.solarWind = new SolarWind(window.devicePixelRatio > 1.5 ? 4200 : 2600);
    this.earth.group.add(this.solarWind.points);
    this.scene.add(new AmbientLight(0x24304a, 0.55));

    this.planets = makePlanets();
    for (const [name, p] of this.planets) {
      // Earth is drawn by the Earth class; its Planet entry only supplies position.
      if (name !== 'Earth') this.scene.add(p.group);
      const ring = new OrbitRing(name, this.mode, new Date());
      this.rings.set(name, ring);
      this.scene.add(ring.line);
    }

    this.resize();
    window.addEventListener('resize', this.resize);
    canvas.addEventListener('pointermove', this.onPointerMove);
    canvas.addEventListener('pointerleave', this.onPointerLeave);
    canvas.addEventListener('click', this.onClick);
  }

  setNow(now: Now | null): void { this.now = now; }

  setAurora(aurora: AuroraNow | null): void { this.aurora = aurora; }

  setRegions(regions: ActiveRegion[], observedAt: string | null): void {
    this.activeRegions.setRegions(regions);
    this.regionsObservedAt = observedAt;
  }

  get regionCount(): number { return this.activeRegions.count; }

  setCmes(cmes: Cme[]): void { this.cmes = cmes; }

  /**
   * Put a solar frame on the Sun. The calibration is measured from the image
   * itself, once per frame; a frame that cannot be measured is not shown,
   * because a mis-registered projection puts active regions in the wrong place
   * and looks entirely convincing doing it.
   */
  setSunImage(image: HTMLImageElement | null): void {
    if (!image || !image.complete || image.naturalWidth === 0) {
      this.sun.setImage(null, null);
      this.sunImageUrl = null;
      return;
    }
    if (image.src === this.sunImageUrl) return;
    this.sunImageUrl = image.src;
    this.sun.setImage(image, calibrateDisk(image));
  }

  get sunHasImage(): boolean { return this.sun.hasImage; }

  /**
   * Show a coronagraph frame on the image plane through the Sun. Returns the
   * calibration so the panel can state the field of view it measured, or null
   * when the frame carries no limb circle to measure — in which case nothing is
   * drawn rather than something plausible.
   */
  setCoronagraph(image: HTMLImageElement | null): CoronagraphCalibration | null {
    if (!image) { this.sun.setCoronagraph(null, null); return null; }
    const cal = calibrateCoronagraph(image);
    this.sun.setCoronagraph(image, cal);
    return cal;
  }

  /** The live solar projection, for the check that tests it against NOAA's numbers. */
  sunProjection(): ReturnType<Sun['projection']> { return this.sun.projection(); }

  setSpacecraft(list: SpacecraftPos[]): void { this.spacecraftPos = list; }

  setSpacecraftVisible(v: boolean): void { this.spacecraft.setVisible(v); }

  setCmesVisible(v: boolean): void { this.cmeCones.setVisible(v); }

  get cmesOn(): boolean { return this.cmeCones.group.visible; }

  get cmeCount(): number { return this.cmeCones.count; }

  setAuroraVisible(v: boolean): void { this.auroraVisible = v; }

  get auroraOn(): boolean { return this.auroraVisible; }

  setScaleMode(mode: ScaleMode): void {
    if (mode === this.mode) return;
    this.mode = mode;
    const d = new Date();
    for (const [name, ring] of this.rings) ring.rebuild(name, mode, d);
  }

  get scaleMode(): ScaleMode { return this.mode; }

  get reducedMotion(): boolean { return this._reducedMotion; }

  setShieldVisible(v: boolean): void {
    this.shieldVisible = v;
    this.fieldLines.setVisible(v);
    this.magnetosphere.setVisible(v);
  }

  get shieldOn(): boolean { return this.shieldVisible; }

  setWindVisible(v: boolean): void {
    this.windVisible = v;
    this.solarWind.setVisible(v);
  }

  get windOn(): boolean { return this.windVisible; }

  /** Field-line counts, for the Situation Report and the perf readout. */
  get fieldLineStats(): { lines: number; points: number } {
    return { lines: this.fieldLines.lineCount, points: this.fieldLines.pointCount };
  }

  setReducedMotion(on: boolean): void {
    this._reducedMotion = on;
    this.sun.setReducedMotion(on);
    this.rig.setReducedMotion(on);
    this.fieldLines.setReducedMotion(on);
    this.solarWind.setReducedMotion(on);
  }

  setView(view: ViewName, immediate = false): void {
    const { earthPos, earthRadius, sunDir } = this.geometryNow(new Date());
    // The widest coronagraph's reach, in scene units, so the Corona view can
    // frame the picture rather than the body at its centre.
    this.rig.goTo(view, earthPos, earthRadius, sunDir,
      distanceToScene(WIDEST_CORONAGRAPH_RSUN * SUN_RADIUS_AU, this.mode), immediate);
  }

  private geometryNow(date: Date) {
    const earthHelio = toScene(planetState('Earth', date).helio);
    const earthAu = earthHelio.length();
    const earthPos = earthHelio.clone().normalize().multiplyScalar(distanceToScene(earthAu, this.mode));
    const earthRadius = radiusToScene('Earth', this.mode);
    // Sun direction from Earth, in scene space.
    const sunDir = sunGeo(date).dir;
    return { earthPos, earthRadius, sunDir: toScene(sunDir).normalize() };
  }

  private frame = (): void => {
    const t = performance.now();
    const dt = t - this.lastFrame;
    this.lastFrame = t;
    this.frameTimes.push(dt);
    if (this.frameTimes.length > 120) this.frameTimes.shift();
    const mean = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
    // Frame interval alone cannot see the cost of a frame that finishes inside
    // the vsync budget, so the work itself is timed too. Median, not mean: one
    // garbage collection should not be reported as the steady-state cost.
    this.stats = {
      fps: mean > 0 ? 1000 / mean : 0,
      frames: this.stats.frames + 1,
      cpuMs: median(this.cpuTimes),
      updateMs: median(this.updateTimes),
      pixelRatio: this.pixelRatio,
      maxPixelRatio: this.maxPixelRatio,
      megapixels: (this.canvas.clientWidth * this.canvas.clientHeight
        * this.pixelRatio * this.pixelRatio) / 1e6,
    };
    this.adaptResolution(t, median(this.frameTimes));

    const date = new Date();
    const elapsed = (t - this.clockStart) / 1000;

    const { earthPos, earthRadius, sunDir } = this.geometryNow(date);

    // Sun at the origin; its rendered radius follows the scale mode.
    this.sun.setRadius(radiusToScene('Sun', this.mode));
    this.sun.setScaleMode(this.mode);
    this.sun.update(elapsed, this.now?.xray?.flux_long ?? null);
    // The projection is defined by where the image was taken from: the
    // direction to Earth, and solar north for the image's "up".
    this.sun.setViewGeometry(sunDir.clone().negate(), solarNorth(date));
    this.activeRegions.update(date, this.regionsObservedAt, radiusToScene('Sun', this.mode));
    this.sunLight.position.set(0, 0, 0);

    for (const p of this.planets.values()) p.update(date, this.mode, this.rig.camera.position);

    this.earth.group.position.copy(earthPos);
    this.earth.setRadius(earthRadius);
    this.earth.update(date, sunDir);
    this.earth.setAurora(this.aurora, this.auroraVisible);

    // The live Shue solution drives the boundary surfaces, the confinement of
    // the field lines, and where the wind stream parts. One computation, three
    // consumers, so they cannot disagree on screen.
    // Prefer the propagated wind: the scene should show what is hitting Earth
    // now, not what is still an hour out at L1. Falls back to the L1 reading.
    const sw = this.now?.solar_wind;
    const arriving = this.now?.propagated;
    const bz = arriving?.bz ?? sw?.bz_gsm ?? null;
    const density = arriving?.density ?? sw?.density ?? null;
    const speed = arriving?.speed ?? sw?.speed ?? null;
    const mp = magnetopause(bz, density, speed);

    // Field lines live in the Earth-fixed frame, so the inertial Sun direction
    // must be counter-rotated by GAST before they can use it.
    const gast = (gastDegrees(date) * Math.PI) / 180;
    const cg = Math.cos(-gast), sg = Math.sin(-gast);
    this.sunDirEarthFixed.set(
      sunDir.x * cg + sunDir.z * sg, sunDir.y, -sunDir.x * sg + sunDir.z * cg,
    );

    if (this.shieldVisible) {
      this.fieldLines.ensureTraced(date);
      this.fieldLines.setScale(earthRadius);
      this.fieldLines.setDynamics(
        elapsed, this.sunDirEarthFixed,
        mp?.r0Re ?? null, mp?.alpha ?? null, this.now?.kp?.estimated_kp ?? null,
      );
      this.magnetosphere.setScale(earthRadius);
      this.magnetosphere.update(mp, sunDir);
    }

    // The monitors sit in the same Earth-centred frame as the shield, and are
    // shown with it: they are the instruments the shield's numbers come from.
    if (this.shieldVisible && this.spacecraftPos.length > 0) {
      this.spacecraft.setVisible(true);
      this.spacecraft.setScale(earthRadius);
      this.spacecraft.update(
        this.spacecraftPos, gseBasis(date), this.mode, this.rig.camera.position,
      );
    } else {
      this.spacecraft.setVisible(false);
    }

    if (this.windVisible) {
      this.solarWind.setVisible(true);
      this.solarWind.setScale(earthRadius);
      this.solarWind.update(
        elapsed, sunDir, speed, density, mp?.r0Re ?? null, mp?.alpha ?? null,
      );
    }

    // Moon at its true geocentric direction; separation compressed in Globe mode.
    const mg = toScene(moonGeo(date));
    const moonAu = mg.length();
    const moonOffset = mg.clone().normalize()
      .multiplyScalar(moonDistanceToScene(moonAu, this.mode, earthRadius));
    this.moon.mesh.position.copy(earthPos).add(moonOffset);
    this.moon.mesh.scale.setScalar(radiusToScene('Moon', this.mode));

    // Earth's direction from the Sun anchors Stonyhurst longitude 0.
    this.cmeCones.update(activeCmes(this.cmes, date), date, this.mode, earthPos);

    // Picking works off screen-space proximity, so it needs the positions this
    // frame actually drew rather than a recomputed estimate.
    this.candidates = [
      { kind: 'sun', id: 'Sun', label: 'Sun',
        position: this.sun.group.position.clone(), radius: radiusToScene('Sun', this.mode) },
      { kind: 'moon', id: 'Moon', label: 'Moon',
        position: this.moon.mesh.position.clone(), radius: radiusToScene('Moon', this.mode) },
      ...[...this.planets].map(([name, p]) => ({
        kind: 'planet' as const, id: name, label: name,
        position: p.group.position.clone(), radius: radiusToScene(name, this.mode),
      })),
      ...this.spacecraft.group.children
        .filter((c) => c.name.startsWith('l1-') && c.name !== 'sun-earth-line')
        .map((c) => ({
          kind: 'spacecraft' as const,
          id: c.name.slice(3),
          label: c.name.slice(3),
          position: c.getWorldPosition(new Vector3()),
          radius: 0,
        })),
    ];

    this.rig.followTarget(earthPos);
    this.rig.update();
    const updateDone = performance.now();
    this.renderer.render(this.scene, this.rig.camera);

    push(this.updateTimes, updateDone - t);
    push(this.cpuTimes, performance.now() - t);
    this.raf = requestAnimationFrame(this.frame);
  };

  start(): void {
    if (this.raf) return;
    this.setView('deck', true);
    this.raf = requestAnimationFrame(this.frame);
  }

  stop(): void { cancelAnimationFrame(this.raf); this.raf = 0; }

/**
   * Step the render scale to fit the frame budget.
   *
   * Frame interval can only see a deficit, never headroom — a frame that
   * finishes early still waits for vsync — which is exactly the asymmetry
   * needed: a slow frame is measurable, so dropping a rung is decisive, while
   * climbing back is deliberately slower and needs sustained evidence. Stepping
   * costs a buffer reallocation, so it is checked once a second, not per frame.
   */
  private adaptResolution(now: number, medianFrameMs: number): void {
    if (now - this.lastLadderCheck < LADDER_INTERVAL_MS) return;
    this.lastLadderCheck = now;
    if (this.frameTimes.length < STAT_WINDOW / 2) return;

    const next = nextRung({
      current: this.pixelRatio, medianFrameMs, max: this.maxPixelRatio,
      msaa: this.msaa, good: this.goodStreak, bad: this.badStreak,
      ceiling: this.ladderCeiling, demotedFrom: this.demotedFrom,
    });
    this.goodStreak = next.good;
    this.badStreak = next.bad;
    this.ladderCeiling = next.ceiling;
    this.demotedFrom = next.demotedFrom;
    if (next.ratio !== this.pixelRatio) this.setPixelRatio(next.ratio);
  }

  private setPixelRatio(r: number): void {
    if (r === this.pixelRatio) return;
    this.pixelRatio = r;
    this.badStreak = 0;
    this.goodStreak = 0;
    this.renderer.setPixelRatio(r);
    this.resize();
    // The window described the old resolution; judging the new one against it
    // would step again before a single frame at the new size has been drawn.
    this.frameTimes.length = 0;
    this.cpuTimes.length = 0;
    this.updateTimes.length = 0;
  }

  private pointerPick(e: PointerEvent | MouseEvent): Pick | null {
    const r = this.canvas.getBoundingClientRect();
    return pickAt(
      { x: e.clientX - r.left, y: e.clientY - r.top },
      this.candidates, this.rig.camera,
      { width: r.width, height: r.height },
    );
  }

  private onPointerMove = (e: PointerEvent): void => {
    // A drag is a camera move, not a hover; OrbitControls owns the button.
    if (e.buttons !== 0) { this.setHover(null); return; }
    this.setHover(this.pointerPick(e));
  };

  private onPointerLeave = (): void => { this.setHover(null); };

  private setHover(p: Pick | null): void {
    const same = p?.id === this.hovered?.id;
    this.hovered = p;
    this.canvas.style.cursor = p ? 'pointer' : '';
    // The tooltip follows the pointer, so it is re-emitted even for the same
    // body; the HUD is responsible for not doing DOM work when nothing moved.
    if (!same || p) this.onHover?.(p);
  }

  private onClick = (e: MouseEvent): void => {
    const p = this.pointerPick(e);
    if (p) this.onSelect?.(p);
  };

  private resize = (): void => {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.rig.resize(w / Math.max(1, h));
  };

  dispose(): void {
    this.stop();
    window.removeEventListener('resize', this.resize);
    this.canvas.removeEventListener('pointermove', this.onPointerMove);
    this.canvas.removeEventListener('pointerleave', this.onPointerLeave);
    this.canvas.removeEventListener('click', this.onClick);
    this.earth.dispose();
    this.sun.dispose();
    this.fieldLines.dispose();
    this.magnetosphere.dispose();
    this.solarWind.dispose();
    this.activeRegions.dispose();
    this.cmeCones.dispose();
    this.rig.dispose();
    this.renderer.dispose();
  }
}
