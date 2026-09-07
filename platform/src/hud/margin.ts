/**
 * The margin column — the marginal notes beside the scene.
 *
 * Tabs rather than stacked panels, so the whole thing fits the viewport without
 * scrolling the page. Selecting an instrument opens a fourth, transient tab for
 * that reading: value, provenance, recent history, and what it means.
 */

import type { Envelope, Now, SolarWindSeries } from '../contract/types.js';
import type { NowEnvelope, PartMeta } from '../data/source.js';
import type { StoreState } from '../data/store.js';
import type { CheckResult } from '../data/checks.js';
import type { ImageLoop } from '../data/solar-imagery.js';
import { NO_DATA, badgeFor, badgeTitle, hhmmUTC, stalenessOf } from './format.js';
import { INSTRUMENTS } from './instruments.js';
import { buildSituationReport, type SceneNarration } from './situation-report.js';

export type TabId = 'report' | 'sun' | 'sources' | 'checks' | 'detail';

export const TABS: Array<{ id: TabId; label: string }> = [
  { id: 'report', label: 'Report' },
  { id: 'sun', label: 'Sun' },
  { id: 'sources', label: 'Sources' },
  { id: 'checks', label: 'Checks' },
];

export function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}

/* ------------------------------------------------------------------ *
 * Sparkline — recent history for a single series
 * ------------------------------------------------------------------ */

/**
 * A small multiple, not a decoration: it shows whether the current reading is
 * a spike or a plateau, which a single number cannot. Zero is drawn when the
 * series crosses it, because for Bz the sign is the whole story.
 */
export function sparkline(
  series: Envelope<SolarWindSeries> | null,
  column: 'bz_gsm' | 'bt' | 'speed' | 'density',
): string {
  const vals = series?.data?.[column];
  if (!vals || vals.length < 2) return '<p class="tile-meta">No history loaded.</p>';

  const pts = vals.map((v, i) => ({ v, i })).filter((p): p is { v: number; i: number } =>
    p.v !== null && Number.isFinite(p.v));
  if (pts.length < 2) return '<p class="tile-meta">No history loaded.</p>';

  const W = 260, H = 42, pad = 2;
  const min = Math.min(...pts.map((p) => p.v));
  const max = Math.max(...pts.map((p) => p.v));
  const span = max - min || 1;
  const n = vals.length - 1;
  const x = (i: number) => pad + (i / n) * (W - pad * 2);
  const y = (v: number) => pad + (1 - (v - min) / span) * (H - pad * 2);

  const d = pts.map((p, k) => `${k === 0 ? 'M' : 'L'}${x(p.i).toFixed(1)},${y(p.v).toFixed(1)}`).join('');
  const zero = min < 0 && max > 0
    ? `<line class="spark-axis" x1="${pad}" y1="${y(0).toFixed(1)}" x2="${W - pad}" y2="${y(0).toFixed(1)}" />`
    : '';

  const hours = ((Date.parse(series!.data.time[n]!) - Date.parse(series!.data.time[0]!)) / 3.6e6);
  return `
    <svg class="spark" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img"
         aria-label="Last ${hours.toFixed(0)} hours: minimum ${min.toFixed(1)}, maximum ${max.toFixed(1)}">
      ${zero}<path class="spark-line" d="${d}" />
    </svg>
    <p class="tile-meta">${min.toFixed(1)} to ${max.toFixed(1)} over the last ${hours.toFixed(0)} h</p>`;
}

/* ------------------------------------------------------------------ *
 * Panels
 * ------------------------------------------------------------------ */

export function renderReport(
  state: StoreState, narration: SceneNarration, now: Date,
): string {
  const lines = buildSituationReport(state.now, narration, now, state.aurora);
  return `<h2>Situation Report</h2>${lines.map((l) => `<p>${escapeHtml(l)}</p>`).join('')}`;
}

function metaRow(key: string, m: PartMeta): string {
  const b = badgeFor(m);
  return `<tr>
    <td>${escapeHtml(key)}</td>
    <td><span class="badge badge-${b.toLowerCase()}" title="${escapeHtml(badgeTitle(m))}">${b}</span></td>
    <td><a href="${m.source_url}" rel="noreferrer noopener" target="_blank">${escapeHtml(m.source)}</a>${
      m.model ? `<br><span class="tile-meta">${escapeHtml(m.model.name)}</span>` : ''}</td>
    <td class="num">${m.data_time ? hhmmUTC(m.data_time) : NO_DATA}</td>
    <td class="num">${m.error ? `<span class="err">${escapeHtml(m.error)}</span>`
      : m.latency_s === null ? NO_DATA : `${m.latency_s}s`}</td>
  </tr>`;
}

