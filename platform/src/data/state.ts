/**
 * The label states — loading ≠ no data ≠ error ≠ stale.
 *
 * The honesty rule ("no fabricated values") is about numbers, and it was
 * right. But its first implementation made one label carry four different
 * claims: "no data" was shown while a first fetch was still in flight, when a
 * completed fetch had carried nothing usable, and when the transport had
 * failed — three situations a reader deciding whether to trust the page
 * needed told apart, and none of them is what the words say.
 *
 * Four mutually exclusive states, per value slot:
 *
 *  · loading — a fetch is in flight and nothing has *ever* arrived. A dimmed
 *    slot, a thin pulse or "…", label and unit legible, badge greyed. Never
 *    the words "no data": nothing has been measured *yet* is a different
 *    claim from nothing was measured.
 *  · no data — a fetch *completed* and carried nothing usable (empty, all
 *    fill values, a dead feed). The literal words, with the feed's newest
 *    timestamp when it has one, so "quiet feed" is distinguishable from
 *    "dead feed".
 *  · error — the fetch *failed* after the retry and the mirror: "unavailable"
 *    plus a reason class (upstream 404 / offline or blocked / bad data) and
 *    the next attempt time. A previous good value stays on screen aging.
 *  · stale — a good value past its own `stale_after_s`. Unchanged from the
 *    staleness charter.
 *
 * The machine is a pure function of (lane, receipt, meta, now); the HUD maps
 * each result onto one `data-state` attribute and the CSS keys off that alone.
 */

import type { PartMeta } from './source.js';
import { formatAge, hhmmUTC } from '../contract/types.js';

export type DataState = 'loading' | 'fresh' | 'stale' | 'no-data' | 'error';

/**
 * One *lane* of fetching. The lanes are deliberately coarser than feeds: the
 * snapshot lane (one Promise.all over eleven endpoints) resolves together and
 * the slow lane items each carry their own flag, which is the granularity the
 * cold start actually has. Imagery is not a lane here — it has no PartMeta and
 * keeps its own state in the Sun panel.
 */
export interface LaneItem {
  /** A fetch is in flight. */
  loading: boolean;
  /** The most recent failure on this lane, if any. */
  error: string | null;
}

export const LOADING_LANE: LaneItem & { nextAttempt: null } = { loading: true, error: null, nextAttempt: null };
export const IDLE_LANE: LaneItem & { nextAttempt: null } = { loading: false, error: null, nextAttempt: null };

export interface ValueStateResult {
  state: DataState;
  /** Full sentence, for a tooltip or the detail panel. */
  label: string;
  /** What fits an instrument tile. */
  short: string;
  ageS: number | null;
}

export interface ValueStateInput {
  /** A lane may carry when it will try again, so the error text can be exact. */
  lane: LaneItem & { nextAttempt?: string | null };
  /** Did a completed fetch ever deliver a usable value for this slot? */
  received: boolean;
  meta?: PartMeta | null;
  now?: Date;
}

/**
 * The whole decision, in priority order. Each rule is one claim:
 *
 *  1. a fetch in flight with nothing ever received → loading;
 *  2. a completed fetch that delivered nothing usable → no data;
 *  3. a fetch that failed → error, unless a good value is still on screen,
 *     in which case the value stays and ages (stale wins);
 *  4. a good value inside its window → fresh;
 *  5. the same value past its window → stale, visibly.
 */
export function valueState(input: ValueStateInput): ValueStateResult {
  const { lane, received, meta, now = new Date() } = input;

  if (lane.loading && !received && !meta?.data_time) {
    return { state: 'loading', label: 'loading', short: 'loading', ageS: null };
  }

  if (!meta || !meta.data_time) {
    // A transport failure is recorded either on the lane (the whole lane's
    // fetch threw) or on the part itself (its feed failed inside a lane that
    // otherwise succeeded — one endpoint down must not blank the rest). Both
    // are the error state; the literal "no data" is for a fetch that
    // *completed* and carried nothing usable.
    const reason = lane.error ?? meta?.error ?? null;
    if (reason) {
      return {
        state: 'error',
        label: `unavailable · ${errorReason(reason)}${nextAttemptSuffix(lane, now)}`,
        short: 'unavailable',
        ageS: null,
      };
    }
    return { state: 'no-data', label: meta?.error ? `no data · ${meta.error}` : 'no data', short: 'no data', ageS: null };
  }

  const ageS = (now.getTime() - Date.parse(meta.data_time)) / 1000;
  if (!Number.isFinite(ageS)) {
    return { state: 'no-data', label: 'no data', short: 'no data', ageS: null };
  }
  if (ageS > meta.stale_after_s) {
    return {
      state: 'stale',
      label: `stale · no data since ${hhmmUTC(meta.data_time)} UTC (${formatAge(ageS)} old)`,
      short: `stale · ${formatAge(ageS)}`,
      ageS,
    };
  }
  return {
    state: 'fresh',
    label: `${hhmmUTC(meta.data_time)} UTC · ${formatAge(ageS)} old`,
    short: `${formatAge(ageS)} old`,
    ageS,
  };
}

/** The suffix an error state carries: when the store tries again. */
function nextAttemptSuffix(lane: LaneItem & { nextAttempt?: string | null }, now: Date): string {
  const t = lane.nextAttempt ? Date.parse(lane.nextAttempt) : NaN;
  if (Number.isFinite(t) && t > now.getTime()) {
    return ` · next attempt ${hhmmUTC(new Date(t).toISOString())} UTC`;
  }
  return '';
}

/**
 * One vocabulary for every failure, whatever carried it: a thrown transport
 * error, a stored `PartMeta.error`, or an imagery fetch. Classes, not stack
 * traces — "offline or blocked" is one class because a browser cannot always
 * tell a dead network from a refused cross-origin request, and pretending to
 * would be a claim it cannot keep.
 */
export function errorReason(e: unknown): string {
  const s = e instanceof Error ? e.message : String(e ?? '');
  const m = /^HTTP (\d{3})/.exec(s);
  if (m) {
    const code = Number(m[1]);
    if (code === 404) return 'upstream 404';
    if (code >= 500) return `upstream HTTP ${code}`;
    if (code >= 400) return `upstream HTTP ${code}`;
    return `upstream HTTP ${code}`;
  }
  if (s === 'timeout') return 'upstream timeout';
  if (/aborted|abort/i.test(s)) return 'cancelled';
  return 'offline or blocked';
}
