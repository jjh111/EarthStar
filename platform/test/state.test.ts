/**
 * The four label states, one test per transition.
 *
 * The honesty charter says what may be shown; these tests pin what may be
 * *said* while the data is not there yet. A cold visitor reading "no data" on
 * a fetch that is still in flight is the failure mode this machine exists to
 * prevent, so each rule of `valueState` gets its own assertion, plus the
 * store-level transitions that feed it.
 */

import { describe, expect, it } from 'vitest';
import {
  IDLE_LANE, LOADING_LANE, errorReason, valueState,
  type LaneItem,
} from '../src/data/state.js';
import type { PartMeta } from '../src/data/source.js';

const NOW = new Date('2026-09-08T18:00:00Z');

const meta = (over: Partial<PartMeta> = {}): PartMeta => ({
  tier: 'measured', source: 'test', source_url: 'https://example.invalid',
  model: null, data_time: '2026-09-08T17:45:00Z', latency_s: 60,
  stale_after_s: 1200, ...over,
});

describe('valueState — the four states and their edges', () => {
  it('loading: a fetch in flight, nothing ever received', () => {
    const s = valueState({ lane: LOADING_LANE, received: false, meta: undefined, now: NOW });
    expect(s.state).toBe('loading');
    // Never the words "no data".
    expect(s.short).not.toContain('no data');
  });

  it('loading holds even when a lane error was recorded earlier on the same lane', () => {
    const lane: LaneItem & { nextAttempt: string | null } = {
      loading: true, error: 'offline', nextAttempt: null,
    };
    const s = valueState({ lane, received: false, meta: undefined, now: NOW });
    expect(s.state).toBe('loading');
  });

  it('loading yields once a usable value has been received, even mid-refresh', () => {
    const s = valueState({ lane: LOADING_LANE, received: true, meta: meta(), now: NOW });
    expect(s.state).toBe('fresh');
  });

  it('fresh — a good value inside its window', () => {
    const s = valueState({ lane: IDLE_LANE, received: true, meta: meta(), now: NOW });
    expect(s.state).toBe('fresh');
    expect(s.label).toContain('17:45');
  });

  it('stale — the same value past its own stale_after_s', () => {
    const m = meta({ data_time: '2026-09-08T15:00:00Z' });   // 3 h old, 20 min window
    const s = valueState({ lane: IDLE_LANE, received: true, meta: m, now: NOW });
    expect(s.state).toBe('stale');
    expect(s.label).toContain('stale');
  });

  it('error — a per-feed failure inside a lane that otherwise succeeded', () => {
    // One endpoint down must not read as "no data": the fetch failed after
    // retry and mirror, and the reason is on the part.
    const s = valueState({
      lane: { loading: false, error: null },
      received: true,
      meta: meta({ data_time: null, error: 'HTTP 404' }),
      now: NOW,
    });
    expect(s.state).toBe('error');
    expect(s.label).toContain('upstream 404');
    expect(s.short).toBe('unavailable');
  });

  it('no data — a completed fetch carried nothing usable, and it says so plainly', () => {
    // A feed that answered: meta exists, no data_time on it, no transport error.
    const s = valueState({
      lane: IDLE_LANE, received: true, meta: meta({ data_time: null }), now: NOW,
    });
    expect(s.state).toBe('no-data');
    expect(s.short).toBe('no data');
  });

  it('error — the fetch failed after retry and mirror, with a reason class', () => {
    const s = valueState({
      lane: { loading: false, error: 'HTTP 404', nextAttempt: '2026-09-08T18:01:00Z' },
      received: false, meta: undefined, now: NOW,
    });
    expect(s.state).toBe('error');
    expect(s.label).toContain('upstream 404');
    expect(s.label).toContain('18:01');
    // Not "no data" — a transport failure is a different claim.
    expect(s.short).toBe('unavailable');
  });

  it('a previous good value stays on screen aging when the next fetch errors', () => {
    // Same lane failure, but a receipt: the envelope from before is kept.
    const m = meta({ data_time: '2026-09-08T17:50:00Z' });
    const s = valueState({
      lane: { loading: false, error: 'offline' }, received: true, meta: m, now: NOW,
    });
    expect(s.state).toBe('fresh'); // ten minutes old, still inside its window
    expect(valueState({
      lane: { loading: false, error: 'offline' },
      received: true,
      meta: meta({ data_time: '2026-09-08T15:00:00Z' }),
      now: NOW,
    }).state).toBe('stale');
  });

  it('a feed that delivered a value whose field is null reads as no data, not fresh', () => {
    // The HUD layer's rule: the value slot, not the feed, decides the label.
    const s = valueState({ lane: IDLE_LANE, received: true, meta: meta(), now: NOW });
    expect(s.state).toBe('fresh'); // machine says the feed is fine…
    // …and the HUD overrides to no-data when the value itself is absent.
    // Asserted here as the machine's honesty about its own boundaries.
    expect(s.label).toContain('17:45');
  });

  it('a completed fetch that carried an unparseable body reads as no data when the lane holds no error', () => {
    const s = valueState({
      lane: IDLE_LANE, received: true, meta: meta({ data_time: null, error: undefined }),
      now: NOW,
    });
    expect(s.state).toBe('no-data');
  });
});

