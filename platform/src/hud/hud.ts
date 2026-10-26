/**
 * HUD orchestration: the instrument rail over the scene, and the margin column
 * beside it. Tiles are buttons — selecting one opens its detail in the margin.
 */


import type { AlertItem, Badge } from '../contract/types.js';
import type { PartMeta } from '../data/source.js';
import type { StoreState } from '../data/store.js';
import { errorReason, valueState, type DataState, type ValueStateResult } from '../data/state.js';
import type { FrameStats } from '../scene/viewer.js';
import { ImageCache } from './image-cache.js';
import type { CheckResult } from '../data/checks.js';
import type { ForecastBundle } from '../data/forecast.js';
import type { SolarCycle } from '../data/solar-cycle.js';
import { LOOPS, type ImageLoop } from '../data/solar-imagery.js';
import {
  NO_DATA, TIER_WORD, badgeFor, badgeTitle, formatAge, hhmmUTC, noticeWord, splitNotices,
  validityText, whenUTC,
} from './format.js';
import { INSTRUMENTS } from './instruments.js';
import { auroraMeta, partState, snapshotOutage } from './state-sentence.js';
import { subject } from './subjects.js';
import type { SunPlaneCalibration } from '../scene/sun-plane.js';
import { tileSpark } from './tile-spark.js';
import { inlineSpark } from './sparkline.js';
import {
  BODY_PREFIX, NOTICES_DETAIL, NOTICES_SUBJECT, TABS, escapeHtml, renderChecks, renderDetail,
  renderForecast, renderReport, renderSources, renderSun, type SunState, type TabId,
} from './margin.js';
import { buildSituationReport, type SceneNarration } from './situation-report.js';
import { briefingFilename, buildBriefing } from './briefing.js';

export interface HudCallbacks {
  onSelectLoop(id: string): void;
  onLoadForecast(): void;
  onToggleSunPlay(): void;
  onScrubSun(index: number): void;
  onRunChecks(): void;
  /** The solar frame now on screen, for the Sun in the scene. */
  onSunFrame?(image: HTMLImageElement): void;
  onCoronaFrame?(image: HTMLImageElement): void;
  onSelectCorona?(id: string | null): void;
  onLoadCycle(): void;
  onSunPlanes?(on: boolean): void;
}

/**
 * The NOAA notices as the header and the ticker carry them.
 *
 * Only a notice in force by NOAA's own validity may say "now" or "expected";
 * everything else says it has ended and carries its date. Among the current
 * ones the order is what NOAA's words mean rather than the clock: happening
 * now, then expected, then possible. When there is no notice to show, the
 * ticker states a fact instead — loading, unavailable with when it is
 * retried, or nothing in force as of a time — and never reassurance.
 */
export function noticeTicker(state: StoreState, now = new Date()): { top: AlertItem | null; items: string } {
  const env = state.now;
  const lane = {
    loading: state.lanes.snapshot, error: env ? null : state.lastError, nextAttempt: state.nextAttempt,
  };
  const st = valueState({ lane, received: !!env, meta: env?.parts?.alerts, now });
  const fact = (text: string, cls = ''): string =>
    `<span class="ticker-item level-none${cls}"><span class="alert-text">${escapeHtml(text)}</span></span>`;

  if (st.state === 'loading') return { top: null, items: fact('Loading NOAA notices…') };
  if (st.state === 'error') {
    const reason = errorReason(lane.error ?? env?.parts?.alerts?.error);
    const retry = state.nextAttempt ? `${hhmmUTC(state.nextAttempt)} UTC` : 'on the next refresh';
    return { top: null, items: fact(`NOAA notices unavailable — ${reason}; retrying ${retry}`, ' is-error') };
  }

  const { current, ended } = splitNotices(env?.data?.alerts ?? [], now);
  if (current.length === 0) {
    const last = ended[0];
    return {
      top: null,
      items: env ? fact(`No NOAA notice in force · checked ${hhmmUTC(env.fetched_at)} UTC${
        last ? ` · last: ${last.text || last.product} ${whenUTC(last.issued, now)}` : ''}`)
        : fact(NO_DATA),
    };
  }

  // Current first, then whatever ended in the last day, six at most.
  const dayAgo = now.getTime() - 24 * 3.6e6;
  const shown = [...current, ...ended.filter((a) => Date.parse(a.issued) >= dayAgo)].slice(0, 6);
  const items = shown.map((a) => {
    const live = current.includes(a);
    return `<span class="ticker-item level-${live ? a.level : 'summary'}" title="${
      escapeHtml(`${validityText(a, now)} — ${a.message.slice(0, 400)}`)}">`
      + `<span class="alert-level">${escapeHtml(noticeWord(a, now))}</span>`
      + `<span class="alert-text">${escapeHtml(a.text || a.product)}</span>`
      + `<span class="alert-time">${escapeHtml(whenUTC(a.issued, now))}${
        a.validityStated ? '' : ' · validity not stated'}</span></span>`;
  }).join('');
  return { top: current[0] ?? null, items };
}

