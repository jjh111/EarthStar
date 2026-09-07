/**
 * Display rules from DATA_CONTRACT.md §4:
 *   `value unit · HH:MM UTC · [E|D|M] · source`
 * A missing value renders as "no data" — never as a number, never as a dash
 * that could read as zero.
 */

import { type Badge, formatAge, hhmmUTC } from '../contract/types.js';
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

export { hhmmUTC, formatAge };
