/**
 * Camera rig. Deck (default — the composed vantage from the tree-ship's rail)
 * and Orbit (free). Transitions ease; under `prefers-reduced-motion` they cut.
 * Every control is reachable from the keyboard (see a11y/keyboard.ts).
 */

import { PerspectiveCamera, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { FrameBody } from './geometry.js';

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
    title: 'Behind Earth looking back down the Sun–Earth line: both bodies in '
      + 'frame, with the wind and the field lines running between them' },
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

/**
 * The Deck's standoff, in Earth radii: back along the Sun–Earth line, then
 * across it and above it. See the deck branch of `viewPose`.
 */
const DECK_BACK_RE = 14;
/** Polar's height over the pole, in Earth radii, when the whole frame is seen. */
const POLAR_RE = 3.4;
const DECK_ACROSS_RE = 5;
const DECK_RISE_RE = 3;

export interface Pose { pos: Vector3; target: Vector3; up: Vector3 }

/**
 * Where the camera stands for a view, what it looks at, and which way is up.
 *
 * Pure, so the framing can be held to what it promises without a canvas: that
 * Polar puts noon at the top, and that the Deck shows Earth and the Sun apart.
 * `lens` is the camera's field of view and aspect, which the Deck needs to
 * judge what the frame will show from each place it could stand.
 */
export function viewPose(
  view: ViewName, earthPos: Vector3, earthRadius: number, sunDir: Vector3,
  coronaRadius: number, bodies: FrameBody[], lens: { fov: number; aspect: number; fill?: number },
): Pose {
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
    // frame. Up is the sunward direction (set below), so noon sits at the top,
    // which is the convention every auroral-oval plot is drawn in — and it
    // puts the oval's offset from the geographic pole where it can be seen.
    //
    // 3.4 Rₑ fills the whole frame's height; where chrome covers part of it
    // (`lens.fill`, the share left), the camera stands back until the cap
    // fills what is left instead.
    const halfAngle = Math.atan(Math.tan(Math.asin(1 / POLAR_RE)) * (lens.fill ?? 1));
    pos = earthPos.clone().addScaledVector(NORTH, earthRadius / Math.sin(halfAngle));
  } else if (view === 'corona') {
    // From Earth, looking back at the Sun — the line SOHO photographs down,
    // and the only direction from which a coronagraph frame is face-on
    // rather than a plane seen edge-on.
    //
    // Framed on the widest coronagraph rather than on the Sun: C3 reaches
    // thirty solar radii, and a frame that fits the Sun would hold about a
    // thirtieth of the picture. `coronaRadius` is that reach in scene units,
    // so the framing follows the scale mode without knowing about it.
    // `sunDir` runs Earth -> Sun, so the Sun-to-Earth direction is its
    // negation. Getting that sign wrong puts the camera on the *far* side of
    // the Sun, looking at the hemisphere no instrument has seen — which
    // renders as the flat unobserved grey it is supposed to, and reads as a
    // blank Sun rather than as a camera in the wrong place.
    const back = coronaRadius / Math.tan((lens.fov * Math.PI) / 360);

    // Never further from the Sun than Earth is. This view is "from where we
    // stand", and the framing distance needed for a wide coronagraph can
    // exceed the Sun-Earth distance outright at Globe scale, where the Sun is
    // exaggerated tenfold and the distance is log-compressed. Standing beyond
    // Earth put Earth itself in the middle of the picture, filling the
    // occulter's cutout — a coronagraph of Earth, which is not a thing.
    // When the picture will not fit from here, it overflows the frame, which
    // is what a corona thirty solar radii wide actually does from Earth.
    const fromEarth = earthPos.length() * 0.92;
    pos = sunDir.clone().negate().normalize()
      .multiplyScalar(Math.min(back * 1.25, fromEarth));
  } else if (view === 'deck') {
    // The mirror of Sunward: behind Earth, looking back along the Sun–Earth
    // line, so the Sun is *in the frame* rather than behind the camera.
    //
    // Which is the whole point of an opening view. From here the two bodies
    // this instrument is about are both visible at once, in their real
    // relationship: the Sun at the far end of the line, Earth near, and the
    // wind and the field lines running between them. Standing sunward of
    // Earth — where this used to be — showed the subject with its cause out
    // of shot.
    //
    // Offset across and above so the two discs stand apart and the lit limb
    // turns toward the camera. Earth is held at frame centre and the Sun sits
    // far beyond it, so the pair separates by roughly the offset times
    // (1/d − 1/(d + D)) — about 3° per Earth radius at this standoff. At 1.5
    // radii each way the Sun sat on Earth's limb: at 1440 × 900 its centre was
    // 115 px from Earth's, where 150 were needed to clear. Five across and
    // three up leave about a disc's width of sky between them, and the pair
    // still reads as one line.
    //
    // Which side is decided by what is in the way. The Moon orbits within a
    // few radii of Earth and the planets wander past the Sun; from one side
    // the full Moon's dark face sat on Earth, from the other Venus did. So the
    // sides are tried, and the camera stands where the nearest pair of discs —
    // Earth and anything, or the Sun and anything — is furthest apart. Above
    // is the frame the eye expects, the Sun high and the lit limb turned up,
    // so it is kept whenever either side of it is clear; from below only when
    // something sits over Earth from both. Only the camera moves: every body
    // stays where the ephemeris puts it.
    const across = new Vector3().crossVectors(sunDir, NORTH).normalize();
    const back = earthPos.clone().addScaledVector(sunDir, -earthRadius * DECK_BACK_RE);
    let best = -Infinity;
    pos = back;
    for (const rise of [1, -1]) {
      for (const side of [1, -1]) {
        const at = back.clone()
          .addScaledVector(across, side * earthRadius * DECK_ACROSS_RE)
          .addScaledVector(NORTH, rise * earthRadius * DECK_RISE_RE);
        const gap = deckClearance(at, earthPos, earthRadius, bodies, lens);
        if (gap > best) { best = gap; pos = at; }
      }
      if (best > 0) break;
    }
  } else {
    // Framed for the whole system, not just the inner four. Globe scale puts
    // Mercury at 2.6 units and Neptune at 8.3 — a range of 3.2:1 for a true
    // range of 77:1 — so one frame can hold all of it without the inner
    // planets collapsing into the Sun.
    pos = new Vector3(0, 8.5, 19);
  }

  // Looking down the spin axis, the default up vector is parallel to the view
  // direction and the orientation is undefined. The Sun's direction laid into
  // the equatorial plane puts the subsolar point, local noon, at the top of
  // the frame: well-defined, and the convention. (Its negation, used here
  // before, put midnight there under a title that promised noon.)
  const up = view === 'polar'
    ? sunDir.clone().sub(NORTH.clone().multiplyScalar(sunDir.dot(NORTH))).normalize()
    : NORTH;
  return { pos, target, up };
}