export class Hud {
  private instrumentsEl: HTMLElement;
  private tickerEl: HTMLElement;
  private tickerExpanded = false;
  private fittingTicker = false;
  private tabsEl: HTMLElement;
  private bodyEl: HTMLElement;
  private statusEl: HTMLElement;
  private perfEl: HTMLElement;
  private headlineEl: HTMLAnchorElement;
  /** One line under the rail's head for a total outage, instead of thirteen alarms. */
  private outageEl: HTMLElement;
  private copyEl: HTMLButtonElement;
  private downloadEl: HTMLButtonElement;
  private perfKey = '';
  /** Last-drawn sparkline signature per tile, so an unchanged series is not redrawn. */
  private sparkKeys = new Map<string, string>();
  /**
   * Which collapsible sections the reader has opened or closed. Held in memory
   * and mirrored to localStorage, because the panel re-renders on every store
   * tick and a section that snapped shut once a minute would be unusable.
   */
  private sectionState = new Map<string, boolean>();
  /** Owns the solar frame elements so panel re-renders never cost a decode. */
  readonly images = new ImageCache();
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
  private forecastError: string | null = null;
  private cycle: SolarCycle | null = null;
  private cycleLoading = false;
  private cycleRequested = false;
  private cycleError: string | null = null;
  private sun: SunState = {
    loop: null, loopId: LOOPS[0]!.id, frameIndex: 0,
    playing: false, loading: true, preloaded: 0, preloading: false,
    error: null, retryAt: null,
    corona: null, coronaId: null, coronaLoading: false,
    coronaError: null, coronaRetryAt: null,
    diskPlane: null, coronaPlane: null,
  };
  private narration: SceneNarration = {
    mode: 'globe', view: 'deck', reducedMotion: false,
    shield: true, fieldLines: { lines: 0, points: 0 }, aurora: true,
    cmes: { shown: true, count: 0 },
  };

