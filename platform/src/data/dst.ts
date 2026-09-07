/**
 * Dst — the ring-current index, and the closest thing space weather has to a
 * single number for "how big is this storm".
 *
 * Two things about this feed matter more than its shape.
 *
 * **It is modelled, not measured.** Kyoto's Dst is derived from four
 * low-latitude magnetometers and is the definitive index; it has no CORS and
 * lives on the stage-B list. This is NOAA's Geospace (University of Michigan
 * BATS-R-US/RCM) run, *driven by the L1 solar wind*. It is a good operational
 * proxy and it is `[D]`, never `[E]`. The distinction is not pedantry: because
 * this Dst is computed from the wind, agreeing with the wind proves nothing,
 * whereas agreeing with the ground-measured Kp is a real check.
 *
 * **Roughly half of every response is in the future.** The model propagates L1
 * wind to Earth, so it necessarily runs ahead of the clock — on 2026-09-07,
 * 47 of 107 records were up to 47 minutes ahead. Taking "the newest record"
 * publishes a forecast as the present value. `dstNow()` takes the newest record
 * that has actually arrived; the rest is returned separately, as a forecast,
 * labelled as one.
 */

import { SWPC_BASE, num, swpcTime } from './swpc.js';
import type { Series } from './swpc.js';

export const DST_URL = `${SWPC_BASE}/json/geospace/geospace_dst_1_hour.json`;
export const DST_7DAY_URL = `${SWPC_BASE}/json/geospace/geospace_dst_7_day.json`;

export interface DstSample { time: string; dst: number; }

export interface DstNow {
  /** Newest sample whose time has arrived. */
  now: DstSample | null;
  /** Samples still in the future — the model's short lead, up to ~45 minutes. */
  ahead: DstSample[];
  /** Deepest value anywhere in the response, past or ahead. */
  minimum: DstSample | null;
}

/**
 * Storm severity by depth, after Loewe & Prölss (1997), *J. Geophys. Res.* 102,
 * 14209 — the classification the literature actually uses. The boundaries are
 * conventional, not physical; a storm does not change character at exactly
 * −50 nT, and the panel says so.
 */
export type DstLevel = 'quiet' | 'weak' | 'moderate' | 'intense' | 'severe' | 'great';

export function dstLevel(dst: number | null): DstLevel | null {
  if (dst === null || !Number.isFinite(dst)) return null;
  if (dst > -30) return 'quiet';
  if (dst > -50) return 'weak';
  if (dst > -100) return 'moderate';
  if (dst > -200) return 'intense';
  if (dst > -350) return 'severe';
  return 'great';
}

export const DST_LEVEL_TEXT: Record<DstLevel, string> = {
  quiet: 'quiet',
  weak: 'weak storm',
  moderate: 'moderate storm',
  intense: 'intense storm',
  severe: 'severe storm',
  great: 'great storm',
};

type Rec = Record<string, unknown>;

function samples(json: unknown): DstSample[] {
  if (!Array.isArray(json)) return [];
  const out: DstSample[] = [];
  for (const r of json as Rec[]) {
    const time = swpcTime(typeof r['time_tag'] === 'string' ? r['time_tag'] : null);
    const dst = num(r['dst']);
    if (time === null || dst === null) continue;
    out.push({ time, dst });
  }
  out.sort((a, b) => a.time.localeCompare(b.time));
  return out;
}

export function parseDst(json: unknown, now = new Date()): DstNow {
  const all = samples(json);
  if (all.length === 0) return { now: null, ahead: [], minimum: null };

  const t = now.getTime();
  let current: DstSample | null = null;
  const ahead: DstSample[] = [];
  for (const s of all) {
    if (Date.parse(s.time) <= t) current = s;
    else ahead.push(s);
  }

  const minimum = all.reduce((m, s) => (m === null || s.dst < m.dst ? s : m), null as DstSample | null);
  return { now: current, ahead, minimum };
}

/** Arrived samples only, for a sparkline that does not silently plot a forecast. */
export function dstSeries(json: unknown, now = new Date()): Series {
  const t = now.getTime();
  const s = samples(json).filter((x) => Date.parse(x.time) <= t);
  return { time: s.map((x) => x.time), value: s.map((x) => x.dst) };
}

/** Future samples only — drawn distinctly, never merged into the history. */
export function dstAheadSeries(json: unknown, now = new Date()): Series {
  const t = now.getTime();
  const s = samples(json).filter((x) => Date.parse(x.time) > t);
  return { time: s.map((x) => x.time), value: s.map((x) => x.dst) };
}
