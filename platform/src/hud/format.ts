/**
 * Display rules from DATA_CONTRACT.md §4:
 *   `value unit · HH:MM UTC · [E|D|M] · source`
 * A missing value renders as "no data" — never as a number, never as a dash
 * that could read as zero.
 */

import { type AlertItem, type AlertLevel, type Badge, formatAge, hhmmUTC } from '../contract/types.js';
import type { PartMeta } from '../data/source.js';

export const NO_DATA = 'no data';

export function badgeFor(meta: PartMeta | undefined): Badge {
  if (!meta) return 'E';
  return meta.tier === 'modeled' ? 'D' : meta.tier === 'ambient' ? 'M' : 'E';
}

export function badgeTitle(meta: PartMeta | undefined): string {
  if (!meta) return '';
  if (meta.tier === 'modeled') {
    return `Modeled — ${meta.model?.name ?? 'model'}${meta.model?.ref ? ` (${meta.model.ref})` : ''}`;
  }
  if (meta.tier === 'ambient') return 'Ambient — artistic, parameter-driven';
  return `Measured — ${meta.source}`;
}

/** Fixed-decimal formatting that never rounds a null into a zero. */
export function fmt(v: number | null | undefined, digits = 1): string {
  return v === null || v === undefined || !Number.isFinite(v) ? NO_DATA : v.toFixed(digits);
}

export function fmtInt(v: number | null | undefined): string {
  return v === null || v === undefined || !Number.isFinite(v) ? NO_DATA : String(Math.round(v));
}

export interface Staleness {
  state: 'fresh' | 'stale' | 'no-data';
  ageS: number | null;
  label: string;
  /** A form that fits an instrument tile. */
  short: string;
}

/**
 * `label` is the full sentence, for a tooltip or the detail panel. `short` is
 * what fits on a 128-pixel tile — the tile clipped "stale · no data since 18:13
 * UTC (1.7 h old)" mid-word, which told the reader less than "stale · 1.7 h"
 * would have while taking more room to do it.
 */
export function stalenessOf(meta: PartMeta | undefined, now = new Date()): Staleness {
  if (!meta || !meta.data_time) {
    const label = meta?.error ? `no data · ${meta.error}` : NO_DATA;
    return { state: 'no-data', ageS: null, label, short: NO_DATA };
  }
  const ageS = (now.getTime() - Date.parse(meta.data_time)) / 1000;
  if (!Number.isFinite(ageS)) {
    return { state: 'no-data', ageS: null, label: NO_DATA, short: NO_DATA };
  }
  if (ageS > meta.stale_after_s) {
    return {
      state: 'stale', ageS,
      label: `stale · no data since ${hhmmUTC(meta.data_time)} UTC (${formatAge(ageS)} old)`,
      short: `stale · ${formatAge(ageS)}`,
    };
  }
  return {
    state: 'fresh', ageS,
    label: `${hhmmUTC(meta.data_time)} UTC · ${formatAge(ageS)} old`,
    short: `${formatAge(ageS)} old`,
  };
}

const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * `19:55 UTC` on today's UTC date, `23 Oct 19:55 UTC` on any other. A bare
 * clock time is only honest for today: "K-index of 4, 19:55" read at noon
 * three days later looked like last night's.
 */
export function whenUTC(iso: string | null | undefined, now = new Date()): string {
  const t = iso ? Date.parse(iso) : NaN;
  if (!Number.isFinite(t)) return `${hhmmUTC(null)} UTC`;
  const d = new Date(t);
  if (d.toISOString().slice(0, 10) === now.toISOString().slice(0, 10)) return `${hhmmUTC(iso)} UTC`;
  return `${String(d.getUTCDate()).padStart(2, '0')} ${MON[d.getUTCMonth()]} ${hhmmUTC(iso)} UTC`;
}

/**
 * Is NOAA's notice still current? Only inside its own validity window (see
 * `parseAlerts` for how that is read), and never for a summary or a
 * cancellation, which report something already over.
 */
export function inForce(a: AlertItem, now: Date | number = new Date()): boolean {
  const t = typeof now === 'number' ? now : now.getTime();
  return a.validUntil != null && Date.parse(a.validUntil) > t
    && a.level !== 'summary' && a.level !== 'cancel';
}

/** Now, then expected, then possible, then over. */
export const LEVEL_RANK: Record<AlertLevel, number> = {
  alert: 0, warning: 1, watch: 2, cancel: 3, summary: 4, other: 5,
};

/** The word for a notice in force. One no longer in force is "ended", whatever it was. */
export const LEVEL_WORD: Record<AlertLevel, string> = {
  alert: 'now', warning: 'expected', watch: 'possible',
  cancel: 'cancelled', summary: 'ended', other: 'notice',
};

/**
 * The feed split by NOAA's own validity: what is current, most consequential
 * first, and what has ended, newest first.
 */
export function splitNotices(
  alerts: AlertItem[], now = new Date(),
): { current: AlertItem[]; ended: AlertItem[] } {
  const byTime = (a: AlertItem, b: AlertItem) => Date.parse(b.issued) - Date.parse(a.issued);
  const current = alerts.filter((a) => inForce(a, now))
    .sort((a, b) => (LEVEL_RANK[a.level] ?? 9) - (LEVEL_RANK[b.level] ?? 9) || byTime(a, b));
  const ended = alerts.filter((a) => !inForce(a, now)).sort(byTime);
  return { current, ended };
}

/** "now", "expected"… while in force; "cancelled" or "ended" after. */
export function noticeWord(a: AlertItem, now = new Date()): string {
  if (inForce(a, now)) return LEVEL_WORD[a.level] ?? 'notice';
  return a.level === 'cancel' ? 'cancelled' : 'ended';
}

/** `in force until 27 Oct 05:17 UTC`, `ended 23 Oct 21:00 UTC`, or `validity not stated`. */
export function validityText(a: AlertItem, now = new Date()): string {
  if (!a.validityStated) return 'validity not stated';
  if (inForce(a, now)) return `in force until ${whenUTC(a.validUntil, now)}`;
  return a.validUntil ? `ended ${whenUTC(a.validUntil, now)}` : 'ended';
}

export { hhmmUTC, formatAge };
