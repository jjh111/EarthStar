/**
 * The shield: IGRF-14 field lines, the Shue et al. 1998 magnetopause, and the
 * Farris & Russell 1994 bow shock. All tier `[D]` — deterministic geometry from
 * cited models, driven by the live solar wind.
 *
 * Everything here lives in a group that co-rotates with the globe, because the
 * main field is fixed to the Earth. The magnetopause is the exception: it is
 * oriented to the Sun, not to the Earth's spin, so it is built in a group that
 * is counter-rotated back out of the Earth-fixed frame.
 */

import {
  AdditiveBlending, BufferGeometry, Color, DoubleSide, Float32BufferAttribute,
  Group, Line, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, Vector3,
} from 'three';
import { EARTH_RADIUS_KM, traceAll, type FieldLine } from '../models/fieldlines.js';
import { shueRadius, type Magnetopause } from '../models/shue1998.js';
import { toScene } from '../models/ephemeris.js';

/** Earth-fixed km → the Earth mesh's local frame, in units of Earth radii. */
function ecefToLocal(p: Vector3): Vector3 {
  return toScene(p).divideScalar(EARTH_RADIUS_KM);
}

const CLOSED_COLOR = new Color(0.42, 0.78, 0.95);
const OPEN_COLOR = new Color(0.72, 0.55, 1.0);

export class FieldLines {
  /** Co-rotates with the globe — parent this to the Earth's spinning group. */
  readonly group = new Group();
  private lines: Line[] = [];
  private tracedFor: number | null = null;

  constructor() {
    this.group.name = 'igrf-field-lines';
  }

  /**
   * Tracing is a one-off: the main field is Earth-fixed and changes only by
   * secular variation, so retrace at most once a day rather than per frame.
   */
  ensureTraced(date: Date): void {
    const day = Math.floor(date.getTime() / 86_400_000);
    if (this.tracedFor === day) return;
    this.tracedFor = day;
    this.build(traceAll(date));
  }

  private build(traced: FieldLine[]): void {
    this.dispose();
    for (const line of traced) {
      if (line.points.length < 2) continue;
      const pos: number[] = [];
      for (const p of line.points) {
        const q = ecefToLocal(p);
        pos.push(q.x, q.y, q.z);
      }
      const geom = new BufferGeometry();
      geom.setAttribute('position', new Float32BufferAttribute(pos, 3));
      const mat = new LineBasicMaterial({
        // Closed (trapped) and open (polar, solar-wind-connected) lines are
        // physically different things, so they are not drawn the same.
        color: line.closed ? CLOSED_COLOR : OPEN_COLOR,
        transparent: true,
        opacity: line.closed ? 0.30 : 0.42,
        blending: AdditiveBlending,
        depthWrite: false,
      });
      const l = new Line(geom, mat);
      l.name = line.closed ? 'field-line-closed' : 'field-line-open';
      this.lines.push(l);
      this.group.add(l);
    }
  }

  /** Radius of the Earth in scene units — lines are stored in Earth radii. */
  setScale(earthRadiusScene: number): void {
    this.group.scale.setScalar(earthRadiusScene);
  }

  setVisible(v: boolean): void { this.group.visible = v; }

  get lineCount(): number { return this.lines.length; }

