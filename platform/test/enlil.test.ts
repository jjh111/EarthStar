/**
 * WSA-Enlil at Earth.
 *
 * The parser's job is to keep three things straight that are easy to blur: what
 * has already happened, what the model expects next, and the fact that the CME
 * tracer is a mixing fraction rather than a probability. The tracer spans some
 * thirty orders of magnitude in a quiet stretch, so a naive "is it nonzero"
 * test would report a CME at Earth every hour of every day.
 */

import { describe, expect, it } from 'vitest';
import {
  CLOUD_ARRIVAL, enlilAt, enlilSeries, parseEnlil,
} from '../src/data/enlil.js';

const NOW = new Date('2026-09-07T12:00:00Z');

/** Newest-first, as the feed sends it. Values follow the live run's shape. */
const FEED = [
  { time_tag: '2026-09-08T23:00:00', v_r: 697, earth_particles_per_cm3: 16.0,
    temperature: 240_000, b_r: 5.8, polarity: -0.02, cloud: 1.15 },
  { time_tag: '2026-09-08T19:00:00', v_r: 759, earth_particles_per_cm3: 4.3,
    temperature: 236_745, b_r: 5.77, polarity: -0.02, cloud: 0.017 },
  { time_tag: '2026-09-08T05:00:00', v_r: 560, earth_particles_per_cm3: 15.2,
    temperature: 120_539, b_r: 4.92, polarity: 1.61, cloud: 0.31 },
  { time_tag: '2026-09-07T18:00:00', v_r: 428, earth_particles_per_cm3: 7.9,
    temperature: 59_856, b_r: 6.89, polarity: 2.03, cloud: 0.0079 },
  { time_tag: '2026-09-07T06:00:00', v_r: 338, earth_particles_per_cm3: 12.5,
    temperature: 34_789, b_r: 6.44, polarity: 1.35, cloud: 0.0033 },
  { time_tag: '2026-09-05T06:00:00', v_r: 328, earth_particles_per_cm3: 4.8,
    temperature: 17_373, b_r: 2.8, polarity: -0.59, cloud: 2.26e-23 },
];

describe('parseEnlil', () => {
  const run = parseEnlil(FEED, NOW);

  it('splits the run at the clock and sorts both halves oldest → newest', () => {
    expect(run.past.map((s) => s.time)).toEqual([
      '2026-09-05T06:00:00.000Z', '2026-09-07T06:00:00.000Z',
    ]);
    expect(run.ahead[0]!.time).toBe('2026-09-07T18:00:00.000Z');
    expect(run.ahead[run.ahead.length - 1]!.time).toBe('2026-09-08T23:00:00.000Z');
  });

  it('finds the peak speed among what is still ahead, not the whole run', () => {
    expect(run.peakSpeed?.speed).toBe(759);
    expect(run.peakSpeed?.time).toBe('2026-09-08T19:00:00.000Z');
  });

  it('reports the first crossing of the tracer threshold, not the maximum', () => {
    // 0.31 at 05:00 comes before 1.15 at 23:00; the arrival is the crossing.
    expect(run.cloudArrival?.time).toBe('2026-09-08T05:00:00.000Z');
    expect(run.peakCloud?.cloud).toBe(1.15);
  });

  it('does not call a quiet tracer an arrival', () => {
    // 2.26e-23 and 0.0033 are the numerical floor and ambient mixing. A test
    // for "nonzero" would report a CME at Earth in both.
    const quiet = parseEnlil(FEED.filter((r) => (r.cloud ?? 0) < CLOUD_ARRIVAL), NOW);
    expect(quiet.cloudArrival).toBeNull();
    expect(quiet.ahead.length).toBeGreaterThan(0);
  });

  it('spans the reported window', () => {
    expect(run.firstTime).toBe('2026-09-05T06:00:00.000Z');
    expect(run.lastTime).toBe('2026-09-08T23:00:00.000Z');
  });

  it('survives a non-array body without inventing a run', () => {
    const e = parseEnlil({ error: 'nope' }, NOW);
    expect(e.past).toEqual([]);
    expect(e.ahead).toEqual([]);
    expect(e.cloudArrival).toBeNull();
    expect(e.firstTime).toBeNull();
  });
});

describe('enlilAt', () => {
  const run = parseEnlil(FEED, NOW);

  it('returns the nearest sample inside the tolerance', () => {
    const s = enlilAt(run, new Date('2026-09-07T06:10:00Z'), 15);
    expect(s?.time).toBe('2026-09-07T06:00:00.000Z');
    expect(s?.speed).toBe(338);
  });

  it('returns null rather than a sample from the wrong hour', () => {
    // Nearest is 06:00, six hours away. A comparison against that would look
    // like a model error and would actually be a lookup error.
    expect(enlilAt(run, new Date('2026-09-07T12:00:00Z'), 15)).toBeNull();
  });

  it('returns null for an unparseable time rather than the first sample', () => {
    expect(enlilAt(run, new Date('not a date'), 15)).toBeNull();
  });
});

describe('enlilSeries', () => {
  it('keeps time and value aligned for each column', () => {
    const run = parseEnlil(FEED, NOW);
    const s = enlilSeries(run.ahead, 'speed');
    expect(s.time).toHaveLength(s.value.length);
    expect(s.value).toEqual([428, 560, 759, 697]);
  });
});

/**
 * A run with no tracer values says nothing about ejecta, and a mirror that
 * kept only the far end of a run is captioned as what it is. Both were on
 * screen from the stage-B mirror: 720 rows, every `cloud` null, starting 79 h
 * out — and the panel said "no ejecta reach Earth" over "the next 27 h".
 */
describe('a run without a tracer, starting days ahead', () => {
  const at = (h: number) => new Date(NOW.getTime() + h * 3.6e6).toISOString().slice(0, 19);
  const TAIL = [79, 90, 100, 106].map((h, i) => ({
    time_tag: at(h), v_r: 400 + i * 27, earth_particles_per_cm3: 5, temperature: 1e5,
    b_r: 1, polarity: 1, cloud: null,
  }));
  const run = parseEnlil(TAIL, NOW);

  it('does not read a missing tracer as zero', () => {
    expect(run.tracerPublished).toBe(false);
    expect(run.cloudArrival).toBeNull();
    // A published run keeps saying it published one.
    expect(parseEnlil(FEED, NOW).tracerPublished).toBe(true);
  });

  it('says so in the Ahead tab, and spans from now rather than from its first row', async () => {
    const { renderForecast } = await import('../src/hud/margin.js');
    const html = renderForecast({
      kp: [], odds: [], threeDay: null, discussion: null, flares: [], f107: { value: null, time: null }, enlil: run,
    } as never, false, [], undefined, null, NOW);
    expect(html).toContain("NOAA's run carries no CME tracer values, so nothing here says whether ejecta");
    expect(html).not.toContain('stays below');
    expect(html).toContain('Radial speed from +79 h to +106 h');
    expect(html).not.toMatch(/over the next 27 h/);
    expect(html).toContain("at the run's last");
    expect(html).not.toContain('The elapsed half is checked');
  });

  it('and the briefing says the same three-way thing', async () => {
    const { buildBriefing } = await import('../src/hud/briefing.js');
    const md = buildBriefing({
      state: { now: { data: { alerts: [] }, parts: {} }, lanes: { snapshot: false } } as never,
      narration: [], checks: null, forecast: { enlil: run } as never, now: NOW,
    });
    expect(md).toContain('NOAA’s run carries no CME tracer values');
    expect(md).not.toContain('No ejecta reach Earth');
  });
});