export function renderSources(state: StoreState, checks: CheckResult | null): string {
  const env = state.now;
  if (!env) return '<h2>Provenance</h2><p>No envelope loaded yet.</p>';

  const au = state.aurora;
  const auRow = au ? `<tr>
    <td>aurora</td>
    <td><span class="badge badge-d">D</span></td>
    <td><a href="${au.source_url}" rel="noreferrer noopener" target="_blank">${escapeHtml(au.source)}</a>
      <br><span class="tile-meta">${escapeHtml(au.model?.name ?? '')}</span></td>
    <td class="num">${au.data ? hhmmUTC(au.data.observation_time) : NO_DATA}</td>
    <td class="num">${au.data ? `${au.latency_s}s` : NO_DATA}</td>
  </tr>` : '';

  return `
    <h2>Provenance</h2>
    <p>Every element on screen, its evidence tier, where it came from and how old it is.</p>
    ${checks ? checkSummary(checks) : ''}
    <table class="prov">
      <thead><tr><th>Element</th><th>Tier</th><th>Source</th><th>Time</th><th>Lat.</th></tr></thead>
      <tbody>${Object.entries(env.parts).map(([k, m]) => metaRow(k, m)).join('')}${auRow}</tbody>
    </table>
    <h3>Tiers</h3>
    <p><span class="badge badge-e">E</span> Measured — read from an instrument, shown with its
    timestamp and latency.<br>
    <span class="badge badge-d">D</span> Modelled — computed from measured inputs by a named,
    cited model.<br>
    <span class="badge badge-m">M</span> Ambient — artwork. Parameter-driven, sometimes by real
    values, but never itself a measurement.</p>
    <h3>Models cited</h3>
    <p>Shue et al. 1998 (doi:10.1029/98JA01103) — magnetopause.<br>
    Farris &amp; Russell 1994 — bow shock.<br>
    IGRF-14 (IAGA, epoch 2025.0) — the geomagnetic field and its lines.<br>
    OVATION Prime (NOAA SWPC) — aurora probability.<br>
    astronomy-engine (VSOP87/Meeus) — every position, and the sub-solar point.</p>`;
}

function checkSummary(c: CheckResult): string {
  const all = c.passed === c.rows.length;
  return `<p><span class="summary-pill ${all ? 'ok' : 'bad'}">${c.passed} / ${c.rows.length} checks pass</span></p>`;
}

export function renderChecks(checks: CheckResult | null, running: boolean): string {
  if (running && !checks) {
    return '<h2>Checks</h2><p>Comparing our numbers with NOAA’s own, by an independent path…</p>';
  }
  if (!checks) return '<h2>Checks</h2><p>Not run yet.</p>';

  return `
    <h2>Checks</h2>
    <p>Our values against NOAA’s own published figures, fetched by a separate path at the
    same timestamp. Drift is a bug, not a rounding preference.</p>
    ${checkSummary(checks)}
    <table class="prov">
      <tbody>
        ${checks.rows.map((r) => `
          <tr class="check-row">
            <td colspan="2"><strong>${escapeHtml(r.name)}</strong></td>
            <td class="${r.ok ? 'verdict-ok' : 'verdict-bad'}">${r.ok ? 'pass' : 'DRIFT'}</td>
          </tr>
          <tr class="check-row">
            <td class="num">${escapeHtml(r.ours)}</td>
            <td class="tile-meta">vs</td>
            <td class="num">${escapeHtml(r.theirs)}</td>
          </tr>
          <tr><td class="check-note" colspan="3">${escapeHtml(r.note)}</td></tr>`).join('')}
      </tbody>
    </table>
    <p class="tile-meta">Last run ${hhmmUTC(checks.ranAt)} UTC.</p>`;
}

export interface SunState {
  loop: ImageLoop | null;
  loopId: string;
  frameIndex: number;
  playing: boolean;
  loading: boolean;
  /** Frames cached so far; playback waits for the full set. */
  preloaded: number;
  preloading: boolean;
}

function mb(bytes: number | null, frames: number): string {
  if (bytes === null) return 'unknown size';
  return `~${((bytes * frames) / 1_048_576).toFixed(0)} MB`;
}

