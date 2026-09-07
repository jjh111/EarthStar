/**
 * Frame timestamps and subsampling.
 *
 * The charter rule that applies to imagery is the same one that applies to
 * numbers: an undated frame is not shown. Both upstream filename conventions
 * are parsed here, and anything else is refused rather than guessed at.
 */

import { describe, expect, it } from 'vitest';
import { MAX_FRAMES, frameTime } from '../src/data/solar-imagery.js';

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
