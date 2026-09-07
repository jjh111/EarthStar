/**
 * The margin column — the marginal notes beside the scene.
 *
 * Tabs rather than stacked panels, so the whole thing fits the viewport without
 * scrolling the page. Selecting an instrument opens a fourth, transient tab for
 * that reading: value, provenance, recent history, and what it means.
 */

import type { Now } from '../contract/types.js';
import type { NowEnvelope, PartMeta } from '../data/source.js';
import type { StoreState } from '../data/store.js';
import type { CheckResult } from '../data/checks.js';
import { l1Inset } from './l1-inset.js';
import { CLOUD_ARRIVAL, enlilSeries, type EnlilRun } from '../data/enlil.js';
import type { Cme } from '../data/cme.js';
import { SPACECRAFT_NOTE, type SpacecraftPos } from '../data/ephemerides.js';
import type { ImageLoop } from '../data/solar-imagery.js';
import { NO_DATA, badgeFor, badgeTitle, formatAge, hhmmUTC, stalenessOf } from './format.js';
import { panelSpark } from './sparkline.js';
import { stateSentence, stateSentenceText } from './state-sentence.js';
import type { ForecastBundle } from '../data/forecast.js';
import { stripProductHeader } from '../data/forecast.js';
import type { SolarCycle } from '../data/solar-cycle.js';
import { tail } from '../data/solar-cycle.js';
import { INSTRUMENTS } from './instruments.js';
import { buildSituationReport, type SceneNarration } from './situation-report.js';

export type TabId = 'report' | 'forecast' | 'sun' | 'sources' | 'checks' | 'detail';

export const TABS: Array<{ id: TabId; label: string }> = [
  { id: 'report', label: 'Now' },
  { id: 'forecast', label: 'Ahead' },
  { id: 'sun', label: 'Sun' },
  { id: 'sources', label: 'Sources' },
  { id: 'checks', label: 'Checks' },
];

export function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}

/* ------------------------------------------------------------------ *
 * Panels
 * ------------------------------------------------------------------ */

export function renderReport(
  state: StoreState, narration: SceneNarration, now: Date,
): string {
  const lines = buildSituationReport(
    state.now, narration, now, state.aurora, state.cmes, state.spacecraft?.data ?? [],
  );
  // The sentence carries its own evidence: each quantity appears as glyph,
  // sparkline and number together. The prose report follows it, and the
  // screen-reader text alternative sits alongside.
  return `
    <h2>Now</h2>
    <p class="state-sentence" aria-hidden="true">${stateSentence(state)}</p>
    <p class="sr-only">${escapeHtml(stateSentenceText(state))}</p>
    <h3>Situation Report</h3>
    ${lines.map((l) => `<p>${escapeHtml(l)}</p>`).join('')}`;
}

/* ------------------------------------------------------------------ *
 * Forecast — NOAA's own predictions, rendered as theirs
 * ------------------------------------------------------------------ */

function kpBars(f: ForecastBundle): string {
  if (f.kp.length === 0) return '<p class="tile-meta">No Kp forecast loaded.</p>';
  const pts = f.kp.slice(-40);
  const max = Math.max(5, ...pts.map((p) => p.kp));
  const w = 268, h = 46, gap = 1;
  const bw = (w - gap * (pts.length - 1)) / pts.length;
  const bars = pts.map((p, i) => {
    const bh = (p.kp / max) * (h - 10);
    const cls = p.kind === 'predicted' ? 'kp-pred' : 'kp-obs';
    const storm = p.kp >= 5 ? ' kp-storm' : '';
    return `<rect class="${cls}${storm}" x="${(i * (bw + gap)).toFixed(2)}" y="${(h - 10 - bh).toFixed(2)}"
      width="${bw.toFixed(2)}" height="${Math.max(0.6, bh).toFixed(2)}">
      <title>${hhmmUTC(p.time)} UTC — Kp ${p.kp.toFixed(2)} (${p.kind})</title></rect>`;
  }).join('');
  // Kp 5 is the storm threshold; the line is the reason the chart exists.
  const y5 = h - 10 - (5 / max) * (h - 10);
  return `<svg class="kp-chart" viewBox="0 0 ${w} ${h}" role="img"
      aria-label="Planetary K index, observed and predicted, storm threshold at 5">
      <line class="spark-rule" x1="0" y1="${y5.toFixed(2)}" x2="${w}" y2="${y5.toFixed(2)}" />
      ${bars}</svg>
    <p class="tile-meta"><span class="key-obs">▮</span> observed
      <span class="key-pred">▮</span> predicted · rule at Kp 5, the storm threshold</p>`;
}

