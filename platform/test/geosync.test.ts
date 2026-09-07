/**
 * GOES magnetometer at geostationary orbit.
 *
 * This is the only in-situ magnetic measurement the Viewer has, and it exists
 * to make the modelled shield falsifiable, so the dipole reference it is judged
 * against has to be right.
 */

import { describe, expect, it } from 'vitest';
import {
  GEOSYNC_RE, dipoleFieldAtRe, geosyncSeries, geosyncVerdict, parseGeosync,
} from '../src/data/geosync.js';

describe('dipole reference', () => {
  it('gives the published surface equatorial field at 1 Rₑ', () => {
    // sqrt(g10² + g11² + h11²) for IGRF-14 epoch 2025 is ~29 700 nT.
    const surface = dipoleFieldAtRe(1);
    expect(surface).toBeGreaterThan(29_000);
    expect(surface).toBeLessThan(30_500);
  });

  it('falls off as one over r cubed', () => {
    expect(dipoleFieldAtRe(2) * 8).toBeCloseTo(dipoleFieldAtRe(1), 6);
    expect(dipoleFieldAtRe(4) * 64).toBeCloseTo(dipoleFieldAtRe(1), 6);
  });

  it('lands near 100 nT at geostationary orbit', () => {
    // The textbook figure for 6.6 Rₑ, and the number GOES is compared against.
    const b = dipoleFieldAtRe(GEOSYNC_RE);
    expect(b).toBeGreaterThan(95);
    expect(b).toBeLessThan(115);
  });
});

describe('parsing', () => {
  const rows = [
    { time_tag: '2026-09-07T05:00:00Z', satellite: 19, He: 52.4, Hp: 60.9, Hn: 1.26, total: 80.4, arcjet_flag: false },
    { time_tag: '2026-09-07T05:04:00Z', satellite: 19, He: 51.7, Hp: 61.8, Hn: 1.55, total: 80.6, arcjet_flag: false },
    { time_tag: '2026-09-07T04:56:00Z', satellite: 19, He: 50.0, Hp: 60.0, Hn: 1.0, total: 79.0, arcjet_flag: true },
  ];

  it('takes the newest sample regardless of array order', () => {
    const g = parseGeosync(rows)!;
    expect(g.time).toBe('2026-09-07T05:04:00.000Z');
    expect(g.total).toBe(80.6);
    expect(g.hp).toBe(61.8);
  });

  it('carries the arcjet flag rather than hiding a suspect reading', () => {
    const g = parseGeosync([rows[2]])!;
    expect(g.arcjet).toBe(true);
  });

  it('returns null for an unusable payload', () => {
    expect(parseGeosync(null)).toBeNull();
    expect(parseGeosync([])).toBeNull();
    expect(parseGeosync([{ total: 5 }])).toBeNull();   // no timestamp
  });

  it('builds a series oldest-first', () => {
    const s = geosyncSeries(rows, 'total');
    expect(s.value).toEqual([79.0, 80.4, 80.6]);
  });
});

describe('the falsifiable claim', () => {
  const field = (total: number) => ({
    time: '2026-09-07T05:04:00.000Z', satellite: 19,
    hp: 60, he: 50, hn: 1, total, arcjet: false,
  });

  it('says GOES should be inside when the boundary is beyond 6.6 Rₑ', () => {
    const v = geosyncVerdict(field(80), 10.6);
    expect(v.compressed).toBe(false);
    expect(v.text).toContain('inside the magnetosphere');
  });

  it('says GOES should be in the solar wind when the boundary is compressed inside', () => {
    const v = geosyncVerdict(field(80), 5.8);
    expect(v.compressed).toBe(true);
    expect(v.text).toContain('solar wind');
  });

  it('reports the deficit from the dipole, which is the external field', () => {
    const v = geosyncVerdict(field(80), 10.6);
    expect(v.deficitNt).toBeCloseTo(dipoleFieldAtRe(GEOSYNC_RE) - 80, 6);
    expect(v.deficitNt!).toBeGreaterThan(0);
  });

  it('reports no deficit rather than zero when the field is missing', () => {
    expect(geosyncVerdict(null, 10.6).deficitNt).toBeNull();
  });
});
