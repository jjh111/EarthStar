/**
 * The state of the solar system, written as one sentence.
 *
 * Following Galileo's word/image sentences and Tufte's wordlike sparklines: the
 * graphics are sentence elements, not illustrations beside the text. Each
 * quantity appears as glyph, trend and number together, so the reader gets
 * direction, history and value in a single pass without a legend.
 *
 * Every mark here is real: the sparklines are the same series the instruments
 * and the checks use, and a quantity with no data is written as missing rather
 * than dropped from the sentence.
 *
 * Each reading is written in the state its tile is in, so the sentence cannot
 * read as current while the rail beside it says otherwise: a stale number
 * turns amber and says its age, a failed feed says "unavailable", and when
 * nothing NOAA serves has arrived at all the whole sentence becomes one plain
 * statement of that, rather than six clauses each reporting the same outage.
 */

import type { PartMeta } from '../data/source.js';
import type { StoreState } from '../data/store.js';
import { valueState, type ValueStateResult } from '../data/state.js';
import { hhmmUTC, minus, whenUTC } from './format.js';
import { agesAt, type Ages } from './live.js';
import { inlineSpark } from './sparkline.js';

/**
 * Glyphs stand for the quantity, not for a mood. They are drawn as inline SVG
 * rather than emoji so they match the text colour and weight, and so they mean
 * the same thing on every platform.
 */
const GLYPH: Record<string, string> = {
  // Radiation: a nucleus with tracks leaving it.
  particle: '<svg class="glyph" viewBox="0 0 16 12"><circle cx="8" cy="6" r="1.6"/><path d="M2 2l3.2 2.6M14 2l-3.2 2.6M2 10l3.2-2.6M14 10l-3.2-2.6"/></svg>',
  // Wind: three strokes leaning downstream.
  wind: '<svg class="glyph" viewBox="0 0 16 12"><path d="M1 3h8a2 2 0 1 0-2-2M1 6h11a2 2 0 1 1-2 2M1 9h6a1.6 1.6 0 1 1-1.6 1.6"/></svg>',
  // Field: a dipole loop.
  field: '<svg class="glyph" viewBox="0 0 16 12"><path d="M8 1v10M8 1C4 3 2 5 2 6s2 3 6 5M8 1c4 2 6 4 6 5s-2 3-6 5"/></svg>',
  // Flare: a starburst.
  flare: '<svg class="glyph" viewBox="0 0 16 12"><path d="M8 1v3.4M8 7.6V11M2.6 6h3.2M10.2 6h3.2M4.2 2.4l2.2 2.2M9.6 7.6l2.2 2.2M11.8 2.4L9.6 4.6M6.4 7.6l-2.2 2.2"/></svg>',
  // Aurora: curtains.
  aurora: '<svg class="glyph" viewBox="0 0 16 12"><path d="M3 11V5c0-2 1-3.4 2.4-3.4M7 11V4.4c0-2 1-3.4 2.4-3.4M11 11V5.4c0-2 1-3.2 2.2-3.2"/></svg>',
  // Shield: the magnetopause nose.
  shield: '<svg class="glyph" viewBox="0 0 16 12"><path d="M12 1C7 1 3 3.2 3 6s4 5 9 5"/><circle cx="13.4" cy="6" r="1.5"/></svg>',
  sun: '<svg class="glyph" viewBox="0 0 16 12"><circle cx="8" cy="6" r="3"/><path d="M8 0.6v1.6M8 9.8v1.6M1.4 6h1.6M13 6h1.6M3.3 1.3l1.1 1.1M11.6 9.6l1.1 1.1M12.7 1.3l-1.1 1.1M4.4 9.6l-1.1 1.1"/></svg>',
};

const MISSING = '<span class="sentence-missing">no data</span>';
/** A failed feed: the same word, and the same red, as its tile. */
const UNAVAILABLE = '<span class="sentence-missing is-error">unavailable</span>';
/** The cold start's placeholder: nothing measured *yet*, so nothing claimed. */
const PENDING = '<span class="sentence-loading">…</span>';

/** The parts the sentence reads. The aurora peak is its own lane, not a snapshot part. */
export type SentencePart = 'solar_wind' | 'magnetopause' | 'kp' | 'particles' | 'xray' | 'aurora';
const SENTENCE_PARTS: SentencePart[] = ['solar_wind', 'magnetopause', 'kp', 'particles', 'xray', 'aurora'];

