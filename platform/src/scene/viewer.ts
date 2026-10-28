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
import { ATMOSPHERE_RADIUS, Earth } from './earth.js';
import { Sun } from './sun.js';
import {
  calibrateCoronagraph, calibrateDiskPlane, type SunPlaneCalibration,
} from './sun-plane.js';
import { Moon, OrbitRing, Planet, makePlanets } from './bodies.js';
import { makeStarfield } from './starfield.js';
import { CameraRig, type ViewName } from './camera-rig.js';
import {
  AU_KM, BODY_RADIUS_KM, distanceToScene, radiusToScene, type ScaleMode,
} from './scales.js';
import { frameBodies, moonPosition, sceneGeometry } from './geometry.js';
import { gseBasis, solarNorth } from '../models/ephemeris.js';
import { FieldLines, Magnetosphere } from './magnetosphere.js';
import type { ExternalModel } from '../models/fieldlines.js';
import { SolarWind } from './solar-wind.js';
import { Quakes } from './quakes.js';
import { ActiveRegions } from './active-regions.js';
import { CmeCones } from './cmes.js';
import type { SpacecraftPos } from '../data/ephemerides.js';
import type { QuakeFeature } from '../data/earth-quakes.js';
import { MARKER_SIZE_PER_DISTANCE, SpacecraftMarkers } from './spacecraft.js';
import { calibrateDisk } from './disk-calibration.js';
import {
  isClick, layerBeatsBody, pickAt, pickLayerAt, type Candidate, type LayerPick, type Pick,
} from './picking.js';
import { Pickables } from './pickables.js';
import { activeCmes, type Cme } from '../data/cme.js';
import type { ActiveRegion } from '../data/swpc.js';
import { magnetopause, shueRadius, type Magnetopause } from '../models/shue1998.js';
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

/**
 * How often a hover may pay for a layer raycast, milliseconds.
 *
 * A pointermove can fire at the display's refresh rate; a raycast against the
 * field-line cage is thousands of segment tests. Sixty milliseconds is fast
 * enough that the hover label feels attached to the pointer and slow enough
 * that dragging across the scene cannot saturate a frame. Clicks are never
 * throttled — they are rare, and a missed one is unforgivable where a late
 * tooltip is not.
 */
const LAYER_PICK_MS = 60;

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

/**
 * Something in the scene on screen: its centre in CSS px from the viewport's
 * top-left, its drawn radius in px (0 for a point), and its distance from the
 * camera, so whatever stands nearer can be found.
 */
export interface ScreenSpot { x: number; y: number; r: number; depth: number }

/**
 * A thing the scene names, and the places on screen its name could go, in the
 * order they are wanted: one for a body or a marker, a spread over the
 * surface for a boundary. A body's name is set beside its disc, below it
 * first; anything else's to its right.
 */
export interface SceneName {
  key: string;
  label: string;
  spots: ScreenSpot[];
  body?: boolean;
  /** Named only when there is room once the others have theirs. */
  minor?: boolean;
}

/**
 * Something drawn that no name may cover: every body's disc and every
 * marker. A body's disc also hides whatever stands behind it.
 */
export interface SceneDisc extends ScreenSpot { key: string; occludes: boolean }

/**
 * Where a boundary's name may go: the nose first, then further round the
 * flank, toward the frame's top at each step. Degrees from the Sun line. Both
 * surfaces are drawn out to 100°, but past 75° a name hangs in open sky over
 * ribs too faint to see it belongs to.
 */
const NAME_THETAS_DEG = [0, 25, 50, 75];
const NAME_PHI_STEPS = 12;
/**
 * Under this many pixels across its radius, Earth's neighbours go unnamed. At
 * System, Earth is a 5 px dot and its boundaries and monitors a knot round it:
 * four names on one diamond named nothing the reader could tell apart.
 */
const MIN_NAMED_DISC_PX = 8;
/** A marker this close to Earth's limb is named as part of Earth, i.e. not at all. */
const POINT_FROM_EARTH_PX = 8;
/** About one scene name's height at the 10 px floor and up. */
const NAME_HEIGHT_PX = 18;

