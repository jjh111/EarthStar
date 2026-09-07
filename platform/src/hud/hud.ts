/**
 * HUD orchestration: the instrument rail over the scene, and the margin column
 * beside it. Tiles are buttons — selecting one opens its detail in the margin.
 */


import type { PartMeta } from '../data/source.js';
import type { StoreState } from '../data/store.js';
import type { CheckResult } from '../data/checks.js';
import type { ForecastBundle } from '../data/forecast.js';
import type { SolarCycle } from '../data/solar-cycle.js';
import { LOOPS, type ImageLoop } from '../data/solar-imagery.js';
import {
  NO_DATA, badgeFor, badgeTitle, formatAge, hhmmUTC, stalenessOf,
} from './format.js';
import { INSTRUMENTS } from './instruments.js';
import {
  TABS, escapeHtml, renderChecks, renderDetail, renderForecast, renderReport,
  renderSources, renderSun, type SunState, type TabId,
} from './margin.js';
import type { SceneNarration } from './situation-report.js';

export interface HudCallbacks {
  onSelectLoop(id: string): void;
  onLoadForecast(): void;
  onToggleSunPlay(): void;
  onScrubSun(index: number): void;
  onRunChecks(): void;
  onLoadCycle(): void;
}

export class Hud {
  private instrumentsEl: HTMLElement;
  private tickerEl: HTMLElement;
  private tabsEl: HTMLElement;
  private bodyEl: HTMLElement;
  private statusEl: HTMLElement;
  private clockEl: HTMLElement;

  private tiles = new Map<string, HTMLElement>();
  private tab: TabId = 'report';
  private detailId: string | null = null;
  private checksRequested = false;

  private state: StoreState | null = null;
  private checks: CheckResult | null = null;
  private checksRunning = false;
  private forecast: ForecastBundle | null = null;
  private forecastLoading = false;
  private forecastRequested = false;
  private cycle: SolarCycle | null = null;
  private cycleLoading = false;
  private cycleRequested = false;
  private sun: SunState = {
    loop: null, loopId: LOOPS[0]!.id, frameIndex: 0,
    playing: false, loading: true, preloaded: 0, preloading: false,
  };
  private narration: SceneNarration = {
    mode: 'globe', view: 'deck', reducedMotion: false,
    shield: true, fieldLines: { lines: 0, points: 0 }, aurora: true,
    cmes: { shown: true, count: 0 },
  };

  constructor(private cb: HudCallbacks) {
    this.instrumentsEl = document.getElementById('instruments') as HTMLElement;
    this.tickerEl = document.getElementById('ticker') as HTMLElement;
    this.tabsEl = document.getElementById('tabs') as HTMLElement;
    this.bodyEl = document.getElementById('margin-body') as HTMLElement;
    this.statusEl = document.getElementById('status') as HTMLElement;
    this.clockEl = document.getElementById('clock') as HTMLElement;
    this.buildTiles();
    this.buildTabs();
    this.bindMargin();
  }

  setNarration(n: SceneNarration): void { this.narration = n; }
  setChecks(c: CheckResult | null, running: boolean): void {
    this.checks = c; this.checksRunning = running; this.renderMargin();
  }

  setCycle(c: SolarCycle | null, loading: boolean): void {
    this.cycle = c; this.cycleLoading = loading; this.renderMargin();
  }

  setForecast(f: ForecastBundle | null, loading: boolean): void {
    this.forecast = f; this.forecastLoading = loading; this.renderMargin();
  }
  setSunLoop(loop: ImageLoop | null, loading: boolean): void {
    this.sun.loop = loop;
    this.sun.loading = loading;
    // Open on the newest usable frame — the current Sun, not yesterday's, and
    // not a dropout that would render as a black square.
    this.sun.frameIndex = loop ? loop.newestGood : 0;
    this.sun.playing = false;
    this.sun.preloaded = 0;
    this.sun.preloading = false;
    this.renderMargin();
  }

  setSunPreload(loaded: number, preloading: boolean): void {
    this.sun.preloaded = loaded;
    this.sun.preloading = preloading;
    if (this.tab === 'sun') this.renderMargin();
  }
  setSunFrame(i: number): void {
    this.sun.frameIndex = i;
    if (this.tab === 'sun') this.updateSunFrame();
  }
  setSunPlaying(p: boolean): void { this.sun.playing = p; if (this.tab === 'sun') this.renderMargin(); }
  get sunState(): SunState { return this.sun; }
  get activeTab(): TabId { return this.tab; }

  /* ---------------- construction ---------------- */

