/**
 * GOES magnetometer at geostationary orbit — tier `[E]`.
 *
 * This is the only in-situ magnetic measurement the Viewer has, and it sits at
 * 6.6 Rₑ — just inside the magnetopause on a quiet day, and outside it during a
 * strong compression. That makes it the one check available on the modelled
 * shield: when Shue puts the boundary inside 6.6 Rₑ, GOES should find itself in
 * the solar wind, and the field it measures collapses.
 *
 * Components are in the spacecraft's local frame: Hp parallel to Earth's spin
 * axis, He earthward, Hn eastward.
 */

import { swpcTime, SWPC_BASE, num } from './swpc.js';
import type { Series } from './swpc.js';
import { IGRF_G, IGRF_H, IGRF_IDX } from '../models/igrf14-coeffs.js';

export const GEOSYNC_URL = `${SWPC_BASE}/json/goes/primary/magnetometers-6-hour.json`;

/** Geostationary radius in Earth radii. */
export const GEOSYNC_RE = 6.6;

export interface GeosyncField {
  time: string;
  satellite: number | null;
  /** Parallel to Earth's spin axis, nT — northward and positive when trapped. */
  hp: number | null;
  /** Earthward, nT. */
  he: number | null;
  /** Eastward, nT. */
  hn: number | null;
  total: number | null;
  /** True when the spacecraft's thruster is firing and the reading is suspect. */
  arcjet: boolean;
}

/**
 * Magnitude of Earth's dipole field at the magnetic equator at `re` Earth radii,
 * from the IGRF first-degree terms. Falls off as 1/r³, so 6.6 Rₑ sees about a
 * three-hundredth of the surface field.
 *
 * The measured value at GOES is normally *below* this: the ring current and
 * magnetopause currents subtract from the internal field, and the size of that
 * deficit is itself a storm indicator.
 */
export function dipoleFieldAtRe(re: number): number {
  const g10 = IGRF_G[IGRF_IDX(1, 0)]!;
  const g11 = IGRF_G[IGRF_IDX(1, 1)]!;
  const h11 = IGRF_H[IGRF_IDX(1, 1)]!;
  const surfaceEquatorial = Math.sqrt(g10 * g10 + g11 * g11 + h11 * h11);
  return surfaceEquatorial / (re * re * re);
}

type Rec = Record<string, unknown>;

export function parseGeosync(json: unknown): GeosyncField | null {
  if (!Array.isArray(json)) return null;
  let best: Rec | null = null;
  let bestT = -Infinity;
  for (const r of json as Rec[]) {
    const t = Date.parse(swpcTime(r['time_tag'] as string) ?? '');
    if (Number.isFinite(t) && t > bestT) { bestT = t; best = r; }
  }
  const time = swpcTime(best?.['time_tag'] as string);
  if (!best || !time) return null;
  return {
    time,
    satellite: num(best['satellite']),
    hp: num(best['Hp']), he: num(best['He']), hn: num(best['Hn']),
    total: num(best['total']),
    arcjet: best['arcjet_flag'] === true,
  };
}

export function geosyncSeries(json: unknown, field: 'total' | 'Hp' = 'total'): Series {
  if (!Array.isArray(json)) return { time: [], value: [] };
  const rows = (json as Rec[])
    .map((r) => ({ t: swpcTime(r['time_tag'] as string), v: num(r[field]) }))
    .filter((r): r is { t: string; v: number | null } => r.t !== null)
    .sort((a, b) => Date.parse(a.t) - Date.parse(b.t));
  return { time: rows.map((r) => r.t), value: rows.map((r) => r.v) };
}

/**
 * What the measurement says about the shield.
 *
 * `standoffRe` is the modelled magnetopause standoff. When it drops below
 * geostationary radius the spacecraft is outside the magnetosphere, which is
 * both a real hazard to it and a falsifiable claim about the model.
 */
export function geosyncVerdict(
  field: GeosyncField | null, standoffRe: number | null,
): { text: string; compressed: boolean; deficitNt: number | null } {
  const dipole = dipoleFieldAtRe(GEOSYNC_RE);
  const deficit = field?.total === null || field?.total === undefined
    ? null : dipole - field.total;
  const compressed = standoffRe !== null && standoffRe <= GEOSYNC_RE;
  if (compressed) {
    return {
      text: 'The modelled magnetopause is inside geostationary orbit, so GOES should be '
        + 'in the solar wind rather than inside the magnetosphere.',
      compressed, deficitNt: deficit,
    };
  }
  return {
    text: 'The modelled magnetopause is outside geostationary orbit, so GOES should be '
      + 'inside the magnetosphere.',
    compressed, deficitNt: deficit,
  };
}
