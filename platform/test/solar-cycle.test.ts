/**
 * The solar-cycle record and span formatting.
 *
 * This feed uses -1 as a fill value for "not yet computed", which would plot as
 * a real trough of −1 spots if taken at face value — the smoothed columns are
 * mostly fill for recent months, so the failure would be silent and permanent.
 */

import { describe, expect, it } from 'vitest';
import { parseSolarCycle, tail } from '../src/data/solar-cycle.js';
import { humanSpan } from '../src/hud/sparkline.js';

const rows = [
  { 'time-tag': '1749-01', ssn: 96.7, smoothed_ssn: -1.0, 'f10.7': -1.0, smoothed_f10_7: -1.0 },
  { 'time-tag': '1778-05', ssn: 398.2, smoothed_ssn: 240.1, 'f10.7': -1.0 },
  { 'time-tag': '2026-07', ssn: 80.0, smoothed_ssn: 78.0, 'f10.7': 120.0 },
  { 'time-tag': '2026-08', ssn: 76.0, smoothed_ssn: -1.0, 'f10.7': 116.22 },
];

describe('solar cycle record', () => {
  it('reads the monthly series', () => {
    const c = parseSolarCycle(rows)!;
    expect(c.ssn.value).toEqual([96.7, 398.2, 80.0, 76.0]);
    expect(c.ssn.time[0]).toBe('1749-01-01T00:00:00.000Z');
  });

  it('treats -1 as missing, not as a measurement', () => {
    // Plotted literally it would be a trough below every real value.
    const c = parseSolarCycle(rows)!;
    expect(c.smoothed.value).toEqual([null, 240.1, 78.0, null]);
    expect(c.f107.value).toEqual([null, null, 120.0, 116.22]);
  });

  it('reports the latest month and the all-time record', () => {
    const c = parseSolarCycle(rows)!;
    expect(c.latest).toEqual({ month: '2026-08', ssn: 76.0, f107: 116.22 });
    expect(c.allTimeMax).toEqual({ month: '1778-05', ssn: 398.2 });
  });

  it('ignores rows whose time-tag is not a month', () => {
    const c = parseSolarCycle([...rows, { 'time-tag': 'garbage', ssn: 999 }])!;
    expect(c.ssn.value).not.toContain(999);
    expect(c.allTimeMax!.ssn).toBe(398.2);
  });

  it('returns null rather than an empty chart for an unusable payload', () => {
    expect(parseSolarCycle(null)).toBeNull();
    expect(parseSolarCycle([])).toBeNull();
    expect(parseSolarCycle([{ nope: 1 }])).toBeNull();
  });

  it('tails to the requested number of months, keeping the newest', () => {
    const c = parseSolarCycle(rows)!;
    const t = tail(c.ssn, 2);
    expect(t.value).toEqual([80.0, 76.0]);
    expect(tail(c.ssn, 99).value.length).toBe(4);
  });
});

describe('span formatting', () => {
  it('uses the largest unit a reader can hold', () => {
    // 278 years of sunspots was rendering as "2433216 h".
    expect(humanSpan(6 * 3.6e6)).toBe('6 h');
    expect(humanSpan(30 * 24 * 3.6e6)).toBe('30 days');
    expect(humanSpan(365 * 24 * 3.6e6)).toBe('12 months');
    expect(humanSpan(278 * 365.25 * 24 * 3.6e6)).toBe('278 years');
  });

  it('switches units at sensible boundaries', () => {
    expect(humanSpan(47 * 3.6e6)).toContain('h');
    expect(humanSpan(49 * 3.6e6)).toContain('days');
    expect(humanSpan(59 * 24 * 3.6e6)).toContain('days');
    expect(humanSpan(70 * 24 * 3.6e6)).toContain('months');
  });
});
