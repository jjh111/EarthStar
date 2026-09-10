/**
 * Field-line tracing — tier `[D]`.
 *
 * Integrates dr/ds = B̂ with RK4 from a seed point, in both directions, in the
 * Earth-fixed frame (+X through 0°N 0°E, +Z through the north pole). The shape
 * that comes out — the tilt, the offset, the way southern-hemisphere lines
 * reach higher over the South Atlantic — is the model's, not ours.
 *
 * The field integrated is **IGRF-14 + Tsyganenko T89c**: the Earth's own field
 * plus the external currents. IGRF alone is a dipole in empty space, and every
 * deformation that makes a magnetosphere a magnetosphere — the compressed
 * dayside, the stretched tail, the inflated ring current — comes from the
 * external term. Without it the shape has to be imposed from outside, which is
 * what the geometric clamp used to do.
 *
 * Lines co-rotate with the globe once traced. That is exactly right for IGRF,
 * which is fixed to the Earth, and wrong for T89, which is fixed to the Sun —
 * so the trace is redone as the Earth turns under it, on the cadence
 * `ensureTraced` sets.
 */

import { Vector3 } from 'three';
import { igrfVector } from './igrf14.js';
import { fromGsm, gsmBasis, toGsm, type GsmBasis } from './gsm.js';
import { T89_VALID_RE, kpBandIndex, t89Vector } from './t89.js';

/**
 * IGRF's reference radius, 6371.2 km — the sphere the spherical-harmonic
 * expansion is defined on. Deliberately not the mean radius (6371.0 km): field
 * geometry must use the model's own reference or the shells come out wrong.
 */
export const EARTH_RADIUS_KM = 6371.2;

/**
 * The external field to add, or null for IGRF alone.
 *
 * `basis` carries the GSM frame and the dipole tilt for the instant; `band` is
 * the T89 Kp band, 0–6. Both come from `gsmBasis()` and `kpBandIndex()`, and
 * both are held fixed for the duration of a trace — a field line is an
 * instantaneous object, so the field must not move while one is being drawn.
 */
export interface ExternalField {
  basis: GsmBasis;
  band: number;
}

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
  /** Stop after this much arc length, km. See `TAIL_ARC_LIMIT_KM`. */
  maxArcLengthKm?: number;
  /** IGRF + T89, or IGRF alone when absent. */
  external?: ExternalField | null;
}

/**
 * How far a line is followed before drawing gives up on it, in arc length.
 *
 * With the external field in, tail lines stop being loops. A line seeded at 55°
 * runs down-tail until it leaves T89's fit region at 70 Rₑ, and the real one
 * keeps going for hundreds. Some limit is unavoidable; the honest thing is to
 * make it a stated one and label the lines it cuts, rather than let the
 * geometry decide silently.
 *
 * 160 Rₑ is out and back at the model's own edge, so a line that hits this
 * limit has already been followed as far as T89 can be trusted in either
 * direction.
 */
export const TAIL_ARC_LIMIT_KM = EARTH_RADIUS_KM * 160;

const DEFAULTS: Required<Omit<TraceOptions, 'external'>> = {
  innerRadiusKm: EARTH_RADIUS_KM,
  outerRadiusKm: EARTH_RADIUS_KM * 15,
  maxSteps: 4000,
  stepFraction: 0.035,
  minStepKm: 40,
  maxStepKm: 2200,
  maxArcLengthKm: Infinity,
};

/**
 * Defaults for a trace that includes T89. The outer radius is the model's own
 * validity limit rather than a chosen number, and the step is allowed to grow
 * to a quarter of an Earth radius in the far tail, where the field varies far
 * more slowly than it does near the surface and 2200 km strides only buy
 * vertices.
 */
const EXTERNAL_DEFAULTS: Partial<Required<Omit<TraceOptions, 'external'>>> = {
  outerRadiusKm: EARTH_RADIUS_KM * T89_VALID_RE,
  maxStepKm: EARTH_RADIUS_KM * 0.25,
  maxArcLengthKm: TAIL_ARC_LIMIT_KM,
};

