/**
 * Placing a coronagraph frame: what is measured out of it, and how big it is
 * drawn.
 *
 * A coronagraph is not a picture of the Sun — it is a picture of the Sun being
 * blocked — so none of `disk-calibration.ts` applies. What these frames do
 * carry is a drawn circle marking the solar limb, inside the occulted zone
 * where there is no data to obscure. It is an annotation rather than a
 * measurement, but it is an annotation of exactly the quantity needed, and it
 * travels with the image: a frame published at a different size calibrates
 * itself.
 *
 * Live values on 2026-09-08, both agreeing with the published fields of view
 * (Brueckner et al. 1995: C2 to 6 R☉, C3 to 30):
 *
 *   C2  half-width 6.32 R☉   occulter 2.30 R☉   Sun 0.08 R☉ off frame centre
 *   C3  half-width 30.28 R☉  occulter 4.49 R☉   Sun 1.16 R☉ off frame centre
 */

import { describe, expect, it } from 'vitest';
import { calibrateCoronagraphRgba } from '../src/scene/coronagraph-calibration.js';
import { AU_KM, BODY_RADIUS_KM, distanceToScene, radiusToScene } from '../src/scene/scales.js';

const N = 512;
const SUN_RADIUS_AU = BODY_RADIUS_KM.Sun / AU_KM;

/**
 * A frame in the shape LASCO publishes: tinted sky, a dark occulting disc, and
 * a thin white circle at one solar radius — deliberately off centre, because
 * that is the case that matters and the one an assumption would get wrong.
 */
function frame(opts: {
  rsunPx: number; occulterPx: number; cx: number; cy: number;
  sky: [number, number, number];
}): Uint8ClampedArray {
  const { rsunPx, occulterPx, cx, cy, sky } = opts;
  const d = new Uint8ClampedArray(N * N * 4);
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const i = (y * N + x) * 4;
      const r = Math.hypot(x - cx, y - cy);
      let px: [number, number, number];
      if (Math.abs(r - rsunPx) < 1.1) px = [255, 255, 255];        // the drawn limb
      else if (r < occulterPx) px = [8, 10, 30];                    // occulted: no data
      else {
        // Sky plus a streamer, so the background estimate has something to be
        // a low percentile *of* rather than a constant.
        const streak = Math.exp(-((y - cy) ** 2) / 400) * 90;
        px = [sky[0] + streak, sky[1] + streak, sky[2] + streak];
      }
      d[i] = px[0]; d[i + 1] = px[1]; d[i + 2] = px[2]; d[i + 3] = 255;
    }
  }
  return d;
}

describe('measuring a coronagraph frame', () => {
  it('finds a C3-like limb circle that is nowhere near the frame centre', () => {
    // C3's Sun sits 9.8 px above centre — 1.15 solar radii, so a frame-centred
    // assumption would misplace the whole corona by more than the Sun is wide.
    const c = calibrateCoronagraphRgba(
      frame({ rsunPx: 8.5, occulterPx: 30, cx: 258.5, cy: 246.2, sky: [30, 60, 170] }), N);
    expect(c).not.toBeNull();
    expect(c!.rsun * N).toBeCloseTo(8.5, 0);
    expect(c!.halfWidthRsun).toBeCloseTo(30.1, 0);
    expect(c!.centre.u * N).toBeCloseTo(258.5, 0);
    expect((1 - c!.centre.v) * N).toBeCloseTo(246.2, 0);
  });

  it('finds a C2-like circle, four times larger, with the same code', () => {
    const c = calibrateCoronagraphRgba(
      frame({ rsunPx: 40.5, occulterPx: 91, cx: 256, cy: 259.1, sky: [150, 40, 20] }), N);
    expect(c).not.toBeNull();
    expect(c!.rsun * N).toBeCloseTo(40.5, 0);
    expect(c!.halfWidthRsun).toBeCloseTo(6.3, 1);
  });

  it('finds the occulter, so the annotation is never drawn into the scene', () => {
    const c = calibrateCoronagraphRgba(
      frame({ rsunPx: 8.5, occulterPx: 30, cx: 256, cy: 256, sky: [30, 60, 170] }), N);
    // Whatever it measures, it must exceed 1 R☉ — otherwise the drawn limb
    // circle survives the discard and becomes a bright ring around the Sun
    // that no instrument saw.
    expect(c!.occulterRsun).toBeGreaterThan(1.5);
    expect(c!.occulterRsun * c!.rsun * N).toBeCloseTo(30, -1);
  });

  it('measures the sky as a colour, not a brightness', () => {
    const c = calibrateCoronagraphRgba(
      frame({ rsunPx: 8.5, occulterPx: 30, cx: 256, cy: 256, sky: [30, 60, 170] }), N);
    // A scalar pedestal is what leaves C3 a luminous blue slab: the luminance
    // of this sky is 0.34, and subtracting that from a 0.67 blue channel
    // leaves half of it behind.
    expect(c!.background.b).toBeGreaterThan(c!.background.r + 0.3);
    expect(c!.background.b).toBeCloseTo(170 / 255, 1);
  });

  it('returns null rather than a guess when there is no circle to measure', () => {
    const plain = new Uint8ClampedArray(N * N * 4).fill(40);
    expect(calibrateCoronagraphRgba(plain, N)).toBeNull();
  });

  it('refuses a smear of bright pixels that is not a circle', () => {
    const d = new Uint8ClampedArray(N * N * 4);
    for (let y = 240; y < 275; y++) {
      for (let x = 240; x < 275; x++) {
        const i = (y * N + x) * 4;
        d[i] = 255; d[i + 1] = 255; d[i + 2] = 255; d[i + 3] = 255;
      }
    }
    expect(calibrateCoronagraphRgba(d, N)).toBeNull();
  });
});

describe('how large it is drawn', () => {
  /** The plane's half-width in scene units, as `Sun.applyCoronagraphScale` computes it. */
  const extent = (halfWidthRsun: number, mode: 'globe' | 'true'): number =>
    distanceToScene(halfWidthRsun * SUN_RADIUS_AU, mode);

  it('is exactly the field of view at true scale', () => {
    // 30.28 solar radii means 30.28 solar radii.
    const trueSunRadius = radiusToScene('Sun', 'true');
    expect(extent(30.28, 'true') / trueSunRadius).toBeCloseTo(30.28, 1);
  });

  it('stays inside Mercury at globe scale, where the Sun is exaggerated ten times', () => {
    // The bug this guards: multiplying by the *rendered* Sun radius puts C3's
    // thirty solar radii three times beyond Earth's orbit, and the corona
    // swallows the solar system. Its extent is a distance, so it is compressed
    // like every other distance.
    const mercury = distanceToScene(0.387, 'globe');
    const earth = distanceToScene(1, 'globe');
    const c3 = extent(30.28, 'globe');
    expect(c3).toBeLessThan(mercury);
    expect(c3).toBeLessThan(earth);
    expect(c3).toBeGreaterThan(radiusToScene('Sun', 'globe'));
  });

  it('keeps C2 inside C3, in both modes, because it sees less far', () => {
    for (const mode of ['globe', 'true'] as const) {
      expect(extent(6.32, mode)).toBeLessThan(extent(30.28, mode));
    }
  });
});
