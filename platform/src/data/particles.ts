/**
 * Energetic particles at geostationary orbit — tier `[E]`.
 *
 * These carry the two hazards the panel was silent about:
 *
 *  · PROTONS (≥10 MeV) drive NOAA's S scale. A radiation storm is the one
 *    space-weather effect that endangers people rather than equipment —
 *    aviation crews on polar routes, astronauts outside a hull — and it is
 *    also what disables spacecraft electronics outright.
 *  · ELECTRONS (≥2 MeV) drive deep dielectric charging in satellites. NOAA
 *    warns above 1000 particle flux units.
 */

import { swpcTime, SWPC_BASE, num } from './swpc.js';
import type { Series } from './swpc.js';

export const PARTICLE_URL = {
  protons: `${SWPC_BASE}/json/goes/primary/integral-protons-6-hour.json`,
  electrons: `${SWPC_BASE}/json/goes/primary/integral-electrons-6-hour.json`,
};

/** NOAA S scale, on ≥10 MeV integral proton flux in pfu. */
const S_THRESHOLDS: Array<[number, number, string]> = [
  [5, 1e5, 'Extreme'], [4, 1e4, 'Severe'], [3, 1e3, 'Strong'],
  [2, 1e2, 'Moderate'], [1, 1e1, 'Minor'],
];

export function sScale(protonFlux10MeV: number | null): { scale: number; text: string } | null {
  if (protonFlux10MeV === null || !Number.isFinite(protonFlux10MeV)) return null;
  for (const [scale, floor, text] of S_THRESHOLDS) {
    if (protonFlux10MeV >= floor) return { scale, text };
  }
  return { scale: 0, text: 'None' };
}

export interface ParticleNow {
  time: string;
  /** ≥10 MeV integral proton flux, pfu — the S-scale quantity. */
  proton10: number | null;
  /** ≥100 MeV, pfu — the penetrating component. */
  proton100: number | null;
  /** ≥2 MeV integral electron flux, pfu. */
  electron2: number | null;
  satellite: number | null;
  s: { scale: number; text: string } | null;
}

type Rec = Record<string, unknown>;

function newestFor(json: unknown, energy: string): Rec | null {
  if (!Array.isArray(json)) return null;
  let best: Rec | null = null;
  let bestT = -Infinity;
  for (const r of json as Rec[]) {
    if (String(r['energy']) !== energy) continue;
    const t = Date.parse(swpcTime(r['time_tag'] as string) ?? '');
    if (Number.isFinite(t) && t > bestT) { bestT = t; best = r; }
  }
  return best;
}

export function seriesFor(json: unknown, energy: string): Series {
  if (!Array.isArray(json)) return { time: [], value: [] };
  const rows = (json as Rec[])
    .filter((r) => String(r['energy']) === energy)
    .map((r) => ({ t: swpcTime(r['time_tag'] as string), v: num(r['flux']) }))
    .filter((r): r is { t: string; v: number | null } => r.t !== null)
    .sort((a, b) => Date.parse(a.t) - Date.parse(b.t));
  return { time: rows.map((r) => r.t), value: rows.map((r) => r.v) };
}

export function parseParticles(protonsJson: unknown, electronsJson: unknown): ParticleNow | null {
  const p10 = newestFor(protonsJson, '>=10 MeV');
  const p100 = newestFor(protonsJson, '>=100 MeV');
  const e2 = newestFor(electronsJson, '>=2 MeV');
  if (!p10 && !e2) return null;

  // The older of the two, so staleness is never understated.
  const times = [p10, e2]
    .map((r) => swpcTime(r?.['time_tag'] as string))
    .filter((t): t is string => !!t);
  if (times.length === 0) return null;
  const time = times.reduce((a, b) => (Date.parse(a) < Date.parse(b) ? a : b));

  const proton10 = num(p10?.['flux']);
  return {
    time,
    proton10,
    proton100: num(p100?.['flux']),
    electron2: num(e2?.['flux']),
    satellite: num(p10?.['satellite'] ?? e2?.['satellite']),
    s: sScale(proton10),
  };
}
