/**
 * Field-line tracing. The physics claims the scene makes about the shield are
 * asserted here: lines close between hemispheres, low-latitude shells stay
 * small, high-latitude ones reach far, and the South Atlantic Anomaly shows up
 * as a real asymmetry rather than a drawing.
 */

import { describe, expect, it } from 'vitest';
import { Vector3 } from 'three';
import {
  EARTH_RADIUS_KM, geoToEcefKm, seedPoints, traceFieldLine, traceFullLine,
} from '../src/models/fieldlines.js';
import { igrfVector } from '../src/models/igrf14.js';

const DATE = new Date('2026-09-06T00:00:00Z');
const Re = (v: Vector3) => v.length() / EARTH_RADIUS_KM;

describe('geographic seeding', () => {
  it('places (0,0) on the +X axis and the pole on +Z', () => {
    const eq = geoToEcefKm(0, 0, 0);
    expect(eq.x).toBeCloseTo(EARTH_RADIUS_KM, 6);
    expect(eq.y).toBeCloseTo(0, 6);
    expect(eq.z).toBeCloseTo(0, 6);
    const pole = geoToEcefKm(90, 0, 0);
    expect(pole.z).toBeCloseTo(EARTH_RADIUS_KM, 6);
  });

  it('puts 90°E on the +Y axis', () => {
    const p = geoToEcefKm(0, 90, 0);
    expect(p.y).toBeCloseTo(EARTH_RADIUS_KM, 6);
    expect(p.x).toBeCloseTo(0, 6);
  });
});

describe('tracing', () => {
  it('a mid-latitude line closes back onto the surface in the other hemisphere', () => {
    const line = traceFullLine(geoToEcefKm(45, 0, 120), DATE);
    expect(line.closed).toBe(true);
    expect(line.startsAt).toBe('surface');
    expect(line.endsAt).toBe('surface');
    const first = line.points[0]!;
    const last = line.points[line.points.length - 1]!;
    // Ends on the surface...
    expect(Re(first)).toBeLessThan(1.05);
    expect(Re(last)).toBeLessThan(1.05);
    // ...and in opposite hemispheres.
    expect(Math.sign(first.z)).toBe(-Math.sign(last.z));
  });

  it('apex grows with seed latitude — higher latitude, higher shell', () => {
    const mid = traceFullLine(geoToEcefKm(30, 0, 120), DATE).apexRe;
    const high = traceFullLine(geoToEcefKm(60, 0, 120), DATE).apexRe;
    const veryHigh = traceFullLine(geoToEcefKm(72, 0, 120), DATE).apexRe;
    expect(high).toBeGreaterThan(mid);
    expect(veryHigh).toBeGreaterThan(high);
  });

  it('a 30° line stays on a low shell, roughly the dipole L = 1/cos²λ', () => {
    // Dipole prediction at 30° is L ≈ 1.33; the real field is close but not equal.
    const apex = traceFullLine(geoToEcefKm(30, 0, 0), DATE).apexRe;
    expect(apex).toBeGreaterThan(1.15);
    expect(apex).toBeLessThan(1.6);
  });

  it('follows the field: every step is tangent to B', () => {
    // Northern-hemisphere B points into the ground, so direction −1 is the one
    // that climbs; tracing +1 from here correctly hits the surface in two steps.
    const line = traceFieldLine(geoToEcefKm(40, 10, 300), DATE, -1, { maxSteps: 60 });
    let checked = 0;
    for (let i = 1; i < line.points.length - 1; i++) {
      const tangent = line.points[i + 1]!.clone().sub(line.points[i - 1]!).normalize();
      const field = igrfVector(line.points[i]!, DATE).normalize();
      // Parallel or antiparallel depending on trace direction; either is tangent.
      expect(Math.abs(tangent.dot(field))).toBeGreaterThan(0.99);
      checked++;
    }
    expect(checked).toBeGreaterThan(20);
  });

  it('tracing along B from the northern hemisphere reaches the ground immediately', () => {
    // Not a defect — it is what "field points downward here" means.
    const down = traceFieldLine(geoToEcefKm(40, 10, 300), DATE, 1, { maxSteps: 60 });
    expect(down.endsAt).toBe('surface');
    expect(down.points.length).toBeLessThan(12);
  });

  it('reverses cleanly: tracing back from the far end retraces the same shell', () => {
    const fwd = traceFullLine(geoToEcefKm(50, 120, 120), DATE);
    const far = fwd.points[fwd.points.length - 1]!;
    const back = traceFullLine(far, DATE);
    expect(Math.abs(back.apexRe - fwd.apexRe)).toBeLessThan(0.05);
  });

  it('stops at the outer boundary rather than running forever', () => {
    const line = traceFullLine(geoToEcefKm(85, 0, 120), DATE, { outerRadiusKm: EARTH_RADIUS_KM * 6 });
    // A polar line is open: one foot on the ground, the other leaving the volume.
    expect(line.closed).toBe(false);
    expect([line.startsAt, line.endsAt]).toContain('outer');
    expect(line.apexRe).toBeLessThan(6.5);
  });

  it('the South Atlantic Anomaly bends the field: conjugate points are not mirror images', () => {
    // Same latitude, two longitudes — one over the anomaly, one not. In a pure
    // dipole these would be identical; the real field makes them differ.
    const overSaa = traceFullLine(geoToEcefKm(-30, -45, 120), DATE).apexRe;
    const overPacific = traceFullLine(geoToEcefKm(-30, 170, 120), DATE).apexRe;
    expect(Math.abs(overSaa - overPacific)).toBeGreaterThan(0.05);
  });

  it('produces a usable number of points per line', () => {
    const line = traceFullLine(geoToEcefKm(55, 0, 120), DATE);
    expect(line.points.length).toBeGreaterThan(20);
    expect(line.points.length).toBeLessThan(4000);
  });
});

describe('seed layout', () => {
  it('covers both hemispheres on evenly spaced meridians', () => {
    const pts = seedPoints();
    expect(pts.length).toBe(10 * 12);
    expect(pts.some((p) => p.z > 0)).toBe(true);
    expect(pts.some((p) => p.z < 0)).toBe(true);
    for (const p of pts) expect(Re(p)).toBeCloseTo((EARTH_RADIUS_KM + 120) / EARTH_RADIUS_KM, 3);
  });
});
