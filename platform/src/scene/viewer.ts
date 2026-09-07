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
import { Moon, OrbitRing, Planet, makePlanets } from './bodies.js';
import { makeStarfield } from './starfield.js';
import { CameraRig, type ViewName } from './camera-rig.js';
import {
  distanceToScene, moonDistanceToScene, radiusToScene, type ScaleMode,
} from './scales.js';
import { moonGeo, planetState, sunGeo, toScene } from '../models/ephemeris.js';
import { FieldLines, Magnetosphere } from './magnetosphere.js';
import { SolarWind } from './solar-wind.js';
import { ActiveRegions } from './active-regions.js';
import { CmeCones } from './cmes.js';
import { activeCmes, type Cme } from '../data/cme.js';
import type { ActiveRegion } from '../data/swpc.js';
import { magnetopause } from '../models/shue1998.js';
import { gastDegrees } from '../models/ephemeris.js';
import type { PlanetName } from '../models/ephemeris.js';
import type { AuroraNow, Now } from '../contract/types.js';

export interface FrameStats { fps: number; frames: number; }

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
  stats: FrameStats = { fps: 0, frames: 0 };

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new WebGLRenderer({
      canvas, antialias: true, powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
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
  }

  setNow(now: Now | null): void { this.now = now; }

  setAurora(aurora: AuroraNow | null): void { this.aurora = aurora; }

  setRegions(regions: ActiveRegion[], observedAt: string | null): void {
    this.activeRegions.setRegions(regions);
    this.regionsObservedAt = observedAt;
  }

  get regionCount(): number { return this.activeRegions.count; }

  setCmes(cmes: Cme[]): void { this.cmes = cmes; }

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
    this.rig.goTo(view, earthPos, earthRadius, sunDir, immediate);
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
    this.stats = { fps: mean > 0 ? 1000 / mean : 0, frames: this.stats.frames + 1 };

    const date = new Date();
    const elapsed = (t - this.clockStart) / 1000;

    const { earthPos, earthRadius, sunDir } = this.geometryNow(date);

    // Sun at the origin; its rendered radius follows the scale mode.
    this.sun.setRadius(radiusToScene('Sun', this.mode));
    this.sun.update(elapsed, this.now?.xray?.flux_long ?? null);
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

    this.rig.followTarget(earthPos);
    this.rig.update();
    this.renderer.render(this.scene, this.rig.camera);
    this.raf = requestAnimationFrame(this.frame);
  };

  start(): void {
    if (this.raf) return;
    this.setView('deck', true);
    this.raf = requestAnimationFrame(this.frame);
  }

  stop(): void { cancelAnimationFrame(this.raf); this.raf = 0; }

  private resize = (): void => {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.rig.resize(w / Math.max(1, h));
  };

  dispose(): void {
    this.stop();
    window.removeEventListener('resize', this.resize);
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
