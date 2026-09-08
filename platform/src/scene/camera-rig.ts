/**
 * Camera rig. Deck (default — the composed vantage from the tree-ship's rail)
 * and Orbit (free). Transitions ease; under `prefers-reduced-motion` they cut.
 * Every control is reachable from the keyboard (see a11y/keyboard.ts).
 */

import { PerspectiveCamera, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * The vantage points.
 *
 * Not arbitrary angles: each is a standing convention for looking at this
 * system, and each shows something the others cannot.
 *
 *  · `deck`     — Earth from a standoff, terminator in frame. Where you are.
 *  · `sunward`  — down the Sun–Earth line from the Sun. The magnetopause
 *                 face-on and the dayside lit: what the wind sees on approach.
 *  · `profile`  — the noon–midnight meridian, the textbook cutaway. Nose
 *                 compression against tail flaring; the north–south structure.
 *  · `polar`    — straight down the spin axis with noon at the top of the
 *                 frame, which is how every auroral-oval plot is drawn. The
 *                 oval reads as a ring, and its offset from the geographic
 *                 pole — it encircles the *magnetic* one, ten degrees away —
 *                 is visible rather than asserted.
 *  · `system`   — the whole solar system.
 *
 * An equatorial-plane view was tried here and dropped: Shue's magnetopause is a
 * surface of revolution about the Sun line, so there is no dawn–dusk asymmetry
 * in the model to look at, and the view showed less than the profile does. A
 * vantage point that adds nothing is a control that costs attention.
 */
export type ViewName = 'deck' | 'sunward' | 'profile' | 'polar' | 'corona' | 'system';

/** Labels and the one-line reason each view exists. */
export const VIEWS: Array<{ id: ViewName; label: string; title: string }> = [
  { id: 'deck', label: 'Deck',
    title: 'Earth from a standoff, with the day/night terminator in frame' },
  { id: 'sunward', label: 'Sunward',
    title: 'Looking down the Sun–Earth line from the Sun: the magnetopause face-on' },
  { id: 'profile', label: 'Profile',
    title: 'The noon–midnight meridian: nose compression against tail flaring' },
  { id: 'polar', label: 'Polar',
    title: 'Over the north pole with noon at the top: the auroral oval as a ring, '
      + 'offset because it encircles the magnetic pole rather than this one' },
  { id: 'corona', label: 'Corona',
    title: 'The Sun from where we stand, framed for the coronagraphs: LASCO '
      + 'photographs down this exact line, so its image plane is face-on here' },
  { id: 'system', label: 'System',
    title: 'The whole solar system, all eight planets at their true positions' },
];

const TRANSITION_MS = 1100;
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export class CameraRig {
  readonly camera: PerspectiveCamera;
  readonly controls: OrbitControls;
  view: ViewName = 'deck';
  private upHint = new Vector3(0, 1, 0);

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

  /**
   * Deck frames the globe; Shield pulls back far enough to contain the
   * magnetopause and bow shock (roughly 11 and 14 Earth radii) and views them
   * side-on, so the compressed dayside and the flared tail are both legible;
   * Orbit backs off to the whole inner system.
   */
  goTo(
    view: ViewName, earthPos: Vector3, earthRadius: number, sunDir: Vector3,
    coronaRadius: number, immediate = false,
  ): void {
    this.view = view;
    const NORTH = new Vector3(0, 1, 0);
    let target = view === 'system' || view === 'corona'
      ? new Vector3(0, 0, 0) : earthPos.clone();

    let pos: Vector3;
    if (view === 'profile') {
      // Perpendicular to the plane containing the Sun line and north, so that
      // plane is seen face-on: the nose compression and the tail flaring are
      // only visible in section.
      const across = new Vector3().crossVectors(sunDir, NORTH).normalize();
      // Aim down-tail of Earth so the frame holds the compressed nose and a
      // useful stretch of tail rather than centring on a body that is, at this
      // scale, a dot.
      target = earthPos.clone().addScaledVector(sunDir, -earthRadius * 6);
      pos = earthPos.clone()
        .add(across.multiplyScalar(earthRadius * 52))
        .add(sunDir.clone().multiplyScalar(earthRadius * 4))
        .add(new Vector3(0, earthRadius * 18, 0));
    } else if (view === 'sunward') {
      // Straight down the Sun–Earth line. The magnetopause presents its face,
      // the dayside is fully lit, and both auroral ovals are in view at once —
      // the geometry the wind actually arrives in.
      pos = earthPos.clone().addScaledVector(sunDir, earthRadius * 26);
    } else if (view === 'polar') {
      // Straight down the spin axis, close enough that the polar cap fills the
      // frame. Up is anti-sunward so noon sits at the top, which is the
      // convention every auroral-oval plot is drawn in — and it puts the oval's
      // offset from the geographic pole where it can be seen.
      pos = earthPos.clone().addScaledVector(NORTH, earthRadius * 3.4);
    } else if (view === 'corona') {
      // From Earth, looking back at the Sun — the line SOHO photographs down,
      // and the only direction from which a coronagraph frame is face-on
      // rather than a plane seen edge-on.
      //
      // Framed on the widest coronagraph rather than on the Sun: C3 reaches
      // thirty solar radii, and a frame that fits the Sun would hold about a
      // thirtieth of the picture. `coronaRadius` is that reach in scene units,
      // so the framing follows the scale mode without knowing about it.
      const back = coronaRadius / Math.tan((this.camera.fov * Math.PI) / 360);
      pos = sunDir.clone().negate().normalize().multiplyScalar(-back * 1.25);
    } else if (view === 'deck') {
      // Stand off from Earth, offset across the sun line so the terminator is
      // in frame rather than edge-on, and a little above the ecliptic.
      // Stand off outside the Moon's (compressed) orbit so it cannot sit
      // between the camera and the subject in the default framing.
      const across = new Vector3().crossVectors(sunDir, NORTH).normalize();
      pos = earthPos.clone()
        .add(across.multiplyScalar(earthRadius * 8))
        .add(sunDir.clone().multiplyScalar(earthRadius * 3.5))
        .add(new Vector3(0, earthRadius * 2.5, 0));
    } else {
      // Framed for the whole system, not just the inner four. Globe scale puts
      // Mercury at 2.6 units and Neptune at 8.3 — a range of 3.2:1 for a true
      // range of 77:1 — so one frame can hold all of it without the inner
      // planets collapsing into the Sun.
      pos = new Vector3(0, 8.5, 19);
    }

    // Looking down the spin axis, the default up vector is parallel to the
    // view direction and the orientation is undefined. Anti-sunward puts noon
    // at the top of the frame: well-defined, and the convention.
    this.upHint = view === 'polar'
      ? sunDir.clone().negate().normalize() : NORTH.clone();
    this.camera.up.copy(this.upHint);

    this.animateTo(pos, target, immediate);
  }

  private animateTo(pos: Vector3, target: Vector3, immediate = false): void {
    // The first view is a cut, not a flight: easing in from the constructor's
    // arbitrary starting point means the first painted frame is wrong, and a
    // backgrounded tab can be shown mid-flight.
    if (this.reducedMotion || immediate) {
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
