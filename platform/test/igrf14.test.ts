/**
 * IGRF-14 accuracy, against the BGS geomagnetic model web service — an
 * independent implementation of the same published coefficients.
 *
 * Reference values fetched 2026-09-06 from
 * https://geomag.bgs.ac.uk/web_service/GMModels/igrf/14/
 * (NCEI's own calculator now requires an API key; BGS serves the same IGRF-14.)
 *
 * Phase-1 acceptance (plan §6): within 1 nT at five test points. BGS publishes
 * integers, so its own rounding is ±0.5 nT; the assertions below allow 1 nT
 * total, which leaves under half a nanotesla for us.
 */

import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { Vector3 } from 'three';
import { igrfGeodetic, igrfVector, decimalYear, igrfInValidity, igrfCitation } from '../src/models/igrf14.js';
import { IGRF_G, IGRF_G_SV, IGRF_H, IGRF_H_SV, IGRF_IDX } from '../src/models/igrf14-coeffs.js';
import { parseIgrf, idx } from '../scripts/gen-igrf.mjs';

const DATE = new Date('2026-09-06T00:00:00Z');

interface Ref { name: string; lat: number; lon: number; alt: number; x: number; y: number; z: number; f: number }

const REFS: Ref[] = [
  { name: 'Boulder BOU',            lat: 40.14, lon: -105.24, alt: 0,   x: 20535, y: 2762,  z: 46805,  f: 51186 },
  { name: 'South Atlantic Anomaly', lat: -25,   lon: -45,     alt: 0,   x: 15333, y: -6247, z: -15735, f: 22841 },
  { name: 'Equator at Greenwich',   lat: 0,     lon: 0,       alt: 0,   x: 27416, y: -1826, z: -15982, f: 31787 },
  { name: 'Tromsø (high north)',    lat: 70,    lon: 25,      alt: 0,   x: 10171, y: 2677,  z: 53321,  f: 54348 },
  { name: 'Southern high latitude', lat: -65,   lon: 140,     alt: 0,   x: -573,  y: 1406,  z: -66510, f: 66528 },
  { name: 'Boulder at 400 km',      lat: 40.14, lon: -105.24, alt: 400, x: 16978, y: 2051,  z: 38536,  f: 42160 },
];

describe('IGRF-14 vs the BGS reference implementation', () => {
  const TOL_NT = 1.0;

  for (const r of REFS) {
    it(`${r.name} — all components within ${TOL_NT} nT`, () => {
      const b = igrfGeodetic(r.lat, r.lon, r.alt, DATE);
      expect(Math.abs(b.x - r.x), `X: ours ${b.x.toFixed(2)} vs ${r.x}`).toBeLessThanOrEqual(TOL_NT);
      expect(Math.abs(b.y - r.y), `Y: ours ${b.y.toFixed(2)} vs ${r.y}`).toBeLessThanOrEqual(TOL_NT);
      expect(Math.abs(b.z - r.z), `Z: ours ${b.z.toFixed(2)} vs ${r.z}`).toBeLessThanOrEqual(TOL_NT);
      expect(Math.abs(b.f - r.f), `F: ours ${b.f.toFixed(2)} vs ${r.f}`).toBeLessThanOrEqual(TOL_NT);
    });
  }

  it('reproduces the South Atlantic Anomaly as a genuine intensity minimum', () => {
    // The SAA is the physical reason field lines reach lowest there. If the
    // higher-degree terms were dropped, this would not hold.
    const saa = igrfGeodetic(-25, -45, 0, DATE).f;
    const sameLatPacific = igrfGeodetic(-25, 170, 0, DATE).f;
    expect(saa).toBeLessThan(25_000);
    expect(sameLatPacific).toBeGreaterThan(saa * 1.7);
  });

  it('declination and inclination match BGS at Boulder', () => {
    const b = igrfGeodetic(40.14, -105.24, 0, DATE);
    expect(Math.abs(b.declination - 7.662)).toBeLessThan(0.01);
    expect(Math.abs(b.inclination - 66.122)).toBeLessThan(0.01);
  });
});

