/**
 * The state sentence, in each state its readings can be in.
 *
 * The sentence sits above the report and reads as the page's summary, so it is
 * the one place a stale or failed reading could pass as current without the
 * rail beside it to contradict it. These tests hold it to the tiles: fresh is
 * the number, stale is the number with its age, a failure says "unavailable",
 * and a total outage is one sentence rather than six clauses of it. The
 * numbers are the ones the mirror carried at 12:11 UTC on 26 October.
 */

import { describe, expect, it } from 'vitest';
import {
  sentenceAsOf, snapshotOutage, stateSentence, stateSentenceText,
} from '../src/hud/state-sentence.js';
import { kpLabel } from '../src/hud/format.js';
import { INSTRUMENTS } from '../src/hud/instruments.js';
import type { StoreState } from '../src/data/store.js';
import type { NowEnvelope, PartMeta } from '../src/data/source.js';

const NOW = new Date('2026-10-26T12:11:00Z');
const LATER = new Date(NOW.getTime() + 3 * 3600e3);
const RETRY = '2026-10-26T12:12:00Z';

const meta = (time: string | null, over: Partial<PartMeta> = {}): PartMeta => ({
  tier: 'measured', source: 'NOAA SWPC · test', source_url: 'https://example.invalid/feed.json',
  model: null, data_time: time, latency_s: 60, stale_after_s: 1200, ...over,
});

const PARTS = ['solar_wind', 'kp', 'xray', 'scales', 'alerts', 'magnetopause',
  'particles', 'geosync', 'propagated', 'dst'] as const;

const env = (parts: Partial<Record<(typeof PARTS)[number], PartMeta>> = {}): NowEnvelope => ({
  source: 'NOAA SWPC', source_url: 'https://example.invalid', tier: 'mixed', model: null,
  fetched_at: NOW.toISOString(), data_time: '2026-10-26T11:58:00Z', latency_s: 60,
  stale_after_s: 1200, units: {},
  data: {
    solar_wind: { time: '2026-10-26T11:58:00Z', bz_gsm: -1.6, by_gsm: 1, bx_gsm: 1, bt: 5.6,
      speed: 330, density: 4.6, temperature: 90_000, spacecraft: 'SOLAR1' },
    kp: { time: '2026-10-26T12:01:00Z', estimated_kp: 0, kp: '0Z' },
    xray: { time: '2026-10-26T12:01:00Z', class: 'B3.4', flux_long: 3.4e-7 },
    scales: null, alerts: [], propagated: null, geosync: null, dst: null,
    magnetopause: { standoff_re: 11.7, alpha: 0.6, dyn_pressure_npa: 1.1, bow_shock_re: 14.5 },
    particles: { time: '2026-10-26T11:55:00Z', proton_10mev: 0.24, s_scale: 0, s_text: 'None',
      electron_2mev: 2224 },
  },
  parts: {
    solar_wind: meta('2026-10-26T11:58:00Z'),
    kp: meta('2026-10-26T12:01:00Z'),
    xray: meta('2026-10-26T12:01:00Z'),
    scales: meta('2026-10-26T12:04:00Z', { tier: 'modeled', stale_after_s: 6 * 3600 }),
    alerts: meta('2026-10-26T05:17:00Z', { stale_after_s: 7 * 86400 }),
    magnetopause: meta('2026-10-26T12:09:00Z', { tier: 'modeled' }),
    particles: meta('2026-10-26T11:55:00Z', { stale_after_s: 1800 }),
    geosync: meta('2026-10-26T12:02:00Z', { stale_after_s: 1800 }),
    propagated: meta('2026-10-26T12:09:00Z', { tier: 'modeled', stale_after_s: 1800 }),
    dst: meta('2026-10-26T12:11:00Z', { tier: 'modeled' }),
    ...parts,
  },
} as unknown as NowEnvelope);

const IDLE = { snapshot: false, aurora: false, regions: false, cmes: false, spacecraft: false };

const store = (over: Partial<StoreState> = {}): StoreState => ({
  now: env(), series: null, kpSeries: null, xraySeries: null, protonSeries: null,
  electronSeries: null, geosyncSeries: null, dstSeries: null,
  aurora: {
    source: 'NOAA SWPC · OVATION', source_url: 'https://example.invalid/ovation.json', tier: 'modeled',
    model: { name: 'OVATION Prime' }, fetched_at: NOW.toISOString(), data_time: '2026-10-26T11:52:00Z',
    latency_s: 60, stale_after_s: 3600, units: {},
    data: { observation_time: '2026-10-26T11:52:00Z', forecast_time: '2026-10-26T13:16:00Z', max_probability: 29 },
  },
  regions: null, spacecraft: null, cmes: [],
  lastAttempt: NOW.toISOString(), lastError: null, loading: false,
  lanes: IDLE, laneErrors: { aurora: null, regions: null, cmes: null, spacecraft: null },
  nextAttempt: RETRY,
  ...over,
} as unknown as StoreState);

/** What the sentence reads as, with the markup and the sparklines taken out. */
const words = (html: string): string => html
  .replace(/<svg[\s\S]*?<\/svg>/g, '').replace(/<[^>]+>/g, '')
  .replace(/&mdash;/g, '—').replace(/\s+/g, ' ').trim();

/** Every part failed, nothing mirrored, nothing ever arrived. */
const outage = (): StoreState => store({
  now: env(Object.fromEntries(PARTS.map((p) => [p, meta(null, { error: 'TypeError: Failed to fetch' })]))),
  aurora: null, laneErrors: { aurora: 'TypeError: Failed to fetch', regions: null, cmes: null, spacecraft: null },
});

