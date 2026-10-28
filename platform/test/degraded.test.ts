/**
 * The page in its worse states, said as they are.
 *
 * Each of these was found on screen during the polish round's verification:
 * the mirror two days old calling its copy "checked" at the page's own time,
 * a failed CME catalogue leaving the Sun section looking like a quiet week, a
 * cold start's empty trace described as "neither the wind nor Kp reached us"
 * while both had, an unreachable USGS read as "markers hidden", and an
 * offline briefing writing "no data Kp". Every one is a sentence that reads
 * fine and is false; these hold the true one.
 */

import { afterAll, describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { parseAlerts } from '../src/data/swpc.js';
import { noticeTicker, statusLine } from '../src/hud/hud.js';
import { buildReportLines, buildSituationReport } from '../src/hud/situation-report.js';
import { buildBriefing } from '../src/hud/briefing.js';
import { renderChecks, renderDetail, renderDrawnIndex, renderNotices, renderSources, reportLanes } from '../src/hud/margin.js';
import { fetchCmes, parseCmes } from '../src/data/cme.js';
import { INSTRUMENTS } from '../src/hud/instruments.js';
import { sci } from '../src/hud/format.js';
import type { CheckResult } from '../src/data/checks.js';
import type { NowEnvelope, PartMeta } from '../src/data/source.js';
import type { StoreState } from '../src/data/store.js';

const FEED = JSON.parse(readFileSync(new URL('./fixtures/alerts-2026-10-26.json', import.meta.url), 'utf8'));

/** The mirror's manifest time, and the page's clock two days after it. */
const COPY = '2026-10-27T13:27:28.801Z';
const NOW = new Date(Date.parse(COPY) + 48 * 3.6e6);

const meta = (over: Partial<PartMeta> = {}): PartMeta => ({
  tier: 'measured', source: 'NOAA SWPC · test', source_url: 'https://services.swpc.noaa.gov/products/x.json',
  model: null, data_time: null, latency_s: null, stale_after_s: 1200, ...over,
});
const PARTS = ['solar_wind', 'kp', 'xray', 'scales', 'alerts', 'magnetopause', 'particles',
  'geosync', 'propagated', 'dst'];

function envelope(parts: Record<string, PartMeta>, fetchedAt = NOW): NowEnvelope {
  return {
    source: 'NOAA SWPC', source_url: 'https://example.invalid', tier: 'mixed', model: null,
    fetched_at: fetchedAt.toISOString(), data_time: null, latency_s: null, stale_after_s: 1200, units: {},
    data: {
      solar_wind: null, kp: null, xray: null, scales: null, alerts: [], magnetopause: null,
      geosync: null, particles: null, propagated: null, dst: null,
    },
    parts,
  } as unknown as NowEnvelope;
}

/** Everything read from the mirror, the newest reading a few minutes before the copy. */
function onMirror(): NowEnvelope {
  const old = '2026-10-27T13:20:00.000Z';
  const env = envelope(Object.fromEntries(PARTS.map((k) => [k, meta({
    data_time: old, mirrored: true, mirrored_at: COPY,
    ...(k === 'alerts' ? { stale_after_s: 7 * 86400 } : {}),
  })])));
  // Nothing in force on the copy: the alerts the copy holds all ended before it.
  env.data.alerts = parseAlerts(FEED).filter((a) => a.validUntil && Date.parse(a.validUntil) < Date.parse(COPY));
  return env;
}

const store = (env: NowEnvelope | null, over: Partial<StoreState> = {}): StoreState => ({
  now: env, lanes: { snapshot: false, aurora: false, regions: false, cmes: false, spacecraft: false },
  lastError: null, nextAttempt: new Date(NOW.getTime() + 60_000).toISOString(),
  nextSlowAttempt: new Date(NOW.getTime() + 300_000).toISOString(),
  laneErrors: { aurora: null, regions: null, cmes: null, spacecraft: null },
  aurora: null, cmes: [], spacecraft: null, regions: null, series: null,
  ...over,
}) as unknown as StoreState;

const scene = (over: Record<string, unknown> = {}) => ({
  mode: 'globe', view: 'deck', reducedMotion: false, shield: true,
  fieldLines: { lines: 0, points: 0 }, aurora: true, ...over,
}) as never;

describe('two days on Earth Star’s mirror', () => {
  const env = onMirror();
  const s = store(env);
  const report = buildSituationReport(env, scene(), NOW, null, [], [], { snapshot: false, aurora: false, cmes: false }).join('\n');
  const briefing = buildBriefing({ state: s, narration: [report], checks: null, forecast: null, now: NOW });
  const ticker = noticeTicker(s, NOW);
  const status = statusLine(s, NOW);

  it('dates the copy from the manifest, never from the page’s own fetch', () => {
    expect(status.text).toBe('Mirror · NOAA unreachable · copy taken 27 Oct 13:27 UTC (48.0 h ago)');
    expect(status.title).toContain('copy taken 27 Oct 13:27 UTC');
  });

  it('never says "checked" about a feed NOAA did not answer', () => {
    for (const text of [ticker.items, report, briefing, status.text, status.title]) {
      expect(text).not.toContain('checked');
    }
  });

  it('says "none in force" of Earth Star’s copy, in amber, with the copy’s time', () => {
    expect(ticker.items).toContain('No notice in force in Earth Star&#39;s copy of NOAA&#39;s feed · copy taken 27 Oct 13:27 UTC');
    expect(ticker.items).toContain('is-mirror');
    expect(report).toContain("No notice is in force in Earth Star's copy of NOAA's feed (copy taken 27 Oct 13:27 UTC)");
    expect(briefing).toContain("No notice in force in Earth Star's copy of NOAA's feed (copy taken 27 Oct 13:27 UTC).");
  });

  it('says at the briefing’s head where it was read from, and tags each source', () => {
    expect(briefing).toContain("_Read from Earth Star's mirror of NOAA SWPC (copy taken 27 Oct 13:27 UTC); "
      + 'NOAA was unreachable from this browser._');
    expect(briefing).toMatch(/products\/x\.json \(via mirror\)/);
  });

  it('the Notices detail names the copy, not a check', () => {
    const html = renderNotices(env.data.alerts, NOW, { error: null, checked: env.fetched_at, mirrored: true, copyAt: COPY });
    expect(html).toContain('copy taken 27 Oct 13:27 UTC');
    expect(html).not.toContain('checked');
  });

  it('with no manifest, the copy’s time is unknown rather than guessed', () => {
    const e = onMirror();
    for (const p of Object.values(e.parts)) p.mirrored_at = null;
    expect(statusLine(store(e), NOW).text).toBe('Mirror · NOAA unreachable · copy time unknown');
  });
});

describe('a live notices feed beside feeds that have stopped', () => {
  it('says the list may be frozen with them', () => {
    const old = new Date(NOW.getTime() - 48 * 3.6e6).toISOString();
    const env = envelope(Object.fromEntries(PARTS.map((k) => [k, meta(k === 'alerts'
      ? { data_time: '2026-10-26T05:17:00.000Z', stale_after_s: 7 * 86400 } : { data_time: old })])));
    const report = buildSituationReport(env, scene(), NOW).join('\n');
    expect(report).toContain("NOAA's other feeds have not updated for 48.0 h; this list may be frozen too.");
  });
});

describe('a failed CME catalogue is said', () => {
  const env = envelope(Object.fromEntries(PARTS.map((k) => [k, meta({ error: 'Failed to fetch' })])));
  it('as unavailable, with the slow lane’s retry, and no claim either way', () => {
    const report = buildSituationReport(env, scene(), NOW, null, [], [], {
      snapshot: false, aurora: false, cmes: false, cmesError: 'Failed to fetch',
      cmesNextAttempt: new Date(NOW.getTime() + 300_000).toISOString(),
    }).join('\n');
    expect(report).toContain('CME analyses (NASA DONKI): unavailable (offline or blocked). The next attempt is at 13:32 UTC. '
      + 'No cones are drawn, and nothing here says whether one is inbound.');
  });

  it('and an empty week as an empty week', () => {
    const report = buildSituationReport(env, scene(), NOW).join('\n');
    expect(report).toContain('NASA DONKI lists no CME analyses in the past week');
  });
});

/**
 * A week of DONKI as the mirror held it on 27 Oct: the newest a slow CME
 * submitted at 12:10 and fitted to cross 21.5 R☉ at 20:14, the oldest on
 * 20 Oct, from the query's startDate. Neither is Earth-directed.
 */
const DONKI_WEEK = [
  { time21_5: '2026-10-27T20:14Z', submissionTime: '2026-10-27T12:10Z', latitude: -20, longitude: 80,
    halfAngle: 20, speed: 260, associatedCMEID: '2026-10-27T17:36:00-CME-001', type: 'S' },
  { time21_5: '2026-10-20T10:15Z', submissionTime: '2026-10-20T14:02Z', latitude: 10, longitude: -70,
    halfAngle: 15, speed: 450, associatedCMEID: '2026-10-20T08:00:00-CME-001', type: 'C' },
];
const sunLine = (lines: string[]): string => lines.find((l) => l.includes('coronal mass ejection')) ?? '';
const cmeRow = (html: string): string => html.split('<tr>').find((r) => r.includes('CME analyses')) ?? '';

describe('a CME list whose newest crossing is still ahead', () => {
  // The page's clock on the mirror's day, an hour and a half after the submission.
  const AT = new Date('2026-10-27T13:33:00Z');
  const env = envelope(Object.fromEntries(PARTS.map((k) => [k, meta({ error: 'Failed to fetch' })])), AT);
  const cmes = parseCmes(DONKI_WEEK, AT);

  it('dates the report by the newest analysis, never by a time that has not happened', () => {
    const line = sunLine(buildSituationReport(env, scene(), AT, null, cmes, []));
    expect(line).toContain('newest analysis 12:10 UTC');
    expect(line).not.toContain('20:14');
    expect(line).toContain('Nothing is inbound.');
  });

  it('the Sources row is as old as that analysis, and tiered as DONKI’s fit', () => {
    const row = cmeRow(renderSources(store(env, { cmes }), null, undefined, undefined, null, {}, AT));
    expect(row).toContain('83 min old');
    expect(row).not.toContain('0 s old');
    expect(row).toContain('badge-d');
    expect(row).not.toContain('mirror');
  });

  it('a lane time after the clock is said as ahead of it, not as fresh', () => {
    const ahead = new Date(AT.getTime() + 3600_000).toISOString();
    const html = renderSources(store(env), null, undefined, undefined, null,
      { quakes: { time: ahead, count: 3, error: null, loading: false } }, AT);
    const row = html.split('<tr>').find((r) => r.includes('earthquakes')) ?? '';
    expect(row).toContain('time 60 min ahead of this clock');
    expect(row).not.toContain('0 s old');
  });
});

describe('a CME list from Earth Star’s copy, two days on', () => {
  const env = envelope(Object.fromEntries(PARTS.map((k) => [k, meta({ error: 'Failed to fetch' })])));
  const cmes = parseCmes(DONKI_WEEK, NOW);

  it('names the copy, in amber, and never says nothing is inbound', () => {
    const lines = buildReportLines(env, scene(), NOW, null, cmes, [],
      { snapshot: false, aurora: false, cmes: false, cmesMirrored: true, cmesCopyAt: COPY });
    const line = lines.find((l) => l.section === 'sun' && l.text.includes('coronal mass ejection'))!;
    expect(line.text).toContain("In Earth Star's copy of NASA DONKI (copy taken 27 Oct 13:27 UTC)");
    // The copy's own week, not one counted back from a clock two days later.
    expect(line.text).toContain('since 20 Oct');
    expect(line.text).toContain('anything analysed since the copy is not in it');
    expect(line.tone).toBe('warn');
    expect(line.text).not.toContain('Nothing is inbound');
  });

  it('a failed refresh says the list it kept is the last one that arrived', () => {
    const lines = buildReportLines(env, scene(), NOW, null, cmes, [],
      { snapshot: false, aurora: false, cmes: false, cmesError: 'Failed to fetch',
        cmesNextAttempt: new Date(NOW.getTime() + 300_000).toISOString() });
    const line = lines.find((l) => l.section === 'sun' && l.text.includes('coronal mass ejection'))!;
    expect(line.text).toContain("NASA DONKI's last refresh failed (offline or blocked). The next attempt is at 13:32 UTC.");
    expect(line.text).toContain('In the last list that arrived, 2 coronal mass ejections have been analysed since 20 Oct');
    expect(line.tone).toBe('warn');
    expect(line.text).not.toContain('Nothing is inbound');
  });

  describe('read through the fallback', () => {
    afterAll(async () => {
      // Upstream answering again puts the module's provenance back for whatever runs after.
      vi.stubGlobal('fetch', async () => new Response(JSON.stringify([]), { status: 200 }));
      await fetchCmes();
      vi.unstubAllGlobals();
    });

    it('the Sources row and the report both carry the copy', async () => {
      vi.stubGlobal('fetch', async (input: RequestInfo | URL) => {
        const url = String(input);
        if (url.startsWith('https://ccmc.gsfc.nasa.gov')) throw new TypeError('Failed to fetch');
        if (url.endsWith('/manifest.json')) return new Response(JSON.stringify({ mirrored_at: COPY }), { status: 200 });
        if (url.endsWith('/donki/CMEAnalysis.json')) return new Response(JSON.stringify(DONKI_WEEK), { status: 200 });
        throw new TypeError(`unexpected ${url}`);
      });
      const list = await fetchCmes();
      const s = store(env, { cmes: list });
      expect(cmeRow(renderSources(s, null, undefined, undefined, null, {}, NOW)))
        .toContain('via Earth Star’s mirror · copy taken 27 Oct 13:27 UTC');
      const lanes = reportLanes(s);
      expect(lanes).toMatchObject({ cmesMirrored: true, cmesCopyAt: COPY });
      expect(sunLine(buildSituationReport(env, scene(), NOW, null, list, [], lanes)))
        .toContain("In Earth Star's copy of NASA DONKI");
    });
  });
});

describe('the index names the field model the scene is running', () => {
  const index = (external: unknown) => renderDrawnIndex({
    mode: 'globe', view: 'deck', reducedMotion: false, shield: true, aurora: true,
    fieldLines: { lines: 80, points: 9000, external }, drawn: ['layer.field-lines'],
  } as never);

  it('IGRF alone when no driver arrived, with no Tsyganenko named', () => {
    const html = index(null);
    expect(html).toContain('IGRF-14 alone');
    expect(html).not.toContain('Tsyganenko');
  });

  it('T96 or T89 when one runs', () => {
    expect(index({ name: 't96', input: {} })).toContain('Tsyganenko T96');
    expect(index({ name: 't89', band: 3 })).toContain('Tsyganenko T89');
  });
});

describe('earthquakes, in their states', () => {
  const env = envelope(Object.fromEntries(PARTS.map((k) => [k, meta({ error: 'Failed to fetch' })])));
  const said = (quakes: Record<string, unknown>) =>
    buildSituationReport(env, scene({ quakes }), NOW).find((l) => l.startsWith('Earthquake')) ?? '';
  it('unreachable is not "hidden"', () => {
    expect(said({ shown: true, count: 0, largest: null, error: 'Failed to fetch' }))
      .toBe('Earthquakes (USGS): unavailable (offline or blocked). No markers are drawn.');
  });
  it('an empty day is said as one', () => {
    expect(said({ shown: true, count: 0, largest: null, error: null })).toContain('answered with nothing usable');
  });
  it('hidden only when the layer is off', () => {
    expect(said({ shown: false, count: 0, largest: null })).toBe('Earthquake markers are hidden.');
  });
});

describe('the shield, while its first trace is running', () => {
  const env = envelope(Object.fromEntries(PARTS.map((k) => [k, meta({ data_time: NOW.toISOString() })])));
  it('says it is being traced, not that no driver reached us', () => {
    const report = buildSituationReport(env, scene({ fieldLines: { lines: 0, points: 0, tracing: true, external: null } }), NOW).join('\n');
    expect(report).toContain('The field lines are being traced');
    expect(report).not.toContain('Neither the solar wind nor a Kp index reached us');
  });
  it('names the boundaries only while they are drawn', () => {
    const lines = { lines: 80, points: 9000, external: null };
    const off = buildSituationReport(env, scene({ fieldLines: lines, boundaries: false }), NOW).join('\n');
    const on = buildSituationReport(env, scene({ fieldLines: lines, boundaries: true }), NOW).join('\n');
    expect(off).not.toContain('The teal boundary');
    expect(off).toContain('No boundary is drawn');
    expect(on).toContain('The teal boundary is the Shue et al. 1998 magnetopause');
  });
});

describe('the briefing offline', () => {
  const env = envelope(Object.fromEntries(PARTS.map((k) => [k, meta({ error: 'Failed to fetch' })])));
  const md = buildBriefing({ state: store(env), narration: [], checks: null, forecast: null, now: NOW });
  it('writes "unavailable" and the next attempt, never "no data Kp"', () => {
    expect(md).toContain('| Planetary K | unavailable (offline or blocked) | measured | next attempt 13:28 UTC |');
    expect(md).not.toMatch(/no data (Kp|nT|km\/s)/);
    expect(md).not.toContain('no time');
  });
});

describe('numbers as the page writes them', () => {
  it('writes scientific notation for a reader, with superscripts and U+2212', () => {
    expect(sci(3.26e-7, 1)).toBe('3.3 × 10⁻⁷');
    expect(sci(-1.2e-5, 2)).toBe('−1.20 × 10⁻⁵');
    expect(sci(null)).toBe('no data');
  });

  it('puts no hyphen-minus and no "e-" in the tiles, the report, a detail or the checks', () => {
    const env = envelope(Object.fromEntries(PARTS.map((k) => [k, meta({ data_time: NOW.toISOString() })])));
    Object.assign(env.data, {
      solar_wind: { time: NOW.toISOString(), bz_gsm: -4.1, by_gsm: -2, bx_gsm: 1, bt: 5, speed: 400, density: 3,
        temperature: 1e5, spacecraft: 'SOLAR1' },
      xray: { time: NOW.toISOString(), class: 'B3.3', flux_long: 3.26e-7, flux_short: 1e-8 },
      dst: { time: NOW.toISOString(), value_nt: -12, level: 'quiet', lead_minutes: 20, min_nt: -14, min_time: null },
      geosync: { time: NOW.toISOString(), satellite: 19, hp_nt: 100, total_nt: 109, deficit_nt: -6, arcjet: false },
    });
    const s = store(env, {
      xraySeries: { time: [NOW.toISOString(), NOW.toISOString()], value: [2.5e-7, 4.2e-7] },
      series: { data: { time: [NOW.toISOString(), NOW.toISOString()], bz_gsm: [-4.1, 3.7], bt: [5, 6],
        speed: [400, 410], density: [3, 4] } } as never,
      dstSeries: { time: [NOW.toISOString(), NOW.toISOString()], value: [-14, -12] },
    });
    const strip = (h: string) => h.replace(/<[^>]+>/g, ' ');
    const texts = [
      ...INSTRUMENTS.map((i) => `${i.value(env.data)} ${i.detail?.(env.data) ?? ''}`),
      buildSituationReport(env, scene(), NOW).join(' '),
      strip(renderDetail('xray', s, NOW)), strip(renderDetail('bz', s, NOW)), strip(renderDetail('dst', s, NOW)),
      strip(renderChecks({ rows: [{ name: 'IMF Bz', ours: '−4.10', theirs: '−4', against: 'NOAA SWPC', ok: true, note: '' }],
        ranAt: NOW.toISOString(), passed: 1, inconclusive: 0 } as CheckResult, false)),
    ];
    for (const t of texts) {
      expect(t).not.toMatch(/(^|[\s(])-\d/);
      expect(t).not.toMatch(/\de-\d/);
    }
  });

  it('says which way GOES differs from the dipole', () => {
    const env = envelope(Object.fromEntries(PARTS.map((k) => [k, meta({ data_time: NOW.toISOString() })])));
    env.data.geosync = { time: NOW.toISOString(), satellite: 19, hp_nt: 100, total_nt: 109, deficit_nt: -6, arcjet: false };
    const para = buildSituationReport(env, scene(), NOW).find((l) => l.startsWith('GOES-19')) ?? '';
    expect(para).toContain('6 nT above the dipole value for that distance — on the dayside the magnetopause '
      + "currents add to Earth's own field.");
    expect(para).not.toContain('subtracting');
  });
});
