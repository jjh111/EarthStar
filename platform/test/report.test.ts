/**
 * The Situation Report, as sections and as a briefing.
 *
 * The report is now built once and rendered two ways: the panel groups it and
 * links its subjects, the briefing export joins the text. The export is the
 * one that must not move. A briefing pasted into an email is a document, and a
 * document that silently changes shape between versions is worse than one that
 * never improved — so the text is held against a fixture, generated on the day
 * the sections were introduced and proven identical to the code before them.
 * It has changed once since, on purpose: each code written in words where the
 * report first uses it (nanotesla (nT), particle flux units (pfu), Earth radii
 * (Rₑ), L1), Kp to one decimal with NOAA's thirds, and U+2212 for a minus.
 * And twice: X-ray flux as "1.2 × 10⁻⁵", and the boundaries "re-shaped by the
 * measured solar wind" rather than the live one, which on old data it is not.
 * The same sky three hours and two days on is held too: every paragraph says
 * its own reading is stale, nothing is "right now" or "today", and no time
 * from another day is written as a bare clock time.
 */

import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  SECTION_TITLES, buildReportLines, buildSituationReport, reportSections,
} from '../src/hud/situation-report.js';
import { subject } from '../src/hud/subjects.js';
import type { NowEnvelope, PartMeta } from '../src/data/source.js';

const NOW = new Date('2026-09-07T18:10:00Z');
const meta = (time: string, tier: PartMeta['tier'] = 'measured'): PartMeta => ({
  tier, source: 'NOAA SWPC · test', source_url: 'https://example.invalid/feed.json',
  model: null, data_time: time, latency_s: 60, stale_after_s: 1200,
});
const env = {
  source: 'NOAA SWPC', source_url: 'https://example.invalid', tier: 'mixed', model: null,
  fetched_at: NOW.toISOString(), data_time: '2026-09-07T18:03:00Z', latency_s: 60,
  stale_after_s: 1200, units: {},
  data: {
    solar_wind: { time: '2026-09-07T18:03:00Z', bz_gsm: -9.1, by_gsm: 1, bx_gsm: 1, bt: 9.9,
      speed: 486, density: 21, temperature: 90_000, spacecraft: 'SOLAR1' },
    kp: { time: '2026-09-07T18:01:00Z', estimated_kp: 5.33, kp: '5+' },
    xray: { time: '2026-09-07T18:04:00Z', class: 'M1.2', flux_long: 1.2e-5 },
    scales: { G: { scale: 2, text: 'Moderate' }, R: { scale: 1, text: 'Minor' }, S: { scale: 0, text: 'None' } },
    alerts: [{ issued: '2026-09-07T12:00:00Z', headline: 'K-index of 5', product: 'ALT' }],
    magnetopause: { standoff_re: 8.4, alpha: 0.6, dyn_pressure_npa: 4.2, bow_shock_re: 10.9 },
    geosync: { time: '2026-09-07T18:05:00Z', total_nt: 96, deficit_nt: 12, satellite: 19, arcjet: false },
    particles: { time: '2026-09-07T18:00:00Z', proton_10mev: 0.3, s_scale: 0, s_text: 'None', electron_2mev: 1400 },
    propagated: { observed_at: '2026-09-07T17:20:00Z', arrives_at: '2026-09-07T18:08:00Z', bz: -8,
      speed: 490, lead_minutes: 40, density: 20 },
    dst: { time: '2026-09-07T18:09:00Z', value_nt: -64, level: 'moderate storm', lead_minutes: 25 },
  },
  parts: Object.fromEntries(['solar_wind','kp','xray','scales','alerts','magnetopause',
    'particles','geosync','propagated','dst'].map((k) => [k, meta('2026-09-07T18:03:00Z')])),
} as unknown as NowEnvelope;

const scene = {
  mode: 'globe', view: 'deck', reducedMotion: false, shield: true,
  cmes: { shown: true, count: 2 },
  fieldLines: { lines: 80, points: 9000, far: false,
    external: { name: 't89', band: 5 }, tiltDeg: 12.7, truncated: 4 },
  aurora: true, wind: true, earthSurface: 'imagery', boundaries: true,
} as never;

const FIXTURE: { live: string[]; cold: string[]; stale3h: string[]; stale48h: string[] } = JSON.parse(
  readFileSync(new URL('./fixtures/report-briefing.json', import.meta.url), 'utf8'),
);