describe('the state sentence, fresh', () => {
  const html = stateSentence(store(), NOW);

  it('writes a reading with a real space before its unit, and the field as a clause of the wind', () => {
    expect(words(html)).toContain('330 km/s; field southward −1.6 nT — field opens, energy enters.');
  });

  it('uses the minus sign, not a hyphen', () => {
    expect(words(html)).toContain('−1.6 nT');
    expect(words(html)).not.toMatch(/-\d/);
  });

  it('writes Kp to one decimal, as the tile and the splash do', () => {
    expect(words(html)).toContain('ground quiet 0.0 Kp.');
    expect(words(html)).not.toContain('0.00');
  });

  it('claims no age and no failure', () => {
    expect(html).not.toContain('is-stale');
    expect(words(html)).not.toMatch(/\bold\b|unavailable|no data/);
  });

  it('keeps each glyph with its word and each number with its unit', () => {
    expect(html).toContain('<span class="clause-head">');
    expect(html).toMatch(/<span class="reading"><b class="sentence-num">330<\/b> <span class="sentence-unit">km\/s<\/span><\/span>/);
  });

  it('dates itself from the parts it reads', () => {
    expect(sentenceAsOf(store(), NOW)).toEqual({ text: 'as of 11:52–12:09 UTC', stale: false });
  });
});

describe('the state sentence, three hours later', () => {
  const html = stateSentence(store(), LATER);

  it('marks every stale number and says how old it is', () => {
    expect((html.match(/sentence-num is-stale/g) ?? []).length).toBeGreaterThanOrEqual(6);
    expect(words(html)).toContain('−1.6 nT (3.2 h old)');
    expect(words(html)).toContain('29% (3.3 h old)');
  });

  it('says the age once per feed, not after both of its readings', () => {
    expect(words(html)).toContain('330 km/s; field southward');
    expect(words(html)).toContain('radiation S0 0.24 pfu (3.3 h old)');
  });

  it('says it in words for a screen reader too', () => {
    expect(stateSentenceText(store(), LATER)).toContain('330 kilometres per second (stale, 3.2 h old)');
  });

  it('turns its date amber and gives the oldest age', () => {
    expect(sentenceAsOf(store(), LATER)).toEqual({ text: 'as of 11:52–12:09 UTC · stale · 3.3 h', stale: true });
  });
});

describe('the state sentence with one feed failed', () => {
  const s = store({ now: env({ kp: meta(null, { error: 'HTTP 503' }) }) });
  const html = stateSentence(s, NOW);

  it('says "unavailable", not "no data", and leaves the rest as they are', () => {
    expect(words(html)).toContain('ground unavailable.');
    expect(words(html)).not.toContain('no data');
    expect(words(html)).toContain('330 km/s; field southward');
    expect(html).toContain('sentence-missing is-error');
    expect(stateSentenceText(s, NOW)).toContain('planetary K index unavailable');
  });

  it('is not an outage', () => {
    expect(snapshotOutage(s)).toBe(false);
  });

  it('keeps "no data" for a feed that answered without the reading', () => {
    const empty = store({ now: { ...env(), data: { ...env().data, kp: null } } as NowEnvelope });
    expect(words(stateSentence(empty, NOW))).toContain('ground no data.');
  });
});

describe('the state sentence in a total outage', () => {
  const sentence = 'NOAA SWPC unreachable — no readings yet; retrying 12:12 UTC. '
    + 'Positions and the field model are computed locally and still shown.';

  it('is one sentence, not six failures', () => {
    expect(snapshotOutage(outage())).toBe(true);
    expect(stateSentence(outage(), NOW)).toBe(sentence);
    expect(stateSentenceText(outage(), NOW)).toBe(sentence);
    expect(sentenceAsOf(outage(), NOW)).toBeNull();
  });

  it('is the same when the snapshot fetch itself threw', () => {
    const threw = store({ now: null, lastError: 'TypeError: Failed to fetch', aurora: null });
    expect(snapshotOutage(threw)).toBe(true);
    expect(stateSentence(threw, NOW)).toBe(sentence);
  });

  it('is not claimed while the mirror is serving', () => {
    const mirrored = store({ now: env(Object.fromEntries(PARTS.map((p) =>
      [p, meta('2026-10-26T11:58:00Z', { mirrored: true })]))) });
    expect(snapshotOutage(mirrored)).toBe(false);
  });

  it('claims nothing at all while the first fetch is in flight', () => {
    const cold = store({ now: null, aurora: null, lanes: { ...IDLE, snapshot: true, aurora: true } });
    expect(snapshotOutage(cold)).toBe(false);
    expect(words(stateSentence(cold, NOW))).not.toMatch(/unavailable|no data|unreachable/);
    expect(stateSentence(cold, NOW)).toContain('sentence-loading');
  });
});

describe('Kp, written as the splash writes it', () => {
  it('turns NOAA’s thirds into the label', () => {
    expect(kpLabel('3P')).toBe('3+');
    expect(kpLabel('3M')).toBe('3−');
    expect(kpLabel('3Z')).toBe('3');
    expect(kpLabel('0Z')).toBe('0');
  });

  it('passes anything else through, and nothing through as nothing', () => {
    expect(kpLabel('3+')).toBe('3+');
    expect(kpLabel(null)).toBeNull();
    expect(kpLabel(undefined)).toBeNull();
  });

  it('puts one decimal and NOAA’s label on the tile', () => {
    const kp = INSTRUMENTS.find((i) => i.id === 'kp')!;
    const d = env().data;
    expect(kp.value(d)).toBe('0.0');
    expect(kp.detail!(d)).toBe('NOAA Kp 0');
  });
});
