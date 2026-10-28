/**
 * Live spans: the panel's HTML holds still between ticks, and the words the
 * spans stand for are the words the text renderers write.
 *
 * The panel decides whether to rebuild by comparing HTML strings, so anything
 * in that string that moves with the clock would turn every tick into a
 * rebuild under the reader. These hold the two halves to each other: the
 * live form is the same string at any time, and written out it says what the
 * briefing says.
 */

import { describe, expect, it } from 'vitest';
import { agesAt, liveAge, liveClock, liveHtml, liveSubsolar, liveText } from '../src/hud/live.js';
import { buildReportLines } from '../src/hud/situation-report.js';
import { sentenceAsOf, stateSentence } from '../src/hud/state-sentence.js';
import { stalenessOf } from '../src/hud/format.js';
import { renderDetail, renderReport } from '../src/hud/margin.js';
import type { NowEnvelope, PartMeta } from '../src/data/source.js';
import type { StoreState } from '../src/data/store.js';

const NOW = new Date('2026-10-26T12:11:00Z');
const LATER = new Date('2026-10-26T15:29:00Z');

describe('a live age', () => {
  it('is written out as formatAge would write it', () => {
    expect(liveText(`${liveAge('2026-10-26T11:58:00Z')} old`, NOW)).toBe('13 min old');
    expect(liveText(liveAge('2026-10-26T12:10:15Z'), NOW)).toBe('45 s');
    expect(agesAt(LATER)('2026-10-26T12:11:00Z')).toBe('3.3 h');
  });

  it('becomes one empty element carrying its instant', () => {
    expect(liveHtml(`(${liveAge('2026-10-26T11:58:00Z')} old)`))
      .toBe('(<time data-age="2026-10-26T11:58:00.000Z"></time> old)');
  });

  it('is the same token for the same instant however it was spelt', () => {
    expect(liveAge('2026-10-26T11:58:00Z')).toBe(liveAge('2026-10-26T11:58:00.000Z'));
  });

  it('says "unknown" for an instant it cannot read, rather than a token for nothing', () => {
    expect(liveAge('not a time')).toBe('unknown');
  });
});

describe('the clock and the subsolar point', () => {
  it('write the time now, and where the Sun is overhead', () => {
    expect(liveText(`${liveClock()} UTC`, NOW)).toBe('12:11 UTC');
    expect(liveText(liveSubsolar(), NOW)).toMatch(/^\d+\.\d°[NS], \d+\.\d°[EW]$/);
    expect(liveHtml(`${liveClock()} · ${liveSubsolar()}`))
      .toBe('<time data-clock></time> · <span data-subsolar></span>');
  });
});

const meta = (time: string): PartMeta => ({
  tier: 'measured', source: 'NOAA SWPC · test', source_url: 'https://example.invalid/feed.json',
  model: null, data_time: time, latency_s: 60, stale_after_s: 1200,
});

describe('the report', () => {
  const env = {
    fetched_at: NOW.toISOString(), data: {
      solar_wind: { time: '2026-10-26T11:58:00Z', bz_gsm: -1.6, by_gsm: 1, bx_gsm: 1, bt: 5.6,
        speed: 330, density: 4.6, temperature: 90_000, spacecraft: 'SOLAR1' },
      alerts: [],
    },
    parts: { solar_wind: meta('2026-10-26T11:58:00Z'), alerts: meta('2026-10-26T12:00:00Z') },
  } as unknown as NowEnvelope;
  const scene = {
    mode: 'globe', view: 'deck', reducedMotion: false, shield: false,
    fieldLines: { lines: 0, points: 0 }, aurora: false,
  } as never;

  it('holds its live form still while its words age', () => {
    const a = buildReportLines(env, scene, NOW).map((l) => l.live);
    const b = buildReportLines(env, scene, LATER).map((l) => l.live);
    // The wind goes stale between the two, which is a real change; leave it out.
    const scenes = (ls: string[]) => ls.filter((l) => l.startsWith('Scene:'));
    expect(scenes(a)).toEqual(scenes(b));
    expect(scenes(a).join()).not.toMatch(/\d\d:\d\d UTC/);
  });

  it('writes the same words in both forms', () => {
    for (const l of buildReportLines(env, scene, NOW)) expect(liveText(l.live, NOW)).toBe(l.text);
    const wind = buildReportLines(env, scene, NOW).find((l) => l.section === 'wind')!;
    expect(wind.text).toContain('timestamped 11:58 UTC, 13 min old.');
  });
});

