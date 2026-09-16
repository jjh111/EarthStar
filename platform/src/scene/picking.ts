/**
 * What is under the pointer.
 *
 * Screen-space proximity rather than a raycast against geometry. Most of what is
 * worth picking here is either far smaller than a pixel at true scale — a
 * spacecraft, Mercury from across the system — or is a marker rather than a
 * body, and a ray that has to intersect real geometry cannot hit either. So
 * candidates project their centre to the screen and the nearest one within a
 * tolerance wins, with the tolerance growing for bodies that are drawn large so
 * a click anywhere on Jupiter still picks Jupiter.
 *
 * Bodies behind the camera are excluded explicitly: the perspective divide maps
 * them back into the frame with a flipped sign, and without the check the Sun is
 * pickable while you are looking directly away from it.
 */

import { Raycaster, Vector2, Vector3 } from 'three';
import type { Camera, PerspectiveCamera } from 'three';
import type { Pickables } from './pickables.js';

export type PickKind = 'planet' | 'sun' | 'moon' | 'spacecraft';

export interface Candidate {
  kind: PickKind;
  id: string;
  label: string;
  /** World position. */
  position: Vector3;
  /** Rendered radius in world units; 0 for pure markers. */
  radius: number;
}

export interface Pick extends Candidate {
  /** Where it landed on screen, CSS pixels from the canvas top-left. */
  screen: { x: number; y: number };
  distancePx: number;
}

/** Pointer slop, in CSS pixels, for something drawn smaller than this. */
const BASE_TOLERANCE_PX = 22;

export function pickAt(
  pointer: { x: number; y: number },
  candidates: Candidate[],
  camera: Camera,
  size: { width: number; height: number },
): Pick | null {
  let best: Pick | null = null;

  for (const c of candidates) {
    const ndc = c.position.clone().project(camera);
    // z outside [-1, 1] is outside the frustum; behind the camera it also
    // arrives mirrored, which is the case that matters.
    if (ndc.z < -1 || ndc.z > 1) continue;

    const x = (ndc.x * 0.5 + 0.5) * size.width;
    const y = (-ndc.y * 0.5 + 0.5) * size.height;
    const dx = x - pointer.x;
    const dy = y - pointer.y;
    const d = Math.hypot(dx, dy);

    // Rendered radius in pixels, so a large body is pickable across its face.
    const edge = c.position.clone().add(
      camera.up.clone().normalize().multiplyScalar(c.radius),
    ).project(camera);
    const radiusPx = Math.abs((-edge.y * 0.5 + 0.5) * size.height - y);
    const tolerance = Math.max(BASE_TOLERANCE_PX, radiusPx);

    if (d > tolerance) continue;
    // Nearest to the pointer wins; ties go to whichever is closer to the camera.
    if (!best || d < best.distancePx) {
      best = { ...c, screen: { x, y }, distancePx: d };
    }
  }
  return best;
}

/**
 * Was that a click, or the end of a camera move?
 *
 * The browser fires `click` on mouse-up whatever happened in between, so
 * rotating the view with OrbitControls ends in a click on the canvas — and the
 * scene answered every one of them by selecting whatever was under the
 * pointer. Dragging the camera around opened a card, then another, then
 * another.
 *
 * Distance, not duration: a careful slow click is still a click, and a fast
 * flick of the camera is still a drag. Five pixels is past hand tremor and
 * well short of any deliberate rotation.
 */
export const CLICK_SLOP_PX = 5;

export function isClick(
  down: { x: number; y: number } | null, up: { x: number; y: number },
): boolean {
  if (!down) return true;
  return Math.hypot(up.x - down.x, up.y - down.y) <= CLICK_SLOP_PX;
}

/* ------------------------------------------------------------------ *
 * Layers
 * ------------------------------------------------------------------ */

export interface LayerPick {
  /** Subject id from the registry. */
  subject: string;
  /** Where it landed on screen, CSS pixels from the canvas top-left. */
  screen: { x: number; y: number };
  /** World-space hit point, for anything that needs to know where. */
  point: Vector3;
}

/**
 * Screen proximity cannot pick a field line: it has no centre, and the nearest
 * point of a curve to the pointer is exactly what a raycast computes. So
 * bodies keep `pickAt` above and layers get a real ray.
 *
 * The catch is that `Raycaster`'s line and point thresholds are in **world**
 * units, and the scene spans eleven orders of magnitude from a spacecraft
 * marker to Neptune's orbit. A fixed threshold is either useless up close or
 * catches everything from far away. It is derived here from the camera instead,
 * so a hairline stays about as clickable at every distance.
 */
const raycaster = new Raycaster();
const ndc = new Vector2();
const worldScale = new Vector3();

/** Pointer slop for lines and points, in CSS pixels. */
const LINE_TOLERANCE_PX = 6;
/** Pointer slop for small surface markers, in CSS pixels. A sub-pixel marker
 * still deserves a click — the same courtesy `pickAt` extends to bodies. */
