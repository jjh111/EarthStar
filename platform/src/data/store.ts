/**
 * Polling store. Holds the latest good envelope and never discards it on a
 * failed refresh — a network blip must show as *ageing* data, not as a blank
 * HUD, and certainly not as a fresh-looking wrong number.
 */

import type { NowEnvelope, Source } from './source.js';

export interface StoreState {
  now: NowEnvelope | null;
  /** Last refresh attempt, whether or not it succeeded. */
  lastAttempt: string | null;
  lastError: string | null;
  loading: boolean;
}

type Listener = (s: StoreState) => void;

export class NowStore {
  private state: StoreState = { now: null, lastAttempt: null, lastError: null, loading: true };
  private listeners = new Set<Listener>();
  private timer: number | null = null;
  private inflight: AbortController | null = null;

  constructor(private source: Source, private intervalMs = 60_000) {}

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

  start(): void {
    if (this.timer !== null) return;
    void this.refresh();
    this.timer = window.setInterval(() => void this.refresh(), this.intervalMs);
    // Catch up immediately when the tab comes back rather than showing stale data.
    document.addEventListener('visibilitychange', this.onVisible);
  }

  stop(): void {
    if (this.timer !== null) { clearInterval(this.timer); this.timer = null; }
    document.removeEventListener('visibilitychange', this.onVisible);
    this.inflight?.abort();
  }

  private onVisible = (): void => {
    if (document.visibilityState === 'visible') void this.refresh();
  };
}
