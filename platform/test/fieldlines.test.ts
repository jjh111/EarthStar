/**
 * Field-line tracing. The physics claims the scene makes about the shield are
 * asserted here: lines close between hemispheres, low-latitude shells stay
 * small, high-latitude ones reach far, and the South Atlantic Anomaly shows up
 * as a real asymmetry rather than a drawing.
 */

import { describe, expect, it } from 'vitest';
import { Vector3 } from 'three';
import {
  DEFAULT_SEEDS, EARTH_RADIUS_KM, externalField, geoToEcefKm, lastClosedSunwardRe,
  seedPoints, totalField, traceAll, traceFieldLine, traceFullLine,
} from '../src/models/fieldlines.js';
import { T89_SUNWARD_LIMIT_RE, T89_VALID_RE } from '../src/models/t89.js';
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
    // Derived from the spec rather than restated. Written as `10 * 12` this
    // failed the moment the cage was thinned from twelve meridians to eight —
    // reporting a deliberate change as a defect, which is all a test that
    // repeats a constant can ever do.
    expect(pts.length).toBe(DEFAULT_SEEDS.latitudes.length * DEFAULT_SEEDS.meridianCount);
    // One seed per latitude per meridian, and the meridians evenly spaced.
    // z is the polar axis in this frame, so longitude is atan2(y, x).
    const lons = [...new Set(pts.map((p) => Math.round((Math.atan2(p.y, p.x) * 180) / Math.PI)))];
    expect(lons.length).toBe(DEFAULT_SEEDS.meridianCount);
    expect(pts.some((p) => p.z > 0)).toBe(true);
    expect(pts.some((p) => p.z < 0)).toBe(true);
    for (const p of pts) expect(Re(p)).toBeCloseTo((EARTH_RADIUS_KM + 120) / EARTH_RADIUS_KM, 3);
  });
});

/**
 * What the external field changes. These are the claims the brief was written
 * to make true: IGRF alone is a dipole in empty space, and adding T89 has to
 * deform it in the specific ways the current systems deform the real one. If a
 * future change quietly drops the external term, every one of these fails.
 */
