/**
 * NOAA's four kinds of notice.
 *
 * A WATCH says a thing may happen, a WARNING says it is expected, an ALERT says
 * it is happening now, and a SUMMARY says it has finished. Flattening them into
 * one list ordered by clock throws away the only ordering that matters when
 * several are outstanding at once — and puts a notice about something already
 * over above one about something in progress, purely because it was issued
 * later.
 */

import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { parseAlerts } from '../src/data/swpc.js';
import { inForce, splitNotices, whenUTC } from '../src/hud/format.js';
import { noticeTicker } from '../src/hud/hud.js';
import { buildSituationReport } from '../src/hud/situation-report.js';
import { buildBriefing } from '../src/hud/briefing.js';
import type { NowEnvelope, PartMeta } from '../src/data/source.js';
import type { StoreState } from '../src/data/store.js';

const row = (issue: string, headline: string, product = 'K04A') => ({
  product_id: product,
  issue_datetime: issue,
  message: `Space Weather Message Code: ${product}\r\n\r\n${headline}\r\nValid From: ...`,
});

describe('parseAlerts levels', () => {
  it('reads the product type out of the headline', () => {
    const out = parseAlerts([
      row('2026-09-07 11:08:00', 'ALERT: Geomagnetic K-index of 4'),
      row('2026-09-07 10:00:00', 'WARNING: Geomagnetic K-index of 4 expected'),
      row('2026-09-07 09:00:00', 'WATCH: Geomagnetic Storm Category G1 Predicted'),
      row('2026-09-07 08:00:00', 'SUMMARY: Geomagnetic Sudden Impulse'),
    ]);
    expect(out.map((a) => a.level)).toEqual(['alert', 'warning', 'watch', 'summary']);
  });

  it('treats an extended warning as a warning and a cancellation as a cancellation', () => {
    const out = parseAlerts([
      row('2026-09-07 11:00:00', 'EXTENDED WARNING: Geomagnetic K-index of 4 expected'),
      row('2026-09-07 10:00:00', 'CANCEL WARNING: Geomagnetic K-index of 4 expected'),
    ]);
    expect(out.map((a) => a.level)).toEqual(['warning', 'cancel']);
  });

  it('strips the prefix from the text, since the level is shown separately', () => {
    const [a] = parseAlerts([row('2026-09-07 11:08:00', 'ALERT: Geomagnetic K-index of 4')]);
    expect(a!.text).toBe('Geomagnetic K-index of 4');
    // The full headline survives for anywhere that wants it verbatim.
    expect(a!.headline).toBe('ALERT: Geomagnetic K-index of 4');
  });

  it('falls back to "other" rather than guessing at an unknown product', () => {
    const [a] = parseAlerts([row('2026-09-07 11:08:00', 'Some unrecognised header line')]);
    expect(a!.level).toBe('other');
    expect(a!.text).toBe('Some unrecognised header line');
  });

  it('keeps the newest first within the feed, as before', () => {
    const out = parseAlerts([
      row('2026-09-07 08:00:00', 'ALERT: older'),
      row('2026-09-07 11:00:00', 'ALERT: newer'),
    ]);
    expect(out[0]!.text).toBe('newer');
  });

  it('drops records with no issue time rather than dating them now', () => {
    expect(parseAlerts([{ product_id: 'X', message: 'ALERT: no time' }])).toEqual([]);
  });
});

/**
 * When a notice is current.
 *
 * A notice may say "now" or "expected" only inside NOAA's own validity. The
 * fixture is the real feed as it stood at 12:11 UTC on 26 Oct 2026, when the
 * header read "NOW Geomagnetic K-index of 4 19:55" — an alert for a
 * three-hour period that had closed on 23 Oct — while the one notice actually
 * current, a CONTINUED ALERT for 2 MeV electrons, was filed as a mere notice.
 * Add a fixture here whenever NOAA's wording changes.
 */
const FEED: unknown = JSON.parse(
  readFileSync(new URL('./fixtures/alerts-2026-10-26.json', import.meta.url), 'utf8'),
);
const NOW = new Date('2026-10-26T12:11:00Z');
const bySerial = (serial: string) => parseAlerts(FEED).find((a) => a.serial === serial);

