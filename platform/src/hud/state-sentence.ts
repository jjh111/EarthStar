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
 */

import type { StoreState } from '../data/store.js';
import { inlineSpark } from './sparkline.js';

/**
 * Glyphs stand for the quantity, not for a mood. They are drawn as inline SVG
 * rather than emoji so they match the text colour and weight, and so they mean
 * the same thing on every platform.
 */
const GLYPH: Record<string, string> = {
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

function num(v: number | null | undefined, digits: number, unit: string): string {
  if (v === null || v === undefined || !Number.isFinite(v)) return MISSING;
  const tight = unit === '%' ? ' tight' : '';
  return `<b class="sentence-num">${v.toFixed(digits)}</b>`
    + `<span class="sentence-unit${tight}">${unit}</span>`;
}

/**
 * Returns HTML. The caller inserts it as a single flowing paragraph — the
 * point is that it reads as prose, with the graphics doing work inside it.
 */
export function stateSentence(state: StoreState): string {
  const d = state.now?.data ?? null;
  const sw = d?.solar_wind ?? null;
  /** Sentences, not comma splices: each glyph opens a clause of its own. */
  const out: string[] = [];

  /* --- solar wind: speed, and the field it carries --- */
  const speedSeries = state.series
    ? { time: state.series.data.time, value: state.series.data.speed }
    : null;
  const bzSeries = state.series
    ? { time: state.series.data.time, value: state.series.data.bz_gsm }
    : null;

  const bz = sw?.bz_gsm ?? null;
  const bzWord = bz === null ? 'in an unknown direction'
    : bz < -5 ? 'strongly southward' : bz < 0 ? 'southward' : 'northward';
  const bzConsequence = bz === null ? ''
    : bz < 0
      ? ' &mdash; the orientation that opens Earth&rsquo;s field and lets energy in'
      : ' &mdash; the orientation that keeps Earth&rsquo;s field closed';

  out.push(
    `${GLYPH['wind']} The solar wind is blowing ` +
    `${speedSeries ? inlineSpark(speedSeries, { label: 'wind speed over the last 24 hours' }) : ''} ` +
    `${num(sw?.speed ?? null, 0, 'km/s')}, carrying a field that points ${bzWord} ` +
    `${bzSeries ? inlineSpark(bzSeries, { rule: 0, extremes: true, label: 'Bz over the last 24 hours, rule at zero' }) : ''} ` +
    `${num(bz, 1, 'nT')}${bzConsequence}.`,
  );

  /* --- the shield it meets --- */
  const mp = d?.magnetopause?.standoff_re ?? null;
  const mpWord = mp === null ? ''
    : mp < 8 ? ', pushed well in' : mp > 11.5 ? ', standing off comfortably' : '';
  out.push(
    `${GLYPH['shield']} It meets the magnetosphere ${num(mp, 1, 'R⊕')} out on the ` +
    `sunward side${mpWord}.`,
  );

  /* --- geomagnetic response at the ground --- */
  const kp = d?.kp?.estimated_kp ?? null;
  const kpWord = kp === null ? 'of unknown disturbance'
    : kp >= 5 ? 'storming' : kp >= 4 ? 'unsettled' : 'quiet';
  out.push(
    `${GLYPH['field']} The ground beneath is ${kpWord} ` +
    `${state.kpSeries ? inlineSpark(state.kpSeries, { band: [0, 4], extremes: true, label: 'Kp over the last 6 hours, quiet band shaded' }) : ''} ` +
    `${num(kp, 2, 'Kp')}.`,
  );

  /* --- the Sun, and what it may do to us --- */
  const xr = d?.xray ?? null;
  const au = state.aurora?.data ?? null;
  out.push(
    `${GLYPH['flare']} The Sun is putting out ` +
    `${state.xraySeries ? inlineSpark(state.xraySeries, { log: true, extremes: true, label: 'X-ray flux over the last 6 hours, logarithmic' }) : ''} ` +
    `<b class="sentence-num">${xr?.class ?? 'no data'}</b> X-rays, and ` +
    `${GLYPH['aurora']} the aurora is forecast to reach ` +
    `${num(au?.max_probability ?? null, 0, '%')} at its brightest.`,
  );

  return out.join(' ');
}

/** The plain-language equivalent, for screen readers and the text alternative. */
export function stateSentenceText(state: StoreState): string {
  const d = state.now?.data ?? null;
  const sw = d?.solar_wind ?? null;
  const f = (v: number | null | undefined, digits: number): string =>
    v === null || v === undefined || !Number.isFinite(v) ? 'no data' : v.toFixed(digits);
  return `Solar wind ${f(sw?.speed, 0)} kilometres per second, `
    + `interplanetary field Bz ${f(sw?.bz_gsm, 1)} nanotesla, `
    + `magnetopause standoff ${f(d?.magnetopause?.standoff_re, 1)} Earth radii, `
    + `planetary K index ${f(d?.kp?.estimated_kp, 2)}, `
    + `X-ray class ${d?.xray?.class ?? 'no data'}, `
    + `peak aurora probability ${f(state.aurora?.data?.max_probability, 0)} percent.`;
}