describe('tracing IGRF + T89 rather than IGRF alone', () => {
  const noon = new Date('2026-03-20T12:00:00Z');
  const ext = (kp: number) => externalField(noon, kp)!;

  it('supplies an external field only when Kp is known', () => {
    expect(externalField(noon, 3)).not.toBeNull();
    // No Kp is not the same as quiet, and must not render as quiet.
    expect(externalField(noon, null)).toBeNull();
    expect(externalField(noon, Number.NaN)).toBeNull();
  });

  it('stretches the nightside — the same seed reaches further with T89 in', () => {
    // The cross-tail current sheet is the largest deformation IGRF is missing.
    // A high-latitude nightside seed is where it shows.
    const seed = geoToEcefKm(70, 180, 120);
    const internal = traceFullLine(seed, noon, {});
    const total = traceFullLine(seed, noon, { external: ext(3) });
    expect(total.apexRe).toBeGreaterThan(internal.apexRe * 1.2);
  });

  it('opens the polar cap wider under a storm than under a quiet field', () => {
    // Not a threshold on a number: a larger set of the same seeds stops closing
    // as the disturbance level goes up. That is the polar cap growing, and it
    // is a property of the field rather than of the drawing.
    //
    // Quiet against storm, not band against band. T89's seven bands are seven
    // separate least-squares fits, not a smooth family, and adjacent ones do
    // wobble: over this ladder Kp 0 closes 38 lines and Kp 1 closes 39. That is
    // the model, not a defect, and asserting monotonicity across every step
    // would be testing a smoothness T89 never claimed.
    const ladder = { latitudes: [60, 64, 68, 72, 76, 80, 84], meridianCount: 8, altitudeKm: 120 };
    const closedAt = (kp: number) =>
      traceAll(noon, ladder, { external: ext(kp) }).filter((l) => l.closed).length;
    const quiet = closedAt(0);
    const storm = closedAt(6);
    expect(storm, `quiet ${quiet} vs storm ${storm}`).toBeLessThan(quiet);
    // And the boundary is the thing moving: at 80° the quiet field still has
    // closed lines and the storm field has none.
    const at80 = (kp: number) => traceAll(
      noon, { latitudes: [80], meridianCount: 8, altitudeKm: 120 }, { external: ext(kp) },
    ).filter((l) => l.closed).length;
    expect(at80(0)).toBeGreaterThan(0);
    expect(at80(6)).toBe(0);
  });

  it('puts the tail on the night side, which a mirrored frame would not', () => {
    // The failure this exists for: a sign error in the GSM basis mirrors the
    // whole magnetosphere about the noon-midnight plane. Every other test here
    // still passes — the tail is still stretched, the cap still opens — and
    // the render still looks exactly like a magnetosphere, pointing the wrong
    // way. So measure the asymmetry against the Sun direction explicitly.
    const e = ext(6);
    const lines = traceAll(noon, DEFAULT_SEEDS, { external: e });
    let sunward = 0;
    let antisunward = 0;
    const t = new Vector3();
    for (const l of lines) {
      for (const p of l.points) {
        const x = t.copy(p).divideScalar(EARTH_RADIUS_KM).dot(e.basis.x);
        sunward = Math.max(sunward, x);
        antisunward = Math.min(antisunward, x);
      }
    }
    // The tail runs to the model's edge; the dayside is bounded by the
    // magnetopause at a fraction of that.
    expect(-antisunward, `tail ${(-antisunward).toFixed(1)} Rₑ`).toBeGreaterThan(40);
    expect(sunward, `dayside ${sunward.toFixed(1)} Rₑ`).toBeLessThan(20);
    expect(-antisunward).toBeGreaterThan(sunward * 3);
  });

  it('marks the lines it cut rather than letting them appear to end', () => {
    const lines = traceAll(noon, DEFAULT_SEEDS, { external: ext(6) });
    const cut = lines.filter((l) => l.truncated);
    expect(cut.length).toBeGreaterThan(0);
    const e = ext(6);
    const t = new Vector3();
    for (const l of cut) {
      expect(l.closed).toBe(false);
      expect([l.startsAt, l.endsAt]).toContain('out-of-model');
      // It stopped at one of the two edges the model itself declares, not at
      // some drawing limit: the 70 Rₑ fit sphere down the tail, or the 20 Rₑ
      // sunward plane past which T89's Chapman–Ferraro term is a runaway.
      const ends = [l.points[0]!, l.points[l.points.length - 1]!];
      const atAnEdge = ends.some((p) =>
        p.length() / EARTH_RADIUS_KM > T89_VALID_RE - 1
        || t.copy(p).divideScalar(EARTH_RADIUS_KM).dot(e.basis.x) > T89_SUNWARD_LIMIT_RE - 1);
      expect(atAnEdge, `apex ${l.apexRe.toFixed(1)} Rₑ, ends nowhere the model ends`).toBe(true);
    }
    // And a closed line is never marked cut: it ended because it ended.
    for (const l of lines.filter((l) => l.closed)) expect(l.truncated).toBe(false);
  });

  it('stops at the model edge instead of falling back to IGRF alone', () => {
    // A line traced past 70 Rₑ with the external term silently dropped would
    // straighten into a tidy dipole arc in a region where the real field is
    // nothing of the kind — plausible, and wrong.
    const far = new Vector3(0, 0, EARTH_RADIUS_KM * 71);
    expect(totalField(far, noon, ext(3), new Vector3())).toBeNull();
    expect(totalField(far, noon, null, new Vector3())).not.toBeNull();
  });

  it('compresses the dayside standoff as Kp rises', () => {
    // T89's own answer to where the magnetopause is, read off the closed/open
    // transition. It must move inward with disturbance, and land in the range
    // Shue's pressure-driven boundary occupies — two unrelated models.
    const quiet = lastClosedSunwardRe(noon, ext(0))!;
    const storm = lastClosedSunwardRe(noon, ext(6))!;
    expect(quiet).toBeGreaterThan(storm);
    expect(quiet).toBeGreaterThan(9);
    expect(quiet).toBeLessThan(13);
    expect(storm).toBeGreaterThan(6);
    expect(storm).toBeLessThan(10);
  });

  it('finds the standoff at every dipole tilt, not only near equinox', () => {
    // The bug this replaced: bracketing the search between 30° and 88° of GSM
    // latitude found no closed/open transition at solstice, because with the
    // dipole leaning 26° one hemisphere has none. Half the year returned null.
    for (const iso of [
      '2026-03-20T12:00:00Z', '2026-06-21T12:00:00Z',
      '2026-09-22T12:00:00Z', '2026-12-21T00:00:00Z',
    ]) {
      const date = new Date(iso);
      const r = lastClosedSunwardRe(date, externalField(date, 3)!);
      expect(r, `${iso} (tilt ${(externalField(date, 3)!.basis.tilt * 180 / Math.PI).toFixed(0)}°)`)
        .not.toBeNull();
      expect(r!).toBeGreaterThan(7);
      expect(r!).toBeLessThan(13);
    }
  });
});