describe('the sentence and the detail', () => {
  const state = {
    now: {
      fetched_at: NOW.toISOString(),
      data: { solar_wind: { time: '2026-10-26T11:58:00Z', bz_gsm: -1.6, speed: 330 } },
      parts: { solar_wind: meta('2026-10-26T11:58:00Z') },
    },
    lanes: { snapshot: false, aurora: false, regions: false, cmes: false, spacecraft: false },
    laneErrors: { aurora: null, regions: null, cmes: null, spacecraft: null },
    aurora: null, lastError: null, nextAttempt: null,
  } as unknown as StoreState;

  it('writes the same HTML for a stale sentence at any later time', () => {
    const at = (t: Date) => stateSentence(state, t, liveAge);
    expect(at(LATER)).toBe(at(new Date(LATER.getTime() + 3600e3)));
    expect(liveText(at(LATER), LATER)).toContain('(3.5 h old)');
    expect(sentenceAsOf(state, LATER, liveAge)?.text).toBe(`as of 11:58 UTC · stale · ${liveAge('2026-10-26T11:58:00Z')}`);
  });

  it('gives the detail its age as a span, and the tile its words', () => {
    expect(stalenessOf(meta('2026-10-26T11:58:00Z'), NOW, liveAge).label)
      .toBe(`11:58 UTC · ${liveAge('2026-10-26T11:58:00Z')} old`);
    expect(stalenessOf(meta('2026-10-26T11:58:00Z'), NOW).label).toBe('11:58 UTC · 13 min old');
  });
});

/**
 * What the panel compares: the HTML it would write. Forty seconds on, with
 * nothing new from the feed, it must be the same string, or every tick is a
 * rebuild under the reader again. A raw age or clock time written into any of
 * these is what this catches.
 */
describe('the panel between ticks', () => {
  const env = {
    fetched_at: NOW.toISOString(), data: {
      solar_wind: { time: '2026-10-26T11:58:00Z', bz_gsm: -1.6, by_gsm: 1, bx_gsm: 1, bt: 5.6,
        speed: 330, density: 4.6, temperature: 90_000, spacecraft: 'SOLAR1' },
      alerts: [],
    },
    parts: { solar_wind: meta('2026-10-26T11:58:00Z'), alerts: meta('2026-10-26T12:00:00Z') },
  } as unknown as NowEnvelope;
  const state = {
    now: env, series: null, kpSeries: null, xraySeries: null, protonSeries: null,
    electronSeries: null, geosyncSeries: null, dstSeries: null,
    aurora: null, regions: null, spacecraft: null, cmes: [],
    lastAttempt: NOW.toISOString(), lastError: null, loading: false,
    lanes: { snapshot: false, aurora: false, regions: false, cmes: false, spacecraft: false },
    laneErrors: { aurora: null, regions: null, cmes: null, spacecraft: null },
    nextAttempt: null,
  } as unknown as StoreState;
  const scene = {
    mode: 'globe', view: 'deck', reducedMotion: false, shield: true,
    fieldLines: { lines: 0, points: 0 }, aurora: true, cmes: { shown: true, count: 0 },
  } as never;
  const TICK = new Date(NOW.getTime() + 40_000);

  it('writes the same report, with its ages and clock left to the live spans', () => {
    const html = renderReport(state, scene, NOW);
    expect(renderReport(state, scene, TICK)).toBe(html);
    expect(html).toContain('<time data-age="2026-10-26T11:58:00.000Z"></time>');
    expect(html).toContain('<time data-clock></time>');
    expect(html).not.toMatch(/\d+ min old/);
  });

  it('writes the same detail for a reading', () => {
    expect(renderDetail('speed', state, TICK)).toBe(renderDetail('speed', state, NOW));
  });
});
