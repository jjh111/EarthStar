/**
 * Instrument strip, alerts ticker, Situation Report and provenance drawer.
 * Every tile renders `value · unit · HH:MM UTC · [badge]`, dims when stale, and
 * says "no data" rather than showing a number it does not have.
 */

import type { PartMeta } from '../data/source.js';
import type { Now } from '../contract/types.js';
import type { StoreState } from '../data/store.js';
import {
  NO_DATA, badgeFor, badgeTitle, fmt, fmtInt, hhmmUTC, stalenessOf,
} from './format.js';
import { buildSituationReport, type SceneNarration } from './situation-report.js';
import { scaleLabel } from '../scene/scales.js';

interface TileSpec {
  id: string;
  label: string;
  unit: string;
  part: keyof Now;
  value: (d: Now | null) => string;
  detail?: (d: Now | null) => string;
}

const TILES: TileSpec[] = [
  {
    id: 'kp', label: 'Planetary K', unit: 'Kp', part: 'kp',
    value: (d) => fmt(d?.kp?.estimated_kp ?? null, 2),
    detail: (d) => (d?.kp?.kp ? `NOAA label ${d.kp.kp}` : ''),
  },
  {
    id: 'bz', label: 'IMF Bz (GSM)', unit: 'nT', part: 'solar_wind',
    value: (d) => fmt(d?.solar_wind?.bz_gsm ?? null, 1),
    detail: (d) => {
      const bz = d?.solar_wind?.bz_gsm;
      if (bz === null || bz === undefined) return '';
      return bz < 0 ? 'southward — couples energy in' : 'northward';
    },
  },
  {
    id: 'bt', label: 'IMF total', unit: 'nT', part: 'solar_wind',
    value: (d) => fmt(d?.solar_wind?.bt ?? null, 1),
  },
  {
    id: 'speed', label: 'Wind speed', unit: 'km/s', part: 'solar_wind',
    value: (d) => fmtInt(d?.solar_wind?.speed ?? null),
    detail: (d) => (d?.solar_wind?.spacecraft ? `via ${d.solar_wind.spacecraft}` : ''),
  },
  {
    id: 'density', label: 'Proton density', unit: 'cm⁻³', part: 'solar_wind',
    value: (d) => fmt(d?.solar_wind?.density ?? null, 1),
  },
  {
    id: 'xray', label: 'X-ray class', unit: '0.1–0.8 nm', part: 'xray',
    value: (d) => d?.xray?.class ?? NO_DATA,
    detail: (d) => (d?.xray?.flux_long != null ? `${d.xray.flux_long.toExponential(1)} W/m²` : ''),
  },
  {
    id: 'mpause', label: 'Magnetopause', unit: 'Rₑ', part: 'magnetopause',
    value: (d) => fmt(d?.magnetopause?.standoff_re ?? null, 1),
    detail: () => 'Shue et al. 1998',
  },
];

export class Hud {
  private top: HTMLElement;
  private bottom: HTMLElement;
  private tiles = new Map<string, HTMLElement>();
  private scalesEl!: HTMLElement;
  private tickerEl!: HTMLElement;
  private reportEl!: HTMLElement;
  private statusEl!: HTMLElement;
  private scaleEl!: HTMLElement;
  private drawerEl!: HTMLElement;
  private narration: SceneNarration = { mode: 'globe', view: 'deck', reducedMotion: false };

  constructor(top: HTMLElement, bottom: HTMLElement) {
    this.top = top;
    this.bottom = bottom;
    this.build();
  }

  setNarration(n: SceneNarration): void { this.narration = n; }

  private build(): void {
    this.top.innerHTML = '';
    this.bottom.innerHTML = '';

    const strip = document.createElement('div');
    strip.className = 'strip';
    strip.setAttribute('role', 'group');
    strip.setAttribute('aria-label', 'Space weather instruments');

    for (const t of TILES) {
      const tile = document.createElement('article');
      tile.className = 'tile';
      tile.id = `tile-${t.id}`;
      tile.innerHTML = `
        <h3 class="tile-label">${t.label}</h3>
        <p class="tile-value"><span data-v>—</span><span class="tile-unit">${t.unit}</span></p>
        <p class="tile-meta"><span data-badge class="badge">E</span><span data-time>—</span></p>
        <p class="tile-detail" data-detail></p>`;
      this.tiles.set(t.id, tile);
      strip.appendChild(tile);
    }

    const scales = document.createElement('article');
    scales.className = 'tile tile-scales';
    scales.id = 'tile-scales';
    scales.innerHTML = `
      <h3 class="tile-label">NOAA scales</h3>
      <p class="scales-row" data-scales></p>
      <p class="tile-meta"><span class="badge badge-d">D</span><span data-time>—</span></p>
      <p class="tile-detail">R radio · S radiation · G geomagnetic</p>`;
    this.scalesEl = scales;
    strip.appendChild(scales);

    const ticker = document.createElement('div');
    ticker.className = 'ticker';
    ticker.setAttribute('role', 'status');
    ticker.setAttribute('aria-label', 'NOAA alerts');
    ticker.innerHTML = '<span class="ticker-tag">NOAA</span><span data-ticker>Loading alerts…</span>';
    this.tickerEl = ticker;

    const status = document.createElement('p');
    status.className = 'status';
    status.setAttribute('role', 'status');
    this.statusEl = status;

    const scale = document.createElement('p');
    scale.className = 'status status-scale';
    this.scaleEl = scale;

    // A <details> so the scene can be uncovered, open by default so the
    // narration is present for assistive tech without any interaction.
    const report = document.createElement('details');
    report.className = 'report';
    report.open = true;
    report.innerHTML = `
      <summary><h2 id="report-h">Situation Report</h2></summary>
      <div class="report-body" data-report aria-live="polite" aria-atomic="false"></div>`;
    this.reportEl = report.querySelector('[data-report]') as HTMLElement;

    const drawer = document.createElement('details');
    drawer.className = 'drawer';
    drawer.innerHTML = '<summary>Provenance — every source, tier and timestamp</summary><div data-drawer></div>';
    this.drawerEl = drawer.querySelector('[data-drawer]') as HTMLElement;

    // Instruments and the alert ticker ride at the top, the narration at the
    // bottom, so the scene keeps the middle of the frame.
    this.top.append(strip, ticker, status, scale);
    this.bottom.append(report, drawer);
  }