describe('NOAA validity, read from the messages themselves', () => {
  it('files a CONTINUED ALERT as an alert', () => {
    const a = bySerial('3758')!;
    expect(a.level).toBe('alert');
    expect(a.text).toBe('Electron 2MeV Integral Flux exceeded 1,000pfu');
    expect(a.beganAt).toBe('2026-10-23T11:40:00.000Z');
  });

  it('collapses a chain of continuations to its newest message', () => {
    const serials = parseAlerts(FEED).map((a) => a.serial);
    expect(serials).toContain('3758');
    for (const old of ['3755', '3756', '3757']) expect(serials).not.toContain(old);
    expect(bySerial('3758')!.supersedes).toBe('3757');
  });

  it('collapses extensions and cancellations the same way', () => {
    const serials = parseAlerts(FEED, 100).map((a) => a.serial);
    // 5442 extends 5441 extends 5440 extends 5439 extends 5438.
    expect(serials).toContain('5442');
    for (const old of ['5438', '5439', '5440', '5441']) expect(serials).not.toContain(old);
    // 286 cancels the G2 watch 285.
    expect(serials).toContain('286');
    expect(serials).not.toContain('285');
  });

  it('ends a K-index alert with its synoptic period', () => {
    expect(bySerial('2694')!.validUntil).toBe('2026-10-23T21:00:00.000Z');
  });

  it('places a 2100–2400 period on the day the threshold was reached, not the day after', () => {
    // Threshold 21 Oct 23:59, issued 22 Oct 00:03: the period is 21 Oct's.
    const a = parseAlerts(FEED, 100).find((x) => x.serial === '2058')!;
    expect(a.validFrom).toBe('2026-10-21T21:00:00.000Z');
    expect(a.validUntil).toBe('2026-10-22T00:00:00.000Z');
  });

  it('ends a warning at its Valid To, and an extended one at Now Valid Until', () => {
    expect(bySerial('5443')!.validUntil).toBe('2026-10-24T09:00:00.000Z');
    expect(bySerial('5442')!.validUntil).toBe('2026-10-23T03:00:00.000Z');
  });

  it('ends an alert at the summary of the same event', () => {
    // XM5A at 15:09 on 10 Oct; NOAA's XM5S summary of the flare at 15:27.
    const a = parseAlerts(FEED, 100).find((x) => x.serial === '543')!;
    expect(a.level).toBe('alert');
    expect(a.validUntil).toBe('2026-10-10T15:27:55.997Z');
  });

  it('ends a watch with the last day it names', () => {
    const w = bySerial('1132')!;
    expect(w.level).toBe('watch');
    expect(w.validUntil).toBe('2026-10-24T00:00:00.000Z');
  });

  it('calls only the electron alert current at 12:11 UTC on 26 Oct', () => {
    const current = parseAlerts(FEED).filter((a) => inForce(a, NOW)).map((a) => a.serial);
    expect(current).toEqual(['3758']);
  });

  it('keeps more than the old eight, after the chains collapse', () => {
    expect(parseAlerts(FEED)).toHaveLength(20);
  });

  it('holds a notice it cannot read in force for a day, and says so', () => {
    const [a] = parseAlerts([{
      product_id: 'ZZZZ',
      issue_datetime: '2026-10-26 10:11:00.000',
      message: 'Space Weather Message Code: ZZZZZZ\r\nSerial Number: 1\r\n'
        + 'Issue Time: 2026 Oct 26 1011 UTC\r\n\r\nADVISORY: a wording nobody has seen\r\n',
    }]);
    expect(a!.level).toBe('other');
    expect(a!.validityStated).toBe(false);
    expect(inForce(a!, NOW)).toBe(true);
  });

  it('holds a warning with no window in force for a day, marked unstated', () => {
    const [a] = parseAlerts([row('2026-10-26 10:11:00', 'WARNING: Something expected', 'XXXW')]);
    expect(a!.level).toBe('warning');
    expect(a!.validityStated).toBe(false);
    expect(inForce(a!, NOW)).toBe(true);
  });
});

describe('whenUTC', () => {
  it('writes the date on any day but today', () => {
    expect(whenUTC('2026-10-26T05:17:00Z', NOW)).toBe('05:17 UTC');
    expect(whenUTC('2026-10-23T19:55:00Z', NOW)).toBe('23 Oct 19:55 UTC');
    expect(whenUTC('2026-10-05T19:55:00Z', NOW)).toBe('05 Oct 19:55 UTC');
  });
});

/* ---- the three states, end to end -------------------------------------- */

const meta = (over: Partial<PartMeta> = {}): PartMeta => ({
  tier: 'measured', source: 'NOAA SWPC · test', source_url: 'https://example.invalid/feed.json',
  model: null, data_time: null, latency_s: null, stale_after_s: 1200, ...over,
});
const PARTS = ['solar_wind', 'kp', 'xray', 'scales', 'alerts', 'magnetopause', 'particles',
  'geosync', 'propagated', 'dst'];

/** Every feed failed, as with every outside host blocked. */
function offline(): NowEnvelope {
  return {
    source: 'NOAA SWPC', source_url: 'https://example.invalid', tier: 'mixed', model: null,
    fetched_at: NOW.toISOString(), data_time: null, latency_s: null, stale_after_s: 1200, units: {},
    data: {
      solar_wind: null, kp: null, xray: null, scales: null, alerts: [], magnetopause: null,
      geosync: null, particles: null, propagated: null, dst: null,
    },
    parts: Object.fromEntries(PARTS.map((k) => [k, meta({ error: 'Failed to fetch' })])),
  } as unknown as NowEnvelope;
}

