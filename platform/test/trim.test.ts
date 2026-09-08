/**
 * Shortening a mirrored feed without losing today's rows.
 *
 * This exists because the first version got it wrong in a way that looked
 * right: `slice(-N)` on `rtsw_wind_1m.json`, which SWPC publishes
 * **newest-first**, kept yesterday and discarded today. The mirror was
 * well-formed, the manifest said 0 failed, and the page — reading it with
 * upstream blocked — reported the solar wind as 18.9 hours old. Nothing but
 * the age gave it away.
 *
 * The contract says arrays run oldest → newest (DATA_CONTRACT §1). The `rtsw_*`
 * family does not. `docs/sources.md` §3.3 recorded that months ago; the trim
 * was written without it.
 */

import { describe, expect, it } from 'vitest';
import { MAX_ROWS, coarseTime, rowTime, spanDays, trim } from '../scripts/trim.mjs';

const at = (iso: string, extra: Record<string, unknown> = {}) => ({ time_tag: iso, ...extra });
const minutes = (n: number, from = Date.UTC(2026, 8, 8, 12, 0, 0)) =>
  new Date(from + n * 60_000).toISOString().slice(0, 19);

describe('selecting the newest rows', () => {
  it('keeps today when the feed runs newest-first', () => {
    // rtsw's real shape: index 0 is now, the last row is 24 hours old.
    const rows = Array.from({ length: 2000 }, (_, i) => at(minutes(-i)));
    const { value, trimmed, byTime } = trim(rows, 100) as { value: typeof rows; trimmed: boolean; byTime: boolean };
    expect(trimmed).toBe(true);
    expect(byTime).toBe(true);
    expect(value).toHaveLength(100);
    // The newest row survives, and it is still first — the order upstream used.
    expect(value[0]!.time_tag).toBe(minutes(0));
    expect(value[value.length - 1]!.time_tag).toBe(minutes(-99));
  });

  it('keeps today when the feed runs oldest-first', () => {
    const rows = Array.from({ length: 2000 }, (_, i) => at(minutes(i - 1999)));
    const { value } = trim(rows, 100) as { value: typeof rows };
    expect(value).toHaveLength(100);
    expect(value[value.length - 1]!.time_tag).toBe(minutes(0));
  });

  it('keeps every spacecraft reporting the cutoff minute', () => {
    // Three craft report the same minute. Dropping one to hit a round number
    // would be a silent choice about which craft matters.
    const rows = ['SOLAR1', 'ACE', 'IMAP'].flatMap((source) =>
      Array.from({ length: 100 }, (_, i) => at(minutes(-i), { source })));
    const { value } = trim(rows, 10) as { value: Array<{ source: string }> };
    expect(new Set(value.map((r) => r.source)).size).toBe(3);
    expect(value.length).toBeGreaterThanOrEqual(10);
  });

  it('preserves a header row, which is the schema and not a datum', () => {
    const rows: unknown[] = [['time_tag', 'kp'], ...Array.from({ length: 500 },
      (_, i) => [minutes(i - 499), 3])];
    const { value } = trim(rows, 50) as { value: unknown[][] };
    expect(value[0]).toEqual(['time_tag', 'kp']);
    expect(value).toHaveLength(51);
  });

  it('leaves a short array exactly as it arrived', () => {
    const rows = [at(minutes(0)), at(minutes(-1))];
    const { value, trimmed } = trim(rows, MAX_ROWS) as { value: typeof rows; trimmed: boolean };
    expect(trimmed).toBe(false);
    expect(value).toBe(rows);
  });
});

describe('archives are copied whole', () => {
  /** The sunspot record: monthly, dated to the month only, back to 1749. */
  const sunspots = Array.from({ length: 3332 }, (_, i) => ({
    'time-tag': `${1749 + Math.floor(i / 12)}-${String((i % 12) + 1).padStart(2, '0')}`,
    ssn: 42,
  }));

  it('reads a month-only date, which the precise parser cannot', () => {
    expect(Number.isNaN(rowTime(sunspots[0]))).toBe(true);
    expect(coarseTime(sunspots[0])).toBe(Date.parse('1749-01-01T00:00Z'));
  });

  it('measures a 278-year span rather than calling it undated', () => {
    expect(spanDays(sunspots)).toBeGreaterThan(100_000);
  });

  it('does not truncate it, so "since 1749" stays true', () => {
    const { value, trimmed, archive } =
      trim(sunspots, 720) as { value: typeof sunspots; trimmed: boolean; archive: boolean };
    expect(trimmed).toBe(false);
    expect(archive).toBe(true);
    expect(value).toHaveLength(3332);
    expect(value[0]!['time-tag']).toBe('1749-01');
  });
});

describe('rows with no dates at all', () => {
  it('falls back to position and says so', () => {
    const rows = Array.from({ length: 1000 }, (_, i) => ({ n: i }));
    const { value, byTime } = trim(rows, 10) as { value: typeof rows; byTime: boolean };
    expect(byTime).toBe(false);
    expect(value).toHaveLength(10);
    expect(value[value.length - 1]!.n).toBe(999);
  });
});
