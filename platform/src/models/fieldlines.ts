/**
 * Field-line tracing through the IGRF-14 field — tier `[D]`.
 *
 * Integrates dr/ds = B̂ with RK4 from a seed point, in both directions, in the
 * Earth-fixed frame (+X through 0°N 0°E, +Z through the north pole). The shape
 * that comes out — the tilt, the offset, the way southern-hemisphere lines
 * reach higher over the South Atlantic — is the model's, not ours.
 *
 * Lines are traced once and then co-rotate with the globe, which is correct:
 * the main field is fixed to the Earth and changes only by secular variation.
 */

import { Vector3 } from 'three';
import { igrfVector } from './igrf14.js';

/**
 * IGRF's reference radius, 6371.2 km — the sphere the spherical-harmonic
 * expansion is defined on. Deliberately not the mean radius (6371.0 km): field
 * geometry must use the model's own reference or the shells come out wrong.
 */
export const EARTH_RADIUS_KM = 6371.2;

export interface TraceOptions {
  /** Stop when the line returns to this radius, km. */
  innerRadiusKm?: number;
  /** Stop when the line passes this radius — treat as open, km. */
  outerRadiusKm?: number;
  maxSteps?: number;
  /** Step length as a fraction of current radius; smaller is finer. */
  stepFraction?: number;
  minStepKm?: number;
  maxStepKm?: number;
}

const DEFAULTS: Required<TraceOptions> = {
  innerRadiusKm: EARTH_RADIUS_KM,
  outerRadiusKm: EARTH_RADIUS_KM * 15,
  maxSteps: 4000,
  stepFraction: 0.035,
  minStepKm: 40,
  maxStepKm: 2200,
};

export type TraceEnd = 'surface' | 'outer' | 'steps' | 'null-field';

export interface FieldLine {
  /** Points in the Earth-fixed frame, km. */
  points: Vector3[];
  /** Where the trace terminated at each end of the polyline. */
  startsAt: TraceEnd;
  endsAt: TraceEnd;
  /** Greatest radius reached, in Earth radii — the line's L-shell-ish extent. */
  apexRe: number;
  /**
   * Both feet on the surface. A closed line is a trapped shell; an open one
   * leaves the modelled volume and, in reality, connects to the solar wind.
   * The distinction is physically meaningful, so the renderer draws it.
   */
  closed: boolean;
}

const k1 = new Vector3(), k2 = new Vector3(), k3 = new Vector3(), k4 = new Vector3();
const tmp = new Vector3();

/** Unit field direction at `p`; false when the field is null (unusable). */
function bhat(p: Vector3, date: Date, out: Vector3): boolean {
  igrfVector(p, date, out);
  const len = out.length();
  if (!(len > 1e-9)) return false;
  out.divideScalar(len);
  return true;
}

/**
 * Trace from `startKm` in `direction` (+1 along B, −1 against it).
 * RK4 on the unit field: the step is a length, so the integration is
 * arc-length parameterised and step size is independent of field strength.
 */
export function traceFieldLine(
  startKm: Vector3, date: Date, direction: 1 | -1, options: TraceOptions = {},
): FieldLine {
  const o = { ...DEFAULTS, ...options };
  const points: Vector3[] = [];
  const p = startKm.clone();
  let apex = p.length() / EARTH_RADIUS_KM;
  let endsAt: TraceEnd = 'steps';

  for (let step = 0; step < o.maxSteps; step++) {
    points.push(p.clone());
    const r = p.length();
    apex = Math.max(apex, r / EARTH_RADIUS_KM);

    if (step > 0 && r <= o.innerRadiusKm) { endsAt = 'surface'; break; }
    if (r >= o.outerRadiusKm) { endsAt = 'outer'; break; }

    // Step scales with radius: fine detail near the surface, long strides in
    // the tail, without wasting points on either.
    const h = direction * Math.min(o.maxStepKm, Math.max(o.minStepKm, o.stepFraction * r));

    if (!bhat(p, date, k1)) { endsAt = 'null-field'; break; }
    if (!bhat(tmp.copy(p).addScaledVector(k1, h / 2), date, k2)) { endsAt = 'null-field'; break; }
    if (!bhat(tmp.copy(p).addScaledVector(k2, h / 2), date, k3)) { endsAt = 'null-field'; break; }
    if (!bhat(tmp.copy(p).addScaledVector(k3, h), date, k4)) { endsAt = 'null-field'; break; }

    p.addScaledVector(k1, h / 6).addScaledVector(k2, h / 3)
      .addScaledVector(k3, h / 3).addScaledVector(k4, h / 6);
  }

  return { points, startsAt: 'surface', endsAt, apexRe: apex, closed: false };
}

