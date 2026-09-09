/**
 * Polling store. Holds the latest good envelope and never discards it on a
 * failed refresh — a network blip must show as *ageing* data, not as a blank
 * HUD, and certainly not as a fresh-looking wrong number.
 *
 * Lanes. The cold start must not read as a page of failures, so loading is
 * tracked per lane rather than as one page-wide flag: the snapshot lane (eleven
 * endpoints, one Promise.all), and the slow lane items (aurora, regions,
 * CME catalogue, spacecraft positions) which resolve at their own pace. The
 * state machine in `state.ts` turns these flags plus each slot's receipt into
 * one of four label states. Imagery keeps its own loading state in the Sun
 * panel and is deliberately sequenced *after* these lanes by the app shell.
 */

import type { NowEnvelope, Source } from './source.js';
import type { AuroraNow, Envelope, SolarWindSeries } from '../contract/types.js';
import type { ActiveRegion, Series } from './swpc.js';
import { fetchCmes, type Cme } from './cme.js';
import type { SpacecraftPos } from './ephemerides.js';
import type { LaneItem } from './state.js';

/** One flag per slow-lane item; the snapshot lane is a single boolean. */
export interface StoreLanes {
  snapshot: boolean;
  aurora: boolean;
  regions: boolean;
  cmes: boolean;
  spacecraft: boolean;
}

export interface StoreState {
  now: NowEnvelope | null;
  /** Recent history, from the same fetch as `now`. */
  series: Envelope<SolarWindSeries> | null;
  kpSeries: Series | null;
  xraySeries: Series | null;
  protonSeries: Series | null;
  electronSeries: Series | null;
  geosyncSeries: Series | null;
  dstSeries: Series | null;
  /** Its own cadence: ~5-minute product, 141 KB gzipped. */
  aurora: Envelope<AuroraNow | null> | null;
  regions: Envelope<ActiveRegion[]> | null;
  /** Where the L1 monitors actually are; hourly cadence. */
  spacecraft: Envelope<SpacecraftPos[]> | null;
  cmes: Cme[];
  /** Last refresh attempt, whether or not it succeeded. */
  lastAttempt: string | null;
  lastError: string | null;
  loading: boolean;
  /** Per-lane fetch flags — the cold start reads these, not `loading`. */
  lanes: StoreLanes;
  /** Per-lane failures, for slots whose feed never returned. */
  laneErrors: { aurora: string | null; regions: string | null; cmes: string | null; spacecraft: string | null };
  /** When the next snapshot poll is due — what an error text can promise. */
  nextAttempt: string | null;
}

type Listener = (s: StoreState) => void;

export class NowStore {
  private state: StoreState = {
    now: null, series: null, kpSeries: null, xraySeries: null,
    protonSeries: null, electronSeries: null, geosyncSeries: null, dstSeries: null,
    aurora: null, regions: null, spacecraft: null, cmes: [], lastAttempt: null, lastError: null, loading: true,
    // All lanes start loading: `start()` kicks the snapshot poll and the slow
    // lane immediately, and until a slot's own fetch resolves it is pending —
    // never "no data".
    lanes: { snapshot: true, aurora: true, regions: true, cmes: true, spacecraft: true },
    laneErrors: { aurora: null, regions: null, cmes: null, spacecraft: null },
    nextAttempt: null,
  };
  private listeners = new Set<Listener>();
  private timer: number | null = null;
  private inflight: AbortController | null = null;

  private auroraTimer: number | null = null;

  constructor(
    private source: Source,
    private intervalMs = 60_000,
    private auroraIntervalMs = 5 * 60_000,
  ) {}

