/**
 * CME cones expanding from the Sun — tier `[D]`.
 *
 * Each cone is drawn as a translucent wireframe shell from the Sun's surface out
 * to the leading edge's current radial distance, at the analysed half-angle and
 * axis. Earth-directed cones are drawn warmer and carry an arrival ring at
 * Earth's orbital distance.
 *
 * The shape is the model's, not ours: apex direction, half-angle and speed all
 * come from DONKI's analysis of coronagraph imagery. What we add is radial
 * propagation at constant speed, whose limits are stated in the panel.
 */

import {
  AdditiveBlending, BufferGeometry, Color, Float32BufferAttribute, Group,
  LineSegments, LineBasicMaterial, Vector3,
} from 'three';
import type { Cme } from '../data/cme.js';
import { coneAxis, frontDistanceAu } from '../models/cme-cone.js';
import { distanceToScene, type ScaleMode } from './scales.js';

const EARTH_DIRECTED = new Color(1.0, 0.52, 0.30);
const OFF_AXIS = new Color(0.62, 0.66, 0.85);

/**
 * Wireframe cone: rings at increasing radius plus meridians along the surface.
 * Radii are mapped through the scene's distance function so the cone compresses
 * with everything else in Globe scale rather than shooting off the canvas.
 */
function coneWireframe(
  axis: Vector3, halfAngleDeg: number, frontAu: number, mode: ScaleMode,
): BufferGeometry {
  const half = (Math.min(89, Math.max(2, halfAngleDeg)) * Math.PI) / 180;
  const up = Math.abs(axis.y) > 0.9 ? new Vector3(1, 0, 0) : new Vector3(0, 1, 0);
  const e1 = new Vector3().crossVectors(axis, up).normalize();
  const e2 = new Vector3().crossVectors(axis, e1).normalize();

  const RINGS = 7;
  const SEGS = 28;
  const pos: number[] = [];
  const push = (a: Vector3, b: Vector3) => { pos.push(a.x, a.y, a.z, b.x, b.y, b.z); };

  // Sample radius linearly in AU, then map each to scene units.
  const ringAu = Array.from({ length: RINGS }, (_, i) => (frontAu * (i + 1)) / RINGS);
  const rings: Vector3[][] = ringAu.map((au) => {
    const r = distanceToScene(au, mode);
    const rr = r * Math.tan(half);
    return Array.from({ length: SEGS }, (_, j) => {
      const p = (j / SEGS) * Math.PI * 2;
      return axis.clone().multiplyScalar(r)
        .addScaledVector(e1, rr * Math.cos(p))
        .addScaledVector(e2, rr * Math.sin(p));
    });
  });

  for (const ring of rings) {
    for (let j = 0; j < SEGS; j++) push(ring[j]!, ring[(j + 1) % SEGS]!);
  }
  for (let j = 0; j < SEGS; j += 4) {
    const apex = new Vector3(0, 0, 0);
    push(apex, rings[0]![j]!);
    for (let i = 0; i < rings.length - 1; i++) push(rings[i]![j]!, rings[i + 1]![j]!);
  }

  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  return g;
}

export class CmeCones {
  readonly group = new Group();
  private lines: LineSegments[] = [];
  private stamp = '';
  private visible = true;

  constructor() { this.group.name = 'cme-cones'; }

  setVisible(v: boolean): void {
    this.visible = v;
    this.group.visible = v;
  }

  get count(): number { return this.lines.length; }

  /**
   * `sunToEarth` is Earth's direction from the Sun in scene space, which anchors
   * Stonyhurst longitude 0. Rebuilt when the set of CMEs or the scale changes;
   * the fronts move slowly enough that per-frame rebuilding would be waste.
   */
  update(cmes: Cme[], date: Date, mode: ScaleMode, sunToEarth: Vector3): void {
    if (!this.visible) return;
    // Quantise the front distance so the geometry rebuilds a few times an hour,
    // not sixty times a second.
    const key = `${mode}|${cmes.map((c) =>
      `${c.id}:${frontDistanceAu(c, date).toFixed(2)}`).join(',')}`;
    if (key === this.stamp) return;
    this.stamp = key;
    this.dispose();

    for (const c of cmes) {
      // Past Mars a cone is no longer about Earth, and drawing it to the edge of
      // the frame buries everything else.
      const frontAu = Math.min(1.7, frontDistanceAu(c, date));
      if (frontAu <= 0.02) continue;
      const a = coneAxis(c, sunToEarth);
      const axis = new Vector3(a.x, a.y, a.z).normalize();
      const geom = coneWireframe(axis, c.halfAngle, frontAu, mode);
      const mat = new LineBasicMaterial({
        color: c.earthDirected ? EARTH_DIRECTED : OFF_AXIS,
        transparent: true,
        // Fade as the front passes Earth; the cone is no longer news by then.
        opacity: (c.earthDirected ? 0.36 : 0.09) * Math.max(0.25, 1 - frontAu / 2.2),
        blending: AdditiveBlending, depthWrite: false,
      });
      const l = new LineSegments(geom, mat);
      l.name = `cme-${c.id}`;
      l.userData['cme'] = c;
      this.lines.push(l);
      this.group.add(l);
    }
  }

  dispose(): void {
    for (const l of this.lines) {
      l.geometry.dispose();
      (l.material as LineBasicMaterial).dispose();
      this.group.remove(l);
    }
    this.lines = [];
  }
}
