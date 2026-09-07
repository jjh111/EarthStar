/**
 * Forecast aggregation — NOAA's own predictions, consumed as products.
 *
 * Tier `[D · NOAA]` throughout: these are the Space Weather Prediction Center's
 * forecasts, not ours. We render them and say whose they are. The forecaster's
 * own words are included verbatim rather than paraphrased, because a summary of
 * a forecast is a different claim from the forecast.
 */

import { swpcTime, SWPC_BASE } from './swpc.js';

export const FORECAST_URL = {
  kp: `${SWPC_BASE}/products/noaa-planetary-k-index-forecast.json`,
  probabilities: `${SWPC_BASE}/json/solar_probabilities.json`,
  threeDay: `${SWPC_BASE}/text/3-day-forecast.txt`,
  discussion: `${SWPC_BASE}/text/discussion.txt`,
  flares7: `${SWPC_BASE}/json/goes/primary/xray-flares-7-day.json`,
  f107: `${SWPC_BASE}/products/summary/10cm-flux.json`,
};

export interface KpPoint {
  time: string;
  kp: number;
  /** NOAA marks each point as observed, estimated or predicted. */
  kind: 'observed' | 'estimated' | 'predicted';
  scale: string | null;
}

export interface FlareOdds {
  date: string;
  c: number | null;
  m: number | null;
  x: number | null;
}

export interface FlareEvent {
  begin: string;
  max: string | null;
  maxClass: string;
  region: number | null;
}

export interface ForecastBundle {
  kp: KpPoint[];
  odds: FlareOdds[];
  /** NOAA's 3-day forecast, verbatim. */
  threeDay: string | null;
  /** The forecaster's discussion, verbatim. */
  discussion: string | null;
  flares: FlareEvent[];
  f107: { value: number | null; time: string | null };
  fetchedAt: string;
}

const txt = async (u: string, signal?: AbortSignal): Promise<string | null> => {
  try {
    const r = await fetch(u, { cache: 'no-store', signal });
    return r.ok ? await r.text() : null;
  } catch { return null; }
};

const json = async (u: string, signal?: AbortSignal): Promise<unknown> => {
  try {
    const r = await fetch(u, { cache: 'no-store', signal });
    return r.ok ? await r.json() : null;
  } catch { return null; }
};

function parseKpForecast(j: unknown): KpPoint[] {
  if (!Array.isArray(j)) return [];
  const out: KpPoint[] = [];
  for (const r of j as Array<Record<string, unknown>>) {
    const time = swpcTime(r['time_tag'] as string);
    const kp = Number(r['kp']);
    if (!time || !Number.isFinite(kp)) continue;
    const obs = String(r['observed'] ?? '').toLowerCase();
    out.push({
      time, kp,
      kind: obs === 'observed' ? 'observed' : obs === 'estimated' ? 'estimated' : 'predicted',
      scale: (r['noaa_scale'] as string) ?? null,
    });
  }
  return out.sort((a, b) => Date.parse(a.time) - Date.parse(b.time));
}

function parseOdds(j: unknown): FlareOdds[] {
  if (!Array.isArray(j)) return [];
  const n = (v: unknown): number | null => {
    const x = Number(v);
    return Number.isFinite(x) ? x : null;
  };
  return (j as Array<Record<string, unknown>>)
    .map((r) => ({
      date: String(r['date'] ?? '').slice(0, 10),
      c: n(r['c_class_1_day']), m: n(r['m_class_1_day']), x: n(r['x_class_1_day']),
    }))
    .filter((r) => r.date)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
}

function parseFlares(j: unknown): FlareEvent[] {
  if (!Array.isArray(j)) return [];
  return (j as Array<Record<string, unknown>>)
    .map((r) => ({
      begin: swpcTime(r['begin_time'] as string) ?? '',
      max: swpcTime(r['max_time'] as string),
      maxClass: String(r['max_class'] ?? ''),
      region: Number.isFinite(Number(r['current_region'])) ? Number(r['current_region']) : null,
    }))
    .filter((f) => f.begin && f.maxClass)
    .sort((a, b) => Date.parse(b.begin) - Date.parse(a.begin))
    .slice(0, 8);
}

/**
 * NOAA's text products are fixed-width reports with a `:Issued:` header and
 * a body. Strip the machine preamble, keep the prose.
 */
export function stripProductHeader(text: string): { issued: string | null; body: string } {
  const issued = /:Issued:\s*(.+)/.exec(text)?.[1]?.trim() ?? null;
  const body = text
    .split('\n')
    .filter((l) => !/^[:#]/.test(l))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return { issued, body };
}

export async function fetchForecast(signal?: AbortSignal): Promise<ForecastBundle> {
  const [kpJ, oddsJ, threeDay, discussion, flaresJ, f107J] = await Promise.all([
    json(FORECAST_URL.kp, signal),
    json(FORECAST_URL.probabilities, signal),
    txt(FORECAST_URL.threeDay, signal),
    txt(FORECAST_URL.discussion, signal),
    json(FORECAST_URL.flares7, signal),
    json(FORECAST_URL.f107, signal),
  ]);

  const f107row = Array.isArray(f107J) ? (f107J[0] as Record<string, unknown> | undefined) : undefined;

  return {
    kp: parseKpForecast(kpJ),
    odds: parseOdds(oddsJ),
    threeDay, discussion,
    flares: parseFlares(flaresJ),
    f107: {
      value: f107row && Number.isFinite(Number(f107row['flux'])) ? Number(f107row['flux']) : null,
      time: f107row ? swpcTime(f107row['time_tag'] as string) : null,
    },
    fetchedAt: new Date().toISOString(),
  };
}
