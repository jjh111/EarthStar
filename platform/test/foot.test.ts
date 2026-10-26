/**
 * The margin's foot, and the Checks panel that used to widen the page.
 *
 * The foot is one row now: the status line beside the briefing buttons, and
 * the render-scale note a chip among them. That leaves the status a column
 * 104–270 px wide, so it carries a short form and puts the whole sentence in
 * its title. These tests hold the short forms to the four states the long ones
 * distinguish — live, mirror, all readings stale, failed — and the chip and
 * the Sources row to the renderer's own numbers. The checks are blocks whose
 * values may break anywhere, where three table rows of `nowrap` cells had
 * pushed a 388 px column to 584.
 */

import { describe, expect, it } from 'vitest';
import { renderScale, statusLine } from '../src/hud/hud.js';
import { renderChecks } from '../src/hud/margin.js';
import type { CheckResult } from '../src/data/checks.js';
import type { NowEnvelope, PartMeta } from '../src/data/source.js';
import type { StoreState } from '../src/data/store.js';
import type { FrameStats } from '../src/scene/viewer.js';

const NOW = new Date('2026-10-26T12:11:00Z');

const meta = (time: string | null, over: Partial<PartMeta> = {}): PartMeta => ({
  tier: 'measured', source: 'NOAA SWPC · test', source_url: 'https://example.invalid/feed.json',
  model: null, data_time: time, latency_s: 60, stale_after_s: 1200, ...over,
});

const PARTS = ['solar_wind', 'kp', 'xray', 'scales', 'alerts', 'magnetopause',
  'particles', 'geosync', 'propagated', 'dst'] as const;

/** Every part observed at `time`, fetched at 12:11. */
const env = (time: string | null, over: Partial<PartMeta> = {}): NowEnvelope => ({
  source: 'NOAA SWPC', source_url: 'https://example.invalid', tier: 'mixed', model: null,
  fetched_at: NOW.toISOString(), data_time: time, latency_s: 60, stale_after_s: 1200, units: {},
  data: {},
  parts: Object.fromEntries(PARTS.map((p) => [p, meta(time, over)])),
} as unknown as NowEnvelope);

const store = (over: Partial<StoreState> = {}): StoreState => ({
  now: env('2026-10-26T12:05:00Z'), series: null, kpSeries: null, xraySeries: null, protonSeries: null,
  electronSeries: null, geosyncSeries: null, dstSeries: null,
  aurora: null, regions: null, spacecraft: null, cmes: [],
  lastAttempt: NOW.toISOString(), lastError: null, loading: false,
  lanes: { snapshot: false, aurora: false, regions: false, cmes: false, spacecraft: false },
  laneErrors: { aurora: null, regions: null, cmes: null, spacecraft: null },
  nextAttempt: '2026-10-26T12:12:00Z',
  ...over,
} as unknown as StoreState);

describe('the status line: short in the foot, whole in the title', () => {
  it('live', () => {
    const s = statusLine(store(), NOW);
    expect(s).toEqual({
      text: 'Live · NOAA SWPC · 12:11 UTC',
      title: 'Live · NOAA SWPC · refreshed 12:11 UTC · DirectSource (stage A)',
      tone: null,
    });
  });

  it('the mirror, in amber, still saying NOAA is unreachable', () => {
    const s = statusLine(store({ now: env('2026-10-26T12:05:00Z', { mirrored: true }) }), NOW);
    expect(s.text).toBe('Mirror · NOAA unreachable · captured 12:11 UTC');
    expect(s.title).toContain("reading Earth Star's mirror (stage B), captured 12:11 UTC");
    expect(s.tone).toBe('mirror');
  });

  it('every reading stale: never plain "Live", and the newest age in both forms', () => {
    const s = statusLine(store({ now: env('2026-10-26T09:00:00Z') }), NOW);
    expect(s.text).toBe('Live fetch · newest reading 3.2 h old');
    expect(s.text.startsWith('Live ·')).toBe(false);
    expect(s.title).toBe('Live fetch · NOAA SWPC · refreshed 12:11 UTC · newest reading 3.2 h old');
    expect(s.tone).toBe('degraded');
  });

  it('a failed refresh and an unreachable NOAA keep their words, title and all', () => {
    const failed = statusLine(store({ lastError: 'offline or blocked' }), NOW);
    expect(failed.text).toBe('Last refresh failed (offline or blocked) at 12:11 UTC. Showing last good data, ageing.');
    expect(failed.title).toBe(failed.text);
    expect(failed.tone).toBe('error');

    const none = statusLine(store({ now: env(null) }), NOW);
    expect(none.text).toBe('NOAA SWPC unreachable — nothing has loaded yet. Retrying at 12:12 UTC.');
    expect(none.title).toBe(none.text);
    expect(none.tone).toBe('degraded');
  });

  it('before anything has arrived', () => {
    expect(statusLine(store({ now: null }), NOW).text).toBe('Fetching live data from NOAA SWPC…');
  });
});

describe('the render scale', () => {
  const stats = (pixelRatio: number, maxPixelRatio: number): FrameStats =>
    ({ fps: 12.4, frames: 100, pixelRatio, maxPixelRatio, megapixels: 0.4 } as unknown as FrameStats);

  it('is a chip of the fraction drawn, with the sentence beside it', () => {
    const r = renderScale(stats(0.75, 1));
    expect(r.reduced).toBe(true);
    expect(r.chip).toBe('0.75×');
    expect(r.sentence).toBe(
      'Rendering at 0.75x rather than 1x (0.4 MP) to hold the frame rate — 12 fps. Geometry and data are unaffected.');
  });

  it('reads the fraction against the device, not against 1', () => {
    expect(renderScale(stats(1.5, 2)).chip).toBe('0.75×');
  });

  it('says full resolution when it is', () => {
    const r = renderScale(stats(2, 2));
    expect(r.reduced).toBe(false);
    expect(r.sentence).toMatch(/^Full resolution, 2x \(0\.4 MP\) — 12 fps\./);
  });
});

describe('the checks fit their column', () => {
  const checks: CheckResult = {
    rows: [
      { name: 'IMF Bz (GSM), nT', ours: '-2.13', theirs: '-2', ok: true, note: 'both at 11:55 UTC · tol ±0.55' },
      { name: 'Shield model vs GOES at 6.6 Rₑ', ours: 'standoff 11.7 Rₑ → inside', theirs: '108 nT → inside',
        ok: false, note: 'a long note that has to wrap in the column' },
      { name: 'Kp', ours: '0.00', theirs: 'minute not in feed', ok: false, inconclusive: true, note: 'no minute' },
    ],
    ranAt: '2026-10-26T12:11:00Z', passed: 1, inconclusive: 1,
  } as CheckResult;
  const html = renderChecks(checks, false);

  it('renders one block per check, and no table', () => {
    expect(html.match(/<div class="check">/g)).toHaveLength(3);
    expect(html).not.toContain('<table');
  });

  it('labels our value and NOAA’s on lines of their own', () => {
    expect(html).toContain('<dt>ours</dt><dd>standoff 11.7 Rₑ → inside</dd>');
    expect(html).toContain('<dt>NOAA</dt><dd>108 nT → inside</dd>');
  });

  it('keeps the verdict words and their colours', () => {
    expect(html).toContain('<span class="verdict-ok">pass</span>');
    expect(html).toContain('<span class="verdict-bad">DRIFT</span>');
    expect(html).toContain('<span class="verdict-none">no signal</span>');
  });

  it('keeps every note', () => {
    expect(html.match(/<p class="check-note">/g)).toHaveLength(3);
  });
});