/** The aurora envelope's provenance, in the shape every snapshot part has. */
export function auroraMeta(state: StoreState): PartMeta | undefined {
  const au = state.aurora;
  return au
    ? {
      tier: 'modeled', source: au.source, source_url: au.source_url, model: au.model,
      data_time: au.data?.observation_time ?? null, latency_s: au.latency_s,
      stale_after_s: au.stale_after_s,
      ...(state.laneErrors.aurora ? { error: state.laneErrors.aurora } : {}),
    }
    : undefined;
}

/**
 * The state of one part, decided exactly as its tile decides it — the same
 * machine (`data/state.ts`), the same lane, the same retry time.
 */
export function partState(state: StoreState, part: SentencePart, now = new Date()): ValueStateResult {
  if (part === 'aurora') {
    return valueState({
      lane: { loading: state.lanes.aurora, error: state.laneErrors.aurora, nextAttempt: state.nextAttempt },
      received: !!state.aurora?.data, meta: auroraMeta(state), now,
    });
  }
  const env = state.now;
  return valueState({
    lane: { loading: state.lanes.snapshot, error: env ? null : state.lastError, nextAttempt: state.nextAttempt },
    received: !!env, meta: env?.parts?.[part], now,
  });
}

/** When the part was observed, the instant its age is counted from. */
function partTime(state: StoreState, part: SentencePart): string | null {
  const meta = part === 'aurora' ? auroraMeta(state) : state.now?.parts?.[part];
  return meta?.data_time ?? null;
}

/**
 * Nothing NOAA serves has arrived: every part of the snapshot failed and none
 * was read from the mirror — or the snapshot fetch itself threw before any
 * part could. A value that arrived once and then stopped is stale, not this.
 */
export function snapshotOutage(state: StoreState): boolean {
  const env = state.now;
  if (!env) return !state.lanes.snapshot && !!state.lastError;
  const parts = Object.values(env.parts);
  return parts.length > 0 && parts.every((p) => !p.data_time && !!p.error && !p.mirrored);
}

/** The whole sentence is the outage when every reading in it would say "unavailable". */
function fullOutage(state: StoreState): boolean {
  return snapshotOutage(state) && !state.aurora?.data;
}

/** One calm statement of the outage, and what the page can still show without NOAA. */
function outageSentence(state: StoreState): string {
  const retry = state.nextAttempt ? `${hhmmUTC(state.nextAttempt)} UTC` : 'on the next refresh';
  return `NOAA SWPC unreachable — no readings yet; retrying ${retry}. `
    + 'Positions and the field model are computed locally and still shown.';
}

const live = (st: ValueStateResult): boolean => st.state === 'fresh' || st.state === 'stale';

/**
 * One reading, written in its part's state. Fresh is the number and its unit;
 * stale is the same number in amber with its age after it, because a value
 * that stopped updating three hours ago must not read as now. `at` is when the
 * part was observed, and null for the first of two readings from one part, so
 * the age is said once; `ages` writes it, as words or as a live span.
 */
function reading(
  v: number | string | null | undefined, digits: number, unit: string,
  st: ValueStateResult, at: string | null, ages: Ages,
): string {
  if (st.state === 'loading') return PENDING;
  if (st.state === 'error') return UNAVAILABLE;
  if (st.state === 'no-data' || v === null || v === undefined
    || (typeof v === 'number' && !Number.isFinite(v))) return MISSING;
  const stale = st.state === 'stale';
  const text = typeof v === 'number' ? minus(v.toFixed(digits)) : v;
  // A real space before the unit, so the sentence reads (and copies) as
  // "330 km/s"; none before a percent sign, which binds to its number.
  const u = !unit ? ''
    : unit === '%' ? '<span class="sentence-unit tight">%</span>'
      : ` <span class="sentence-unit">${unit}</span>`;
  return `<b class="sentence-num${stale ? ' is-stale' : ''}">${text}</b>${u}`
    + (stale && at ? ` <span class="sentence-age">(${ages(at)} old)</span>` : '');
}

/**
 * Lines break between clauses, never inside one: the glyph stays with its
 * word ("ground quiet", "field southward"), and the sparkline with its number
 * and unit.
 */
const head = (glyph: string | null, words: string): string =>
  `<span class="clause-head">${glyph ? `${GLYPH[glyph]} ` : ''}${words}</span>`;
const read = (spark: string, r: string): string =>
  `<span class="reading">${spark ? `${spark} ` : ''}${r}</span>`;

/**
 * Returns HTML. The caller inserts it as a single flowing paragraph — the
 * point is that it reads as prose, with the graphics doing work inside it.
 * Ages are written as words at `now` unless the caller asks for live spans.
 */
