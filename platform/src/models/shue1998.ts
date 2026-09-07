/**
 * Magnetopause — Shue et al. 1998 (JGR 103, A8, 17691–17700, doi:10.1029/98JA01103)
 * and bow shock standoff — Farris & Russell 1994 (doi:10.1029/94JA00170).
 * Tier `[D]`: deterministic, from measured solar-wind inputs, cited in-app.
 */

/** Solar-wind dynamic pressure in nPa from density (cm⁻³) and speed (km/s). */
export function dynamicPressureNPa(densityCm3: number, speedKms: number): number {
  return 1.6726e-6 * densityCm3 * speedKms * speedKms;
}

/** Subsolar standoff distance r₀ in Earth radii. */
export function shueR0(bzNt: number, dynPressureNPa: number): number {
  return (10.22 + 1.29 * Math.tanh(0.184 * (bzNt + 8.14))) * Math.pow(dynPressureNPa, -1 / 6.6);
}

/** Flaring parameter α (dimensionless). */
export function shueAlpha(bzNt: number, dynPressureNPa: number): number {
  return (0.58 - 0.007 * bzNt) * (1 + 0.024 * Math.log(dynPressureNPa));
}

/** Magnetopause radius at solar zenith angle θ (radians): r = r₀ (2/(1+cos θ))^α. */
export function shueRadius(r0: number, alpha: number, theta: number): number {
  return r0 * Math.pow(2 / (1 + Math.cos(theta)), alpha);
}

export interface Magnetopause {
  r0Re: number;
  alpha: number;
  dynPressureNPa: number;
  bowShockRe: number;
}

/**
 * Full solution from live wind. Returns null on missing inputs — the charter
 * forbids substituting a plausible default for absent measurements.
 */
export function magnetopause(
  bzNt: number | null, densityCm3: number | null, speedKms: number | null,
): Magnetopause | null {
  if (bzNt === null || densityCm3 === null || speedKms === null) return null;
  if (!(densityCm3 > 0) || !(speedKms > 0)) return null;
  const dp = dynamicPressureNPa(densityCm3, speedKms);
  const r0 = shueR0(bzNt, dp);
  return {
    r0Re: r0,
    alpha: shueAlpha(bzNt, dp),
    dynPressureNPa: dp,
    bowShockRe: bowShockStandoff(r0),
  };
}

/**
 * Farris & Russell 1994 bow shock standoff from the magnetopause standoff.
 * Uses γ = 5/3 and a nominal fast magnetosonic Mach number; at Mms ≈ 8 this
 * gives the familiar r_bs ≈ 1.3 r_mp.
 */
export function bowShockStandoff(r0Re: number, machMs = 8): number {
  const gamma = 5 / 3;
  const m2 = machMs * machMs;
  return r0Re * (1 + 1.1 * (((gamma - 1) * m2 + 2) / ((gamma + 1) * (m2 - 1))));
}
