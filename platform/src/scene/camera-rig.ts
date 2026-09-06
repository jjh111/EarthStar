/**
 * Camera rig. Deck (default — the composed vantage from the tree-ship's rail)
 * and Orbit (free). Transitions ease; under `prefers-reduced-motion` they cut.
 * Every control is reachable from the keyboard (see a11y/keyboard.ts).
 */

import { PerspectiveCamera, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export type ViewName = 'deck' | 'orbit';

const TRANSITION_MS = 1100;
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export class CameraRig {
  readonly camera: PerspectiveCamera;
  readonly controls: OrbitControls;
  view: ViewName = 'deck';

  private from = new Vector3();
  private to = new Vector3();
  private fromTarget = new Vector3();
  private toTarget = new Vector3();
  private startedAt = 0;
  private transitioning = false;
  private reducedMotion = false;

  constructor(dom: HTMLElement, aspect: number) {
    this.camera = new PerspectiveCamera(45, aspect, 0.0005, 5000);
    this.camera.position.set(0, 2.2, 7.5);
    this.controls = new OrbitControls(this.camera, dom);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.minDistance = 0.02;
    this.controls.maxDistance = 400;
    this.controls.enablePan = true;
    // OrbitControls only binds keys if asked; we deliberately do not ask, so
    // its arrow-key panning cannot fight the rig's own shortcuts.
  }

  setReducedMotion(on: boolean): void { this.reducedMotion = on; }

  /** Deck: looking at Earth from slightly above and sunward-off-axis. */
  goTo(view: ViewName, earthPos: Vector3, earthRadius: number, sunDir: Vector3): void {
    this.view = view;
    const target = view === 'deck' ? earthPos.clone() : new Vector3(0, 0, 0);

    let pos: Vector3;
    if (view === 'deck') {
      // Stand off from Earth, offset across the sun line so the terminator is
      // in frame rather than edge-on, and a little above the ecliptic.
      // Stand off outside the Moon's (compressed) orbit so it cannot sit
      // between the camera and the subject in the default framing.
      const across = new Vector3().crossVectors(sunDir, new Vector3(0, 1, 0)).normalize();
      pos = earthPos.clone()
        .add(across.multiplyScalar(earthRadius * 8))
        .add(sunDir.clone().multiplyScalar(earthRadius * 3.5))
        .add(new Vector3(0, earthRadius * 2.5, 0));
    } else {
      pos = new Vector3(0, 4.2, 9.5);
    }
    this.animateTo(pos, target);
  }

  private animateTo(pos: Vector3, target: Vector3): void {
    if (this.reducedMotion) {
      this.camera.position.copy(pos);
      this.controls.target.copy(target);
      this.controls.update();
      this.transitioning = false;
      return;
    }
    this.from.copy(this.camera.position);
    this.to.copy(pos);
    this.fromTarget.copy(this.controls.target);
    this.toTarget.copy(target);
    this.startedAt = performance.now();
    this.transitioning = true;
  }

  update(): void {
    if (this.transitioning) {
      const t = Math.min(1, (performance.now() - this.startedAt) / TRANSITION_MS);
      const e = easeInOut(t);
      this.camera.position.lerpVectors(this.from, this.to, e);
      this.controls.target.lerpVectors(this.fromTarget, this.toTarget, e);
      if (t >= 1) this.transitioning = false;
    }
    this.controls.update();
  }

  /** Keeps Deck view following Earth without stealing the user's orbiting. */
  followTarget(p: Vector3): void {
    if (this.view !== 'deck' || this.transitioning) return;
    const delta = p.clone().sub(this.controls.target);
    if (delta.lengthSq() === 0) return;
    this.controls.target.copy(p);
    this.camera.position.add(delta);
  }

  resize(aspect: number): void {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  dispose(): void { this.controls.dispose(); }
}
