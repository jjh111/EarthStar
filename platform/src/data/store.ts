/**
 * Polling store. Holds the latest good envelope and never discards it on a
 * failed refresh — a network blip must show as *ageing* data, not as a blank
 * HUD, and certainly not as a fresh-looking wrong number.
 */

import type { NowEnvelope, Source } from './source.js';
import type { AuroraNow, Envelope } from '../contract/types.js';

export interface StoreState {
  now: NowEnvelope | null;
  /** Its own cadence: ~5-minute product, 141 KB gzipped. */
  aurora: Envelope<AuroraNow | null> | null;
  /** Last refresh attempt, whether or not it succeeded. */
  lastAttempt: string | null;
  lastError: string | null;
  loading: boolean;
}

type Listener = (s: StoreState) => void;

export class NowStore {
  private state: StoreState = {
    now: null, aurora: null, lastAttempt: null, lastError: null, loading: true,
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

  async refresh(): Promise<void> {
    this.inflight?.abort();
    const ctl = new AbortController();
    this.inflight = ctl;
    this.emit({ loading: true });
    try {
      const now = await this.source.fetchNow(ctl.signal);
      this.emit({ now, lastAttempt: new Date().toISOString(), lastError: null, loading: false });
    } catch (e) {
      if (ctl.signal.aborted) return;
      // Keep the previous envelope; it simply gets older, and says so.
      this.emit({
        lastAttempt: new Date().toISOString(),
        lastError: e instanceof Error ? e.message : String(e),
        loading: false,
      });
    } finally {
      if (this.inflight === ctl) this.inflight = null;
    }
  }

  /** Aurora failures are isolated from /now — one must not blank the other. */
  async refreshAurora(): Promise<void> {
    try {
      this.emit({ aurora: await this.source.fetchAurora() });
    } catch {
      // Keep the previous grid; it ages and the HUD says so.
    }
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