  constructor(private cb: HudCallbacks) {
    this.instrumentsEl = document.getElementById('instruments') as HTMLElement;
    this.tickerEl = document.getElementById('ticker') as HTMLElement;
    // The alert list is variable-length and the viewport is not, so how many
    // items fit is a measurement, not a constant. Re-fit on resize.
    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(() => this.fitTicker()).observe(this.tickerEl);
    }
    this.tabsEl = document.getElementById('tabs') as HTMLElement;
    this.bodyEl = document.getElementById('margin-body') as HTMLElement;
    this.bodyEl.addEventListener('click', this.onBodyClick);
    this.statusEl = document.getElementById('status') as HTMLElement;
    this.perfEl = document.getElementById('perf') as HTMLElement;
    this.headlineEl = document.getElementById('headline-alert') as HTMLAnchorElement;
    this.copyEl = document.getElementById('brief-copy') as HTMLButtonElement;
    this.downloadEl = document.getElementById('brief-download') as HTMLButtonElement;
    this.copyEl.addEventListener('click', () => void this.copyBriefing());
    this.loadSectionState();
    // `toggle` does not bubble, so it is captured rather than delegated.
    this.bodyEl.addEventListener('toggle', this.onSectionToggle, true);
    this.downloadEl.addEventListener('click', () => this.downloadBriefing());
    this.clockEl = document.getElementById('clock') as HTMLElement;
    this.outageEl = document.createElement('p');
    this.outageEl.className = 'rail-outage';
    this.outageEl.hidden = true;
    document.querySelector('.rail-head')?.after(this.outageEl);
    this.buildTiles();
    this.buildTabs();
    this.bindMargin();
  }

  setNarration(n: SceneNarration): void { this.narration = n; }
  setChecks(c: CheckResult | null, running: boolean): void {
    this.checks = c; this.checksRunning = running; this.renderMargin();
  }

  setCycle(c: SolarCycle | null, loading: boolean, error: string | null = null): void {
    this.cycle = c; this.cycleLoading = loading; this.cycleError = error; this.renderMargin();
  }

  setForecast(f: ForecastBundle | null, loading: boolean, error: string | null = null): void {
    this.forecast = f; this.forecastLoading = loading; this.forecastError = error; this.renderMargin();
  }
  setSunLoop(loop: ImageLoop | null, loading: boolean, error: string | null = null): void {
    this.sun.loop = loop;
    this.sun.loading = loading;
    this.sun.error = loading ? null : error;
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

  /**
   * What the scene measured out of each frame, for the panel to state.
   *
   * Re-renders only on a *change*, and the guard is load-bearing rather than an
   * optimisation. Rendering the panel puts the current frames into the scene
   * (`updateSunFrame` → `onSunFrame`), which measures them, which lands back
   * here: re-rendering unconditionally is an infinite recursion that hangs the
   * page the moment a frame is placed while the Sun tab is open.
   *
   * A calibration is a pure function of the frame's pixels, so the second pass
   * produces identical numbers and the cycle stops on the first comparison.
   */
  setPlaneCalibration(which: 'disk' | 'corona', c: SunPlaneCalibration | null): void {
    const key = which === 'disk' ? 'diskPlane' : 'coronaPlane';
    const prev = this.sun[key];
    const same = prev === c || (!!prev && !!c
      && prev.rsun === c.rsun && prev.innerRsun === c.innerRsun
      && prev.centre.u === c.centre.u && prev.centre.v === c.centre.v);
    this.sun[key] = c;
    if (!same && this.tab === 'sun') this.renderMargin();
  }

  /** The coronagraph is its own selection, loaded and shown alongside the disk. */
  setCoronaLoop(loop: ImageLoop | null, loading: boolean, error: string | null = null): void {
    this.sun.corona = loop;
    this.sun.coronaLoading = loading;
    this.sun.coronaError = loading ? null : error;
    this.renderMargin();
  }

  /** Stated with the error, so the text can name the retry time. */
  setSunRetry(at: string | null): void {
    this.sun.retryAt = at;
    if (this.sun.error && this.tab === 'sun') this.renderMargin();
  }

  setCoronaRetry(at: string | null): void {
    this.sun.coronaRetryAt = at;
    if (this.sun.coronaError && this.tab === 'sun') this.renderMargin();
  }

  get sunState(): SunState { return this.sun; }
  get activeTab(): TabId { return this.tab; }

  /* ---------------- construction ---------------- */

  /**
   * Every tile has the same four lines — label, value, trend, meta — so the
   * rail keeps one rhythm in every state. The meta line is the badge, the time
   * the value was observed, and a detail; only the detail gives way when the
   * line is too long, never the time.
   */
  private buildTiles(): void {
    this.instrumentsEl.innerHTML = '';
    const meta = '<span class="tile-meta"><span data-badge class="badge"></span>'
      + '<time data-time></time><span class="tile-detail" data-detail></span></span>';
    const tile = (id: string, label: string, value: string, onClick: () => void): HTMLElement => {
      const el = document.createElement('button');
      el.className = 'tile';
      el.id = `tile-${id}`;
      el.type = 'button';
      el.innerHTML = `
        <span class="tile-label">${escapeHtml(label)}</span>
        ${value}
        <span class="tile-spark" data-spark aria-hidden="true"></span>
        ${meta}`;
      el.addEventListener('click', onClick);
      this.tiles.set(id, el);
      this.instrumentsEl.appendChild(el);
      return el;
    };
    const valueSlot = (unit: string): string => `<span class="tile-value"><span data-v>—</span>${
      unit ? `<span class="tile-unit">${escapeHtml(unit)}</span>` : ''}</span>`;

    for (const inst of INSTRUMENTS) {
      tile(inst.id, inst.label, valueSlot(inst.unit), () => this.openDetail(inst.id));
    }
    // NOAA scales are three values, so they get their own shape. Like the
    // aurora peak they have no detail of their own; both open the report.
    tile('scales', 'NOAA scales', '<span class="tile-value scales-row" data-scales></span>',
      () => this.selectTab('report'));
    tile('aurora', 'Aurora peak', valueSlot('%'), () => this.selectTab('report'));
  }

  /**
   * Writes one tile's meta line and labels from its state. The time is shown
   * whenever there is one, fresh or stale, because rule 3 puts a time beside
   * every value; the detail says what the state is when the value cannot.
   */
  private writeMeta(
    el: HTMLElement, meta: PartMeta | undefined, st: ValueStateResult, freshDetail: string,
    retry: string | null, b: Badge = badgeFor(meta),
  ): void {
    const badge = el.querySelector('[data-badge]') as HTMLElement;
    badge.textContent = b;
    badge.className = `badge badge-${b.toLowerCase()}`;
    badge.title = badgeTitle(meta) || TIER_WORD[b].replace(/^./, (c) => c.toUpperCase());
    const time = el.querySelector('[data-time]') as HTMLTimeElement;
    if (meta?.data_time && st.state !== 'loading') {
      time.textContent = hhmmUTC(meta.data_time);
      time.dateTime = meta.data_time;
    } else {
      time.textContent = '';
      time.removeAttribute('datetime');
    }
    // The value slot already says "unavailable" or "no data"; the meta line
    // does not say it again. A failure says when it is tried next instead.
    (el.querySelector('[data-detail]') as HTMLElement).textContent =
      st.state === 'fresh' ? freshDetail
        : st.state === 'stale' ? st.short
          : st.state === 'error' ? (retry ? `retry ${retry}` : 'retrying')
            : st.state === 'loading' ? '…' : '';
    el.setAttribute('data-state', st.state);
  }

  /** "Wind speed 330 km/s, measured, 11:58 UTC" — the reading as it would be said. */
  private ariaReading(
    label: string, reading: string | null, meta: PartMeta | undefined, st: ValueStateResult,
    action: string, b: Badge = badgeFor(meta),
  ): string {
    const when = meta?.data_time ? `, ${hhmmUTC(meta.data_time)} UTC` : '';
    const tier = TIER_WORD[b];
    const said = st.state === 'loading' ? `${label} loading`
      // "unavailable · offline or blocked · next attempt 19:02 UTC", said as a list.
      : st.state === 'error' ? `${label} ${st.label.replace(/ · /g, ', ')}`
        : st.state === 'no-data' ? `${label} no data, ${tier}${when}`
          : `${label} ${reading}, ${tier}${when}${
            st.state === 'stale' && st.ageS !== null ? `, stale, ${formatAge(st.ageS)} old` : ''}`;
    return `${said}. ${action}.`;
  }

  /**
   * The full ARIA tabs pattern, not just the roles.
   *
   * `role="tab"` and `aria-selected` were already here, but without
   * `aria-controls`, a `tabpanel`, or arrow-key movement they describe a
   * pattern the widget does not actually implement — which is worse than no
   * roles at all, because a screen-reader user is told to expect behaviour
   * that is not there. Tab moves into and out of the strip; Left and Right
   * move between tabs, which is what the role promises.
   */
  private buildTabs(): void {
    this.tabsEl.innerHTML = TABS.map((t) =>
      `<button class="tab" role="tab" id="tab-${t.id}" data-tab="${t.id}"
        aria-controls="margin-body" aria-selected="${t.id === this.tab}"
        tabindex="${t.id === this.tab ? '0' : '-1'}">${t.label}</button>`).join('');

    this.tabsEl.addEventListener('click', (e) => {
      const t = (e.target as HTMLElement).closest('[data-tab]') as HTMLElement | null;
      if (t) this.selectTab(t.dataset['tab'] as TabId);
    });

    this.tabsEl.addEventListener('keydown', (e) => {
      const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
      if (!keys.includes(e.key)) return;
      const i = TABS.findIndex((t) => t.id === this.tab);
      const at = i < 0 ? 0 : i;
      const next = e.key === 'Home' ? 0
        : e.key === 'End' ? TABS.length - 1
          : e.key === 'ArrowLeft' ? (at - 1 + TABS.length) % TABS.length
            : (at + 1) % TABS.length;
      e.preventDefault();
      this.selectTab(TABS[next]!.id);
      (this.tabsEl.querySelector(`#tab-${TABS[next]!.id}`) as HTMLElement | null)?.focus();
    });
  }

  /** Delegated, because the margin's contents are replaced wholesale on render. */
  private bindMargin(): void {
    this.bodyEl.addEventListener('click', (e) => {
      const el = e.target as HTMLElement;
      const loop = el.closest('[data-loop]') as HTMLElement | null;
      if (loop) { this.cb.onSelectLoop(loop.dataset['loop']!); return; }
      const corona = el.closest('[data-corona]') as HTMLElement | null;
      // An empty value is the "Off" button: a real choice, not a missing one.
      if (corona) { this.cb.onSelectCorona?.(corona.dataset['corona'] || null); return; }
      if (el.closest('[data-planes]')) { this.setSunPlanes(!this.sunPlanesOn); return; }
      if (el.closest('#sun-play')) { this.cb.onToggleSunPlay(); return; }
      const back = el.closest('[data-back]') as HTMLElement | null;
      if (back) { this.selectTab(back.dataset['back'] as TabId); this.bodyEl.focus(); return; }
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
      const on = b.getAttribute('data-tab') === tab;
      b.setAttribute('aria-selected', String(on));
      // Roving tabindex: one stop for the whole strip, arrows move within it.
      b.setAttribute('tabindex', on ? '0' : '-1');
    }
    // A detail view is opened from a tile rather than from the strip, so no tab
    // labels it; it names itself instead of pointing at a tab that is not there.
    const labelled = TABS.some((t) => t.id === tab);
    if (labelled) {
      this.bodyEl.setAttribute('aria-labelledby', `tab-${tab}`);
      this.bodyEl.removeAttribute('aria-label');
    } else {
      this.bodyEl.removeAttribute('aria-labelledby');
      this.bodyEl.setAttribute('aria-label', 'Detail');
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

  /**
   * The whole panel as Markdown, for pasting somewhere the timestamps and
   * tiers survive. Built from the same state the panel renders, so the two
   * cannot drift apart.
   */
  briefing(now = new Date()): string {
    if (!this.state) return '';
    return buildBriefing({
      state: this.state,
      narration: buildSituationReport(
        this.state.now, this.narration, now, this.state.aurora, this.state.cmes,
        this.state.spacecraft?.data ?? [],
        { snapshot: this.state.lanes.snapshot, aurora: this.state.lanes.aurora,
          cmes: this.state.lanes.cmes, nextAttempt: this.state.nextAttempt },
      ),
      checks: this.checks,
      forecast: this.forecast,
      now,
      origin: `${location.origin}${location.pathname}`,
    });
  }

  private async copyBriefing(): Promise<void> {
    const text = this.briefing();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      this.flash(this.copyEl, 'Copied');
    } catch {
      // Clipboard access can be refused; the download still works and says so.
      this.flash(this.copyEl, 'Blocked — use .md');
    }
  }

  private downloadBriefing(): void {
    const text = this.briefing();
    if (!text) return;
    const url = URL.createObjectURL(new Blob([text], { type: 'text/markdown' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = briefingFilename();
    a.click();
    URL.revokeObjectURL(url);
    this.flash(this.downloadEl, 'Saved');
  }

  /** Confirm an action on its own button, so no layout moves. */
  private flash(el: HTMLElement, text: string): void {
    const original = el.dataset['label'] ?? el.textContent ?? '';
    el.dataset['label'] = original;
    el.textContent = text;
    window.setTimeout(() => { el.textContent = el.dataset['label'] ?? original; }, 1600);
  }

  /** Open a body's detail from a click in the scene. */
  showBody(name: string): void { this.openDetail(BODY_PREFIX + name); }

  /** Open any subject — a model, a drawn layer, an idea — by registry id. */
  showSubject(id: string): void { this.openDetail(id); }

  /** Every NOAA notice in the feed, verbatim — from the header notice and the ticker. */
  openNotices(): void { this.openDetail(NOTICES_DETAIL); }

  private openDetail(id: string): void {
    // The notices subject is read where the notices are, not as a card of its own.
    if (id === NOTICES_SUBJECT) id = NOTICES_DETAIL;
    this.tab = 'detail';
    this.detailId = id;
    // Notices are the Now tab's own detail, so its tab stays lit and is the way
    // back; any other detail is opened from a tile or the scene and names itself.
    const home: TabId | null = id === NOTICES_DETAIL ? 'report' : null;
    for (const b of this.tabsEl.querySelectorAll('[data-tab]')) {
      const on = b.getAttribute('data-tab') === home;
      b.setAttribute('aria-selected', String(on));
      if (home) b.setAttribute('tabindex', on ? '0' : '-1');
    }
    if (home) {
      this.bodyEl.setAttribute('aria-labelledby', `tab-${home}`);
      this.bodyEl.removeAttribute('aria-label');
    }
    for (const [k, el] of this.tiles) {
      if (el.tagName === 'BUTTON') el.setAttribute('aria-current', String(k === id));
    }
    this.renderMargin();
    this.bodyEl.focus();
  }

  /**
   * Related links are delegated from the panel body rather than bound per
   * element: the body is replaced wholesale on every render, so any listener
   * attached to a link would be thrown away with it on the next tick.
   */
  private onBodyClick = (e: Event): void => {
    const el = (e.target as HTMLElement | null)?.closest?.('[data-subject]');
    const id = (el as HTMLElement | null)?.dataset?.['subject'];
    if (id) this.openDetail(id);
  };

  /* ---------------- rendering ---------------- */

  render(state: StoreState): void {
    this.state = state;
    const now = new Date();
    const env = state.now;
    const d = env?.data ?? null;

    this.clockEl.textContent =
      `${now.toISOString().slice(0, 10)} ${hhmmUTC(now.toISOString())} UTC`;

    /**
     * One state per value slot, from the machine in data/state.ts — loading,
     * no data, error, stale, fresh — written to a single `data-state`
     * attribute the CSS keys on. A slot shows a number in exactly one of
     * them; the others say loading ("…"), "unavailable" (with the retry time
     * on the meta line) or "no data" (the literal words).
     */
    const snapshotLane = {
      loading: state.lanes.snapshot, error: env ? null : state.lastError, nextAttempt: state.nextAttempt,
    };
    const retry = state.nextAttempt ? hhmmUTC(state.nextAttempt) : null;
    for (const inst of INSTRUMENTS) {
      const el = this.tiles.get(inst.id)!;
      const meta: PartMeta | undefined = env?.parts?.[inst.part];
      let st = valueState({ lane: snapshotLane, received: !!state.now, meta, now });
      const raw = st.state === 'fresh' || st.state === 'stale' ? inst.value(d) : null;
      // The feed answered but this *field* carries nothing: the value slot is
      // "no data" even while its feed is fresh — a number is still withheld.
      if ((st.state === 'fresh' || st.state === 'stale') && raw === NO_DATA) {
        st = { state: 'no-data', label: `no data · ${st.label}`, short: NO_DATA, ageS: st.ageS };
      }

      (el.querySelector('[data-v]') as HTMLElement).textContent = raw !== null && raw !== NO_DATA ? raw
        : st.state === 'loading' ? '…'
          : st.state === 'error' ? 'unavailable'
            : NO_DATA;
      // Before its feed has answered, the tile takes its tier from the registry,
      // so a modelled reading never shows [E] while it loads.
      const b = meta ? badgeFor(meta) : subject(inst.subject)?.tier ?? 'E';
      this.writeMeta(el, meta, st, inst.detail?.(d) ?? '', retry, b);
      const reading = `${raw} ${inst.unit}`.trim();
      const valueTitle = st.state === 'fresh' || st.state === 'stale' ? reading
        : st.state === 'loading' ? 'loading'
          : st.state === 'error' ? `unavailable (${st.label})`
            : 'no data';
      el.setAttribute('title', `${inst.label}: ${valueTitle} · ${st.label} · ${badgeTitle(meta)}${
        inst.title ? ` · ${inst.title}` : ''}`);
      el.setAttribute('aria-label', this.ariaReading(inst.label, reading, meta, st, 'Open detail', b));

      // The trend behind the number. Redrawn on the store's cadence, not the
      // frame's, and marked aria-hidden because the value above it already
      // carries the reading — a screen reader gains nothing from a path.
      const sparkEl = el.querySelector('[data-spark]') as HTMLElement;
      const sp = st.state === 'fresh' || st.state === 'stale' ? tileSpark(inst.id, state) : null;
      const key = sp ? `${sp.series.time[sp.series.time.length - 1] ?? ''}:${sp.series.value.length}` : '';
      if (key !== this.sparkKeys.get(inst.id)) {
        this.sparkKeys.set(inst.id, key);
        sparkEl.innerHTML = sp
          ? inlineSpark(sp.series, { ...sp.opts, width: 100, height: 10, label: `${inst.label} trend` })
          : '';
      }
    }

    // NOAA scales
    const scalesEl = this.tiles.get('scales')!;
    const row = scalesEl.querySelector('[data-scales]') as HTMLElement;
    const sc = d?.scales;
    const scMeta = env?.parts?.scales;
    let scS = valueState({ lane: snapshotLane, received: !!state.now, meta: scMeta, now });
    // The feed answered without the scales: "no data", as on any other tile.
    if (!sc && (scS.state === 'fresh' || scS.state === 'stale')) scS = { ...scS, state: 'no-data', short: NO_DATA };
    row.innerHTML = sc && scS.state !== 'no-data'
      ? (['R', 'S', 'G'] as const).map((k) => {
        const n = sc[k].scale ?? null;
        return `<span class="scale-chip scale-${n ?? 'na'}" title="${k} — ${escapeHtml(sc[k].text ?? 'no data')}">${k}${n ?? '–'}</span>`;
      }).join('')
      // Failed is "unavailable", like every other tile — never "no data".
      : scS.state === 'loading' ? '…'
        : scS.state === 'error' ? 'unavailable' : NO_DATA;
    this.writeMeta(scalesEl, scMeta, scS, '', retry, scMeta ? badgeFor(scMeta) : 'D');
    scalesEl.setAttribute('title', `NOAA scales · ${scS.label} · ${badgeTitle(scMeta)}`);
    scalesEl.setAttribute('aria-label', this.ariaReading('NOAA scales',
      sc ? (['R', 'S', 'G'] as const).map((k) => `${k}${sc[k].scale ?? ' no data'}`).join(' ') : null,
      scMeta, scS, 'Open report', scMeta ? badgeFor(scMeta) : 'D'));

    // Aurora: its own lane, decided as the sentence decides it.
    const auEl = this.tiles.get('aurora')!;
    const au = state.aurora;
    const auMeta = auroraMeta(state);
    const auS = partState(state, 'aurora', now);
    (auEl.querySelector('[data-v]') as HTMLElement).textContent =
      au?.data ? String(au.data.max_probability)
        : auS.state === 'loading' ? '…'
          : auS.state === 'error' ? 'unavailable' : NO_DATA;
    // Observed at the time on the meta line; the forecast is for the time after it.
    // A model's output whether or not it has arrived: [D] before its envelope does too.
    this.writeMeta(auEl, auMeta, auS, au?.data ? `for ${hhmmUTC(au.data.forecast_time)}` : '', retry, 'D');
    auEl.setAttribute('title', `Aurora peak · ${auS.label}${au?.data
      ? ` · OVATION forecast for ${hhmmUTC(au.data.forecast_time)} UTC` : ''} · ${badgeTitle(auMeta)}`);
    auEl.setAttribute('aria-label', this.ariaReading(
      'Aurora peak', au?.data ? `${au.data.max_probability} percent` : null, auMeta, auS, 'Open report', 'D'));

    // A total outage is said once, here and in the sentence; each tile keeps
    // its one red "unavailable" and nothing more.
    const outage = snapshotOutage(state);
    this.outageEl.hidden = !outage;
    this.outageEl.textContent = outage
      ? `NOAA unreachable · retrying ${retry ? `${retry} UTC` : 'on the next refresh'}` : '';

    // Layer toggles carry the same four states: a layer whose data has not
    // landed is dimmed rather than pretending to be ready.
    this.setToggleState('aurora-toggle', auS.state);
    this.setToggleState('cme-toggle',
      state.lanes.cmes && state.cmes.length === 0 ? 'loading'
        : state.laneErrors.cmes ? 'error'
          : state.cmes.length === 0 ? 'no-data' : 'fresh');
    this.setToggleState('wind-toggle', snapshotLane.loading ? 'loading'
      : d?.solar_wind ? 'fresh'
        : (env?.parts?.solar_wind?.error ?? state.lastError) ? 'error' : 'no-data');

    // Notices: the header shows the most consequential one in force, or
    // nothing — it never says "all clear". The ticker's text is built by
    // `noticeTicker`, a pure function, so its failed state can be tested.
    const notices = noticeTicker(state, now);
    const top = notices.top;
    this.headlineEl.hidden = !top;
    if (top) {
      this.headlineEl.className = `headline-alert level-${top.level}`;
      this.headlineEl.innerHTML =
        `<span class="alert-level">${escapeHtml(noticeWord(top, now))}</span>`
        + `<span class="alert-text">${escapeHtml(top.text || top.product)}</span>`
        + `<span class="alert-time">${escapeHtml(whenUTC(top.issued, now))}</span>`;
      this.headlineEl.title = `${validityText(top, now)} — ${top.message.slice(0, 400)}`;
    }
    this.tickerEl.innerHTML =
      '<span class="ticker-tag">NOAA</span><span class="ticker-items" data-t></span>';
    (this.tickerEl.querySelector('[data-t]') as HTMLElement).innerHTML = notices.items;
    this.fitTicker();

    // Status — four states, because "not live", "partly working" and "not
    // working" are not the same thing and a reader deciding whether to trust
    // a number needs to know which one they are looking at.
    const onMirror = env ? Object.values(env.parts).some((p) => p.mirrored) : false;
    // "Live" is a claim: it needs at least one timestamp behind it. A
    // completed composite whose every feed failed has none.
    const gotAny = env ? Object.values(env.parts).some((p) => p.data_time) : false;
    // "Live" also needs the readings to be current. A fetch that succeeds but
    // brings back only old readings — a feed that has stopped upstream — is a
    // live fetch of a stale page, and says so, in amber, with the newest age.
    const ages = env ? [...new Set(INSTRUMENTS.map((i) => env.parts[i.part]))]
      .filter((p) => p?.data_time)
      .map((p) => ({ age: (now.getTime() - Date.parse(p.data_time!)) / 1000, after: p.stale_after_s })) : [];
    const allStale = ages.length > 0 && ages.every((a) => a.age > a.after);
    const newest = allStale ? Math.min(...ages.map((a) => a.age)) : null;
    const quietlyStale = !state.lastError && !!env && !onMirror && newest !== null;
    this.statusEl.classList.toggle('is-error', !!state.lastError);
    this.statusEl.classList.toggle('is-mirror', !state.lastError && onMirror);
    this.statusEl.classList.toggle('is-degraded',
      !state.lastError && !!env && !onMirror && (!gotAny || quietlyStale));
    if (state.lastError) {
      this.statusEl.textContent =
        `Last refresh failed (${state.lastError}) at ${hhmmUTC(state.lastAttempt)} UTC. Showing last good data, ageing.`;
    } else if (env && onMirror) {
      // The mirror is a byte-for-byte copy, so each value still carries the
      // time NOAA observed it — which is the number that decides whether it is
      // worth anything, and it is already on every tile.
      this.statusEl.textContent =
        `NOAA SWPC unreachable · reading Earth Star's mirror (stage B), captured ${
          hhmmUTC(env.fetched_at)} UTC · every value keeps NOAA's own timestamp`;
    } else if (env && !gotAny) {
      this.statusEl.textContent =
        `NOAA SWPC unreachable — nothing has loaded yet. Retrying${
          state.nextAttempt ? ` at ${hhmmUTC(state.nextAttempt)} UTC` : ''}.`;
    } else if (env && quietlyStale) {
      this.statusEl.textContent =
        `Live fetch · NOAA SWPC · refreshed ${hhmmUTC(env.fetched_at)} UTC · newest reading ${
          formatAge(newest!)} old`;
    } else if (env) {
      this.statusEl.textContent =
        `Live · NOAA SWPC · refreshed ${hhmmUTC(env.fetched_at)} UTC · DirectSource (stage A)`;
    } else {
      this.statusEl.textContent = 'Fetching live data from NOAA SWPC…';
    }

    this.renderMargin();
  }

  /** What the scene's Earth surface carries, for the provenance rows. */
  private earthLights = false;
  private sunPlanesOn = true;
  private earthCoast = false;

  setEarthLights(v: boolean): void { this.earthLights = v; }
  get lightsLoaded(): boolean { return this.earthLights; }
  setSunPlanes(on: boolean): void {
    this.sunPlanesOn = on;
    this.cb.onSunPlanes?.(on);
  }
  get planesOn(): boolean { return this.sunPlanesOn; }
  setEarthCoast(v: boolean): void { this.earthCoast = v; }

  private setToggleState(id: string, state: DataState): void {
    document.getElementById(id)?.setAttribute('data-state', state);
  }

/**
   * The renderer trades resolution for frame rate on its own. Doing that
   * silently would be the same kind of dishonesty as quietly degrading data, so
   * it is said out loud — but only while it is happening, because a permanent
   * frame-rate counter is noise the rest of the time.
   */
  setStats(s: FrameStats): void {
    const reduced = s.pixelRatio < s.maxPixelRatio;
    const key = reduced ? `${s.pixelRatio}/${s.maxPixelRatio}/${Math.round(s.fps)}` : '';
    if (key === this.perfKey) return;
    this.perfKey = key;
    this.perfEl.hidden = !reduced;
    if (!reduced) return;
    this.perfEl.textContent =
      `Rendering at ${s.pixelRatio}x rather than ${s.maxPixelRatio}x `
      + `(${s.megapixels.toFixed(1)} MP) to hold the frame rate — `
      + `${Math.round(s.fps)} fps. Geometry and data are unaffected.`;
  }

  private readonly SECTION_KEY = 'viewer.sections';

  private loadSectionState(): void {
    try {
      const raw = localStorage.getItem(this.SECTION_KEY);
      if (!raw) return;
      const o = JSON.parse(raw) as Record<string, boolean>;
      for (const [k, v] of Object.entries(o)) this.sectionState.set(k, !!v);
    } catch {
      // A blocked or corrupt store is not a reason to fail; defaults apply.
    }
  }

  private onSectionToggle = (e: Event): void => {
    const el = e.target as HTMLDetailsElement;
    const id = el.dataset?.['sect'];
    if (!id) return;
    this.sectionState.set(id, el.open);
    try {
      localStorage.setItem(
        this.SECTION_KEY, JSON.stringify(Object.fromEntries(this.sectionState)),
      );
    } catch { /* private browsing; the in-memory map still works this session */ }
  };

  private remembered = (id: string): boolean | undefined => this.sectionState.get(id);

  private renderMargin(): void {
    const state = this.state;
    if (!state) return;
    const now = new Date();
    switch (this.tab) {
      case 'report':
        this.bodyEl.innerHTML = renderReport(state, this.narration, now, this.remembered);
        break;
      case 'forecast':
        this.bodyEl.innerHTML = renderForecast(
          this.forecast, this.forecastLoading, state?.cmes ?? [], this.remembered,
          this.forecastError,
        );
        break;
      case 'sun':
        this.bodyEl.innerHTML = renderSun(this.sun, LOOPS, this.cycle, this.cycleLoading, this.cycleError);
        this.placeSunFrame();
        break;
      case 'sources':
        this.bodyEl.innerHTML = renderSources(state, this.checks, this.remembered, {
          surface: this.narration.earthSurface ?? 'vector',
          lights: this.earthLights, coast: this.earthCoast,
        });
        break;
      case 'checks': this.bodyEl.innerHTML = renderChecks(this.checks, this.checksRunning); break;
      case 'detail':
        this.bodyEl.innerHTML = this.detailId ? renderDetail(this.detailId, state, now) : '';
        break;
    }
  }

  /**
   * Move the cached element for the current frame into the panel's slot.
   *
   * Nothing here sets a `src`. The cache already holds a loaded element for
   * this URL, so this is a DOM move: no network, no decode, no flash of an
   * empty box while the browser catches up.
   */
  /**
   * Move a cached, decoded image into a slot and hand it to the scene. Shared
   * by the disk frame and the coronagraph because the handling is identical —
   * and because doing it twice is how a LASCO frame once ended up on the
   * sphere.
   */
  private fillSlot(id: string, hand: (img: HTMLImageElement) => void): void {
    const slot = document.getElementById(id);
    const url = slot?.dataset['frame'];
    if (!slot || !url) return;
    const img = this.images.acquire(url);
    img.alt = slot.dataset['alt'] ?? '';
    img.className = 'sun-img';
    if (img.parentElement !== slot) slot.replaceChildren(img);
    if (img.complete && img.naturalWidth > 0) hand(img);
    else img.addEventListener('load', () => hand(img), { once: true });
  }

  private placeSunFrame(): void {
    this.fillSlot('sun-slot', (img) => this.cb.onSunFrame?.(img));
    // The coronagraph rides along: same decode cache, same "announce on load",
    // and it is placed whenever it is on rather than only when it changes.
    this.fillSlot('corona-slot', (img) => this.cb.onCoronaFrame?.(img));
    // A short lookahead so playback and scrubbing do not stall on the next one.
    const frames = this.sun.loop?.frames;
    if (frames) {
      const i = this.sun.frameIndex;
      this.images.warm([
        frames[(i + 1) % frames.length]!.url,
        frames[(i + 2) % frames.length]!.url,
      ]);
    }
  }

  /** Swap just the image while a loop plays, rather than re-rendering the panel. */
  private updateSunFrame(): void {
    const slot = document.getElementById('sun-slot');
    const f = this.sun.loop?.frames[this.sun.frameIndex];
    if (!slot || !f) { this.renderMargin(); return; }
    slot.dataset['frame'] = f.url;
    this.placeSunFrame();
    const stamp = this.bodyEl.querySelector('.sun-stamp');
    if (stamp) {
      const age = Math.round((Date.now() - Date.parse(f.time)) / 60000);
      stamp.innerHTML = `<span>${hhmmUTC(f.time)} UTC</span><span>${age} min ago</span>`;
    }
    const scrub = document.getElementById('sun-scrub') as HTMLInputElement | null;
    if (scrub && document.activeElement !== scrub) scrub.value = String(this.sun.frameIndex);
  }

  /**
   * Nothing in the ticker may be hidden without an affordance.
   *
   * A fixed max-height silently clipped the last alerts whenever the viewport
   * was narrow enough that six items needed three lines — which is exactly the
   * case where the newest alert matters most. This trims to what fits and
   * offers the remainder behind a button, so the count is always visible even
   * when the text is not.
   *
   * Idempotent, because a ResizeObserver watches the same element it resizes:
   * expanding must not immediately re-trim, and re-running must not oscillate.
   */
  private fitTicker(): void {
    if (this.fittingTicker) return;
    this.fittingTicker = true;
    try {
      const box = this.tickerEl;
      const items = box.querySelector('[data-t]') as HTMLElement | null;
      if (!items) return;

      const all = [...items.querySelectorAll('.ticker-item')] as HTMLElement[];
      for (const el of all) el.hidden = false;
      box.querySelector('.ticker-more')?.remove();
      box.querySelector('.ticker-all')?.remove();
      box.classList.toggle('is-expanded', this.tickerExpanded);

      // Expanded shows everything; it needs a way back, and a way on to the
      // notices as NOAA wrote them.
      if (this.tickerExpanded) {
        if (all.length > 1) items.append(this.tickerMoreButton('show fewer', true));
        const verbatim = document.createElement('button');
        verbatim.className = 'ticker-all';
        verbatim.type = 'button';
        verbatim.textContent = 'all notices, verbatim';
        verbatim.addEventListener('click', () => this.openNotices());
        items.append(verbatim);
        return;
      }

      if (box.scrollHeight <= box.clientHeight + 1) return;

      const more = this.tickerMoreButton('', false);
      items.append(more);
      let hidden = 0;
      // Hide from the end until it fits, always keeping the newest alert.
      for (let i = all.length - 1; i >= 1; i--) {
        all[i]!.hidden = true;
        hidden++;
        more.textContent = `+${hidden} more`;
        if (box.scrollHeight <= box.clientHeight + 1) break;
      }
      more.textContent = `+${hidden} more`;
    } finally {
      this.fittingTicker = false;
    }
  }

  private tickerMoreButton(label: string, expanded: boolean): HTMLButtonElement {
    const b = document.createElement('button');
    b.className = 'ticker-more';
    b.type = 'button';
    b.textContent = label;
    b.setAttribute('aria-expanded', String(expanded));
    b.addEventListener('click', () => {
      this.tickerExpanded = !this.tickerExpanded;
      this.fitTicker();
    });
    return b;
  }

}
