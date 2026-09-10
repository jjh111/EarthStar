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
  let best: LayerPick | null = null;
  let bestDist = Infinity;
  for (const root of roots) {
    root.getWorldScale(worldScale);
    const s = (Math.abs(worldScale.x) + Math.abs(worldScale.y) + Math.abs(worldScale.z)) / 3;
    const local = tol / Math.max(s, 1e-9);
    raycaster.params.Line.threshold = local;
    raycaster.params.Points.threshold = local;

    for (const h of raycaster.intersectObject(root, true)) {
      if (h.distance >= bestDist) break;
      const subject = pickables.subjectFor(h.object);
      if (!subject) continue;
      bestDist = h.distance;
      best = { subject, screen: { ...pointer }, point: h.point.clone() };
      break;
    }
  }
  return best;
}