  get(): StoreState { return this.state; }

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    fn(this.state);
    return () => this.listeners.delete(fn);
  }

  private emit(patch: Partial<StoreState>): void {
    this.state = { ...this.state, ...patch };
    for (const fn of this.listeners) fn(this.state);
  }

  /** The next poll time, so an error can name when the store tries again. */
  private nextAttemptIso(): string {
    return new Date(Date.now() + this.intervalMs).toISOString();
  }

  async refresh(): Promise<void> {
    this.inflight?.abort();
    const ctl = new AbortController();
    this.inflight = ctl;
    this.emit({
      loading: true,
      lanes: { ...this.state.lanes, snapshot: true },
    });
    try {
      const {
        now, series, kpSeries, xraySeries, protonSeries, electronSeries, geosyncSeries,
        dstSeries,
      } = await this.source.fetchSnapshot(ctl.signal);
      this.emit({
        now, series, kpSeries, xraySeries, protonSeries, electronSeries, geosyncSeries,
        dstSeries,
        lastAttempt: new Date().toISOString(), lastError: null, loading: false,
        lanes: { ...this.state.lanes, snapshot: false },
        nextAttempt: this.nextAttemptIso(),
      });
    } catch (e) {
      if (ctl.signal.aborted) return;
      // Keep the previous envelope; it simply gets older, and says so.
      this.emit({
        lastAttempt: new Date().toISOString(),
        lastError: e instanceof Error ? e.message : String(e),
        loading: false,
        lanes: { ...this.state.lanes, snapshot: false },
        nextAttempt: this.nextAttemptIso(),
      });
    } finally {
      if (this.inflight === ctl) this.inflight = null;
    }
  }

  /**
   * One slow-lane item: its own loading flag, its own failure. A failed item
   * keeps whatever it last had and reports the failure — it never lets a slot
   * that never received anything read as "no data" while its fetch is merely
   * still running.
   */
  private async slow<T>(
    key: 'aurora' | 'regions' | 'cmes' | 'spacecraft',
    payload: 'aurora' | 'regions' | 'cmes' | 'spacecraft',
    fetch: () => Promise<T>,
  ): Promise<void> {
    this.emit({ lanes: { ...this.state.lanes, [key]: true } });
    try {
      const value = await fetch();
      const patch: Partial<StoreState> = {
        lanes: { ...this.state.lanes, [key]: false },
        laneErrors: { ...this.state.laneErrors, [key]: null },
      };
      (patch as Record<string, unknown>)[payload] = value;
      this.emit(patch);
    } catch (e) {
      this.emit({
        lanes: { ...this.state.lanes, [key]: false },
        laneErrors: {
          ...this.state.laneErrors,
          [key]: e instanceof Error ? e.message : String(e),
        },
      });
    }
  }

  /** Aurora failures are isolated from /now — one must not blank the other. */
  async refreshAurora(): Promise<void> {
    // A daily product, fetched alongside the aurora rather than on a timer of
    // its own — there is no third cadence worth maintaining.
    await this.slow('aurora', 'aurora', () => this.source.fetchAurora());
    await this.slow('regions', 'regions', () => this.source.fetchRegions());
    // DONKI is a human-curated catalogue: a new analysis appears hours after
    // the event, so there is nothing to gain from polling it faster.
    await this.slow('cmes', 'cmes', async () => await fetchCmes());
    // Hourly upstream, so the 5-minute lane is already far faster than the
    // data changes; it rides along rather than earning a timer of its own.
    await this.slow('spacecraft', 'spacecraft', () => this.source.fetchEphemerides());
  }

  /** A lane item the caller can hand to the state machine as-is. */
  lane(item: 'snapshot' | 'aurora' | 'regions' | 'cmes' | 'spacecraft'): LaneItem & { nextAttempt: string | null } {
    if (item === 'snapshot') {
      return { loading: this.state.lanes.snapshot, error: this.state.lastError, nextAttempt: this.state.nextAttempt };
    }
    return {
      loading: this.state.lanes[item],
      error: this.state.laneErrors[item],
      nextAttempt: this.state.nextAttempt,
    };
  }

  start(): void {
    if (this.timer !== null) return;
    void this.refresh();
    void this.refreshAurora();
    this.timer = window.setInterval(() => void this.refresh(), this.intervalMs);
    this.auroraTimer = window.setInterval(() => void this.refreshAurora(), this.auroraIntervalMs);
    // Catch up immediately when the tab comes back rather than showing stale data.
    document.addEventListener('visibilitychange', this.onVisible);
  }

  stop(): void {
    if (this.timer !== null) { clearInterval(this.timer); this.timer = null; }
    if (this.auroraTimer !== null) { clearInterval(this.auroraTimer); this.auroraTimer = null; }
    document.removeEventListener('visibilitychange', this.onVisible);
    this.inflight?.abort();
  }

  private onVisible = (): void => {
    if (document.visibilityState === 'visible') { void this.refresh(); void this.refreshAurora(); }
  };
}
