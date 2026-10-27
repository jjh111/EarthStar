/**
 * Live spans: the few words in the panel that move with the clock rather than
 * with the data — how old a reading is, the time the scene is drawn for, the
 * point where the Sun is overhead.
 *
 * The panel is rebuilt only when what it says has changed, and it tells by
 * comparing the HTML it would write with the HTML it last wrote (hud.ts). A
 * "13 min old" inside that HTML would make every tick a change, and every tick
 * a rebuild under the reader's cursor and selection. So the builders write a
 * token where clock-bound words go. The panel turns each token into an empty
 * element and fills it on its own 30 s clock; plain text — the briefing and
 * the tests — writes the words out at once, so both renderers still say the
 * same thing.
 *
 * A token is two private-use characters (U+E000, U+E001) around a kind and an
 * argument. It survives escapeHtml, which touches only & < > " ', and no feed
 * carries them.
 */

import { formatAge, hhmmUTC } from '../contract/types.js';
import { subsolarPoint } from '../models/ephemeris.js';

const OPEN = '\uE000';
const CLOSE = '\uE001';
const TOKEN = /\uE000(age|clock|subsolar)(?: ([^\uE001]*))?\uE001/g;

/** Writes an age for the reading taken at `iso`: as words, or as a live span. */
export type Ages = (iso: string) => string;

/** Ages as words, for `now`: "13 min", "3.2 h". */
export const agesAt = (now: Date): Ages =>
  (iso) => formatAge((now.getTime() - Date.parse(iso)) / 1000);

/**
 * An age left live. The instant is normalised, so the token is the same
 * string on every render, and holds nothing an attribute could not.
 */
export const liveAge: Ages = (iso) => {
  const t = Date.parse(iso);
  return Number.isFinite(t) ? `${OPEN}age ${new Date(t).toISOString()}${CLOSE}` : formatAge(NaN);
};

/** The time now, as HH:MM — the caller writes the " UTC" after it. */
export const liveClock = (): string => `${OPEN}clock${CLOSE}`;

/** Where the Sun is overhead now: "12.3°S, 5.1°W". */
export const liveSubsolar = (): string => `${OPEN}subsolar${CLOSE}`;

export function cardinal(lat: number, lon: number): string {
  const ns = lat >= 0 ? 'N' : 'S';
  const ew = lon >= 0 ? 'E' : 'W';
  return `${Math.abs(lat).toFixed(1)}°${ns}, ${Math.abs(lon).toFixed(1)}°${ew}`;
}

function words(kind: string, arg: string | undefined, now: Date): string {
  if (kind === 'age') return agesAt(now)(arg ?? '');
  if (kind === 'clock') return hhmmUTC(now.toISOString());
  const ss = subsolarPoint(now);
  return cardinal(ss.lat, ss.lon);
}

/** Every token written out as words, for `now`. */
export function liveText(s: string, now: Date): string {
  return s.replace(TOKEN, (_, kind: string, arg?: string) => words(kind, arg, now));
}

/** Every token as the empty element `fillLive` writes into. */
export function liveHtml(s: string): string {
  return s.replace(TOKEN, (_, kind: string, arg?: string) => (kind === 'age'
    ? `<time data-age="${arg ?? ''}"></time>`
    : kind === 'clock' ? '<time data-clock></time>' : '<span data-subsolar></span>'));
}

/** An age as a live element, for HTML written directly. */
export const ageHtml = (iso: string): string => liveHtml(liveAge(iso));

/**
 * Write the words into every live span under `root`, for `now`. Only a span
 * whose words have changed is touched. An age is also given its duration in
 * `datetime`, because "13 min" is not a time the element can carry by itself.
 */
export function fillLive(root: ParentNode, now: Date): void {
  for (const el of root.querySelectorAll<HTMLElement>('[data-age], [data-clock], [data-subsolar]')) {
    const age = el.dataset['age'];
    const kind = age !== undefined ? 'age' : el.hasAttribute('data-clock') ? 'clock' : 'subsolar';
    const text = words(kind, age, now);
    if (el.textContent !== text) el.textContent = text;
    if (age !== undefined) {
      const s = Math.max(0, Math.round((now.getTime() - Date.parse(age)) / 1000));
      const dt = Number.isFinite(s) ? `PT${s}S` : '';
      if (dt && el.getAttribute('datetime') !== dt) el.setAttribute('datetime', dt);
    }
  }
}
