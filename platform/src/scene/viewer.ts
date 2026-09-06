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
  AmbientLight, Color, PointLight, Scene, WebGLRenderer,
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
import type { PlanetName } from '../models/ephemeris.js';
import type { Now } from '../contract/types.js';

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

  private mode: ScaleMode = 'globe';
  private _reducedMotion = false;

  private raf = 0;
  private clockStart = performance.now();
  private now: Now | null = null;

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
    this.scene.add(this.earth.group);
    this.scene.add(this.moon.mesh);
    this.scene.add(this.sunLight);
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

  setScaleMode(mode: ScaleMode): void {
    if (mode === this.mode) return;
    this.mode = mode;
    const d = new Date();
    for (const [name, ring] of this.rings) ring.rebuild(name, mode, d);
  }

  get scaleMode(): ScaleMode { return this.mode; }

  get reducedMotion(): boolean { return this._reducedMotion; }

  setReducedMotion(on: boolean): void {
    this._reducedMotion = on;
    this.sun.setReducedMotion(on);
    this.rig.setReducedMotion(on);
  }

  setView(view: ViewName): void {
    const { earthPos, earthRadius, sunDir } = this.geometryNow(new Date());
    this.rig.goTo(view, earthPos, earthRadius, sunDir);
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
    this.sunLight.position.set(0, 0, 0);

    for (const p of this.planets.values()) p.update(date, this.mode, this.rig.camera.position);

    this.earth.group.position.copy(earthPos);
    this.earth.setRadius(earthRadius);
    this.earth.update(date, sunDir);

    // Moon at its true geocentric direction; separation compressed in Globe mode.
    const mg = toScene(moonGeo(date));
    const moonAu = mg.length();
    const moonOffset = mg.clone().normalize()
      .multiplyScalar(moonDistanceToScene(moonAu, this.mode, earthRadius));
    this.moon.mesh.position.copy(earthPos).add(moonOffset);
    this.moon.mesh.scale.setScalar(radiusToScene('Moon', this.mode));

    this.rig.followTarget(earthPos);
    this.rig.update();
    this.renderer.render(this.scene, this.rig.camera);
    this.raf = requestAnimationFrame(this.frame);
  };

  start(): void {
    if (this.raf) return;
    this.setView('deck');
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
    this.rig.dispose();
    this.renderer.dispose();
  }
}