export function stateSentence(state: StoreState, now = new Date(), ages: Ages = agesAt(now)): string {
  if (fullOutage(state)) return outageSentence(state);
  const d = state.now?.data ?? null;
  /** A reading, with its part's age when it is stale; null says no age. */
  const value = (
    v: number | string | null | undefined, digits: number, unit: string,
    st: ValueStateResult, part: SentencePart | null,
  ): string => reading(v, digits, unit, st, part ? partTime(state, part) : null, ages);
  /** Sentences, not comma splices: each glyph opens a clause of its own. */
  const out: string[] = [];

  /* --- solar wind: speed, and the field it carries --- */
  const wS = partState(state, 'solar_wind', now);
  if (live(wS)) {
    const sw = d?.solar_wind ?? null;
    const speedSpark = state.series
      ? inlineSpark({ time: state.series.data.time, value: state.series.data.speed }, { label: 'wind speed, 24 h' })
      : '';
    const bzSpark = state.series
      ? inlineSpark({ time: state.series.data.time, value: state.series.data.bz_gsm },
        { rule: 0, extremes: true, label: 'Bz, 24 h' })
      : '';
    const bz = sw?.bz_gsm ?? null;
    const bzWord = bz === null ? ''
      : bz < -5 ? ' strongly southward' : bz < 0 ? ' southward' : ' northward';
    const bzConsequence = bz !== null && bz < 0 ? ' &mdash; field opens, energy enters' : '';
    out.push(
      `${head('wind', 'wind')} ${read(speedSpark, value(sw?.speed, 0, 'km/s', wS, null))}; ` +
      `${head(null, `field${bzWord}`)} ${read(bzSpark, value(bz, 1, 'nT', wS, 'solar_wind'))}${bzConsequence}.`,
    );
  } else {
    // Speed and field are one feed: one word for both.
    out.push(`${head('wind', 'wind')} ${value(null, 0, '', wS, 'solar_wind')}.`);
  }

  /* --- the shield it meets --- */
  const mS = partState(state, 'magnetopause', now);
  const mp = live(mS) ? d?.magnetopause?.standoff_re ?? null : null;
  const mpWord = mp === null ? ''
    : mp < 8 ? ', compressed' : mp > 11.5 ? ', expanded' : '';
  out.push(`${head('shield', 'shield')} ${read('', value(mp, 1, 'R⊕', mS, 'magnetopause'))}${mpWord}.`);

  /* --- geomagnetic response at the ground --- */
  const kS = partState(state, 'kp', now);
  const kp = live(kS) ? d?.kp?.estimated_kp ?? null : null;
  const kpWord = kp === null ? ''
    : kp >= 5 ? ' storming' : kp >= 4 ? ' unsettled' : ' quiet';
  const kpSpark = live(kS) && state.kpSeries
    ? inlineSpark(state.kpSeries, { band: [0, 4], extremes: true, label: 'Kp, 6 h' }) : '';
  // One decimal, as the tile and the splash write it.
  out.push(`${head('field', `ground${kpWord}`)} ${read(kpSpark, value(kp, 1, 'Kp', kS, 'kp'))}.`);

  /* --- particle radiation --- */
  const pS = partState(state, 'particles', now);
  const pt = live(pS) ? d?.particles ?? null : null;
  const s10 = pt?.proton_10mev ?? null;
  const sStep = pt && s10 !== null ? `S${pt.s_scale ?? 0}` : null;
  const pSpark = state.protonSeries
    ? inlineSpark(state.protonSeries, { log: true, extremes: true, label: 'proton flux above 10 MeV, last 6 hours, logarithmic' })
    : '';
  out.push(
    `${head('particle', 'radiation')} ${read('', value(sStep, 0, '', pS, null))}`
    + (sStep ? ` ${read(pSpark, value(s10, 2, 'pfu', pS, 'particles'))}`
      + ((pt?.s_scale ?? 0) >= 1 ? ' &mdash; storm' : '') : '')
    + '.',
  );

  /* --- the Sun, and what it may do to us --- */
  const xS = partState(state, 'xray', now);
  const xr = live(xS) ? d?.xray ?? null : null;
  const xSpark = live(xS) && state.xraySeries
    ? inlineSpark(state.xraySeries, { log: true, extremes: true, label: 'X-ray, 6 h, log' }) : '';
  const aS = partState(state, 'aurora', now);
  const au = live(aS) ? state.aurora?.data ?? null : null;
  out.push(
    `${head('flare', 'X-ray')} ${read(xSpark, value(xr?.class ?? null, 0, '', xS, 'xray'))} ` +
    `${head('aurora', 'aurora')} ${read('', value(au?.max_probability, 0, '%', aS, 'aurora'))}.`,
  );

  return out.join(' ');
}

