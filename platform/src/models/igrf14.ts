/**
 * IGRF-14 spherical harmonic synthesis — tier `[D]`.
 * IAGA, 14th generation (released Nov 2024). Main field epoch 2025.0, secular
 * variation linear to 2030.0. Coefficients generated from vendor/igrf14coeffs.txt.
 *
 * This is what makes the rendered field lines the *real* field — dipole plus
 * the higher-degree terms, so the South Atlantic Anomaly and the offset,
 * tilted dipole appear because the model puts them there, not because we drew
 * them in.
 */

import { Vector3 } from 'three';
import {
  IGRF_EPOCH, IGRF_G, IGRF_G_SV, IGRF_H, IGRF_H_SV, IGRF_IDX,
  IGRF_MAX_DEGREE, IGRF_REF_RADIUS_KM, IGRF_VALID_UNTIL,
} from './igrf14-coeffs.js';

/** WGS-84. */
const WGS84_A = 6378.137;
const WGS84_F = 1 / 298.257223563;
const WGS84_E2 = WGS84_F * (2 - WGS84_F);

/** Fractional year, e.g. 2026.679. */
export function decimalYear(date: Date): number {
  const y = date.getUTCFullYear();
  const start = Date.UTC(y, 0, 1);
  const end = Date.UTC(y + 1, 0, 1);
  return y + (date.getTime() - start) / (end - start);
}

/** True when the date is inside the model's stated validity window. */
export function igrfInValidity(date: Date): boolean {
  const t = decimalYear(date);
  return t >= IGRF_EPOCH && t <= IGRF_VALID_UNTIL;
}

/**
 * How the model should be cited *today*. Outside the published window the
 * synthesis still returns numbers — it extrapolates the secular variation —
 * and the honest thing is to keep drawing the field while saying plainly that
 * the citation has outrun its warranty. Both places that name the model use
 * this, so they cannot drift apart.
 */
export function igrfCitation(date: Date): string {
  const base = `IGRF-14 (IAGA, epoch ${IGRF_EPOCH.toFixed(1)}`;
  return igrfInValidity(date)
    ? `${base}, secular variation to now)`
    : `${base}, extrapolated past its ${IGRF_VALID_UNTIL.toFixed(1)} validity limit)`;
}

/** Coefficients extrapolated to `year` by the published secular variation. */
function coefficientsAt(year: number): { g: Float64Array; h: Float64Array } {
  const dt = year - IGRF_EPOCH;
  const n = IGRF_G.length;
  const g = new Float64Array(n);
  const h = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    g[i] = IGRF_G[i]! + dt * IGRF_G_SV[i]!;
    h[i] = IGRF_H[i]! + dt * IGRF_H_SV[i]!;
  }
  return { g, h };
}

let cacheYear = Number.NaN;
let cacheCoeffs: { g: Float64Array; h: Float64Array } | null = null;

/** Coefficients change on the scale of a year; recomputing per field-line step would be waste. */
function coefficientsCached(year: number): { g: Float64Array; h: Float64Array } {
  const q = Math.round(year * 100) / 100;
  if (q !== cacheYear || !cacheCoeffs) {
    cacheYear = q;
    cacheCoeffs = coefficientsAt(q);
  }
  return cacheCoeffs;
}

/**
 * Scratch buffers, module-scope and reused. Tracing a field line evaluates this
 * thousands of times; allocating four typed arrays per call dominated the cost.
 * Safe because the synthesis is synchronous and single-threaded.
 */
const SCRATCH_SIZE = IGRF_IDX(IGRF_MAX_DEGREE, IGRF_MAX_DEGREE) + 1;
const P = new Float64Array(SCRATCH_SIZE);
const dP = new Float64Array(SCRATCH_SIZE);
const cosM = new Float64Array(IGRF_MAX_DEGREE + 1);
const sinM = new Float64Array(IGRF_MAX_DEGREE + 1);

export interface GeocentricField {
  /** Radially outward, nT. */
  br: number;
  /** Southward (increasing colatitude), nT. */
  btheta: number;
  /** Eastward, nT. */
  bphi: number;
}

/**
 * Core synthesis in geocentric spherical coordinates.
 * `colatRad` from the north pole, `lonRad` east, `rKm` from Earth's centre.
 *
 * Schmidt semi-normalised associated Legendre functions by the standard
 * recursions, with P₁¹ = sin θ seeded explicitly (the sectoral recursion's
 * normalisation only holds from n ≥ 2).
 */