/**
 * The smallest on-screen gap, in half-heights of the frame, between Earth's
 * disc and any other, or the Sun's and any other, seen from `at` looking at
 * Earth. Negative when two discs overlap. Bodies behind the camera are out of
 * the picture and do not count.
 */
function deckClearance(
  at: Vector3, earthPos: Vector3, earthRadius: number, bodies: FrameBody[],
  lens: { fov: number; aspect: number },
): number {
  const cam = new PerspectiveCamera(lens.fov, lens.aspect, 1e-6, 1e4);
  cam.position.copy(at);
  cam.up.set(0, 1, 0);
  cam.lookAt(earthPos);
  cam.updateMatrixWorld(true);
  const halfTan = Math.tan((lens.fov * Math.PI) / 360);
  const disc = (pos: Vector3, radius: number) => {
    const p = pos.clone().project(cam);
    if (p.z > 1) return null;
    const r = Math.tan(Math.asin(Math.min(1, radius / pos.distanceTo(at)))) / halfTan;
    return { x: p.x * lens.aspect, y: p.y, r };
  };
  const gap = (a: { x: number; y: number; r: number }, b: { x: number; y: number; r: number }) =>
    Math.hypot(a.x - b.x, a.y - b.y) - a.r - b.r;

  const earth = disc(earthPos, earthRadius)!;
  const sun = bodies.find((b) => b.name === 'Sun');
  const sunDisc = sun ? disc(sun.pos, sun.radius) : null;
  let min = Infinity;
  for (const b of bodies) {
    const d = disc(b.pos, b.radius);
    if (!d) continue;
    min = Math.min(min, gap(earth, d));
    if (sunDisc && b !== sun) min = Math.min(min, gap(sunDisc, d));
  }
  return min;
}

export class CameraRig {
  readonly camera: PerspectiveCamera;
  readonly controls: OrbitControls;
  view: ViewName = 'deck';
  /** The share of the frame's height a reader can see; see `Viewer.setTopInset`. */
  fill = 1;
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
   * Fly to a view. `bodies` is every body other than Earth where the scene
   * draws it (`frameBodies`), so the Deck can be framed around them — the
   * camera moves, the bodies do not.
   */
  goTo(
    view: ViewName, earthPos: Vector3, earthRadius: number, sunDir: Vector3,
    coronaRadius: number, bodies: FrameBody[], immediate = false,
  ): void {
    this.view = view;
    // Framed for the band a reader can see: a camera of the whole frame's fov
    // shows, over a band `fill` of its height, what one of this narrower fov
    // and wider aspect would show over all of it.
    const fov = this.fill < 1
      ? (2 * Math.atan(Math.tan((this.camera.fov * Math.PI) / 360) * this.fill) * 180) / Math.PI
      : this.camera.fov;
    const pose = viewPose(view, earthPos, earthRadius, sunDir, coronaRadius, bodies,
      { fov, aspect: this.camera.aspect / this.fill, fill: this.fill });
    this.upHint = pose.up;
    this.camera.up.copy(this.upHint);
    this.animateTo(pose.pos, pose.target, immediate);
  }

  /** What the camera is looking at. Picking derives its screen-space
   * tolerances from the distance to this, not to the scene origin — at Globe
   * scale the origin is the Sun and the subject is the Earth. */
  get focus(): Vector3 { return this.controls.target; }

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