const MARKER_TOLERANCE_PX = 12;

export function pickLayerAt(
  pointer: { x: number; y: number },
  pickables: Pickables,
  camera: Camera,
  size: { width: number; height: number },
  /** What the camera is looking at — the orbit target, not the scene origin. */
  focus: Vector3,
): LayerPick | null {
  const roots = pickables.visibleRoots;
  if (roots.length === 0 || size.width === 0 || size.height === 0) return null;

  ndc.set((pointer.x / size.width) * 2 - 1, -(pointer.y / size.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);

  // World units per screen pixel at the distance the camera is focused on.
  // Not the scene origin: at Globe scale the origin is the Sun and the camera
  // is parked at the Earth, so a threshold derived from `position.length()`
  // would be an astronomical unit wide. Perspective only; an orthographic
  // camera would need its own derivation and the Viewer has none.
  const fov = (camera as PerspectiveCamera).fov;
  const dist = Math.max(1e-6, camera.position.distanceTo(focus));
  const worldPerPx = fov
    ? (2 * Math.tan((fov * Math.PI) / 360) * dist) / size.height
    : dist / size.height;
  const tol = worldPerPx * LINE_TOLERANCE_PX;

  /*
   * One root at a time, with the threshold rescaled for each.
   *
   * This is not premature: three.js compares its line and point thresholds in
   * the *object's own local space*, and divides only by the object's own
   * scale — not by the accumulated scale of its parents. Every layer here
   * hangs under a scaled group (the field lines are stored in Earth radii and
   * the group is scaled to the rendered globe), so a threshold passed in world
   * units arrives orders of magnitude too small and nothing is ever hit. It
   * cost an afternoon to find, because the symptom is silence.
   */
  /**
   * Hits are collected across all roots, and a priority rule beats nearest:
   * a marker parented to a body's surface (earthquake events on the globe) is
   * the most specific thing under the pointer, and the model wireframes drawn
   * around that body — the Shue magnetopause, the bow shock — wrap it in
   * space, so their shell intersects the ray first and would otherwise
   * swallow every click at the surface. Context surfaces should not out-shout
   * the events drawn on the planet inside them. Everything else keeps the
   * nearest-hit rule.
   */
  const PRIORITY = new Set(['layer.quakes']);

  let best: LayerPick | null = null;
  let bestDist = Infinity;
  let priority: LayerPick | null = null;
  for (const root of roots) {
    root.getWorldScale(worldScale);
    const s = (Math.abs(worldScale.x) + Math.abs(worldScale.y) + Math.abs(worldScale.z)) / 3;
    const local = tol / Math.max(s, 1e-9);
    raycaster.params.Line.threshold = local;
    raycaster.params.Points.threshold = local;

    let rootBest: { subject: string; point: import('three').Vector3; dist: number } | null = null;
    for (const h of raycaster.intersectObject(root, true)) {
      const subject = pickables.subjectFor(h.object);
      if (!subject) continue;
      rootBest = { subject, point: h.point.clone(), dist: h.distance };
      break;
    }
    if (rootBest) {
      if (rootBest.dist < bestDist) {
        bestDist = rootBest.dist;
        best = { subject: rootBest.subject, screen: { ...pointer }, point: rootBest.point };
      }
      if (PRIORITY.has(rootBest.subject) && !priority) {
        priority = { subject: rootBest.subject, screen: { ...pointer }, point: rootBest.point };
      }
    }
  }

  // Priority roots get a screen-space fallback, because a surface marker is
  // frequently sub-pixel: a magnitude-3 earthquake sphere is ~0.5 px at Globe
  // scale, and exact geometry raycasting cannot hit what the ray squeezes
  // past. Bodies solved this with `pickAt`'s pixel tolerance; layers whose
  // whole point is small markers on a body get the same courtesy — the
  // nearest child within tolerance wins, and `point` is the marker's own
  // position, which is what a card wants anyway.
  if (!priority) {
    for (const root of roots) {
      const subject = pickables.subjectFor(root);
      if (!subject || !PRIORITY.has(subject)) continue;
      let bestPx = Infinity;
      let bestChild: { position: import('three').Vector3 } | null = null;
      for (const child of root.children) {
        const wp = child.getWorldPosition(new Vector3());
        const ndc = wp.clone().project(camera);
        if (ndc.z < -1 || ndc.z > 1) continue;
        const sx = (ndc.x * 0.5 + 0.5) * size.width;
        const sy = (-ndc.y * 0.5 + 0.5) * size.height;
        const d = Math.hypot(sx - pointer.x, sy - pointer.y);
        if (d < bestPx) { bestPx = d; bestChild = { position: wp }; }
      }
      if (bestChild && bestPx <= MARKER_TOLERANCE_PX) {
        priority = { subject, screen: { ...pointer }, point: bestChild.position };
        break;
      }
    }
  }

  return priority ?? best;
}