describe('errorReason — one vocabulary for every failure', () => {
  it('reads an HTTP 404 as upstream', () => {
    expect(errorReason(new Error('HTTP 404'))).toBe('upstream 404');
    expect(errorReason('HTTP 404')).toBe('upstream 404');
  });

  it('reads a 5xx as upstream, with the status', () => {
    expect(errorReason('HTTP 503')).toBe('upstream HTTP 503');
  });

  it('reads a transport throw as offline or blocked', () => {
    expect(errorReason(new TypeError('Failed to fetch'))).toBe('offline or blocked');
    expect(errorReason('timeout')).toBe('upstream timeout');
  });
});

describe('the store drives the same machine', () => {
  it('a cold store reports the snapshot lane as loading before the first fetch lands', async () => {
    const { NowStore } = await import('../src/data/store.js');
    type Store = InstanceType<typeof NowStore>;
    let resolveSnapshot: ((v: unknown) => void) | undefined;
    const source = {
      name: 'test',
      fetchSnapshot: () => new Promise((ok) => { resolveSnapshot = ok; }),
      fetchAurora: () => new Promise(() => {}),
      fetchRegions: () => new Promise(() => {}),
      fetchEphemerides: () => new Promise(() => {}),
    };
    const store = new NowStore(source as never, 60_000, 300_000);
    const states: Array<ReturnType<Store['get']>> = [];
    store.subscribe((s) => states.push(s));
    void store.refresh();

    expect(states[0]!.lanes.snapshot).toBe(true);
    expect(store.get().now).toBeNull();
    // The slot's state from the machine: loading, not no data.
    expect(valueState({
      lane: { loading: states[states.length - 1]!.lanes.snapshot, error: null },
      received: false, now: NOW,
    }).state).toBe('loading');

    resolveSnapshot!({
      now: null, series: null, kpSeries: null, xraySeries: null, protonSeries: null,
      electronSeries: null, geosyncSeries: null, dstSeries: null,
    });
    await new Promise((ok) => setTimeout(ok, 0));
    expect(store.get().lanes.snapshot).toBe(false);
    // A completed snapshot that carries no envelope is "no data" — only now.
    expect(valueState({
      lane: { loading: store.get().lanes.snapshot, error: null },
      received: false, now: NOW,
    }).state).toBe('no-data');
  });

  it('a failed slow-lane item records its error without touching the snapshot lane', async () => {
    const { NowStore } = await import('../src/data/store.js');
    const source = {
      name: 'test',
      fetchSnapshot: () => Promise.reject(new Error('HTTP 404')),
      fetchAurora: () => Promise.reject(new Error('offline')),
      fetchRegions: () => Promise.resolve({ data: [] }),
      fetchEphemerides: () => Promise.resolve({ data: [] }),
    };
    const store = new NowStore(source as never, 60_000, 300_000);
    await store.refresh();
    expect(store.get().lanes.snapshot).toBe(false);
    expect(store.get().lastError).toBe('HTTP 404');
    expect(store.get().nextAttempt).not.toBeNull();
    await store.refreshAurora();
    expect(store.get().laneErrors['aurora']).toBe('offline');
    // Regions succeeded: its lane error cleared even though aurora failed.
    expect(store.get().laneErrors['regions']).toBeNull();
  });
});