export function renderSun(sun: SunState, specs: Array<{ id: string; label: string }>): string {
  const picker = specs.map((s) =>
    `<button class="ctl" data-loop="${s.id}" aria-pressed="${s.id === sun.loopId}">${escapeHtml(s.label)}</button>`).join('');

  if (sun.loading && !sun.loop) {
    return `<h2>The Sun</h2><div class="sun-picker">${picker}</div><p>Loading frames…</p>`;
  }
  if (!sun.loop) {
    return `<h2>The Sun</h2><div class="sun-picker">${picker}</div>
      <p>That imagery did not load. Nothing is shown in its place.</p>`;
  }

  const L = sun.loop;
  const f = L.frames[sun.frameIndex] ?? L.frames[L.frames.length - 1]!;
  const ageMin = Math.round((Date.now() - Date.parse(f.time)) / 60000);
  const n = L.frames.length;

  // Playback is opt-in and its cost is stated: a SUVI loop is tens of
  // megabytes, and downloading that unasked would be a discourtesy.
  const transport = sun.preloading
    ? `<span class="tile-meta">Loading ${sun.preloaded}/${n} frames…</span>`
    : sun.preloaded >= n
      ? `<button class="ctl" id="sun-play" aria-pressed="${sun.playing}">${sun.playing ? 'Pause' : 'Play'}</button>
         <input type="range" id="sun-scrub" min="0" max="${n - 1}" value="${sun.frameIndex}" aria-label="Frame" />
         <span class="tile-meta">${sun.frameIndex + 1}/${n}</span>`
      : `<button class="ctl" id="sun-play">Load loop · ${n} frames, ${mb(L.frameBytes, n)}</button>`;

  return `
    <h2>The Sun</h2>
    <div class="sun-picker">${picker}</div>
    <div class="sun-frame">
      <img id="sun-img" src="${f.url}" alt="${escapeHtml(L.instrument)} image of the Sun at ${hhmmUTC(f.time)} UTC" />
      <div class="sun-stamp"><span>${hhmmUTC(f.time)} UTC</span><span>${ageMin} min ago</span></div>
    </div>
    <div class="sun-transport">${transport}</div>
    <p><span class="badge badge-e">E</span> ${escapeHtml(L.instrument)}. ${escapeHtml(L.describes)}</p>
    <p class="tile-meta">Showing the newest frame. Upstream published ${L.totalAvailable} frames
    over ${L.spanHours.toFixed(0)} hours; playback samples ${n} of them evenly, always keeping
    the newest. Each frame carries its own observation time.
    <a href="${L.sourceUrl}" rel="noreferrer noopener" target="_blank">Frame list</a>.</p>`;
}

export function renderDetail(
  id: string, state: StoreState, now: Date,
): string {
  const inst = INSTRUMENTS.find((i) => i.id === id);
  if (!inst) return '<p>Unknown instrument.</p>';
  const env: NowEnvelope | null = state.now;
  const d: Now | null = env?.data ?? null;
  const meta = env?.parts?.[inst.part];
  const s = stalenessOf(meta, now);
  const b = badgeFor(meta);
  const raw = inst.value(d);

  return `
    <h2>${escapeHtml(inst.label)}</h2>
    <p class="tile-value" style="font-size:1.9rem">
      <span>${escapeHtml(raw)}</span><span class="tile-unit">${escapeHtml(inst.unit)}</span>
    </p>
    <p class="tile-meta"><span class="badge badge-${b.toLowerCase()}">${b}</span>
      ${escapeHtml(s.label)}</p>
    ${inst.series ? sparkline(state.series, inst.series) : ''}
    <h3>What it means</h3>
    <p>${escapeHtml(inst.meaning)}</p>
    <h3>Provenance</h3>
    ${meta ? `<table class="prov"><tbody>
      <tr><td>Tier</td><td>${escapeHtml(badgeTitle(meta))}</td></tr>
      <tr><td>Source</td><td><a href="${meta.source_url}" rel="noreferrer noopener" target="_blank">${escapeHtml(meta.source)}</a></td></tr>
      <tr><td>Data time</td><td class="num">${meta.data_time ? `${hhmmUTC(meta.data_time)} UTC` : NO_DATA}</td></tr>
      <tr><td>Latency</td><td class="num">${meta.latency_s === null ? NO_DATA : `${meta.latency_s}s`}</td></tr>
      <tr><td>Stale after</td><td class="num">${Math.round(meta.stale_after_s / 60)} min</td></tr>
      ${meta.error ? `<tr><td>Error</td><td class="err">${escapeHtml(meta.error)}</td></tr>` : ''}
    </tbody></table>` : '<p>No provenance recorded.</p>'}`;
}