/** The fixture feed, read successfully at NOW. */
function live(alerts = parseAlerts(FEED)): NowEnvelope {
  const env = offline();
  env.data.alerts = alerts;
  env.parts.alerts = meta({ data_time: alerts[0]?.issued ?? null, stale_after_s: 7 * 86400 });
  return env;
}

const store = (env: NowEnvelope): StoreState => ({
  now: env, lanes: { snapshot: false, aurora: false, regions: false, cmes: false, spacecraft: false },
  lastError: null, nextAttempt: '2026-10-26T12:12:00.000Z', laneErrors: {},
  aurora: null, cmes: [], spacecraft: null,
}) as unknown as StoreState;

const scene = {
  mode: 'globe', view: 'deck', reducedMotion: false, shield: true,
  fieldLines: { lines: 0, points: 0 }, aurora: true,
} as never;

const lanes = { snapshot: false, aurora: false, cmes: false, nextAttempt: '2026-10-26T12:12:00.000Z' };

describe('a failed read is never an all-clear', () => {
  const env = offline();
  const ticker = noticeTicker(store(env), NOW);
  const report = buildSituationReport(env, scene, NOW, null, [], [], lanes).join('\n');
  const briefing = buildBriefing({
    state: store(env), narration: [report], checks: null, forecast: null, now: NOW,
  });

  it('says nothing that reads as quiet, anywhere', () => {
    for (const text of [ticker.items, report, briefing]) {
      expect(text).not.toContain('No watches');
      expect(text).not.toContain('No NOAA alerts');
      expect(text).not.toContain('outstanding');
      expect(text).not.toContain('No NOAA notice');
    }
  });

  it('says unavailable, with the retry time where the ticker has room for it', () => {
    expect(ticker.top).toBeNull();
    expect(ticker.items).toContain('NOAA notices unavailable — offline or blocked; retrying 12:12 UTC');
    expect(report).toContain('NOAA notices: unavailable (offline or blocked).');
    expect(briefing).toContain('NOAA notices: unavailable (offline or blocked).');
  });
});

describe('a successful read', () => {
  it('heads with the one notice in force, and dates everything else', () => {
    const t = noticeTicker(store(live()), NOW);
    expect(t.top?.serial).toBe('3758');
    expect(t.items).toContain('Electron 2MeV Integral Flux exceeded 1,000pfu');
    expect(t.items).toContain('05:17 UTC');
    expect(t.items).not.toContain('K-index');
  });

  it('names what is in force and until when', () => {
    const report = buildSituationReport(live(), scene, NOW, null, [], [], lanes).join('\n');
    expect(report).toContain('NOAA notice in force: CONTINUED ALERT: Electron 2MeV Integral Flux '
      + 'exceeded 1,000pfu, issued 05:17 UTC and in force until 27 Oct 05:17 UTC');
    // Counted from issue times: 3758, 2694 and 5443 — not the length of the list.
    expect(report).toContain('3 notices in the last 72 h.');
  });

  it('states a fact, not reassurance, when nothing is in force', () => {
    const ended = parseAlerts(FEED).filter((a) => !inForce(a, NOW));
    const t = noticeTicker(store(live(ended)), NOW);
    expect(t.top).toBeNull();
    expect(t.items).toContain('No NOAA notice in force · checked 12:11 UTC · last: '
      + 'Geomagnetic K-index of 4 23 Oct 19:55 UTC');
  });

  it('lists each notice in the briefing with its state', () => {
    const md = buildBriefing({ state: store(live()), narration: [], checks: null, forecast: null, now: NOW });
    expect(md).toContain('- 05:17 UTC — CONTINUED ALERT: Electron 2MeV Integral Flux exceeded '
      + '1,000pfu — in force until 27 Oct 05:17 UTC');
    expect(md).toContain('- 23 Oct 19:55 UTC — ALERT: Geomagnetic K-index of 4 — ended 23 Oct 21:00 UTC');
  });

  it('orders the current ones by what NOAA means, then by time', () => {
    // The feed as it stood at 20:00 UTC on 23 Oct: two alerts, a warning and a
    // watch all in force at once.
    const at = new Date('2026-10-23T20:00:00Z');
    const then = (FEED as { issue_datetime: string }[])
      .filter((r) => Date.parse(`${r.issue_datetime.replace(' ', 'T')}Z`) <= at.getTime());
    const { current } = splitNotices(parseAlerts(then), at);
    expect(current.map((a) => a.serial)).toEqual(['2694', '3755', '5443', '1132']);
  });
});