/** For a layer that can be on with nothing in it: whether it is empty now. */
const EMPTY_WHEN: Record<string, (v: Viewer) => boolean> = {
  'layer.quakes': (v) => v.quakeCount === 0,
  'layer.active-regions': (v) => v.regionCount === 0,
  'layer.cme-cones': (v) => v.cmeCount === 0,
  'layer.magnetopause': (v) => !v.boundariesDrawn,
  'layer.bow-shock': (v) => !v.boundariesDrawn,
};

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
  private quakes = new Quakes();
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
  /**
   * What each drawn layer is, for the picker. Registered here rather than
   * discovered, so the scene never has to ask what kind of thing an object is.
   */
  readonly pickables = new Pickables();
  private hoveredLayer: string | null = null;
  private lastLayerPick = 0;
  private layerPickMs = 0;
  /** A drawn layer came under the pointer, or left it. */
  onLayerHover: ((p: LayerPick | null) => void) | null = null;
  /** A drawn layer was clicked; null means empty space, which dismisses. */
  onLayerSelect: ((p: LayerPick | null) => void) | null = null;
  onHover: ((p: Pick | null) => void) | null = null;
  onSelect: ((p: Pick) => void) | null = null;
  /** After each frame is drawn, for whatever follows the scene on screen. */
  onFrame: (() => void) | null = null;
  /** A retrace of the field lines has finished and the new set is drawn. */
  onTraced: (() => void) | null = null;
  /** Whether the magnetopause and bow shock are on screen: the field is on and the wind reached us. */
  get boundariesDrawn(): boolean { return this.shieldDrawn !== null; }
  /** The Shue solution and Sun direction the boundaries were last drawn from; null while they are not. */
  private shieldDrawn: { mp: Magnetopause; sunDir: Vector3; earthRadius: number } | null = null;
  private shieldVisible = true;
  private windVisible = true;
  private sunDirEarthFixed = new Vector3(1, 0, 0);

  private mode: ScaleMode = 'globe';
  private lastReach = 2;
  private _reducedMotion = false;
  private earthSurface: 'vector' | 'imagery' | 'loading' = 'loading';

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

    const stars = makeStarfield();
    this.scene.add(stars);
    this.scene.add(this.sun.group);
    this.sun.group.add(this.activeRegions.group);
    // Registered but not pickable: the starfield is background, and a click on
    // empty sky should dismiss a card rather than open one. The Sun's imagery
    // and the coronagraph planes are reached as the Sun itself, which wins the
    // tie and is the better answer. All three still appear in the report's
    // index, which claims to list everything on screen and must be able to.
    this.pickables.register(stars, 'layer.starfield', false);
    this.pickables.register(this.sun.group, 'layer.sun-disc', false);
    this.pickables.register(this.activeRegions.group, 'layer.active-regions');
    // Cones are heliocentric, so they hang off the scene root rather than the
    // Sun's group, which carries the Sun's own render scale.
    this.scene.add(this.cmeCones.group);
    this.pickables.register(this.cmeCones.group, 'layer.cme-cones');
    this.scene.add(this.earth.group);
    this.scene.add(this.moon.mesh);
    this.scene.add(this.sunLight);
    // Field lines are Earth-fixed and ride the spin group; the magnetopause is
    // Sun-oriented and must NOT spin, so it hangs off the unrotated group.
    this.earth.spin.add(this.fieldLines.group);
    this.earth.group.add(this.magnetosphere.group);
    this.earth.group.add(this.spacecraft.group);
    this.pickables.register(this.spacecraft.group, 'layer.l1-monitors', false);
    this.pickables.register(this.earth.group, 'layer.terminator', false);
    this.pickables.register(this.fieldLines.group, 'layer.field-lines');
    this.fieldLines.onTraced = () => this.onTraced?.();
    this.pickables.register(this.magnetosphere.magnetopauseObject, 'layer.magnetopause');
    this.pickables.register(this.magnetosphere.bowShockObject, 'layer.bow-shock');
    // Mid-range devices choke on a large point cloud; halve it when the GPU
    // reports a modest pixel budget.
    this.solarWind = new SolarWind(window.devicePixelRatio > 1.5 ? 4200 : 2600);
    this.earth.group.add(this.solarWind.points);
    this.pickables.register(this.solarWind.points, 'layer.solar-wind');
    // Quakes ride the Earth-fixed spin group, so the markers track the surface
    // as the globe turns. Each marker is its own mesh carrying the event in
    // userData, so the picker can name the exact quake and a card can describe
    // it — the same pattern the active-regions layer uses.
    this.earth.spin.add(this.quakes.group);
    this.pickables.register(this.quakes.group, 'layer.quakes');
    this.scene.add(new AmbientLight(0x24304a, 0.55));

    this.planets = makePlanets();
    for (const [name, p] of this.planets) {
      // Earth is drawn by the Earth class; its Planet entry only supplies position.
      if (name !== 'Earth') this.scene.add(p.group);
      const ring = new OrbitRing(name, this.mode, new Date());
      this.rings.set(name, ring);
      this.scene.add(ring.line);
      // Orbits are one subject however many rings there are; the index shows
      // the idea, not eight copies of it.
      this.pickables.register(ring.line, 'layer.orbits');
    }

    this.resize();
    window.addEventListener('resize', this.resize);
    canvas.addEventListener('pointermove', this.onPointerMove);
    canvas.addEventListener('pointerleave', this.onPointerLeave);
    canvas.addEventListener('pointerdown', this.onPointerDown);
    canvas.addEventListener('click', this.onClick);
  }

  setNow(now: Now | null): void { this.now = now; }

  /**
   * Earth's surface imagery, lazy-loaded after first paint by main.ts. The
   * vector base is what the sphere already shows; these swap in when NASA's
   * rasters have decoded. Choosing the size is the caller's job (it needs the
   * viewport); feeding it here is only a texture swap.
   */
  setEarthDayImage(img: HTMLImageElement): void {
    this.earth.setDayImage(img);
  }

  setEarthNightImage(img: HTMLImageElement): void {
    this.earth.setNightImage(img);
  }

  setCoastOverlay(on: boolean): void {
    this.earth.setCoastOverlay(on);
  }

  get coastOverlayOn(): boolean { return this.earth.coastOverlayOn; }

  /** Whether the measured Earth imagery is on the sphere, for the report. */
  get earthSurfaceState(): 'vector' | 'imagery' | 'loading' {
    return this.earthSurface;
  }

  setEarthSurfaceState(s: 'vector' | 'imagery' | 'loading'): void {
    this.earthSurface = s;
  }

  setAurora(aurora: AuroraNow | null): void { this.aurora = aurora; }

  setRegions(regions: ActiveRegion[], observedAt: string | null): void {
    this.activeRegions.setRegions(regions);
    this.regionsObservedAt = observedAt;
  }

  get regionCount(): number { return this.activeRegions.count; }

  setCmes(cmes: Cme[]): void { this.cmes = cmes; }

  /** Feed the earthquake layer. Empty or null hides it — never a half-empty set. */
  setQuakes(features: QuakeFeature[] | null): void {
    this.quakes.setFeatures(features ?? []);
  }

  setQuakesVisible(on: boolean): void {
    this.quakes.setVisible(on);
  }

  get quakesOn(): boolean { return this.quakes.visible; }

  get quakeCount(): number {
    return this.quakes.count;
  }

  /** The biggest event of the day, for the report's ranking sentence. */
  get largestQuake(): { mag: number; place: string } | null {
    let best: { mag: number; place: string } | null = null;
    for (const m of this.quakes.group.children as unknown as Array<{ userData: { quake?: { mag: number | null; place: string } } }>) {
      const q = m.userData['quake'];
      if (!q || q.mag === null || !Number.isFinite(q.mag)) continue;
      if (!best || q.mag > best.mag) best = { mag: q.mag, place: q.place };
    }
    return best;
  }

  /** Master on/off for both solar image planes (SUVI card + coronagraph). */
  setSunPlanesVisible(on: boolean): void {
    this.sun.setPlanesVisible(on);
  }

  get sunPlanesOn(): boolean {
    return this.sun.planesOnState;
  }

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
   * Re-frame the Corona view when what the Sun is showing changes size.
   *
   * Only on a real change, and only in that view: re-issuing the camera move on
   * every frame of a playing loop would fight the reader for the controls.
   */
  syncCoronaFraming(): void {
    if (this.rig.view !== 'corona') return;
    const reach = this.sun.reachRsun();
    if (Math.abs(reach - this.lastReach) < 0.01 * Math.max(1, this.lastReach)) return;
    this.setView('corona');
  }

  /**
   * A coronagraph on its own plane through the Sun. Returns what it measured so
   * the panel can state the field of view, or null when the frame carries no
   * limb circle to measure — in which case nothing is drawn rather than
   * something plausible.
   */
  setCoronaPlane(image: HTMLImageElement | null): SunPlaneCalibration | null {
    if (!image) { this.sun.setCoronaPlane(null, null); return null; }
    const cal = calibrateCoronagraph(image);
    this.sun.setCoronaPlane(image, cal);
    return cal;
  }

  /**
   * The off-limb part of a disk frame, on a card at the Sun.
   *
   * The sphere keeps the disk. This is the third of the picture the sphere's
   * projection has to drop — a point outside the limb has no sphere to land on
   * — drawn on the plane it was actually projected onto rather than smeared
   * into a ring at the edge of a ball.
   */
  setSunCard(image: HTMLImageElement | null): SunPlaneCalibration | null {
    if (!image) { this.sun.setDiskPlane(null, null); return null; }
    const cal = calibrateDiskPlane(image);
    this.sun.setDiskPlane(image, cal);
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
  get fieldLineStats(): {
    lines: number; points: number; far: boolean;
    external: ExternalModel | null; tiltDeg: number | null;
    truncated: number; traceMs: number; tracing: boolean;
  } {
    const ext = this.fieldLines.externalUsed;
    return {
      tracing: this.fieldLines.retracing,
      lines: this.fieldLines.lineCount,
      points: this.fieldLines.pointCount,
      far: this.fieldLines.farSet,
      // Null means no driver reached us, so the lines are IGRF alone. The
      // report says which of the three, because they are different claims
      // about the sky, not three ways of saying the same one.
      external: ext?.model ?? null,
      tiltDeg: ext ? (ext.basis.tilt * 180) / Math.PI : null,
      truncated: this.fieldLines.truncatedCount,
      traceMs: this.fieldLines.traceMs,
    };
  }

  setReducedMotion(on: boolean): void {
    this._reducedMotion = on;
    this.rig.setReducedMotion(on);
    this.fieldLines.setReducedMotion(on);
    this.solarWind.setReducedMotion(on);
  }

  setView(view: ViewName, immediate = false): void {
    this.applyTopInset(view);
    const date = new Date();
    const { earthPos, earthRadius, sunDir } = this.geometryNow(date);
    // What the Sun is actually showing, so the Corona view frames the picture
    // rather than the body at its centre — and reframes when the selection
    // changes from a six-radius coronagraph to a thirty-radius one.
    this.lastReach = this.sun.reachRsun();
    this.rig.goTo(view, earthPos, earthRadius, sunDir,
      distanceToScene(this.lastReach * SUN_RADIUS_AU, this.mode),
      frameBodies(date, this.mode, earthPos, earthRadius), immediate);
    // The other planets are the subject of System and part of the sky in
    // Corona; in the four views about Earth they are dimmed where they stand.
    const nearEarth = view !== 'system' && view !== 'corona';
    for (const [name, p] of this.planets) if (name !== 'Earth') p.setDimmed(nearEarth);
  }

  /** Earth position, rendered radius and the Sun's direction from Earth, in scene space. */
  private geometryNow(date: Date) {
    return sceneGeometry(date, this.mode);
  }

  /**
   * Where Earth is drawn on screen: centre and radius in CSS px from the
   * viewport's top-left, or null while it is behind the camera. The card asks,
   * so it can open on the far side of a click from the planet.
   */
  earthScreen(): { x: number; y: number; r: number } | null {
    const s = this.onScreen(this.earth.group.position, radiusToScene('Earth', this.mode),
      this.canvas.getBoundingClientRect());
    return s && { x: s.x, y: s.y, r: s.r };
  }

  /** Where the Sun is drawn on screen, as `earthScreen` gives Earth. */
  sunScreen(): { x: number; y: number; r: number } | null {
    const s = this.onScreen(this.sun.group.position, radiusToScene('Sun', this.mode),
      this.canvas.getBoundingClientRect());
    return s && { x: s.x, y: s.y, r: s.r };
  }

  /**
   * A point and a radius in the scene, on screen, or null while it is behind
   * the camera. Earth's place for the card and every name in the scene come
   * through here, so a name stands where the card thinks its subject is.
   */
  private onScreen(pos: Vector3, radius: number, cv: DOMRect): ScreenSpot | null {
    const cam = this.rig.camera;
    const p = pos.clone().project(cam);
    if (p.z > 1) return null;
    const depth = pos.distanceTo(cam.position);
    const ang = Math.asin(Math.min(1, radius / depth));
    return {
      x: cv.left + ((p.x + 1) / 2) * cv.width,
      y: cv.top + ((1 - p.y) / 2) * cv.height,
      r: (Math.tan(ang) / Math.tan((cam.fov * Math.PI) / 360)) * (cv.height / 2),
      depth,
    };
  }

  /**
   * What the scene names, where it stands on screen this frame: Earth, the Sun
   * and the Moon at the places picking found them, the L1 monitors at their
   * markers, and the two boundaries as spots over the surfaces actually drawn.
   * Nothing is named that is not drawn: with no measured wind there are no
   * boundaries, and with the field off there are no monitors either.
   */
  sceneNames(): { names: SceneName[]; discs: SceneDisc[] } {
    const cv = this.canvas.getBoundingClientRect();
    const out: SceneName[] = [];
    const discs: SceneDisc[] = [];
    const spot = (pos: Vector3, r: number) => this.onScreen(pos, r, cv);
    const body = (key: string, label: string | null, pos: Vector3, r: number) => {
      const s = spot(pos, r);
      if (!s) return;
      discs.push({ key, occludes: true, ...s });
      if (label) out.push({ key, label, spots: [s], body: true });
    };
    // Earth's disc for the names runs to its glowing rim, which is drawn
    // past the surface: a name at the bare limb sat in the glow.
    body('earth', 'Earth', this.earth.group.position, radiusToScene('Earth', this.mode) * ATMOSPHERE_RADIUS);
    const earth = discs.find((d) => d.key === 'earth') ?? null;
    // Where Earth is drawn under a few pixels — System, True scale — what
    // stands round it (the boundaries, L1, the Moon) is far below a pixel
    // from it, and naming each stacked four labels on one diamond.
    const tiny = !earth || earth.r < MIN_NAMED_DISC_PX;
    const nearEarth = (sx: number, sy: number, gap: number): boolean =>
      !!earth && Math.hypot(sx - earth.x, sy - earth.y) - earth.r < gap;
    for (const c of this.candidates) {
      // The planets are not named, but no name may cover one either.
      if (c.kind === 'sun') body(c.kind, c.label, c.position, c.radius);
      else if (c.kind === 'moon') {
        // Named only a name's height clear of Earth; its disc is still kept clear.
        const sp = spot(c.position, c.radius);
        body(c.kind, sp && !nearEarth(sp.x, sp.y, sp.r + NAME_HEIGHT_PX) ? c.label : null, c.position, c.radius);
      } else if (c.kind === 'planet' && c.id !== 'Earth') body(c.id, null, c.position, c.radius);
    }
    if (this.spacecraft.group.visible && !tiny) {
      const active = new Set(this.spacecraftPos.filter((p) => p.active).map((p) => p.source));
      const cam = this.rig.camera.position;
      for (const c of this.candidates) {
        if (c.kind !== 'spacecraft') continue;
        // The marker's own size on screen, so its name clears the diamond.
        const s = spot(c.position, c.position.distanceTo(cam) * MARKER_SIZE_PER_DISTANCE);
        if (!s || nearEarth(s.x, s.y, POINT_FROM_EARTH_PX)) continue;
        const key = `l1-${c.id}`;
        discs.push({ key, occludes: false, ...s });
        // The one feeding the panel is L1's name; the others stand beside it.
        out.push(active.has(c.id)
          ? { key, label: `L1 · ${c.id}`, spots: [s] }
          : { key, label: c.id, spots: [s], minor: true });
      }
    }
    const shield = this.shieldDrawn;
    if (shield && this.shieldVisible && !tiny) {
      const surface = (key: string, label: string, r0: number, alpha: number) => {
        const spots: ScreenSpot[] = [];
        const axis = shield.sunDir.clone().normalize();
        const up = Math.abs(axis.y) > 0.9 ? new Vector3(1, 0, 0) : new Vector3(0, 1, 0);
        const e1 = new Vector3().crossVectors(axis, up).normalize();
        const e2 = new Vector3().crossVectors(axis, e1).normalize();
        for (const deg of NAME_THETAS_DEG) {
          const th = (deg * Math.PI) / 180;
          const r = shueRadius(r0, alpha, th) * shield.earthRadius;
          const ring: ScreenSpot[] = [];
          for (let j = 0; j < (deg === 0 ? 1 : NAME_PHI_STEPS); j++) {
            const ph = (j / NAME_PHI_STEPS) * Math.PI * 2;
            const dir = axis.clone().multiplyScalar(Math.cos(th))
              .addScaledVector(e1, Math.sin(th) * Math.cos(ph))
              .addScaledVector(e2, Math.sin(th) * Math.sin(ph));
            const s = spot(this.earth.group.position.clone().addScaledVector(dir, r), 0);
            if (s) ring.push(s);
          }
          spots.push(...ring.sort((a, b) => a.y - b.y));
        }
        out.push({ key, label, spots });
      };
      surface('magnetopause', 'Magnetopause', shield.mp.r0Re, shield.mp.alpha);
      // Drawn with the Shue law scaled to its own standoff (magnetosphere.ts).
      surface('bow-shock', 'Bow shock', shield.mp.bowShockRe, shield.mp.alpha * 0.92);
    }
    return { names: out, discs };
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

    // T96's four drivers, from the same readings, so the boundary the scene
    // draws and the field the lines are traced through answer to one wind.
    // By has no propagated form upstream, so it comes from L1 either way;
    // that is a lead-time mismatch of under an hour and the Sources tab
    // says so.
    const dst = this.now?.dst?.value_nt ?? null;
    const by = sw?.by_gsm ?? null;
    const wind = (bz !== null && by !== null && dst !== null && mp !== null)
      ? { pdynNPa: mp.dynPressureNPa, dstNt: dst, byNt: by, bzNt: bz }
      : null;

    // Field lines live in the Earth-fixed frame, so the inertial Sun direction
    // must be counter-rotated by GAST before they can use it.
    const gast = (gastDegrees(date) * Math.PI) / 180;
    const cg = Math.cos(-gast), sg = Math.sin(-gast);
    this.sunDirEarthFixed.set(
      sunDir.x * cg + sunDir.z * sg, sunDir.y, -sunDir.x * sg + sunDir.z * cg,
    );

    if (this.shieldVisible) {
      // The drivers decide the shape of the field lines, not just the ambience:
      // T96 when the wind is complete, T89 on Kp alone when it is not, and
      // IGRF alone when neither reached us — in which case the Situation Report
      // says so rather than the scene implying quiet.
      const kp = this.now?.kp?.estimated_kp ?? null;
      this.fieldLines.ensureTraced(date, { kp, wind });
      this.fieldLines.setScale(earthRadius);
      // Line density and opacity answer to the camera: the tangle that is the
      // subject at Deck is noise at System scale, so past ~100 Rₑ it gives way
      // to twelve signature lines and the boundary silhouette.
      const camDistScene = this.rig.camera.position.distanceTo(earthPos);
      this.fieldLines.setCamera(camDistScene / Math.max(earthRadius, 1e-6), earthRadius, camDistScene);
      this.fieldLines.setDynamics(elapsed, kp);
      this.magnetosphere.setScale(earthRadius);
      this.magnetosphere.update(mp, sunDir);
    }
    this.shieldDrawn = this.shieldVisible && mp ? { mp, sunDir, earthRadius } : null;

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

    // The quake markers are built in Earth radii and must follow the globe's
    // rendered size like every other Earth-fixed layer, or they draw at unit
    // scale and vanish inside (or float far outside) the sphere.
    this.quakes.setScale(earthRadius);

    // Moon at its true geocentric direction; separation compressed in Globe mode.
    this.moon.mesh.position.copy(moonPosition(date, this.mode, earthPos, earthRadius));
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
    this.onFrame?.();

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

  /**
   * Does this layer hit lie on the body's near surface?
   *
   * Earthquake markers are parented to the globe: a click on one is "on
   * Earth", and the body-proximity picker would otherwise capture it before
   * the layer ray ever ran. When the layer hit sits within the body's radius
   * of the body's centre — plus a small tolerance for the marker's own height
   * above the surface — the layer is the more specific answer and wins.
   * Everything else keeps the old rule: the body wins, because a planet
   * behind a field line is still the planet.
   */
  private layerOnBody(layer: LayerPick | null, body: Pick | null): boolean {
    return layerBeatsBody(layer, body, (b) =>
      b.kind === 'sun' ? radiusToScene('Sun', this.mode)
        : b.kind === 'moon' ? radiusToScene('Moon', this.mode)
          : b.kind === 'planet' ? radiusToScene(b.id as PlanetName, this.mode)
            : 0);
  }

  private pointerPick(e: PointerEvent | MouseEvent): Pick | null {
    const r = this.canvas.getBoundingClientRect();
    return pickAt(
      { x: e.clientX - r.left, y: e.clientY - r.top },
      this.candidates, this.rig.camera,
      { width: r.width, height: r.height },
    );
  }

  /**
   * A layer under the pointer, when no body is. Bodies win: a planet behind a
   * field line should still pick the planet, because the planet is the thing
   * the reader is looking at and the line merely crosses it.
   */
  private pointerPickLayer(e: PointerEvent | MouseEvent): LayerPick | null {
    const r = this.canvas.getBoundingClientRect();
    return pickLayerAt(
      { x: e.clientX - r.left, y: e.clientY - r.top },
      this.pickables, this.rig.camera,
      { width: r.width, height: r.height },
      this.rig.focus,
    );
  }

  private onPointerMove = (e: PointerEvent): void => {
    // A drag is a camera move, not a hover; OrbitControls owns the button.
    if (e.buttons !== 0) { this.setHover(null); this.setLayerHover(null); return; }
    const body = this.pointerPick(e);
    this.setHover(body);
    // Raycasting ten thousand line vertices on every pointermove is the
    // obvious way to lose the frame budget, so it runs at most once per
    // `LAYER_PICK_MS`. A body under the pointer does not end the search:
    // layers parented to that body's surface (earthquake markers on the
    // globe) are ON the body, not behind it, and are the more specific
    // answer. `layerOnBody` keeps the body winning for everything else —
    // a planet behind a field line is still the planet.
    const now = performance.now();
    if (now - this.lastLayerPick < LAYER_PICK_MS) return;
    this.lastLayerPick = now;
    const t0 = performance.now();
    const layer = this.pointerPickLayer(e);
    this.layerPickMs = performance.now() - t0;
    this.setLayerHover(this.layerOnBody(layer, body) ? layer : (body ? null : layer));
  };

  private onPointerLeave = (): void => { this.setHover(null); this.setLayerHover(null); };

  private setHover(p: Pick | null): void {
    const same = p?.id === this.hovered?.id;
    this.hovered = p;
    this.canvas.style.cursor = p ? 'pointer' : this.hoveredLayer ? 'pointer' : '';
    // The tooltip follows the pointer, so it is re-emitted even for the same
    // body; the HUD is responsible for not doing DOM work when nothing moved.
    if (!same || p) this.onHover?.(p);
  }

  private setLayerHover(p: LayerPick | null): void {
    const same = p?.subject === this.hoveredLayer;
    this.hoveredLayer = p?.subject ?? null;
    if (!this.hovered) this.canvas.style.cursor = p ? 'pointer' : '';
    if (!same || p) this.onLayerHover?.(p);
  }

  /** How long the last layer raycast took, milliseconds. Reported, not guessed. */
  get layerPickCostMs(): number { return this.layerPickMs; }

  /**
   * Subject ids for every layer currently on screen, for the report's index.
   * Read from the pickable registry rather than kept alongside it, so the list
   * and the scene are the same fact.
   */
  get drawnSubjects(): string[] {
    const out = [...this.pickables.visibleSubjects]
      // The Sun is "Solar imagery" [E] only while a SUVI frame is on it; until
      // then it is the plain placeholder [M], as the stage note says.
      .map((id) => (id === 'layer.sun-disc' && !this.sun.hasImage ? 'layer.sun-placeholder' : id))
      // A layer that is on but has nothing to draw — no quakes, no regions,
      // no cones, no wind for the boundaries — draws nothing, and the index
      // lists what is drawn: offline it listed all five as on screen.
      .filter((id) => !(EMPTY_WHEN[id]?.(this) ?? false));
    // Two layers are shader state on the globe rather than objects of their
    // own, so nothing in the registry can report whether they are on.
    if (this.auroraVisible && this.aurora && !out.includes('layer.aurora')) out.push('layer.aurora');
    if (this.sun.coronagraphShown && !out.includes('layer.coronagraph')) {
      out.push('layer.coronagraph');
    }
    return out;
  }

  /** Where the pointer went down, so a drag can be told from a click. */
  private downAt: { x: number; y: number } | null = null;

  private onPointerDown = (e: PointerEvent): void => {
    this.downAt = { x: e.clientX, y: e.clientY };
  };

  private onClick = (e: MouseEvent): void => {
    // A camera move ends in a click event too, and the scene used to answer
    // every one of them. Drag to rotate, and you opened a card, then another.
    const down = this.downAt;
    this.downAt = null;
    if (!isClick(down, { x: e.clientX, y: e.clientY })) return;

    const p = this.pointerPick(e);
    // Only now pay for the ray. A click is rare; a pointermove is not.
    const layer = this.pointerPickLayer(e);
    if (p && !this.layerOnBody(layer, p)) { this.onSelect?.(p); return; }
    this.onLayerSelect?.(this.layerOnBody(layer, p) ? layer : (p ? null : layer));
  };

  private resize = (): void => {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.rig.resize(w / Math.max(1, h));
    this.applyTopInset();
  };

  /** CSS px of the canvas's top that chrome covers; see `setTopInset`. */
  private topInsetPx = 0;
  /** And how much further down the notes under it reach. */
  private notesInsetPx = 0;

  /**
   * Frame the scene in the part of the canvas a reader can see. On the phone
   * page the opaque header covers the band's top, and a camera centred on the
   * whole canvas put Polar's Earth 26 px under it. The principal point moves to
   * the middle of what is left, and the views are framed for that band
   * (`CameraRig.fill`), so everything that projects through the camera —
   * picking, the names, Earth's place for the card — follows without knowing.
   * Polar, whose Earth fills the frame, also clears the notes under the header.
   * Zero on a desktop, whose header is glass over a scene framed to the window.
   */
  setTopInset(header: number, notes = 0): void {
    const h = Math.max(0, Math.round(header));
    const n = Math.max(0, Math.round(notes));
    if (h === this.topInsetPx && n === this.notesInsetPx) return;
    this.topInsetPx = h;
    this.notesInsetPx = n;
    // Framed again for the band that is left: a glide while the scene runs,
    // so a note arriving mid-flight between views does not cut the flight.
    this.setView(this.rig.view, !this.raf);
  }

  private applyTopInset(view: ViewName = this.rig.view): void {
    const cam = this.rig.camera;
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    const top = this.topInsetPx + (view === 'polar' ? this.notesInsetPx : 0);
    if (top > 0 && w > 0 && h > top) {
      cam.setViewOffset(w, h, 0, -top / 2, w, h);
      this.rig.fill = (h - top) / h;
    } else {
      cam.clearViewOffset();
      this.rig.fill = 1;
    }
  }

  dispose(): void {
    this.stop();
    window.removeEventListener('resize', this.resize);
    this.canvas.removeEventListener('pointermove', this.onPointerMove);
    this.canvas.removeEventListener('pointerleave', this.onPointerLeave);
    this.canvas.removeEventListener('pointerdown', this.onPointerDown);
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