export function igrfGeocentric(
  colatRad: number, lonRad: number, rKm: number, date: Date,
): GeocentricField {
  const { g, h } = coefficientsCached(decimalYear(date));
  const N = IGRF_MAX_DEGREE;

  // Guard the poles: 1/sinθ blows up exactly on the axis.
  const EPS = 1e-8;
  let ct = Math.cos(colatRad);
  let st = Math.sin(colatRad);
  if (Math.abs(st) < EPS) {
    st = st >= 0 ? EPS : -EPS;
    ct = Math.sign(ct) * Math.sqrt(1 - EPS * EPS);
  }

  P[IGRF_IDX(0, 0)] = 1;
  dP[IGRF_IDX(0, 0)] = 0;

  for (let n = 1; n <= N; n++) {
    for (let m = 0; m <= n; m++) {
      const i = IGRF_IDX(n, m);
      if (n === m) {
        if (n === 1) {
          P[i] = st;
          dP[i] = ct;
        } else {
          const k = Math.sqrt((2 * n - 1) / (2 * n));
          const j = IGRF_IDX(n - 1, n - 1);
          P[i] = k * st * P[j]!;
          dP[i] = k * (st * dP[j]! + ct * P[j]!);
        }
      } else {
        const d = Math.sqrt(n * n - m * m);
        const a1 = (2 * n - 1) / d;
        const j1 = IGRF_IDX(n - 1, m);
        if (n - 2 >= m) {
          const a2 = Math.sqrt((n - 1) * (n - 1) - m * m) / d;
          const j2 = IGRF_IDX(n - 2, m);
          P[i] = a1 * ct * P[j1]! - a2 * P[j2]!;
          dP[i] = a1 * (ct * dP[j1]! - st * P[j1]!) - a2 * dP[j2]!;
        } else {
          P[i] = a1 * ct * P[j1]!;
          dP[i] = a1 * (ct * dP[j1]! - st * P[j1]!);
        }
      }
    }
  }


  for (let m = 0; m <= N; m++) {
    cosM[m] = Math.cos(m * lonRad);
    sinM[m] = Math.sin(m * lonRad);
  }

  const ar = IGRF_REF_RADIUS_KM / rKm;
  let br = 0, btheta = 0, bphi = 0;
  let arPow = ar * ar;                    // (a/r)^(n+2) starting at n = 0

  for (let n = 1; n <= N; n++) {
    arPow *= ar;                          // now (a/r)^(n+2)
    let sumR = 0, sumT = 0, sumP = 0;
    for (let m = 0; m <= n; m++) {
      const i = IGRF_IDX(n, m);
      const gc = g[i]!, hc = h[i]!;
      const c = gc * cosM[m]! + hc * sinM[m]!;
      sumR += c * P[i]!;
      sumT += c * dP[i]!;
      sumP += m * (gc * sinM[m]! - hc * cosM[m]!) * P[i]!;
    }
    br += arPow * (n + 1) * sumR;
    btheta -= arPow * sumT;
    bphi += arPow * sumP;
  }
  bphi /= st;

  return { br, btheta, bphi };
}

export interface GeodeticField {
  /** Geodetic north, nT. */
  x: number;
  /** East, nT. */
  y: number;
  /** Down, nT. */
  z: number;
  /** Total intensity, nT. */
  f: number;
  /** Declination, degrees east of true north. */
  declination: number;
  /** Inclination (dip), degrees below horizontal. */
  inclination: number;
}

/**
 * Field at a geodetic position — the form magnetic observatories and the
 * NCEI/BGS calculators publish, so it is directly checkable against them.
 * `altKm` is height above the WGS-84 ellipsoid.
 */
export function igrfGeodetic(
  latDeg: number, lonDeg: number, altKm: number, date: Date,
): GeodeticField {
  const latRad = (latDeg * Math.PI) / 180;
  const lonRad = (lonDeg * Math.PI) / 180;
  const sinLat = Math.sin(latRad);
  const cosLat = Math.cos(latRad);

  // Geodetic → geocentric.
  const nRad = WGS84_A / Math.sqrt(1 - WGS84_E2 * sinLat * sinLat);
  const p = (nRad + altKm) * cosLat;
  const zc = (nRad * (1 - WGS84_E2) + altKm) * sinLat;
  const r = Math.hypot(p, zc);
  const geocentricLat = Math.atan2(zc, p);
  const colat = Math.PI / 2 - geocentricLat;

  const { br, btheta, bphi } = igrfGeocentric(colat, lonRad, r, date);

  // Geocentric local components.
  const xgc = -btheta;
  const ygc = bphi;
  const zgc = -br;

  // Rotate into the geodetic frame: the ellipsoid normal is tilted from the
  // radius vector by ψ, up to ~0.19° at mid-latitudes — worth ~100 nT here,
  // far more than the 1 nT accuracy target.
  const psi = latRad - geocentricLat;
  const cp = Math.cos(psi);
  const sp = Math.sin(psi);
  const x = xgc * cp + zgc * sp;
  const z = zgc * cp - xgc * sp;
  const y = ygc;

  const f = Math.sqrt(x * x + y * y + z * z);
  const h = Math.hypot(x, y);
  return {
    x, y, z, f,
    declination: (Math.atan2(y, x) * 180) / Math.PI,
    inclination: (Math.atan2(z, h) * 180) / Math.PI,
  };
}

