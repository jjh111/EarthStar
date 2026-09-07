/**
 * NOAA's four kinds of notice.
 *
 * A WATCH says a thing may happen, a WARNING says it is expected, an ALERT says
 * it is happening now, and a SUMMARY says it has finished. Flattening them into
 * one list ordered by clock throws away the only ordering that matters when
 * several are outstanding at once — and puts a notice about something already
 * over above one about something in progress, purely because it was issued
 * later.
 */

import { describe, expect, it } from 'vitest';
import { parseAlerts } from '../src/data/swpc.js';

const row = (issue: string, headline: string, product = 'K04A') => ({
  product_id: product,
  issue_datetime: issue,
  message: `Space Weather Message Code: ${product}\r\n\r\n${headline}\r\nValid From: ...`,
});

describe('parseAlerts levels', () => {
  it('reads the product type out of the headline', () => {
    const out = parseAlerts([
      row('2026-09-07 11:08:00', 'ALERT: Geomagnetic K-index of 4'),
      row('2026-09-07 10:00:00', 'WARNING: Geomagnetic K-index of 4 expected'),
      row('2026-09-07 09:00:00', 'WATCH: Geomagnetic Storm Category G1 Predicted'),
      row('2026-09-07 08:00:00', 'SUMMARY: Geomagnetic Sudden Impulse'),
    ]);
    expect(out.map((a) => a.level)).toEqual(['alert', 'warning', 'watch', 'summary']);
  });

  it('treats an extended warning as a warning and a cancellation as a cancellation', () => {
    const out = parseAlerts([
      row('2026-09-07 11:00:00', 'EXTENDED WARNING: Geomagnetic K-index of 4 expected'),
      row('2026-09-07 10:00:00', 'CANCEL WARNING: Geomagnetic K-index of 4 expected'),
    ]);
    expect(out.map((a) => a.level)).toEqual(['warning', 'cancel']);
  });

  it('strips the prefix from the text, since the level is shown separately', () => {
    const [a] = parseAlerts([row('2026-09-07 11:08:00', 'ALERT: Geomagnetic K-index of 4')]);
    expect(a!.text).toBe('Geomagnetic K-index of 4');
    // The full headline survives for anywhere that wants it verbatim.
    expect(a!.headline).toBe('ALERT: Geomagnetic K-index of 4');
  });

  it('falls back to "other" rather than guessing at an unknown product', () => {
    const [a] = parseAlerts([row('2026-09-07 11:08:00', 'Some unrecognised header line')]);
    expect(a!.level).toBe('other');
    expect(a!.text).toBe('Some unrecognised header line');
  });

  it('keeps the newest first within the feed, as before', () => {
    const out = parseAlerts([
      row('2026-09-07 08:00:00', 'ALERT: older'),
      row('2026-09-07 11:00:00', 'ALERT: newer'),
    ]);
    expect(out[0]!.text).toBe('newer');
  });

  it('drops records with no issue time rather than dating them now', () => {
    expect(parseAlerts([{ product_id: 'X', message: 'ALERT: no time' }])).toEqual([]);
  });
});