/**
 * A full line through the seed: traced both ways and joined, so a closed line
 * runs surface-to-surface rather than starting mid-air.
 */
export function traceFullLine(
  seedKm: Vector3, date: Date, options: TraceOptions = {},
): FieldLine {
  const fwd = traceFieldLine(seedKm, date, 1, options);
  const back = traceFieldLine(seedKm, date, -1, options);
  // Reverse the backward half and drop its duplicate of the seed point.
  const points = [...back.points.slice(1).reverse(), ...fwd.points];
  return {
    points,
    startsAt: back.endsAt,
    endsAt: fwd.endsAt,
    apexRe: Math.max(fwd.apexRe, back.apexRe),
    closed: back.endsAt === 'surface' && fwd.endsAt === 'surface',
  };
}

/** Geographic (lat, lon, altitude) → Earth-fixed Cartesian, km. */
export function geoToEcefKm(latDeg: number, lonDeg: number, altKm = 0): Vector3 {
  const lat = (latDeg * Math.PI) / 180;
  const lon = (lonDeg * Math.PI) / 180;
  const r = EARTH_RADIUS_KM + altKm;
  return new Vector3(
    r * Math.cos(lat) * Math.cos(lon),
    r * Math.cos(lat) * Math.sin(lon),
    r * Math.sin(lat),
  );
}

export interface SeedSpec {
  latitudes: number[];
  meridianCount: number;
  altitudeKm: number;
}

export const DEFAULT_SEEDS: SeedSpec = {
  // Both hemispheres; low latitudes give the closed inner shells, high ones the
  // long lines that show the field opening out.
  latitudes: [-72, -64, -55, -42, -28, 28, 42, 55, 64, 72],
  // Eight meridians, not twelve. The latitudes carry the shell structure — the
  // closed inner shells, the long open ones — and are worth keeping; the
  // meridians only repeat that structure around the axis, and at twelve they
  // repeated it into a mat. 80 lines instead of 120.
  meridianCount: 8,
  altitudeKm: 120,
};

/**
 * The far-distance set. From System scale the full 120-line cage is scaled up
 * to planetary-orbit size and reads as noise, so beyond ~100 Rₑ the shield
 * simplifies to twelve signature lines (every 60° of longitude, alternating
 * hemispheres — the shape a textbook draws) plus the magnetopause and bow-shock
 * silhouettes, which carry the shape of the cavity.
 */
export const SIGNATURE_SEEDS: SeedSpec = {
  latitudes: [-55, 55],
  meridianCount: 6,
  altitudeKm: 120,
};

/** Seed points spread over meridians, for a legible cage rather than a mat. */
export function seedPoints(spec: SeedSpec = DEFAULT_SEEDS): Vector3[] {
  const out: Vector3[] = [];
  for (const lat of spec.latitudes) {
    for (let i = 0; i < spec.meridianCount; i++) {
      out.push(geoToEcefKm(lat, (360 / spec.meridianCount) * i, spec.altitudeKm));
    }
  }
  return out;
}

export function traceAll(date: Date, spec: SeedSpec = DEFAULT_SEEDS, options: TraceOptions = {}): FieldLine[] {
  return seedPoints(spec).map((s) => traceFullLine(s, date, options));
}
