/**
 * Sunspot number since 1749 — tier `[E]`, the longest continuous record in
 * science, and the only thing on this panel that puts today in a century-scale
 * frame.
 *
 * Everything else the Viewer shows is minutes or hours old. Without this, a
 * reader has no way to know whether the current Sun is unusual: 76 spots means
 * nothing until you can see it against the 398 of cycle 19 and the near-zero of
 * the Maunder-adjacent minima.
 *
 * 35 KB gzipped for 3 332 monthly records, fetched once when the Sun panel is
 * first opened.
 */

import { SWPC_BASE } from './swpc.js';
import type { Series } from './swpc.js';

export const SOLAR_CYCLE_URL = `${SWPC_BASE}/json/solar-cycle/observed-solar-cycle-indices.json`;

export interface SolarCycle {
  /** Monthly sunspot number, 1749 to now. */
  ssn: Series;
  /** The same, smoothed by NOAA where available. */
  smoothed: Series;
  f107: Series;
  latest: { month: string; ssn: number | null; f107: number | null } | null;
  /** Highest monthly value in the whole record, for context. */
  allTimeMax: { month: string; ssn: number } | null;
}

/** `-1` is the feed's fill value for "not yet computed", not a measurement. */
const val = (v: unknown): number | null => {
  const n = Number(v);
  return Number.isFinite(n) && n >= 0 ? n : null;
};

export function parseSolarCycle(json: unknown): SolarCycle | null {
  if (!Array.isArray(json) || json.length === 0) return null;
  const ssn: Series = { time: [], value: [] };
  const smoothed: Series = { time: [], value: [] };
  const f107: Series = { time: [], value: [] };
  let latest: SolarCycle['latest'] = null;
  let allTimeMax: SolarCycle['allTimeMax'] = null;

  for (const r of json as Array<Record<string, unknown>>) {
    const tag = String(r['time-tag'] ?? '');
    if (!/^\d{4}-\d{2}$/.test(tag)) continue;
    const iso = `${tag}-01T00:00:00.000Z`;
    const s = val(r['ssn']);
    ssn.time.push(iso); ssn.value.push(s);
    smoothed.time.push(iso); smoothed.value.push(val(r['smoothed_ssn']));
    f107.time.push(iso); f107.value.push(val(r['f10.7']));
    if (s !== null && (!allTimeMax || s > allTimeMax.ssn)) allTimeMax = { month: tag, ssn: s };
    latest = { month: tag, ssn: s, f107: val(r['f10.7']) };
  }
  if (ssn.time.length === 0) return null;
  return { ssn, smoothed, f107, latest, allTimeMax };
}

/** The trailing `months` of a series, for the recent-cycles view. */
export function tail(s: Series, months: number): Series {
  const from = Math.max(0, s.time.length - months);
  return { time: s.time.slice(from), value: s.value.slice(from) };
}

export async function fetchSolarCycle(signal?: AbortSignal): Promise<SolarCycle | null> {
  try {
    const r = await fetch(SOLAR_CYCLE_URL, { cache: 'no-store', signal });
    if (!r.ok) return null;
    return parseSolarCycle(await r.json());
  } catch {
    return null;
  }
}