  private buildTiles(): void {
    this.instrumentsEl.innerHTML = '';
    for (const inst of INSTRUMENTS) {
      const el = document.createElement('button');
      el.className = 'tile';
      el.id = `tile-${inst.id}`;
      el.type = 'button';
      el.innerHTML = `
        <span class="tile-label">${escapeHtml(inst.label)}</span>
        <span class="tile-value"><span data-v>—</span><span class="tile-unit">${escapeHtml(inst.unit)}</span></span>
        <span class="tile-meta"><span data-badge class="badge">E</span><span data-time>—</span></span>`;
      el.addEventListener('click', () => this.openDetail(inst.id));
      this.tiles.set(inst.id, el);
      this.instrumentsEl.appendChild(el);
    }

    // NOAA scales are three values, so they get their own shape.
    const scales = document.createElement('div');
    scales.className = 'tile';
    scales.id = 'tile-scales';
    scales.innerHTML = `
      <span class="tile-label">NOAA scales</span>
      <span class="scales-row" data-scales></span>
      <span class="tile-meta"><span class="badge badge-d">D</span><span data-time>—</span></span>`;
    this.tiles.set('scales', scales);
    this.instrumentsEl.appendChild(scales);

    const aurora = document.createElement('button');
    aurora.className = 'tile';
    aurora.id = 'tile-aurora';
    aurora.type = 'button';
    aurora.innerHTML = `
      <span class="tile-label">Aurora peak</span>
      <span class="tile-value"><span data-v>—</span><span class="tile-unit">%</span></span>
      <span class="tile-meta"><span class="badge badge-d">D</span><span data-time>—</span></span>`;
    aurora.addEventListener('click', () => this.selectTab('report'));
    this.tiles.set('aurora', aurora);
    this.instrumentsEl.appendChild(aurora);
  }

  private buildTabs(): void {
    this.tabsEl.innerHTML = TABS.map((t) =>
      `<button class="tab" role="tab" data-tab="${t.id}" aria-selected="${t.id === this.tab}">${t.label}</button>`).join('');
    this.tabsEl.addEventListener('click', (e) => {
      const t = (e.target as HTMLElement).closest('[data-tab]') as HTMLElement | null;
      if (t) this.selectTab(t.dataset['tab'] as TabId);
    });
  }

  /** Delegated, because the margin's contents are replaced wholesale on render. */
  private bindMargin(): void {
    this.bodyEl.addEventListener('click', (e) => {
      const el = e.target as HTMLElement;
      const loop = el.closest('[data-loop]') as HTMLElement | null;
      if (loop) { this.cb.onSelectLoop(loop.dataset['loop']!); return; }
      if (el.closest('#sun-play')) { this.cb.onToggleSunPlay(); return; }
    });
    this.bodyEl.addEventListener('input', (e) => {
      const el = e.target as HTMLInputElement;
      if (el.id === 'sun-scrub') this.cb.onScrubSun(Number(el.value));
    });
  }

  selectTab(tab: TabId): void {
    this.tab = tab;
    if (tab !== 'detail') this.detailId = null;
    for (const b of this.tabsEl.querySelectorAll('[data-tab]')) {
      b.setAttribute('aria-selected', String(b.getAttribute('data-tab') === tab));
    }
    for (const [, el] of this.tiles) el.removeAttribute('aria-current');
    // Both of these cost network round trips; fetch only when asked for.
    if (tab === 'checks' && !this.checksRequested) {
      this.checksRequested = true;
      this.cb.onRunChecks();
    }
    // 35 KB of monthly history, fetched once, only if the panel is opened.
    if (tab === 'sun' && !this.cycleRequested) {
      this.cycleRequested = true;
      this.cb.onLoadCycle();
    }
    if (tab === 'forecast' && !this.forecastRequested) {
      this.forecastRequested = true;
      this.cb.onLoadForecast();
    }
    this.renderMargin();
  }

  private openDetail(id: string): void {
    this.tab = 'detail';
    this.detailId = id;
    for (const b of this.tabsEl.querySelectorAll('[data-tab]')) b.setAttribute('aria-selected', 'false');
    for (const [k, el] of this.tiles) {
      if (el.tagName === 'BUTTON') el.setAttribute('aria-current', String(k === id));
    }
    this.renderMargin();
    this.bodyEl.focus();
  }

  /* ---------------- rendering ---------------- */