export function renderForecast(
  f: ForecastBundle | null, loading: boolean, cmes: Cme[] = [],
): string {
  if (!f) {
    return `<h2>Ahead</h2><p>${loading ? 'Loading NOAA forecasts…' : 'Forecasts have not loaded.'}</p>`;
  }
  const three = f.threeDay ? stripProductHeader(f.threeDay) : null;
  const disc = f.discussion ? stripProductHeader(f.discussion) : null;
  const odds = f.odds[0];

  return `
    <h2>Ahead</h2>
    <p>Everything below is <span class="badge badge-d">D</span> NOAA's own forecast, not ours.
    Where the forecaster wrote prose, it is reproduced verbatim — a summary of a forecast is
    a different claim from the forecast.</p>

    <h3>Planetary K, observed and predicted</h3>
    ${kpBars(f)}

    ${odds ? `<h3>Flare probability, next 24 h</h3>
    <table class="prov"><tbody>
      <tr><td>C class</td><td class="num">${odds.c ?? '—'}%</td>
          <td>common; minor or no effect at the ground</td></tr>
      <tr><td>M class</td><td class="num">${odds.m ?? '—'}%</td>
          <td>radio blackouts on the sunlit side</td></tr>
      <tr><td>X class</td><td class="num">${odds.x ?? '—'}%</td>
          <td>strong blackouts, possible radiation storm</td></tr>
    </tbody></table>
    <p class="tile-meta">Issued for ${escapeHtml(odds.date)}.</p>` : ''}

    ${f.flares.length ? `<h3>Recent flares</h3>
    <table class="prov"><tbody>${f.flares.slice(0, 6).map((fl) => `
      <tr><td class="num">${escapeHtml(fl.maxClass)}</td>
          <td class="num">${hhmmUTC(fl.max ?? fl.begin)}</td>
          <td>${fl.region ? `region ${fl.region}` : ''}
            <span class="tile-meta">${formatAge((Date.now() - Date.parse(fl.begin)) / 1000)} ago</span></td></tr>`).join('')}
    </tbody></table>` : ''}

    ${f.f107.value !== null ? `<h3>Solar radio flux</h3>
    <p>F10.7 at <b class="sentence-num">${f.f107.value}</b> solar flux units — the standard
    proxy for solar activity and the driver of upper-atmosphere density, so it sets how fast
    satellites in low orbit decay.</p>` : ''}

    ${enlilSection(f.enlil, cmes)}

    ${three ? `<h3>NOAA 3-day forecast</h3>
    <pre class="product">${escapeHtml(three.body)}</pre>
    ${three.issued ? `<p class="tile-meta">Issued ${escapeHtml(three.issued)}.
      <a href="${FORECAST_LINK.threeDay}" rel="noreferrer noopener" target="_blank">Source</a>.</p>` : ''}` : ''}

    ${disc ? `<h3>Forecaster discussion</h3>
    <pre class="product">${escapeHtml(disc.body)}</pre>
    ${disc.issued ? `<p class="tile-meta">Issued ${escapeHtml(disc.issued)}.</p>` : ''}` : ''}`;
}

/**
 * WSA-Enlil at Earth. This is the only physics-based forecast on the panel —
 * everything else in this tab is NOAA's prose or a probability table — so the
 * section leads with what the model expects and then says plainly what kind of
 * claim that is.
 */
