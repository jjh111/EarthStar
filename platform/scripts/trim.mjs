/**
 * Shortening a mirrored feed without reinterpreting it.
 *
 * The 1-minute L1 files are seven days deep and megabytes wide, and committing
 * that every half hour would grow the repository without limit for data nobody
 * displays — the widest thing the Viewer draws is a few hundred points.
 *
 * The trap, found by mirroring the wind and watching the page report it 18.9
 * hours old: **SWPC's array order is not consistent.** `rtsw_wind_1m.json` is
 * newest-*first*, so taking the last N rows keeps yesterday and discards today,
 * and the result looks perfectly well-formed. The contract says arrays run
 * oldest → newest (DATA_CONTRACT §1) and the `rtsw_*` family does not; the
 * app's own parsers never assumed it, and neither does this.
 *
 * So rows are selected by their timestamps and then emitted in the order they
 * arrived in. Every row that survives is the row upstream published, in the
 * position and field order upstream published it. Shortening is not
 * reinterpreting.
 */

/**
 * Newest rows kept from a long, fast-moving array. The Viewer's tile
 * sparklines draw 110 points and its widest panel a few hundred, so 720 is
 * already generous — and it takes the 1-minute L1 files, which interleave
 * three spacecraft over seven days, from megabytes to a few hundred kilobytes.
 */
export const MAX_ROWS = 720;

/**
 * An array spanning longer than this is an archive, not a feed, and is copied
 * whole however long it is.
 *
 * The sunspot record forces the rule: 3 332 monthly values back to 1749, and
 * the Sun panel's whole purpose is to set today against the 398 of cycle 19.
 * Cutting it to its newest rows would leave the panel claiming "278 years"
 * over sixty — a fabrication arrived at by a size optimisation. It costs
 * nothing to keep: it changes monthly, and git stores one copy of a blob
 * however many commits point at it.
 */
export const ARCHIVE_SPAN_DAYS = 366;

/** The first full timestamp in a row, in ms, or NaN. */
export function rowTime(row) {
  const m = JSON.stringify(row ?? null)
    .match(/\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}(:\d{2})?/);
  return m ? Date.parse(`${m[0].replace(' ', 'T')}Z`) : Number.NaN;
}

/**
 * A coarse date, for measuring span only. Accepts `YYYY-MM` as well as a full
 * timestamp, because an archive may only be dated to the month — the sunspot
 * record is, and reading it with `rowTime` returns NaN for every row, which
 * makes a 278-year archive look undated and gets it truncated.
 */
export function coarseTime(row) {
  const m = JSON.stringify(row ?? null)
    .match(/\d{4}-\d{2}(?:-\d{2}(?:[T ]\d{2}:\d{2}(?::\d{2})?)?)?/);
  if (!m) return Number.NaN;
  let t = m[0].replace(' ', 'T');
  if (/^\d{4}-\d{2}$/.test(t)) t += '-01';
  if (/^\d{4}-\d{2}-\d{2}$/.test(t)) t += 'T00:00';
  return Date.parse(`${t}Z`);
}

/** How many days an array of rows covers, or null when its rows carry no dates. */
export function spanDays(rows) {
  let lo = Infinity;
  let hi = -Infinity;
  // The extremes, not the ends: order is exactly what cannot be assumed here.
  for (const r of rows) {
    const t = coarseTime(r);
    if (!Number.isFinite(t)) continue;
    if (t < lo) lo = t;
    if (t > hi) hi = t;
  }
  return hi >= lo ? (hi - lo) / 864e5 : null;
}

/**
 * Returns `{ value, trimmed, archive, byTime }`.
 *
 * A leading header row (SWPC's `products/*` convention, all strings) is kept
 * because it is the schema rather than a datum. Rows sharing the cutoff
 * timestamp are all kept: three spacecraft report the same minute, and
 * dropping an arbitrary one of them to hit a round number would be a silent
 * choice about which craft matters.
 */
export function trim(value, maxRows = MAX_ROWS) {
  if (!Array.isArray(value) || value.length <= maxRows) {
    return { value, trimmed: false, archive: false, byTime: false };
  }

  const header = Array.isArray(value[0]) && value[0].every((c) => typeof c === 'string')
    ? value[0] : null;
  const body = header ? value.slice(1) : value;

  const span = spanDays(body);
  if (span !== null && span > ARCHIVE_SPAN_DAYS) {
    return { value, trimmed: false, archive: true, byTime: false };
  }

  const times = body.map(rowTime);
  const dated = times.every(Number.isFinite);

  let kept;
  if (dated) {
    const cutoff = [...times].sort((a, b) => b - a)[maxRows - 1];
    // `filter` keeps the array in the order it arrived, whichever way that runs.
    kept = body.filter((_, i) => times[i] >= cutoff);
  } else {
    // Undated rows: position is the only ordering we have, and the convention
    // for those files is oldest-first.
    kept = body.slice(-maxRows);
  }

  return {
    value: header ? [header, ...kept] : kept,
    trimmed: true,
    archive: false,
    byTime: dated,
  };
}
