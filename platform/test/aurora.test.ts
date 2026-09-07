/**
 * OVATION aurora: grid indexing and overlay orientation.
 *
 * The failure this guards against is a silently transposed or rotated oval —
 * an aurora drawn over the wrong part of the Earth is worse than none, because
 * it looks authoritative. Indexing is pinned deterministically here; the live
 * check that the real oval encircles the magnetic pole runs on the verify page.
 */

import { describe, expect, it } from 'vitest';
import { auroraAt, parseAurora } from '../src/data/swpc.js';
import { northDipPole, geomagneticNorthPole, angularSeparationDeg } from '../src/models/igrf14.js';

const DATE = new Date('2026-09-06T00:00:00Z');

/** Upstream shape: [lon, lat, probability], latitude varying fastest. */
function makeGrid(marks: Array<[number, number, number]>): unknown {
  const coordinates: number[][] = [];
  for (let lon = 0; lon < 360; lon++) {
    for (let lat = -90; lat <= 90; lat++) {
      const hit = marks.find(([lo, la]) => lo === lon && la === lat);
      coordinates.push([lon, lat, hit ? hit[2] : 0]);
    }
  }
  return {
    'Observation Time': '2026-09-06T00:25:00Z',
    'Forecast Time': '2026-09-06T01:41:00Z',
    'Data Format': '[Longitude, Latitude, Aurora]',
    coordinates, type: 'MultiPoint',
  };
}

describe('grid parsing', () => {
  it('reads the published 360 × 181 grid', () => {
    const a = parseAurora(makeGrid([]))!;
    expect(a.grid.width).toBe(360);
    expect(a.grid.height).toBe(181);
    expect(a.grid.values.length).toBe(360 * 181);
    expect(a.grid.lat_start).toBe(-90);
    expect(a.grid.lon_step).toBe(1);
  });

  it('places a value at exactly the longitude and latitude upstream stated', () => {
    const a = parseAurora(makeGrid([[70, 65, 88]]))!;
    expect(auroraAt(a.grid, 65, 70)).toBe(88);
    // ...and nowhere else.
    expect(auroraAt(a.grid, 65, 71)).toBe(0);
    expect(auroraAt(a.grid, 66, 70)).toBe(0);
    // A transposed grid would land here; assert it does not.
    expect(auroraAt(a.grid, 70, 65)).toBe(0);
    expect(a.max_probability).toBe(88);
  });

  it('keeps the hemispheres apart — a sign error would mirror the oval', () => {
    const a = parseAurora(makeGrid([[200, 68, 90], [200, -68, 40]]))!;
    expect(auroraAt(a.grid, 68, 200)).toBe(90);
    expect(auroraAt(a.grid, -68, 200)).toBe(40);
  });

  it('wraps longitude rather than dropping it', () => {
    const a = parseAurora(makeGrid([[359, 70, 55]]))!;
    expect(auroraAt(a.grid, 70, 359)).toBe(55);
    expect(auroraAt(a.grid, 70, -1)).toBe(55);
    expect(auroraAt(a.grid, 70, 719)).toBe(55);
  });

  it('handles the poles without running off the end of the array', () => {
    const a = parseAurora(makeGrid([[10, 90, 12], [10, -90, 7]]))!;
    expect(auroraAt(a.grid, 90, 10)).toBe(12);
    expect(auroraAt(a.grid, -90, 10)).toBe(7);
    expect(auroraAt(a.grid, 95, 10)).toBe(0);
  });

  it('carries observation and forecast times as distinct UTC instants', () => {
    const a = parseAurora(makeGrid([]))!;
    expect(a.observation_time).toBe('2026-09-06T00:25:00.000Z');
    expect(a.forecast_time).toBe('2026-09-06T01:41:00.000Z');
    expect(Date.parse(a.forecast_time)).toBeGreaterThan(Date.parse(a.observation_time));
  });

  it('returns null rather than an empty oval when the payload is unusable', () => {
    expect(parseAurora(null)).toBeNull();
    expect(parseAurora({})).toBeNull();
    expect(parseAurora({ coordinates: [] })).toBeNull();
    // Missing timestamps: a grid we cannot date is a grid we cannot show.
    expect(parseAurora({ coordinates: [[0, 0, 1]] })).toBeNull();
  });
});

describe('the pole the oval should encircle', () => {
  it('finds the north dip pole well away from the geographic pole', () => {
    const p = northDipPole(DATE);
    // The dip pole has been in the Arctic Ocean, ~85-87°N, for years.
    expect(p.lat).toBeGreaterThan(80);
    expect(p.lat).toBeLessThan(89.5);
    // It is genuinely offset — that offset is why the oval is not centred.
    expect(angularSeparationDeg(p.lat, p.lon, 90, 0)).toBeGreaterThan(2);
    // And the field really is near-vertical there.
    expect(p.horizontalNt).toBeLessThan(300);
  });

  it('computes the geomagnetic (dipole) pole, which is what the oval encircles', () => {
    const p = geomagneticNorthPole(DATE);
    // Published IGRF-14 geomagnetic north pole for this epoch: ~80.7°N, 72.7°W.
    expect(p.lat).toBeCloseTo(80.7, 0);
    expect(p.lon).toBeCloseTo(-72.7, 0);
  });

  it('the dipole pole and the dip pole are genuinely different places', () => {
    // Conflating them puts the oval's expected centre ~13° wrong, which is
    // exactly the mistake the verify page caught.
    const dipole = geomagneticNorthPole(DATE);
    const dip = northDipPole(DATE);
    expect(angularSeparationDeg(dipole.lat, dipole.lon, dip.lat, dip.lon)).toBeGreaterThan(8);
  });

  it('measures angular separation correctly', () => {
    expect(angularSeparationDeg(0, 0, 0, 90)).toBeCloseTo(90, 6);
    expect(angularSeparationDeg(90, 0, -90, 0)).toBeCloseTo(180, 6);
    expect(angularSeparationDeg(45, 10, 45, 10)).toBeCloseTo(0, 6);
  });
});
