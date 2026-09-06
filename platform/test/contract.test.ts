/**
 * Contract conformance (plans/DATA_CONTRACT.md). Validates the envelope shape
 * and the charter's hard rules, using a stubbed fetch so the suite stays
 * deterministic and offline.
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import { DirectSource } from '../src/data/direct-source.js';
import { SWPC_URL } from '../src/data/swpc.js';
import { freshness, hhmmUTC, ageSeconds } from '../src/contract/types.js';
import type { Envelope } from '../src/contract/types.js';

const MAG = [{ time_tag: '2026-09-06T17:16:00', active: true, source: 'SOLAR1', bt: 6.89, bx_gsm: 4.36, by_gsm: -2.63, bz_gsm: -4.58 }];
const WIND = [{ time_tag: '2026-09-06T17:16:12', active: true, source: 'SOLAR1', proton_speed: 339.2, proton_density: 4.77, proton_temperature: 117080 }];
const KP = [{ time_tag: '2026-09-06T17:20:00', kp_index: 1, estimated_kp: 1.33, kp: '1P' }];
const XRAY = [
  { time_tag: '2026-09-06T17:18:00Z', satellite: 18, energy: '0.05-0.4nm', flux: 6.6e-9 },
  { time_tag: '2026-09-06T17:18:00Z', satellite: 18, energy: '0.1-0.8nm', flux: 3.7229e-7 },
];
const SCALES = { '0': { DateStamp: '2026-09-06', R: { Scale: '0', Text: 'none' }, S: { Scale: '0', Text: 'none' }, G: { Scale: '1', Text: 'minor' } } };
const ALERTS = [{ product_id: 'A20F', issue_datetime: '2026-09-06 12:12:15.890', message: 'x\r\n\r\nWATCH: G1 Predicted\r\n' }];

function stubFetch(overrides: Record<string, unknown | Error> = {}): void {
  vi.stubGlobal('fetch', vi.fn(async (url: string) => {
    const table: Record<string, unknown> = {
      [SWPC_URL.mag]: MAG, [SWPC_URL.wind]: WIND, [SWPC_URL.kp1m]: KP,
      [SWPC_URL.xrays6h]: XRAY, [SWPC_URL.scales]: SCALES, [SWPC_URL.alerts]: ALERTS,
      ...overrides,
    };
    const body = table[url];
    if (body instanceof Error) throw body;
    if (body === undefined) return { ok: false, status: 404, json: async () => null };
    return { ok: true, status: 200, json: async () => body };
  }));
}

afterEach(() => vi.unstubAllGlobals());

const ISO_Z = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/;

function expectValidEnvelope(env: Envelope<unknown>): void {
  expect(typeof env.source).toBe('string');
  expect(env.source_url).toMatch(/^https:\/\//);
  expect(['measured', 'modeled', 'ambient', 'mixed']).toContain(env.tier);
  expect(env.fetched_at).toMatch(ISO_Z);
  expect(env.data_time).toMatch(ISO_Z);
  expect(typeof env.latency_s).toBe('number');
  expect(typeof env.stale_after_s).toBe('number');
  expect(typeof env.units).toBe('object');
  // Contract §1: modeled envelopes must name their model.
  if (env.tier === 'modeled') expect(env.model?.name).toBeTruthy();
}

describe('envelope conformance', () => {
  it('/now matches the contract envelope', async () => {
    stubFetch();
    const env = await new DirectSource().fetchNow();
    expectValidEnvelope(env);
    expect(env.tier).toBe('mixed');
    expect(env.units['bz_gsm']).toBe('nT');
    expect(env.units['speed']).toBe('km/s');
    // Guards against a stub/URL mismatch quietly nulling a whole feed.
    expect(env.data.xray?.class).toBe('B3.7');
    expect(env.data.kp?.estimated_kp).toBe(1.33);
    expect(env.data.scales?.G.scale).toBe(1);
  });

  it('every part carries tier, source, timestamp and staleness', async () => {
    stubFetch();
    const env = await new DirectSource().fetchNow();
    for (const [key, part] of Object.entries(env.parts)) {
      expect(['measured', 'modeled', 'ambient', 'mixed'], key).toContain(part.tier);
      expect(part.source, key).toBeTruthy();
      expect(part.source_url, key).toMatch(/^https:\/\//);
      expect(typeof part.stale_after_s, key).toBe('number');
      if (part.tier === 'modeled' && part.data_time) expect(part.model?.name, key).toBeTruthy();
    }
  });

  it('envelope data_time is the OLDEST contributing timestamp', async () => {
    stubFetch();
    const env = await new DirectSource().fetchNow();
    const partTimes = Object.values(env.parts)
      .map((p) => p.data_time).filter((t): t is string => !!t).map((t) => Date.parse(t));
    expect(Date.parse(env.data_time)).toBe(Math.min(...partTimes));
  });

  it('solar-wind series is a valid measured envelope, oldest → newest', async () => {
    stubFetch();
    const env = await new DirectSource().fetchSolarWindSeries();
    expectValidEnvelope(env);
    expect(env.tier).toBe('measured');
    const ts = env.data.time.map((t) => Date.parse(t));
    expect([...ts].sort((a, b) => a - b)).toEqual(ts);
  });
});

describe('the accuracy charter, enforced', () => {
  it('a failed feed yields null — never a fabricated value', async () => {
    stubFetch({ [SWPC_URL.kp1m]: new Error('network down') });
    const env = await new DirectSource().fetchNow();
    expect(env.data.kp).toBeNull();
    expect(env.parts.kp.error).toBeTruthy();
    expect(env.parts.kp.data_time).toBeNull();
    // ...and the other feeds are unaffected.
    expect(env.data.solar_wind?.bz_gsm).toBe(-4.58);
  });

  it('a modeled value disappears when its measured inputs do', async () => {
    stubFetch({ [SWPC_URL.wind]: new Error('down') });
    const env = await new DirectSource().fetchNow();
    // No density/speed → no dynamic pressure → no magnetopause. Not a default.
    expect(env.data.magnetopause).toBeNull();
  });

  it('the magnetopause part cites Shue et al. 1998 with a DOI', async () => {
    stubFetch();
    const env = await new DirectSource().fetchNow();
    expect(env.parts.magnetopause.tier).toBe('modeled');
    expect(env.parts.magnetopause.model?.name).toBe('Shue et al. 1998');
    expect(env.parts.magnetopause.model?.ref).toContain('10.1029/98JA01103');
  });

  it('an all-feeds-down fetch still returns a well-formed envelope', async () => {
    stubFetch({
      [SWPC_URL.mag]: new Error('x'), [SWPC_URL.wind]: new Error('x'),
      [SWPC_URL.kp1m]: new Error('x'), [SWPC_URL.xrays6h]: new Error('x'),
      [SWPC_URL.scales]: new Error('x'), [SWPC_URL.alerts]: new Error('x'),
    });
    const env = await new DirectSource().fetchNow();
    expectValidEnvelope(env);
    expect(env.data.solar_wind).toBeNull();
    expect(env.data.alerts).toEqual([]);
  });
});

describe('staleness', () => {
  const env = (dataTime: string, staleAfter: number): Envelope<number> => ({
    source: 's', source_url: 'https://x/', tier: 'measured', model: null,
    fetched_at: '2026-09-06T18:00:00Z', data_time: dataTime,
    latency_s: 0, stale_after_s: staleAfter, units: {}, data: 1,
  });

  it('flags data older than its threshold', () => {
    const now = new Date('2026-09-06T18:00:00Z');
    expect(freshness(env('2026-09-06T17:55:00Z', 900), now)).toBe('fresh');
    expect(freshness(env('2026-09-06T17:40:00Z', 900), now)).toBe('stale');
  });

  it('reports no-data for an unparseable timestamp instead of guessing', () => {
    expect(freshness(env('garbage', 900))).toBe('no-data');
    expect(freshness(null)).toBe('no-data');
  });

  it('computes age from data_time, not fetched_at', () => {
    const now = new Date('2026-09-06T18:10:00Z');
    expect(ageSeconds(env('2026-09-06T18:00:00Z', 900), now)).toBe(600);
  });

  it('formats HH:MM in UTC regardless of the host timezone', () => {
    expect(hhmmUTC('2026-09-06T07:05:00Z')).toBe('07:05');
    expect(hhmmUTC(null)).toBe('--:--');
    expect(hhmmUTC('nonsense')).toBe('--:--');
  });
});
