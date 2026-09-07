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

import type { Camera, Vector3 } from 'three';

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