export type TraceEnd =
  | 'surface'
  | 'outer'
  | 'steps'
  | 'null-field'
  /** Left the region T89 was fitted over; the field beyond is not modelled. */
  | 'out-of-model'
  /** Hit `maxArcLengthKm` — still going, but no longer drawn. */
  | 'truncated';

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
  /**
   * The line was cut for drawing rather than ending — it left T89's fit region
   * or ran past the arc-length limit, and continues past where it is drawn.
   * The panel says so; a line that simply stops is a claim we do not have.
   */
  truncated: boolean;
}

const k1 = new Vector3(), k2 = new Vector3(), k3 = new Vector3(), k4 = new Vector3();
const tmp = new Vector3();
const gsmPos = new Vector3(), gsmB = new Vector3(), extB = new Vector3();

/**
 * Total field at `p` in nT, Earth-fixed. Null when the point is outside T89's
 * fit region: the caller must stop there rather than fall back to IGRF alone,
 * which would draw a tidy dipole in a region where the real field is nothing
 * of the kind.
 */
export function totalField(
  p: Vector3, date: Date, external: ExternalField | null | undefined, out: Vector3,
): Vector3 | null {
  igrfVector(p, date, out);
  if (!external) return out;

  toGsm(gsmPos.copy(p).divideScalar(EARTH_RADIUS_KM), external.basis, gsmPos);
  if (!t89Vector(gsmPos, external.band, external.basis.tilt, gsmB)) return null;
  return out.add(fromGsm(gsmB, external.basis, extB));
}

/**
 * Unit field direction at `p`. The two ways this can fail are different facts
 * about the world and the trace records them differently: a null field is a
 * real feature of the field, and leaving the model is a limit of ours.
 */
function bhat(
  p: Vector3, date: Date, external: ExternalField | null | undefined, out: Vector3,
): 'ok' | 'out-of-model' | 'null-field' {
  if (!totalField(p, date, external, out)) return 'out-of-model';
  const len = out.length();
  if (!(len > 1e-9)) return 'null-field';
  out.divideScalar(len);
  return 'ok';
}

/**
 * Trace from `startKm` in `direction` (+1 along B, −1 against it).
 * RK4 on the unit field: the step is a length, so the integration is
 * arc-length parameterised and step size is independent of field strength.
 */