describe('the briefing export', () => {
  it('is exactly what it was before the report gained sections', () => {
    expect(buildSituationReport(env, scene, NOW, null, [], [])).toEqual(FIXTURE.live);
    expect(buildSituationReport(null, scene, NOW, null, [], [])).toEqual(FIXTURE.cold);
  });

  it('ages honestly: the same sky three hours and two days on', () => {
    const later = (h: number) => new Date(NOW.getTime() + h * 3.6e6);
    expect(buildSituationReport(env, scene, later(3), null, [], [])).toEqual(FIXTURE.stale3h);
    expect(buildSituationReport(env, scene, later(48), null, [], [])).toEqual(FIXTURE.stale48h);
  });

  it('two days on, says nothing is now, nothing is today, and dates every time', () => {
    const at = new Date(NOW.getTime() + 48 * 3.6e6);
    const text = buildSituationReport(env, scene, at, null, [], []).join(' ');
    expect(text).not.toContain('right now');
    // ("today's clouds", which the Earth's imagery is said not to be, is not a claim of now.)
    expect(text).not.toMatch(/\btoday\b(?!['’]s)/);
    // A bare HH:MM is only ever today's: here, the scene's own clock.
    const clock = at.toISOString().slice(11, 16);
    for (const m of text.matchAll(/(\d{2} [A-Z][a-z]{2} )?(\d{2}:\d{2}) UTC/g)) {
      if (!m[1]) expect(m[2]).toBe(clock);
    }
    // Every measured paragraph says its reading is stale.
    for (const lead of ['GOES-19 measures', 'Energetic particles', 'Planetary K index', 'NOAA scales at',
      'Modeled [D] magnetopause standoff', 'Solar X-ray background']) {
      const para = buildSituationReport(env, scene, at, null, [], []).find((l) => l.startsWith(lead));
      expect(para, lead).toMatch(/STALE, 48\.\d h old/);
    }
  });

  it('three hours on, the propagated wind is no longer "what is reaching Earth right now"', () => {
    const text = buildSituationReport(env, scene, new Date(NOW.getTime() + 3 * 3.6e6), null, [], []).join(' ');
    expect(text).not.toContain('right now');
    expect(text).toContain('the newest propagated wind reached Earth at 18:08 UTC, 3.0 h ago; nothing newer is known');
  });

  it('says the same words as the structured build, in the same order', () => {
    // One builder, two renderers. If these ever diverge, the panel and the
    // briefing are describing different skies.
    const structured = buildReportLines(env, scene, NOW, null, [], []).map((l) => l.text);
    expect(structured).toEqual(buildSituationReport(env, scene, NOW, null, [], []));
  });
});

describe('the report in words', () => {
  const text = buildSituationReport(env, scene, NOW, null, [], []).join(' ');
  const count = (needle: string): number => text.split(needle).length - 1;

  it('writes each code out once, where it is first used, and keeps the symbol', () => {
    for (const first of ['nanotesla (nT)', 'particle flux units (pfu)', 'Earth radii (Rₑ)']) {
      expect(count(first), first).toBe(1);
    }
    expect(text.indexOf('nanotesla (nT)')).toBeLessThan(text.indexOf(' nT;'));
    expect(text.indexOf('particle flux units (pfu)')).toBeLessThan(text.indexOf('1400 pfu'));
    expect(text).toContain('Solar wind at L1, the Lagrange point between the Sun and Earth');
    expect(text).toContain('Ring current index Dst (disturbance storm time)');
  });

  it('writes Kp to one decimal with NOAA\'s thirds, as the tile and the splash do', () => {
    expect(text).toContain('Planetary K index (Kp) 5.3, NOAA Kp 5+');
    expect(text).not.toContain('5.33');
  });

  it('writes a negative number with U+2212', () => {
    expect(text).toContain('Bz \u22129.1 nanotesla');
    expect(text).toContain('Dst (disturbance storm time) \u221264 nT');
    expect(text).not.toMatch(/Bz -\d/);
  });
});

/**
 * The report's sentences are escaped by `renderReport` exactly as the registry's
 * are, so markup in them renders as literal punctuation too — and unlike the
 * registry they are assembled at runtime from live values, so a stray asterisk
 * can arrive through a feed's own text.
 *
 * The briefing *export* is a different document and markdown is correct there;
 * `briefing.ts` adds the headings and bullets around these lines.
 */
describe('the report is prose too', () => {
  const MARKUP: [RegExp, string][] = [
    [/\*/, 'an asterisk'],
    [/`/, 'a backtick'],
    [/\[[^\]]+\]\([^)]+\)/, 'a markdown link'],
    [/<[a-z/]/i, 'an HTML tag'],
  ];

  it('carries no markup in any line, live or cold', () => {
    for (const [label, lines] of [['live', FIXTURE.live], ['cold', FIXTURE.cold]] as const) {
      for (const line of lines) {
        for (const [pattern, why] of MARKUP) {
          expect(line, `${label} line contains ${why}: ${line.slice(0, 80)}`).not.toMatch(pattern);
        }
      }
    }
  });

  it('holds the section titles to it as well', () => {
    for (const title of Object.values(SECTION_TITLES)) {
      expect(title).not.toMatch(/[*`<]/);
    }
  });
});

describe('sections', () => {
  const lines = buildReportLines(env, scene, NOW, null, [], []);

  it('accounts for every sentence, losing none and inventing none', () => {
    const sections = reportSections(lines);
    const flat = sections.flatMap((s) => s.lines);
    expect(flat.length).toBe(lines.length);
    expect(flat.map((l) => l.text).sort()).toEqual(lines.map((l) => l.text).sort());
  });

  it('gives every section a title and at least one sentence', () => {
    for (const s of reportSections(lines)) {
      expect(SECTION_TITLES[s.id], s.id).toBeTruthy();
      expect(s.lines.length, s.id).toBeGreaterThan(0);
    }
  });

  it('resolves every subject a sentence claims to be about', () => {
    // A dead id here is a paragraph that offers the reader a link to nowhere.
    for (const l of lines) {
      for (const id of l.subjects) {
        expect(subject(id), `"${l.text.slice(0, 48)}…" → ${id}`).not.toBeNull();
      }
    }
  });

  it('leaves no section without a single subject to walk out of', () => {
    // A section of prose with nothing to click is the wall this replaced.
    const withSubjects = reportSections(lines).filter((s) => s.subjects.length > 0);
    expect(withSubjects.length).toBe(reportSections(lines).length);
  });

  it('puts the shield, the wind and the Sun in different sections', () => {
    const of = (needle: string) =>
      lines.find((l) => l.text.includes(needle))?.section;
    expect(of('Solar wind at L1')).toBe('wind');
    expect(of('magnetic shield is drawn')).toBe('shield');
    expect(of('Solar X-ray background')).toBe('sun');
    expect(of('Planetary K index')).toBe('geomagnetic');
    expect(of('Scene: the Sun at centre, with all eight')).toBe('scene');
  });
});