function enlilSection(run: EnlilRun | null, cmes: Cme[] = []): string {
  if (!run || run.ahead.length === 0) return '';

  const peak = run.peakSpeed;
  const arrival = run.cloudArrival;
  const nowSpeed = run.past[run.past.length - 1]?.speed ?? null;

  const speedSpark = panelSpark(enlilSeries(run.ahead, 'speed'), {
    unit: 'km/s', format: (v) => v.toFixed(0), extremes: true, direction: 'future',
  });
  const cloudSpark = panelSpark(enlilSeries(run.ahead, 'cloud'), {
    unit: '', format: (v) => v.toFixed(2), rule: CLOUD_ARRIVAL, direction: 'future',
  });

  const hours = (t: string): string => {
    const h = (Date.parse(t) - Date.now()) / 3_600_000;
    return h < 1 ? 'within the hour' : `in about ${Math.round(h)} h`;
  };

  return `<h3>WSA-Enlil — the wind at Earth, forecast</h3>
    <p>A magnetohydrodynamic simulation of the inner heliosphere sampled at Earth
    <span class="badge badge-d">D</span>, run by NOAA from solar magnetograms and the
    analysed CME cones. It is the only forecast here that solves the physics rather than
    extrapolating, and unlike our own cone propagation it accounts for drag.</p>

    <p>Radial speed over the next
    ${Math.round((Date.parse(run.lastTime!) - Date.now()) / 3_600_000)} hours${
      nowSpeed !== null ? `, from <b class="sentence-num">${nowSpeed.toFixed(0)}</b> km/s now` : ''}:</p>
    ${speedSpark}
    ${peak?.speed != null ? `<p>Peaks at <b class="sentence-num">${peak.speed.toFixed(0)}</b> km/s
      ${hours(peak.time)} — ${hhmmUTC(peak.time)} UTC on
      ${new Date(peak.time).toUTCString().slice(0, 11)}.</p>` : ''}

    <h3>Ejecta at Earth</h3>
    <p class="fine">The model carries a passive tracer that marks CME plasma. It is a mixing
    fraction, not a density and not a probability — it says where the ejection is in the
    simulation, and the simulation can be wrong about that.</p>
    ${cloudSpark}
    ${arrival
      ? `<p>The tracer crosses ${CLOUD_ARRIVAL} at <b class="sentence-num">${hhmmUTC(arrival.time)}</b> UTC
         on ${new Date(arrival.time).toUTCString().slice(0, 11)}, ${hours(arrival.time)} —
         the model's arrival for the ejection now in flight.</p>
         ${coneVsEnlil(arrival.time, cmes)}`
      : `<p>The tracer stays below ${CLOUD_ARRIVAL} throughout the run: no ejecta reach Earth
         in the model's window.${cmes.some((c) => c.earthDirected && c.arrival
           && Date.parse(c.arrival.time) > Date.now())
           ? ' Our cone propagation does put one here — the two disagree, and Enlil is the '
             + 'one that solves the physics.' : ''}</p>`}
    <p class="fine">Model output starts ${new Date(run.firstTime!).toUTCString().slice(0, 11)}
    at ${hhmmUTC(run.firstTime!)} UTC — ${run.past.length}
    samples already elapsed and ${run.ahead.length} still ahead. The elapsed half is checked
    against the measured wind in the Checks panel.</p>`;
}

/**
 * Our constant-speed cone arrival against Enlil's. This is the comparison the
 * cone panel has been promising since it shipped: the cone ignores drag, so it
 * should run *early* against a model that includes it, and by how much is worth
 * seeing rather than asserting.
 */
export function coneVsEnlil(enlilTime: string, cmes: Cme[]): string {
  const inbound = cmes
    .filter((c) => c.earthDirected && c.arrival && Date.parse(c.arrival.time) > Date.now())
    .sort((a, b) => Date.parse(a.arrival!.time) - Date.parse(b.arrival!.time));
  const c = inbound[0];
  if (!c?.arrival) {
    return `<p class="fine">No Earth-directed cone of ours has an arrival still ahead, so
      there is nothing to compare this against.</p>`;
  }
  // DONKI sometimes supplies its own Enlil-derived arrival; comparing that
  // against Enlil would be comparing the model with itself.
  if (c.arrivalFromEnlil) {
    return `<p class="fine">The arrival in the CME panel is NOAA and NASA's own Enlil
      figure, so it is the same model and not an independent comparison.</p>`;
  }
  const deltaH = (Date.parse(enlilTime) - Date.parse(c.arrival.time)) / 3_600_000;
  const early = deltaH > 0;
  return `<p>Our cone puts it at <b class="sentence-num">${hhmmUTC(c.arrival.time)}</b> UTC,
    <b class="sentence-num">${Math.abs(deltaH).toFixed(0)} h</b>
    ${early ? 'earlier' : 'later'} than Enlil.
    ${early
      ? 'That is the expected direction: the cone carries the ejection at the constant speed '
        + 'DONKI measured near the Sun, and real ejections decelerate toward the ambient wind. '
        + 'Enlil is the better number; ours is the geometry.'
      : 'That is the wrong direction for the usual reason — constant-speed propagation should '
        + 'run early against a model that includes drag — so either the cone speed is below the '
        + 'ambient wind, in which case the ejection accelerates, or the two are tracking '
        + 'different structures.'}</p>`;
}