export function traceFieldLine(
  startKm: Vector3, date: Date, direction: 1 | -1, options: TraceOptions = {},
): FieldLine {
  const ext = options.external ?? null;
  const o = { ...DEFAULTS, ...(ext ? EXTERNAL_DEFAULTS : null), ...options };
  const points: Vector3[] = [];
  const p = startKm.clone();
  let apex = p.length() / EARTH_RADIUS_KM;
  let arc = 0;
  let endsAt: TraceEnd = 'steps';

  for (let step = 0; step < o.maxSteps; step++) {
    points.push(p.clone());
    const r = p.length();
    apex = Math.max(apex, r / EARTH_RADIUS_KM);

    if (step > 0 && r <= o.innerRadiusKm) { endsAt = 'surface'; break; }
    if (r >= o.outerRadiusKm) { endsAt = ext ? 'out-of-model' : 'outer'; break; }
    if (arc >= o.maxArcLengthKm) { endsAt = 'truncated'; break; }

    // Step scales with radius: fine detail near the surface, long strides in
    // the tail, without wasting points on either.
    const len = Math.min(o.maxStepKm, Math.max(o.minStepKm, o.stepFraction * r));
    const h = direction * len;

    const s1 = bhat(p, date, ext, k1);
    if (s1 !== 'ok') { endsAt = s1; break; }
    const s2 = bhat(tmp.copy(p).addScaledVector(k1, h / 2), date, ext, k2);
    if (s2 !== 'ok') { endsAt = s2; break; }
    const s3 = bhat(tmp.copy(p).addScaledVector(k2, h / 2), date, ext, k3);
    if (s3 !== 'ok') { endsAt = s3; break; }
    const s4 = bhat(tmp.copy(p).addScaledVector(k3, h), date, ext, k4);
    if (s4 !== 'ok') { endsAt = s4; break; }

    p.addScaledVector(k1, h / 6).addScaledVector(k2, h / 3)
      .addScaledVector(k3, h / 3).addScaledVector(k4, h / 6);
    arc += len;
  }

  return {
    points, startsAt: 'surface', endsAt, apexRe: apex, closed: false,
    truncated: endsAt === 'truncated' || endsAt === 'out-of-model',
  };
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
    truncated: fwd.truncated || back.truncated,
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

/**
 * The external field for an instant, or null when Kp is unknown.
 *
 * Null propagates all the way to the drawing: no Kp means no T89, which means
 * IGRF alone and a panel that says the external field is unavailable. It does
 * not mean "assume quiet" — see `kpBandIndex`.
 */
export function externalField(date: Date, kp: number | null): ExternalField | null {
  if (kp === null) return null;
  const band = kpBandIndex(kp);
  if (band === null) return null;
  return { basis: gsmBasis(date), band };
}

export function traceAll(date: Date, spec: SeedSpec = DEFAULT_SEEDS, options: TraceOptions = {}): FieldLine[] {
  return seedPoints(spec).map((s) => traceFullLine(s, date, options));
}

/* ------------------------------------------------------------------ *
 * T89's implicit dayside boundary
 * ------------------------------------------------------------------ */

/**
 * How far sunward the last closed field line reaches, in Earth radii — T89's
 * own answer to "where is the magnetopause".
 *
 * T89 has no boundary in it. It is a fit to the field *inside* the
 * magnetosphere, and evaluated outside it returns numbers that mean nothing:
 * a line seeded a degree too far poleward runs out to the 70 Rₑ edge of the
 * fit region and stops there. What the model does have is the closed/open
 * transition on the noon meridian, and the sunward reach of the last closed
 * line is the standard reading of the subsolar standoff.
 *
 * This is worth computing because it can *disagree* with something. Our Shue
 * 1998 boundary is driven by live solar-wind pressure and Bz; this one is
 * driven by a Kp band and nothing else. Two different measurements of the same
 * physical surface, and when they part company that is information.
 *
 * Returns null when the transition cannot be located — which would itself be a
 * finding, not a value to paper over.
 */
export function lastClosedSunwardRe(date: Date, external: ExternalField): number | null {
  const seedRadius = EARTH_RADIUS_KM + DEFAULT_SEEDS.altitudeKm;
  const gsm = new Vector3();
  const opts: TraceOptions = {
    external,
    // A dayside line that gets past 25 Rₑ is open for this purpose, and cutting
    // the trace there keeps the search from following every rejected candidate
    // to the edge of the model. The last closed lines apex near 12 Rₑ.
    outerRadiusKm: EARTH_RADIUS_KM * 25,
  };

  /** Seed on the GSM noon meridian at latitude λ; +90° is the GSM north pole. */
  const seedAt = (latDeg: number): Vector3 => {
    const a = (latDeg * Math.PI) / 180;
    return fromGsm(
      gsm.set(Math.cos(a), 0, Math.sin(a)).multiplyScalar(seedRadius), external.basis,
    );
  };
  /** Sunward reach of the line through this seed, or −∞ if it is open. */
  const reachOf = (latDeg: number): number => {
    const line = traceFullLine(seedAt(latDeg), date, opts);
    if (!line.closed) return -Infinity;
    let max = -Infinity;
    for (const p of line.points) {
      max = Math.max(max, toGsm(gsm.copy(p).divideScalar(EARTH_RADIUS_KM), external.basis, gsm).x);
    }
    return max;
  };

  /**
   * Scanned, not bisected. The obvious search — closed near the equator, open
   * over the pole, bisect between them — is wrong at solstice, and wrong in a
   * way that returns a confident number. With the dipole leaning 26° the
   * closed/open transition on the GSM noon meridian sits at 51° in one
   * hemisphere and does not exist at all in the other, where every seed from
   * the equator to the pole stays closed. Sampling the whole meridian and
   * taking the largest reach makes no assumption about where the boundary is.
   */
  const scan = (from: number, to: number, step: number): number => {
    let bestLat = from;
    let bestReach = -Infinity;
    for (let lat = from; lat <= to; lat += step) {
      const r = reachOf(lat);
      if (r > bestReach) { bestReach = r; bestLat = lat; }
    }
    return bestReach === -Infinity ? Number.NaN : bestLat;
  };

  const coarse = scan(-88, 88, 4);
  if (Number.isNaN(coarse)) return null;
  const fine = scan(coarse - 4, coarse + 4, 1);
  const best = reachOf(Number.isNaN(fine) ? coarse : fine);
  return Number.isFinite(best) ? best : null;
}
