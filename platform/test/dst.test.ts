/**
 * Dst, and the trap that makes this feed different from every other one.
 *
 * NOAA's Geospace model propagates the L1 wind to Earth, so it necessarily runs
 * ahead of the clock: on 2026-09-07, 47 of the 107 records in a single response
 * were up to 47 minutes in the future. "Take the newest record" — which is the
 * right answer for every other SWPC feed — publishes a forecast as the present
 * value. That is the failure these tests exist to prevent.
 */

import { describe, expect, it } from 'vitest';
import {
  dstAheadSeries, dstLevel, dstSeries, parseDst,
} from '../src/data/dst.js';

const NOW = new Date('2026-09-07T08:00:00Z');

/** Shape copied from the live feed: 1-minute cadence, straddling the clock. */
const FEED = [
  { time_tag: '2026-09-07T07:56:00', dst: -7.28 },
  { time_tag: '2026-09-07T07:58:00', dst: -9.10 },
  { time_tag: '2026-09-07T08:00:00', dst: -8.40 },
  { time_tag: '2026-09-07T08:20:00', dst: -14.02 },
  { time_tag: '2026-09-07T08:45:00', dst: -31.55 },
];

describe('parseDst', () => {
  it('takes the newest ARRIVED sample, never the newest in the file', () => {
    const r = parseDst(FEED, NOW);
    expect(r.now?.time).toBe('2026-09-07T08:00:00.000Z');
    expect(r.now?.dst).toBeCloseTo(-8.4, 6);
    // The −31.55 at 08:45 is 45 minutes away and must not be "now".
    expect(r.now?.dst).not.toBeCloseTo(-31.55, 6);
  });

  it('keeps the future samples, separately, as a forecast', () => {
    const r = parseDst(FEED, NOW);
    expect(r.ahead.map((s) => s.time)).toEqual([
      '2026-09-07T08:20:00.000Z', '2026-09-07T08:45:00.000Z',
    ]);
  });

  it('reports the deepest value across the whole response, forecast included', () => {
    // The minimum is a different question from the current value, and the
    // forecast is exactly where a storm's depth shows up first.
    const r = parseDst(FEED, NOW);
    expect(r.minimum?.dst).toBeCloseTo(-31.55, 6);
    expect(r.minimum?.time).toBe('2026-09-07T08:45:00.000Z');
  });

  it('sorts by time regardless of the order upstream sent', () => {
    const r = parseDst([...FEED].reverse(), NOW);
    expect(r.now?.time).toBe('2026-09-07T08:00:00.000Z');
    expect(r.ahead).toHaveLength(2);
  });

  it('returns nothing rather than guessing when every sample is in the future', () => {
    const r = parseDst(FEED, new Date('2026-09-07T07:00:00Z'));
    expect(r.now).toBeNull();
    expect(r.ahead).toHaveLength(5);
  });

  it('drops records with a null or missing value', () => {
    const r = parseDst([
      { time_tag: '2026-09-07T07:59:00', dst: null },
      { time_tag: '2026-09-07T07:58:00', dst: -5 },
    ], NOW);
    expect(r.now?.dst).toBe(-5);
  });

  it('survives a non-array body', () => {
    expect(parseDst(null, NOW).now).toBeNull();
    expect(parseDst({ error: 'nope' }, NOW).ahead).toEqual([]);
  });
});

describe('series', () => {
  it('plots only what has arrived', () => {
    expect(dstSeries(FEED, NOW).value).toEqual([-7.28, -9.10, -8.40]);
  });

  it('keeps the forecast in its own series so the two cannot be merged by accident', () => {
    expect(dstAheadSeries(FEED, NOW).value).toEqual([-14.02, -31.55]);
  });

  it('partitions the feed exactly — every sample lands in one series or the other', () => {
    const a = dstSeries(FEED, NOW).value.length;
    const b = dstAheadSeries(FEED, NOW).value.length;
    expect(a + b).toBe(FEED.length);
  });
});

describe('dstLevel', () => {
  it('classifies after Loewe & Prölss 1997', () => {
    expect(dstLevel(5)).toBe('quiet');
    expect(dstLevel(-29)).toBe('quiet');
    expect(dstLevel(-30)).toBe('weak');
    expect(dstLevel(-50)).toBe('moderate');
    expect(dstLevel(-100)).toBe('intense');
    expect(dstLevel(-200)).toBe('severe');
    expect(dstLevel(-400)).toBe('great');
  });

  it('has no gaps or overlaps at the boundaries', () => {
    for (let v = 20; v > -420; v -= 1) expect(dstLevel(v)).not.toBeNull();
  });

  it('is null for no data, never "quiet"', () => {
    expect(dstLevel(null)).toBeNull();
    expect(dstLevel(NaN)).toBeNull();
  });
});