const FORECAST_LINK = {
  threeDay: 'https://services.swpc.noaa.gov/text/3-day-forecast.txt',
};

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
    ${renderMonitors(state.spacecraft?.data ?? [], state.now?.data.solar_wind?.speed ?? null)}
    <h3>Models cited</h3>
    <p>Shue et al. 1998 (doi:10.1029/98JA01103) — magnetopause.<br>
    Farris &amp; Russell 1994 — bow shock.<br>
    IGRF-14 (IAGA, epoch 2025.0) — the geomagnetic field and its lines.<br>
    OVATION Prime (NOAA SWPC) — aurora probability.<br>
    astronomy-engine (VSOP87/Meeus) — every position, and the sub-solar point.</p>`;
}

/** Earth radii to kilometres, for the panel's plain-language distances. */
const RE_KM = 6371.2;

/**
 * The monitors, and what their position costs us. The paragraph exists because
 * the off-axis number has a consequence: the wind is structured on scales far
 * smaller than 44 Rₑ, so a spacecraft that far off the line is not guaranteed
 * to sample the plasma that arrives here.
 */
export function renderMonitors(list: SpacecraftPos[], speedKms: number | null): string {
  if (list.length === 0) return '';
  const active = list.find((s) => s.active) ?? null;

  const rows = list.map((s) => `<tr${s.active ? ' class="l1-row-active"' : ''}>
      <td>${escapeHtml(s.source)}${s.active ? ' <span class="tag-live">live</span>' : ''}</td>
      <td class="num">${s.distanceRe.toFixed(0)}</td>
      <td class="num">${s.offAxisRe.toFixed(1)}</td>
      <td class="num">${s.offAxisDeg.toFixed(1)}°</td>
    </tr>`).join('');

  const notes = list.map((s) => {
    const n = SPACECRAFT_NOTE[s.source];
    return n ? `<br><b>${escapeHtml(s.source)}</b> — ${escapeHtml(n)}` : '';
  }).join('');

  let transit = '';
  if (active && speedKms && speedKms > 0) {
    const minutes = (active.distanceRe * RE_KM) / speedKms / 60;
    transit = ` At the ${speedKms.toFixed(0)} km/s now measured, the wind it is
      sampling reaches Earth about ${minutes.toFixed(0)} minutes later.`;
  }

  const offAxis = active
    ? `<p>${escapeHtml(active.source)} is
       ${(active.distanceRe * RE_KM / 1e6).toFixed(2)} million km upstream and
       <b>${active.offAxisRe.toFixed(1)} Rₑ off the Sun–Earth line</b> —
       ${active.offAxisDeg.toFixed(1)}° away from the direction the wind actually has to
       travel to reach us.${transit}</p>
       <p class="fine">The solar wind is structured on scales smaller than that offset, so
       the monitor does not always sample the plasma that arrives. It is the best warning
       there is, and it is not the same thing as a measurement taken here.</p>`
    : '<p>No spacecraft is currently flagged operational in the ephemeris feed.</p>';

  return `<h3>The monitors</h3>
    ${l1Inset(list)}
    <p class="fine caption">Looking sunward along the Sun–Earth line. Nothing here is
    compressed — Earth, the Moon’s orbit and the spacecraft offsets are one scale.</p>
    <table class="prov l1-table">
      <thead><tr><th>Craft</th><th>Rₑ out</th><th>Rₑ off</th><th>Angle</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    ${offAxis}
    <p class="fine">${notes.replace(/^<br>/, '')}</p>`;
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

/**
 * Century-scale context. Two sparklines: the whole record, and the last three
 * cycles. The point of the first is that today's number is unremarkable, which
 * only a 275-year line can say.
 */
function solarCyclePanel(c: SolarCycle | null, loading: boolean): string {
  if (!c) {
    return loading
      ? '<h3>Solar cycle</h3><p class="tile-meta">Loading the sunspot record…</p>'
      : '';
  }
  const now = c.latest;
  const years = c.ssn.time.length / 12;
  return `
    <h3>Solar cycle</h3>
    <p>Monthly sunspot number since ${escapeHtml(c.ssn.time[0]!.slice(0, 4))} —
    ${Math.round(years)} years, the longest continuous record in science.</p>
    ${panelSpark(c.ssn, { extremes: true, format: (v) => v.toFixed(0), unit: 'spots',
      label: 'monthly sunspot number, full record' })}
    <p>The last three cycles:</p>
    ${panelSpark(tail(c.ssn, 33 * 12), { extremes: true, format: (v) => v.toFixed(0),
      unit: 'spots', label: 'monthly sunspot number, last 33 years' })}
    <p class="tile-meta">
      ${now?.ssn !== null && now !== null ? `Now <b class="sentence-num">${now.ssn.toFixed(0)}</b>
        for ${escapeHtml(now.month)}` : 'Latest month unavailable'}${
      c.allTimeMax ? ` · record <b class="sentence-num">${c.allTimeMax.ssn.toFixed(0)}</b>
        in ${escapeHtml(c.allTimeMax.month)}` : ''}.
      <span class="badge badge-e">E</span> NOAA SWPC solar-cycle indices.</p>`;
}

export function renderSun(
  sun: SunState, specs: Array<{ id: string; label: string }>,
  cycle: SolarCycle | null = null, cycleLoading = false,
): string {
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
    <p class="tile-meta">${L.skippedDropouts > 0
      ? `The newest ${L.skippedDropouts} frame${L.skippedDropouts > 1 ? 's were' : ' was'} a
         data dropout — a valid but near-empty image — so this is the newest usable one. `
      : 'Showing the newest frame. '}Upstream published ${L.totalAvailable} frames
    over ${L.spanHours.toFixed(0)} hours; playback samples ${n} of them evenly, always keeping
    the newest. Each frame carries its own observation time.
    <a href="${L.sourceUrl}" rel="noreferrer noopener" target="_blank">Frame list</a>.</p>
    ${solarCyclePanel(cycle, cycleLoading)}`;
}

