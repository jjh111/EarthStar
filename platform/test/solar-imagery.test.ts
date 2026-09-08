/**
 * Frame timestamps and subsampling.
 *
 * The charter rule that applies to imagery is the same one that applies to
 * numbers: an undated frame is not shown. Both upstream filename conventions
 * are parsed here, and anything else is refused rather than guessed at.
 */

import { describe, expect, it } from 'vitest';
import { MAX_FRAMES, frameSatellite, frameTime, instrumentFor } from '../src/data/solar-imagery.js';

describe('frame timestamps', () => {
  it('reads the SUVI convention', () => {
    expect(frameTime('/images/animations/suvi/primary/304/or_suvi-l2-ci304_g19_s20260906T033600Z_e20260906T034000Z_v1-0-2.png'))
      .toBe('2026-09-06T03:36:00.000Z');
  });

  it('reads the LASCO convention', () => {
    expect(frameTime('/images/animations/lasco-c2/20260906_0336_c2_512.jpg'))
      .toBe('2026-09-06T03:36:00.000Z');
  });

  it('prefers the exposure START stamp on SUVI, not the end', () => {
    // The filename carries both; using `_e` would date every frame 4 min late.
    const t = frameTime('/x/or_suvi-l2-ci131_g19_s20260906T120000Z_e20260906T120400Z_v1.png');
    expect(t).toBe('2026-09-06T12:00:00.000Z');
  });

  it('refuses to date a frame it does not recognise', () => {
    expect(frameTime('/images/animations/whatever/latest.jpg')).toBeNull();
    expect(frameTime('')).toBeNull();
    expect(frameTime('/images/2026-09-06.png')).toBeNull();
  });

  it('is not fooled by digits elsewhere in the path', () => {
    // "primary/304" and "g19" are not timestamps.
    expect(frameTime('/images/animations/suvi/primary/304/g19_frame.png')).toBeNull();
  });
});

describe('subsampling', () => {
  /** Mirrors the even-subsample in fetchLoop, which always keeps the newest. */
  function subsample<T>(frames: T[], max = MAX_FRAMES): T[] {
    if (frames.length <= max) return frames;
    const step = (frames.length - 1) / (max - 1);
    return Array.from({ length: max }, (_, i) => frames[Math.round(i * step)]!);
  }

  it('keeps short loops whole', () => {
    const f = [1, 2, 3];
    expect(subsample(f)).toEqual(f);
  });

  it('always keeps the newest frame — the current Sun must not be dropped', () => {
    const f = Array.from({ length: 359 }, (_, i) => i);
    const out = subsample(f);
    expect(out.length).toBe(MAX_FRAMES);
    expect(out[out.length - 1]).toBe(358);
    expect(out[0]).toBe(0);
  });

  it('spaces frames evenly across the window', () => {
    const f = Array.from({ length: 360 }, (_, i) => i);
    const out = subsample(f) as number[];
    const gaps = out.slice(1).map((v, i) => v - out[i]!);
    // Rounding makes gaps differ by at most one frame.
    expect(Math.max(...gaps) - Math.min(...gaps)).toBeLessThanOrEqual(1);
  });

  it('bounds the download: 24 frames of SUVI is tens of MB, not hundreds', () => {
    const bytesPerFrame = 1_145_483;
    expect((MAX_FRAMES * bytesPerFrame) / 1_048_576).toBeLessThan(40);
  });
});

/**
 * The attribution has to come from the frame, because the product name does
 * not carry it. `suvi-primary-304` is an alias NOAA repoints between GOES
 * satellites, and it does not move the fleet together: on 2026-09-08 the X-ray
 * primary was GOES-18 while SUVI's was GOES-19. A hard-coded number therefore
 * survives the repointing and becomes a false citation, with the picture still
 * correct — the failure mode the charter exists to prevent.
 */
describe('spacecraft attribution', () => {
  it('reads the spacecraft out of a SUVI filename', () => {
    expect(frameSatellite('/images/animations/suvi/primary/304/or_suvi-l2-ci304_g19_s20260908T143600Z_e20260908T144000Z_v1-0-2.png'))
      .toBe(19);
  });

  it('follows the alias when NOAA repoints it', () => {
    expect(frameSatellite('/images/animations/suvi/primary/304/or_suvi-l2-ci304_g18_s20260908T143600Z_e20260908T144000Z_v1-0-2.png'))
      .toBe(18);
  });

  it('returns null for LASCO, whose filenames name no spacecraft', () => {
    expect(frameSatellite('/images/animations/lasco-c2/20260906_0336_c2_512.jpg')).toBeNull();
  });

  it('substitutes the number into the instrument family', () => {
    expect(instrumentFor('GOES SUVI', 19)).toBe('GOES-19 SUVI');
    expect(instrumentFor('GOES SUVI', 18)).toBe('GOES-18 SUVI');
  });

  it('never invents a number the filename did not carry', () => {
    expect(instrumentFor('SOHO LASCO', null)).toBe('SOHO LASCO');
    expect(instrumentFor('GOES SUVI', null)).toBe('GOES SUVI');
  });

  it('keeps an unfamiliar family intact rather than mangling it', () => {
    expect(instrumentFor('SOHO LASCO', 19)).toBe('SOHO LASCO (GOES-19)');
  });
});