/**
 * Field as a Cartesian vector in the Earth-fixed frame used for tracing:
 * +X through (0°N, 0°E), +Z through the north pole. Position and result are
 * both in that frame; position in km from Earth's centre, field in nT.
 */
export function igrfVector(posKm: Vector3, date: Date, out = new Vector3()): Vector3 {
  const r = posKm.length();
  if (r < 1) return out.set(0, 0, 0);
  const colat = Math.acos(Math.max(-1, Math.min(1, posKm.z / r)));
  const lon = Math.atan2(posKm.y, posKm.x);
  const { br, btheta, bphi } = igrfGeocentric(colat, lon, r, date);

  const st = Math.sin(colat), ct = Math.cos(colat);
  const sl = Math.sin(lon), cl = Math.cos(lon);

  // Spherical unit vectors → Cartesian.
  return out.set(
    br * st * cl + btheta * ct * cl - bphi * sl,
    br * st * sl + btheta * ct * sl + bphi * cl,
    br * ct - btheta * st,
  );
}

/**
 * The north magnetic dip pole — where the field is vertical, i.e. the
 * horizontal component vanishes. Found by coarse-to-fine search rather than
 * hard-coded, so it tracks the secular variation along with everything else.
 *
 * This is what the auroral oval encircles, and it is ~10° from the geographic
 * pole, which is the orientation check for the OVATION overlay.
 */
export function northDipPole(date: Date): { lat: number; lon: number; horizontalNt: number } {
  let best = { lat: 86, lon: 150, horizontalNt: Infinity };
  let latRange = [60, 90];
  let lonRange = [-180, 180];
  let latStep = 2;
  let lonStep = 5;

  for (let pass = 0; pass < 5; pass++) {
    for (let lat = latRange[0]!; lat <= latRange[1]!; lat += latStep) {
      if (lat > 90) continue;
      for (let lon = lonRange[0]!; lon <= lonRange[1]!; lon += lonStep) {
        const b = igrfGeodetic(lat, lon, 0, date);
        const h = Math.hypot(b.x, b.y);
        if (h < best.horizontalNt) best = { lat, lon, horizontalNt: h };
      }
    }
    latRange = [best.lat - latStep, Math.min(90, best.lat + latStep)];
    lonRange = [best.lon - lonStep, best.lon + lonStep];
    latStep /= 4;
    lonStep /= 4;
  }
  return best;
}

/** Angular separation between two geographic points, degrees. */
export function angularSeparationDeg(
  lat1: number, lon1: number, lat2: number, lon2: number,
): number {
  const toRad = Math.PI / 180;
  const a = lat1 * toRad, b = lat2 * toRad;
  const dl = (lon2 - lon1) * toRad;
  const c = Math.sin(a) * Math.sin(b) + Math.cos(a) * Math.cos(b) * Math.cos(dl);
  return (Math.acos(Math.max(-1, Math.min(1, c))) * 180) / Math.PI;
}

/**
 * The geomagnetic (dipole-axis) north pole, from the first-degree coefficients.
 *
 * Distinct from the dip pole above, and it is THIS pole the auroral oval
 * encircles — the oval is organised by the dipole geometry, not by the local
 * point where the field happens to stand vertical. Conflating the two puts the
 * oval's expected centre ~13° wrong.
 *
 * The dipole term of the potential is V ∝ (g₁¹, h₁¹, g₁⁰)·r̂. With g₁⁰ negative
 * that vector points into the southern hemisphere, so the northern pole lies
 * along its negation.
 */
export function geomagneticNorthPole(date: Date): { lat: number; lon: number } {
  const { g, h } = coefficientsCached(decimalYear(date));
  const g10 = g[IGRF_IDX(1, 0)]!;
  const g11 = g[IGRF_IDX(1, 1)]!;
  const h11 = h[IGRF_IDX(1, 1)]!;
  const x = -g11, y = -h11, z = -g10;
  const r = Math.sqrt(x * x + y * y + z * z);
  return {
    lat: (Math.asin(z / r) * 180) / Math.PI,
    lon: (Math.atan2(y, x) * 180) / Math.PI,
  };
}