describe('coefficients', () => {
  it('the generated module still matches the vendored IAGA file', () => {
    // Drift guard: vendor/igrf14coeffs.txt is the source of truth and
    // src/models/igrf14-coeffs.ts is generated from it.
    const text = readFileSync(new URL('../vendor/igrf14coeffs.txt', import.meta.url), 'utf8');
    const parsed = parseIgrf(text);
    for (let n = 1; n <= 13; n++) {
      for (let m = 0; m <= n; m++) {
        expect(IGRF_G[IGRF_IDX(n, m)], `g ${n} ${m}`).toBe(parsed.g[idx(n, m)]);
        expect(IGRF_H[IGRF_IDX(n, m)], `h ${n} ${m}`).toBe(parsed.h[idx(n, m)]);
        expect(IGRF_G_SV[IGRF_IDX(n, m)], `gsv ${n} ${m}`).toBe(parsed.gsv[idx(n, m)]);
        expect(IGRF_H_SV[IGRF_IDX(n, m)], `hsv ${n} ${m}`).toBe(parsed.hsv[idx(n, m)]);
      }
    }
  });

  it('carries the published 2025.0 dipole term', () => {
    expect(IGRF_G[IGRF_IDX(1, 0)]).toBe(-29350.0);
    expect(IGRF_G[IGRF_IDX(1, 1)]).toBe(-1410.3);
    expect(IGRF_H[IGRF_IDX(1, 1)]).toBe(4545.5);
  });
});

describe('time handling', () => {
  it('converts dates to decimal years', () => {
    expect(decimalYear(new Date('2026-01-01T00:00:00Z'))).toBeCloseTo(2026.0, 6);
    expect(decimalYear(new Date('2026-07-02T12:00:00Z'))).toBeCloseTo(2026.5, 2);
  });

  it('knows the model’s validity window — the SV is an extrapolation, not a forecast', () => {
    expect(igrfInValidity(new Date('2026-09-06T00:00:00Z'))).toBe(true);
    expect(igrfInValidity(new Date('2031-01-01T00:00:00Z'))).toBe(false);
    expect(igrfInValidity(new Date('2024-01-01T00:00:00Z'))).toBe(false);
  });

  it('secular variation actually moves the field', () => {
    const a = igrfGeodetic(40.14, -105.24, 0, new Date('2025-01-01T00:00:00Z')).f;
    const b = igrfGeodetic(40.14, -105.24, 0, new Date('2029-01-01T00:00:00Z')).f;
    expect(Math.abs(a - b)).toBeGreaterThan(50);
  });
});

describe('Cartesian field vector', () => {
  it('agrees with the geodetic synthesis in magnitude at a geocentric point', () => {
    // On the equator at 0° longitude the geodetic and geocentric frames coincide.
    const rKm = 6378.137;
    const b = igrfVector(new Vector3(rKm, 0, 0), DATE);
    const g = igrfGeodetic(0, 0, 0, DATE);
    expect(b.length()).toBeCloseTo(g.f, 0);
  });

  it('points broadly northward above the equator, as a dipole requires', () => {
    const b = igrfVector(new Vector3(6371.2, 0, 0), DATE);
    expect(b.z).toBeGreaterThan(0);       // +Z is the north pole
  });

  it('has radial field into the northern hemisphere and out of the southern', () => {
    // On the dipole axis B points the same Cartesian way above and below, so it
    // is the RADIAL component that flips: field enters near the north magnetic
    // pole and leaves near the south.
    const northPos = new Vector3(0, 0, 7000);
    const southPos = new Vector3(0, 0, -7000);
    const brNorth = igrfVector(northPos, DATE).dot(northPos.clone().normalize());
    const brSouth = igrfVector(southPos, DATE).dot(southPos.clone().normalize());
    expect(brNorth).toBeLessThan(0);
    expect(brSouth).toBeGreaterThan(0);
  });

  it('returns zero rather than NaN at the centre', () => {
    expect(igrfVector(new Vector3(0, 0, 0), DATE).length()).toBe(0);
  });
});

/**
 * The predicate was here and tested from the beginning. Nothing called it.
 *
 * That is the shape of the failure worth naming: past the window the synthesis
 * keeps extrapolating the secular variation and returns numbers as convincing
 * as the day before, while the citation goes on naming a validity that has
 * closed. The test proved the function; only the caller was missing. These
 * assertions are on the citation, which is the part a reader sees.
 */
describe('how the model is cited', () => {
  it('says the secular variation is carried to now, inside the window', () => {
    expect(igrfCitation(new Date('2026-09-08T00:00:00Z')))
      .toBe('IGRF-14 (IAGA, epoch 2025.0, secular variation to now)');
  });

  it('says plainly that it is extrapolated, outside it', () => {
    expect(igrfCitation(new Date('2031-01-01T00:00:00Z')))
      .toBe('IGRF-14 (IAGA, epoch 2025.0, extrapolated past its 2030.0 validity limit)');
  });
});
