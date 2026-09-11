/**
 * The Situation Report, as sections and as a briefing.
 *
 * The report is now built once and rendered two ways: the panel groups it and
 * links its subjects, the briefing export joins the text. The export is the
 * one that must not move. A briefing pasted into an email is a document, and a
 * document that silently changes shape between versions is worse than one that
 * never improved — so the text is held against a fixture, generated on the day
 * the sections were introduced and proven identical to the code before them.
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
    propagated: { observed_at: '2026-09-07T17:20:00Z', bz: -8, speed: 490, lead_minutes: 40,
      density: 20 },
    dst: { time: '2026-09-07T18:09:00Z', value_nt: -64, level: 'moderate storm', lead_minutes: 25 },
  },
  parts: Object.fromEntries(['solar_wind','kp','xray','scales','alerts','magnetopause',
    'particles','geosync','propagated','dst'].map((k) => [k, meta('2026-09-07T18:03:00Z')])),
} as unknown as NowEnvelope;

const scene = {
  mode: 'globe', view: 'deck', reducedMotion: false, shield: true,
  cmes: { shown: true, count: 2 },
  fieldLines: { lines: 80, points: 9000, far: false, band: 5, tiltDeg: 12.7, truncated: 4 },
  aurora: true, wind: true, earthSurface: 'imagery',
} as never;

const FIXTURE: { live: string[]; cold: string[] } = JSON.parse(
  readFileSync(new URL('./fixtures/report-briefing.json', import.meta.url), 'utf8'),
);

describe('the briefing export', () => {
  it('is exactly what it was before the report gained sections', () => {
    expect(buildSituationReport(env, scene, NOW, null, [], [])).toEqual(FIXTURE.live);
    expect(buildSituationReport(null, scene, NOW, null, [], [])).toEqual(FIXTURE.cold);
  });

  it('says the same words as the structured build, in the same order', () => {
    // One builder, two renderers. If these ever diverge, the panel and the
    // briefing are describing different skies.
    const structured = buildReportLines(env, scene, NOW, null, [], []).map((l) => l.text);
    expect(structured).toEqual(buildSituationReport(env, scene, NOW, null, [], []));
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