  render(state: StoreState): void {
    const env = state.now;
    const d = env?.data ?? null;
    const now = new Date();

    for (const t of TILES) {
      const el = this.tiles.get(t.id)!;
      const meta: PartMeta | undefined = env?.parts?.[t.part];
      const s = stalenessOf(meta, now);
      const raw = t.value(d);

      el.classList.toggle('is-stale', s.state === 'stale');
      el.classList.toggle('is-nodata', s.state === 'no-data' || raw === NO_DATA);

      (el.querySelector('[data-v]') as HTMLElement).textContent = raw;
      const badge = el.querySelector('[data-badge]') as HTMLElement;
      const b = badgeFor(meta);
      badge.textContent = b;
      badge.className = `badge badge-${b.toLowerCase()}`;
      badge.title = badgeTitle(meta);
      (el.querySelector('[data-time]') as HTMLElement).textContent = s.label;
      (el.querySelector('[data-detail]') as HTMLElement).textContent =
        s.state === 'no-data' ? '' : (t.detail?.(d) ?? '');

      const unit = el.querySelector('.tile-unit')!.textContent;
      el.setAttribute('aria-label',
        `${t.label}: ${raw === NO_DATA ? 'no data' : `${raw} ${unit}`}, ${s.label}, tier ${badgeTitle(meta)}`);
    }

    // NOAA scales
    const sc = d?.scales;
    const row = this.scalesEl.querySelector('[data-scales]') as HTMLElement;
    if (sc) {
      row.innerHTML = (['R', 'S', 'G'] as const).map((k) => {
        const v = sc[k];
        const n = v.scale ?? null;
        return `<span class="scale-chip scale-${n ?? 'na'}" title="${k} — ${v.text ?? 'no data'}">${k}${n ?? '–'}</span>`;
      }).join('');
    } else {
      row.textContent = NO_DATA;
    }
    const scMeta = env?.parts?.scales;
    (this.scalesEl.querySelector('[data-time]') as HTMLElement).textContent =
      stalenessOf(scMeta, now).label;
    this.scalesEl.classList.toggle('is-nodata', !sc);

    // Alerts ticker
    const tick = this.tickerEl.querySelector('[data-ticker]') as HTMLElement;
    if (d?.alerts?.length) {
      tick.textContent = d.alerts
        .slice(0, 4)
        .map((a) => `${hhmmUTC(a.issued)} UTC — ${a.headline || a.product}`)
        .join('   •   ');
    } else {
      tick.textContent = d ? 'No alerts, watches or warnings in the feed.' : NO_DATA;
    }

    // Connection status — an honest line about the last refresh.
    if (state.lastError) {
      this.statusEl.textContent =
        `Last refresh failed (${state.lastError}) at ${hhmmUTC(state.lastAttempt)} UTC. ` +
        `Showing the last good data, ageing.`;
      this.statusEl.classList.add('is-error');
    } else if (state.loading && !env) {
      this.statusEl.textContent = 'Fetching live data from NOAA SWPC…';
      this.statusEl.classList.remove('is-error');
    } else if (env) {
      this.statusEl.textContent =
        `Live · ${env.source} · refreshed ${hhmmUTC(env.fetched_at)} UTC · ` +
        `adapter: DirectSource (stage A)`;
      this.statusEl.classList.remove('is-error');
    }
    // The scale mode is never hidden and never implicit (charter §2).
    this.scaleEl.textContent = scaleLabel(this.narration.mode);

    // Situation Report
    const lines = buildSituationReport(env, this.narration, now);
    this.reportEl.innerHTML = lines.map((l) => `<p>${escapeHtml(l)}</p>`).join('');

    // Provenance drawer
    this.drawerEl.innerHTML = env
      ? `<table class="prov"><thead><tr><th>Element</th><th>Tier</th><th>Source</th><th>Data time (UTC)</th><th>Latency</th></tr></thead><tbody>${
        Object.entries(env.parts).map(([k, m]) => `<tr>
            <td>${k}</td>
            <td><span class="badge badge-${badgeFor(m).toLowerCase()}">${badgeFor(m)}</span> ${m.tier}${m.model ? ` · ${escapeHtml(m.model.name)}` : ''}</td>
            <td><a href="${m.source_url}" rel="noreferrer noopener" target="_blank">${escapeHtml(m.source)}</a></td>
            <td>${m.data_time ? hhmmUTC(m.data_time) : NO_DATA}</td>
            <td>${m.error ? `<span class="err">${escapeHtml(m.error)}</span>` : m.latency_s === null ? NO_DATA : `${m.latency_s}s`}</td>
          </tr>`).join('')
      }</tbody></table>
      <p class="prov-note">Models cited in-app: Shue et al. 1998 (doi:10.1029/98JA01103) for the
      magnetopause; astronomy-engine (VSOP87/Meeus-derived) for all positions and the sub-solar point.
      Ambient elements — corona texture, starfield, colour — are artwork and carry the M badge.</p>`
      : '<p>No envelope loaded yet.</p>';
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}