/** The plain-language equivalent, for screen readers and the text alternative. */
export function stateSentenceText(state: StoreState, now = new Date(), ages: Ages = agesAt(now)): string {
  if (fullOutage(state)) return outageSentence(state);
  const pending = !state.now && state.lanes.snapshot;
  if (pending) {
    return 'Solar wind, magnetopause standoff, planetary K index, radiation, X-ray class '
      + 'and aurora forecast: all loading. Positions and the scene are computed locally '
      + 'and are already live.';
  }
  const d = state.now?.data ?? null;
  /** The same five states as the HTML, in words. */
  const said = (
    v: number | string | null | undefined, digits: number, words: string, st: ValueStateResult,
    part: SentencePart,
  ): string => {
    if (st.state === 'loading') return 'loading';
    if (st.state === 'error') return 'unavailable';
    if (st.state === 'no-data' || v === null || v === undefined
      || (typeof v === 'number' && !Number.isFinite(v))) return 'no data';
    const text = typeof v === 'number' ? minus(v.toFixed(digits)) : v;
    return `${text}${words ? ` ${words}` : ''}`
      + (st.state === 'stale' && partTime(state, part) ? ` (stale, ${ages(partTime(state, part)!)} old)` : '');
  };
  const wS = partState(state, 'solar_wind', now);
  const mS = partState(state, 'magnetopause', now);
  const kS = partState(state, 'kp', now);
  const pS = partState(state, 'particles', now);
  const xS = partState(state, 'xray', now);
  const aS = partState(state, 'aurora', now);
  const sw = live(wS) ? d?.solar_wind ?? null : null;
  const pt = live(pS) ? d?.particles ?? null : null;
  return `Solar wind ${said(sw?.speed, 0, 'kilometres per second', wS, 'solar_wind')}, `
    + `interplanetary field Bz ${said(sw?.bz_gsm, 1, 'nanotesla', wS, 'solar_wind')}, `
    + `magnetopause standoff ${said(live(mS) ? d?.magnetopause?.standoff_re : null, 1, 'Earth radii', mS, 'magnetopause')}, `
    + `planetary K index ${said(live(kS) ? d?.kp?.estimated_kp : null, 1, '', kS, 'kp')}, `
    + `radiation ${said(pt && pt.proton_10mev !== null ? `S${pt.s_scale ?? 0}` : null, 0, '', pS, 'particles')}`
    + `${pt && pt.proton_10mev !== null ? ` at ${said(pt.proton_10mev, 2, 'particle flux units above 10 MeV', pS, 'particles')}` : ''}, `
    + `X-ray class ${said(live(xS) ? d?.xray?.class : null, 0, '', xS, 'xray')}, `
    + `peak aurora probability ${said(live(aS) ? state.aurora?.data?.max_probability : null, 0, 'percent', aS, 'aurora')}.`;
}

/**
 * When the sentence's readings were taken: the earliest and latest observation
 * time among the parts it reads. Amber, with the oldest age, when any of them
 * is stale — a single clock time above six numbers would otherwise claim they
 * are all that recent.
 */
export function sentenceAsOf(
  state: StoreState, now = new Date(), ages: Ages = agesAt(now),
): { text: string; stale: boolean } | null {
  const times: number[] = [];
  /** The observation time of the oldest stale reading, whose age is the one given. */
  let oldest: string | null = null;
  for (const part of SENTENCE_PARTS) {
    const at = partTime(state, part);
    const t = at ? Date.parse(at) : NaN;
    if (!Number.isFinite(t)) continue;
    times.push(t);
    const st = partState(state, part, now);
    if (st.state === 'stale' && (oldest === null || t < Date.parse(oldest))) oldest = at;
  }
  if (times.length === 0) return null;
  const lo = new Date(Math.min(...times)).toISOString();
  const hi = new Date(Math.max(...times)).toISOString();
  const from = whenUTC(lo, now);
  const range = hhmmUTC(lo) === hhmmUTC(hi) && lo.slice(0, 10) === hi.slice(0, 10) ? from
    : lo.slice(0, 10) === hi.slice(0, 10) ? `${from.slice(0, -4)}–${hhmmUTC(hi)} UTC`
      : `${from} – ${whenUTC(hi, now)}`;
  return {
    text: `as of ${range}${oldest !== null ? ` · stale · ${ages(oldest)}` : ''}`,
    stale: oldest !== null,
  };
}
