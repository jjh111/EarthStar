/**
 * The panel as something you can paste somewhere else.
 *
 * A screenshot of this instrument loses exactly what makes it worth trusting.
 * So these tests are almost entirely about what must survive the copy: the
 * observation time on every value, the evidence tier, the source URL, and a
 * stamp saying when the briefing itself was taken — because a briefing pasted
 * into a chat three hours later is a different claim from a live one and
 * nothing else in the message would say so.
 */

import { describe, expect, it } from 'vitest';
import { buildBriefing, briefingFilename } from '../src/hud/briefing.js';
import type { StoreState } from '../src/data/store.js';
import type { NowEnvelope, PartMeta } from '../src/data/source.js';

const NOW = new Date('2026-09-07T18:10:00Z');

const meta = (time: string, tier: PartMeta['tier'] = 'measured'): PartMeta => ({
  tier, source: 'NOAA SWPC · test', source_url: 'https://example.invalid/feed.json',
  model: null, data_time: time, latency_s: 60, stale_after_s: 1200,
});

const env = {
  source: 'NOAA SWPC', source_url: 'https://example.invalid', tier: 'mixed',
  model: null, fetched_at: NOW.toISOString(), data_time: '2026-09-07T18:03:00Z',
  latency_s: 60, stale_after_s: 1200, units: {},
  data: {
    solar_wind: {
      time: '2026-09-07T18:03:00Z', bz_gsm: -9.1, by_gsm: 1, bx_gsm: 1, bt: 9.9,
      speed: 486, density: 21, temperature: 90_000, spacecraft: 'SOLAR1',
    },
    kp: { time: '2026-09-07T18:01:00Z', estimated_kp: 3.33, kp: '3+' },
    xray: null, scales: null, alerts: [], magnetopause: null,
    geosync: null, particles: null, propagated: null, dst: null,
  },
  parts: {
    solar_wind: meta('2026-09-07T18:03:00Z'),
    kp: meta('2026-09-07T18:01:00Z'),
    xray: meta('2026-09-07T18:04:00Z'),
    scales: meta('2026-09-07T18:00:00Z', 'modeled'),
    alerts: meta('2026-09-07T12:00:00Z'),
    magnetopause: meta('2026-09-07T18:03:00Z', 'modeled'),
    particles: meta('2026-09-07T18:00:00Z'),
    geosync: meta('2026-09-07T18:05:00Z'),
    propagated: meta('2026-09-07T18:03:00Z', 'modeled'),
    dst: meta('2026-09-07T18:09:00Z', 'modeled'),
  },
} as unknown as NowEnvelope;

const state = { now: env, spacecraft: null, aurora: null, cmes: [] } as unknown as StoreState;

const build = (over: Partial<Parameters<typeof buildBriefing>[0]> = {}) => buildBriefing({
  state, narration: ['The wind is southward.'], checks: null, forecast: null,
  now: NOW, ...over,
});

describe('buildBriefing', () => {
  it('stamps when it was taken, so an old paste cannot pass as live', () => {
    expect(build()).toContain('2026-09-07 18:10 UTC');
  });

  it('carries an observation time for every value, not just the values', () => {
    const md = build();
    expect(md).toContain('18:03 UTC');
    expect(md).toContain('18:01 UTC');
    // And an age, because a timestamp alone still needs arithmetic to read.
    expect(md).toMatch(/\d+ min old|\ds old/);
  });

  it('names the evidence tier in words, not as a letter that needs a key', () => {
    const md = build();
    expect(md).toContain('measured');
    expect(md).toContain('modelled');
    expect(md).not.toMatch(/\|\s*E\s*\|/);
  });

  it('carries the source URL of every feed', () => {
    expect(build()).toContain('https://example.invalid/feed.json');
  });

  it('includes the narration as prose', () => {
    expect(build()).toContain('The wind is southward.');
  });

  it('reports checks with their verdicts, inconclusive ones included', () => {
    const md = build({
      checks: {
        rows: [
          { name: 'A', ours: '1', theirs: '1', ok: true, note: '' },
          { name: 'B', ours: '2', theirs: '3', ok: false, note: '' },
          { name: 'C', ours: '4', theirs: '4', ok: false, note: '', inconclusive: true },
        ],
        ranAt: NOW.toISOString(), passed: 1, inconclusive: 1,
      },
    });
    expect(md).toContain('1 of 2 cross-checks pass');
    expect(md).toContain("1 could not be settled on today's data");
    expect(md).toContain('**A** — pass');
    expect(md).toContain('**B** — DRIFT');
    expect(md).toContain('**C** — no signal');
  });

  it('says so plainly when nothing had loaded', () => {
    const md = buildBriefing({
      state: { now: null } as unknown as StoreState,
      narration: [], checks: null, forecast: null, now: NOW,
    });
    expect(md).toContain('No data had loaded');
    expect(md).not.toContain('| Quantity |');
  });

  it('omits the origin line when none was supplied, rather than inventing one', () => {
    expect(build()).not.toContain('Taken 2026-09-07 18:10 UTC from');
    expect(build({ origin: 'https://earthstar.space/viewer/' }))
      .toContain('from https://earthstar.space/viewer/');
  });
});

describe('briefingFilename', () => {
  it('sorts chronologically and says when', () => {
    // Dashes kept in the date: it sorts identically and reads far better.
    expect(briefingFilename(NOW)).toBe('space-weather-2026-09-07-1810.md');
  });
});