/** Picks the right series and scaling for an instrument's detail sparkline. */
function detailSpark(inst: { id: string; series?: string; unit: string }, state: StoreState): string {
  if (inst.id === 'kp' && state.kpSeries) {
    return panelSpark(state.kpSeries, { band: [0, 4], unit: 'Kp', format: (v) => v.toFixed(2),
      label: 'Kp history, quiet band shaded' });
  }
  if (inst.id === 'dst' && state.dstSeries) {
    return panelSpark(state.dstSeries, { unit: 'nT', format: (v) => v.toFixed(0),
      // Zero is the meaningful reference for Dst: the ring current only ever
      // subtracts, so the whole trace hangs below the rule. The band is the
      // quiet range, above −30 nT.
      rule: 0, band: [-30, 0], extremes: true });
  }
  if (inst.id === 'geosync' && state.geosyncSeries) {
    return panelSpark(state.geosyncSeries, { unit: 'nT', format: (v) => v.toFixed(0),
      label: 'total field at geostationary orbit' });
  }
  if (inst.id === 'protons' && state.protonSeries) {
    return panelSpark(state.protonSeries, { log: true, unit: 'pfu',
      format: (v) => v.toFixed(2), label: 'proton flux above 10 MeV, logarithmic' });
  }
  if (inst.id === 'electrons' && state.electronSeries) {
    return panelSpark(state.electronSeries, { log: true, unit: 'pfu',
      format: (v) => v.toFixed(0), label: 'electron flux above 2 MeV, logarithmic' });
  }
  if (inst.id === 'xray' && state.xraySeries) {
    return panelSpark(state.xraySeries, { log: true, unit: 'W/m²',
      format: (v) => v.toExponential(1), label: 'X-ray flux history, log scale' });
  }
  if (!inst.series || !state.series) return '';
  const col = inst.series as 'bz_gsm' | 'bt' | 'speed' | 'density';
  return panelSpark(
    { time: state.series.data.time, value: state.series.data[col] },
    { rule: col === 'bz_gsm' ? 0 : null, unit: inst.unit,
      format: (v) => (col === 'speed' ? v.toFixed(0) : v.toFixed(1)),
      label: `${inst.id} history` },
  );
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
    ${detailSpark(inst, state)}
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
