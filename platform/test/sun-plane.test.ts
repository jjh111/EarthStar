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
import { calibrateCoronagraphRgba, cardReachRsun } from '../src/scene/sun-plane.js';
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
    expect(c!.innerRsun).toBeGreaterThan(1.5);
    expect(c!.innerRsun * c!.rsun * N).toBeCloseTo(30, -1);
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

/**
 * The card carries what the sphere cannot, and must not carry what nobody
 * measured.
 *
 * SUVI writes "GOES-19 SUVI Composite 304 Angstroms <timestamp>" across the
 * bottom of every frame. On the sphere it never mattered — the projection drops
 * everything past the limb, caption included. On a plane it appeared as a band
 * of text floating in space beside the corona, which reads as a label the
 * Viewer put there rather than as pixels from NOAA.
 */
describe('where the disk card stops', () => {
  const N = 512;
  const CAPTION_LINE = 0.94 * N;   // disk-calibration's CAPTION_FRACTION

  it('clears the caption when the Sun is centred', () => {
    const rsunPx = 158;
    const reach = cardReachRsun(N, N / 2, rsunPx);
    // Lowest point of the circle lands exactly on the caption line.
    expect(N / 2 + reach * rsunPx).toBeCloseTo(CAPTION_LINE, 6);
    expect(reach).toBeLessThan((N / 2) / rsunPx);
  });

  it('measures from the Sun, not from the middle of the frame', () => {
    // A real SUVI frame had its disk 51 px off centre. Sizing the circle from
    // the image centre instead either clips the corona or keeps the caption,
    // depending on which way the offset runs.
    const rsunPx = 158;
    const low = cardReachRsun(N, N / 2 + 51, rsunPx);
    const high = cardReachRsun(N, N / 2 - 51, rsunPx);
    expect(low).toBeLessThan(high);
    expect(N / 2 + 51 + low * rsunPx).toBeCloseTo(CAPTION_LINE, 6);
  });

  it('never reaches past the frame, however high the Sun sits', () => {
    // With the disk near the top the caption is far away, and the limit
    // becomes the frame edge rather than the text.
    const rsunPx = 158;
    expect(cardReachRsun(N, 20, rsunPx)).toBe((N / 2) / rsunPx);
  });
});

/**
 * The hole in the middle of the picture is where the Sun goes.
 *
 * On a coronagraph that hole is the occulting disc — the solid circle the
 * instrument puts over the Sun so the corona beside it can be exposed at all.
 * On a disk card it is the limb. Either way the sphere has to sit inside it: an
 * image scaled so the Sun pokes out through its own cutout is a picture of
 * nothing that ever happened, and that is what Globe scale used to produce,
 * because it exaggerates the Sun tenfold while compressing every distance.
 */
describe('the cutout holds the Sun', () => {
  /** `ImagePlane.applyScale`, in the open. */
  const extent = (halfWidthRsun: number, innerRsun: number, mode: 'globe' | 'true'): number =>
    Math.max(
      distanceToScene(halfWidthRsun * SUN_RADIUS_AU, mode),
      (radiusToScene('Sun', mode) * halfWidthRsun) / innerRsun,
    );

  /** Scene radius of the image's inner cutout, which must clear the sphere. */
  const cutout = (halfWidthRsun: number, innerRsun: number, mode: 'globe' | 'true'): number =>
    (extent(halfWidthRsun, innerRsun, mode) * innerRsun) / halfWidthRsun;

  const CASES = [
    ['C2 coronagraph', 6.32, 2.30],
    ['C3 coronagraph', 30.28, 4.49],
    ['SUVI disk card', 1.62, 1.00],
  ] as const;

  it.each(CASES)('%s: the Sun fits its cutout at Globe scale', (_n, half, inner) => {
    const sun = radiusToScene('Sun', 'globe');
    expect(cutout(half, inner, 'globe')).toBeGreaterThanOrEqual(sun - 1e-9);
  });

  it.each(CASES)('%s: the Sun fits its cutout at True scale', (_n, half, inner) => {
    const sun = radiusToScene('Sun', 'true');
    expect(cutout(half, inner, 'true')).toBeGreaterThanOrEqual(sun - 1e-9);
  });

  it('leaves True scale exactly as measured — the occulter really does stand off', () => {
    // At true scale the distance rule already clears the sphere, so anchoring
    // must not shrink the picture: C2 still reaches 6.32 solar radii, and its
    // occulter still sits at 2.30, not pulled in to 1.
    const sun = radiusToScene('Sun', 'true');
    expect(extent(6.32, 2.30, 'true') / sun).toBeCloseTo(6.32, 2);
    expect(cutout(6.32, 2.30, 'true') / sun).toBeCloseTo(2.30, 2);
  });

  it('grows the picture at Globe scale rather than letting the Sun burst through', () => {
    const sun = radiusToScene('Sun', 'globe');
    // The distance rule alone put C2's whole 6.32-radius image at 1.6 sphere
    // radii, so its 2.3-radius occulter landed *inside* the sphere.
    const naive = distanceToScene(6.32 * SUN_RADIUS_AU, 'globe');
    expect((naive * 2.30) / 6.32).toBeLessThan(sun);
    // Anchored, the cutout meets the sphere exactly.
    expect(cutout(6.32, 2.30, 'globe')).toBeCloseTo(sun, 6);
  });

  it('keeps the disk card meeting the sphere at the limb in both modes', () => {
    for (const mode of ['globe', 'true'] as const) {
      expect(cutout(1.62, 1, mode)).toBeCloseTo(radiusToScene('Sun', mode), 6);
    }
  });

  it('still nests C2 inside C3', () => {
    for (const mode of ['globe', 'true'] as const) {
      expect(extent(6.32, 2.30, mode)).toBeLessThan(extent(30.28, 4.49, mode));
    }
  });
});