  get pointCount(): number {
    return this.lines.reduce(
      (n, l) => n + (l.geometry.getAttribute('position')?.count ?? 0), 0);
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

/* ------------------------------------------------------------------ *
 * Magnetopause + bow shock surfaces
 * ------------------------------------------------------------------ */

const THETA_STEPS = 48;
const PHI_STEPS = 40;
/**
 * Where to stop drawing the tail. The Shue surface flares without bound —
 * at θ = 150° it is already past 50 Rₑ, and the real magnetotail runs to
 * hundreds — so the surface is truncated, not ended. 100° also keeps the drawn
 * surface inside the range Shue et al. fitted (dayside and near flanks), where
 * the model is actually reliable. The Situation Report says both things.
 */
export const MAX_THETA_DEG = 100;
const MAX_THETA = (MAX_THETA_DEG * Math.PI) / 180;

/**
 * Build a Shue surface as a wireframe. Wireframe rather than a solid shell
 * because a translucent closed surface hides the field lines inside it, and
 * the point of drawing the boundary is to see the shield around the Earth.
 *
 * `axisScene` is the sunward direction in the group's frame: the surface's
 * nose points at the Sun, which is the whole physical content of its shape.
 */
export function shueWireframe(
  r0Re: number, alpha: number, axis: Vector3,
): BufferGeometry {
  // An orthonormal frame with `axis` as the sunward direction.
  const up = Math.abs(axis.y) > 0.9 ? new Vector3(1, 0, 0) : new Vector3(0, 1, 0);
  const e1 = new Vector3().crossVectors(axis, up).normalize();
  const e2 = new Vector3().crossVectors(axis, e1).normalize();

  const grid: Vector3[][] = [];
  for (let i = 0; i <= THETA_STEPS; i++) {
    const theta = (i / THETA_STEPS) * MAX_THETA;
    const r = shueRadius(r0Re, alpha, theta);
    const ring: Vector3[] = [];
    for (let j = 0; j < PHI_STEPS; j++) {
      const phi = (j / PHI_STEPS) * Math.PI * 2;
      // θ from the sunward axis, φ around it.
      const dir = axis.clone().multiplyScalar(Math.cos(theta))
        .addScaledVector(e1, Math.sin(theta) * Math.cos(phi))
        .addScaledVector(e2, Math.sin(theta) * Math.sin(phi));
      ring.push(dir.multiplyScalar(r));
    }
    grid.push(ring);
  }

  const pos: number[] = [];
  const push = (a: Vector3, b: Vector3) => { pos.push(a.x, a.y, a.z, b.x, b.y, b.z); };
  // Rings around the axis, closer together near the nose where the boundary
  // actually moves with the wind.
  for (let i = 0; i <= THETA_STEPS; i += i < 16 ? 3 : 5) {
    const ring = grid[i]!;
    for (let j = 0; j < PHI_STEPS; j++) push(ring[j]!, ring[(j + 1) % PHI_STEPS]!);
  }
  // Meridians along it.
  for (let j = 0; j < PHI_STEPS; j += 4) {
    for (let i = 0; i < THETA_STEPS; i++) push(grid[i]![j]!, grid[i + 1]![j]!);
  }

  const geom = new BufferGeometry();
  geom.setAttribute('position', new Float32BufferAttribute(pos, 3));
  return geom;
}

export class Magnetosphere {
  /** Sun-oriented: parent this to a group that does NOT spin with the Earth. */
  readonly group = new Group();
  private magnetopause: LineSegments;
  private bowShock: LineSegments;
  private noseMarker: Mesh;
  private current: { r0: number; alpha: number; bow: number; axis: Vector3 } | null = null;

  constructor() {
    this.group.name = 'magnetosphere';

    this.magnetopause = new LineSegments(
      new BufferGeometry(),
      new LineBasicMaterial({
        color: new Color(0.45, 0.9, 0.8), transparent: true, opacity: 0.34,
        blending: AdditiveBlending, depthWrite: false,
      }),
    );
    this.magnetopause.name = 'magnetopause-shue1998';

    this.bowShock = new LineSegments(
      new BufferGeometry(),
      new LineBasicMaterial({
        color: new Color(1.0, 0.62, 0.35), transparent: true, opacity: 0.20,
        blending: AdditiveBlending, depthWrite: false,
      }),
    );
    this.bowShock.name = 'bow-shock-farris-russell';

    // A small marker at the subsolar standoff point — the number the HUD shows.
    this.noseMarker = new Mesh(
      new BufferGeometry(),
      new MeshBasicMaterial({
        color: 0x7fd4c1, transparent: true, opacity: 0.9, side: DoubleSide,
      }),
    );

    this.group.add(this.magnetopause, this.bowShock);
  }

  /**
   * `mp` is the live Shue solution; `sunDirLocal` is the direction to the Sun
   * expressed in this group's frame. Null `mp` hides the surfaces entirely —
   * with no measured wind there is no modelled boundary to draw.
   */
  update(mp: Magnetopause | null, sunDirLocal: Vector3): void {
    if (!mp) {
      this.group.visible = false;
      return;
    }
    this.group.visible = true;

    // Rebuilding 4k vertices every frame would be waste; the wind changes on a
    // one-minute cadence and the geometry only needs to follow that.
    const changed = !this.current
      || Math.abs(this.current.r0 - mp.r0Re) > 0.02
      || Math.abs(this.current.alpha - mp.alpha) > 0.004
      || this.current.axis.dot(sunDirLocal) < 0.99995;

    if (!changed) return;

    const axis = sunDirLocal.clone().normalize();
    this.magnetopause.geometry.dispose();
    this.magnetopause.geometry = shueWireframe(mp.r0Re, mp.alpha, axis);
    this.bowShock.geometry.dispose();
    // The bow shock is drawn with the same flaring law scaled to its own
    // standoff — a reasonable rendering of a surface Farris & Russell only
    // pin at the nose, and labelled as such in the Situation Report.
    this.bowShock.geometry = shueWireframe(mp.bowShockRe, mp.alpha * 0.92, axis);

    this.current = { r0: mp.r0Re, alpha: mp.alpha, bow: mp.bowShockRe, axis };
  }

  /** Surfaces are built in Earth radii; scale to scene units. */
  setScale(earthRadiusScene: number): void {
    this.group.scale.setScalar(earthRadiusScene);
  }

  setVisible(v: boolean): void { this.group.visible = v; }

  dispose(): void {
    this.magnetopause.geometry.dispose();
    (this.magnetopause.material as LineBasicMaterial).dispose();
    this.bowShock.geometry.dispose();
    (this.bowShock.material as LineBasicMaterial).dispose();
    this.noseMarker.geometry.dispose();
    (this.noseMarker.material as MeshBasicMaterial).dispose();
  }
}