  render(state: StoreState): void {
    this.state = state;
    const now = new Date();
    const env = state.now;
    const d = env?.data ?? null;

    this.clockEl.textContent =
      `${now.toISOString().slice(0, 10)} ${hhmmUTC(now.toISOString())} UTC`;

    for (const inst of INSTRUMENTS) {
      const el = this.tiles.get(inst.id)!;
      const meta: PartMeta | undefined = env?.parts?.[inst.part];
      const s = stalenessOf(meta, now);
      const raw = inst.value(d);
      el.classList.toggle('is-stale', s.state === 'stale');
      el.classList.toggle('is-nodata', s.state === 'no-data' || raw === NO_DATA);

      (el.querySelector('[data-v]') as HTMLElement).textContent = raw;
      const badge = el.querySelector('[data-badge]') as HTMLElement;
      const b = badgeFor(meta);
      badge.textContent = b;
      badge.className = `badge badge-${b.toLowerCase()}`;
      const detail = inst.detail?.(d) ?? '';
      (el.querySelector('[data-time]') as HTMLElement).textContent =
        s.state === 'fresh' && detail ? detail : s.state === 'fresh'
          ? `${formatAge(s.ageS ?? 0)} old` : s.label;
      el.setAttribute('title',
        `${inst.label}: ${raw === NO_DATA ? 'no data' : `${raw} ${inst.unit}`} · ${s.label} · ${badgeTitle(meta)}`);
      el.setAttribute('aria-label',
        `${inst.label}: ${raw === NO_DATA ? 'no data' : `${raw} ${inst.unit}`}, ${s.label}. Open detail.`);
    }

    // NOAA scales
    const scalesEl = this.tiles.get('scales')!;
    const row = scalesEl.querySelector('[data-scales]') as HTMLElement;
    const sc = d?.scales;
    row.innerHTML = sc
      ? (['R', 'S', 'G'] as const).map((k) => {
        const n = sc[k].scale ?? null;
        return `<span class="scale-chip scale-${n ?? 'na'}" title="${k} — ${escapeHtml(sc[k].text ?? 'no data')}">${k}${n ?? '–'}</span>`;
      }).join('')
      : NO_DATA;
    (scalesEl.querySelector('[data-time]') as HTMLElement).textContent =
      stalenessOf(env?.parts?.scales, now).label;
    scalesEl.classList.toggle('is-nodata', !sc);

    // Aurora
    const auEl = this.tiles.get('aurora')!;
    const au = state.aurora;
    const auMeta: PartMeta | undefined = au
      ? {
        tier: 'modeled', source: au.source, source_url: au.source_url, model: au.model,
        data_time: au.data?.observation_time ?? null, latency_s: au.latency_s,
        stale_after_s: au.stale_after_s,
      }
      : undefined;
    const auS = stalenessOf(auMeta, now);
    (auEl.querySelector('[data-v]') as HTMLElement).textContent =
      au?.data ? String(au.data.max_probability) : NO_DATA;
    (auEl.querySelector('[data-time]') as HTMLElement).textContent =
      au?.data ? `valid ${hhmmUTC(au.data.forecast_time)}` : auS.label;
    auEl.classList.toggle('is-stale', auS.state === 'stale');
    auEl.classList.toggle('is-nodata', !au?.data);

    // Ticker
    this.tickerEl.innerHTML =
      '<span class="ticker-tag">NOAA</span><span class="ticker-items" data-t></span>';
    const t = this.tickerEl.querySelector('[data-t]') as HTMLElement;
    t.innerHTML = d?.alerts?.length
      ? d.alerts.slice(0, 6).map((a) =>
        `<span class="ticker-item">${hhmmUTC(a.issued)} ${escapeHtml(a.headline || a.product)}</span>`).join('')
      : `<span class="ticker-item">${d ? 'No alerts, watches or warnings in the feed.' : NO_DATA}</span>`;

    // Status
    if (state.lastError) {
      this.statusEl.textContent =
        `Last refresh failed (${state.lastError}) at ${hhmmUTC(state.lastAttempt)} UTC. Showing last good data, ageing.`;
      this.statusEl.classList.add('is-error');
    } else if (env) {
      this.statusEl.textContent =
        `Live · NOAA SWPC · refreshed ${hhmmUTC(env.fetched_at)} UTC · DirectSource (stage A)`;
      this.statusEl.classList.remove('is-error');
    } else {
      this.statusEl.textContent = 'Fetching live data from NOAA SWPC…';
    }

    this.renderMargin();
  }

  private renderMargin(): void {
    const state = this.state;
    if (!state) return;
    const now = new Date();
    switch (this.tab) {
      case 'report': this.bodyEl.innerHTML = renderReport(state, this.narration, now); break;
      case 'forecast':
        this.bodyEl.innerHTML = renderForecast(this.forecast, this.forecastLoading); break;
      case 'sun':
        this.bodyEl.innerHTML = renderSun(this.sun, LOOPS, this.cycle, this.cycleLoading); break;
      case 'sources': this.bodyEl.innerHTML = renderSources(state, this.checks); break;
      case 'checks': this.bodyEl.innerHTML = renderChecks(this.checks, this.checksRunning); break;
      case 'detail':
        this.bodyEl.innerHTML = this.detailId ? renderDetail(this.detailId, state, now) : '';
        break;
    }
  }

  /** Swap just the image while a loop plays, rather than re-rendering the panel. */
  private updateSunFrame(): void {
    const img = document.getElementById('sun-img') as HTMLImageElement | null;
    const f = this.sun.loop?.frames[this.sun.frameIndex];
    if (!img || !f) { this.renderMargin(); return; }
    img.src = f.url;
    const stamp = this.bodyEl.querySelector('.sun-stamp');
    if (stamp) {
      const age = Math.round((Date.now() - Date.parse(f.time)) / 60000);
      stamp.innerHTML = `<span>${hhmmUTC(f.time)} UTC</span><span>${age} min ago</span>`;
    }
    const scrub = document.getElementById('sun-scrub') as HTMLInputElement | null;
    if (scrub && document.activeElement !== scrub) scrub.value = String(this.sun.frameIndex);
  }
}
