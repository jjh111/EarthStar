/**
 * Finding the Sun inside a solar image.
 *
 * This measurement decides where every active region lands when a frame is
 * projected onto the sphere, and a wrong answer produces a picture that is
 * beautiful, plausible and off by a tenth of a solar radius. So the tests use
 * synthetic disks with known centres and radii, including the two features that
 * broke the obvious approaches: a caption bar burned into the bottom of the
 * frame, and a bright prominence on one limb.
 */

import { describe, expect, it } from 'vitest';
import { calibrateLuminance } from '../src/scene/disk-calibration.js';

const N = 256;

interface Disk { cx: number; cy: number; r: number; caption?: boolean; blob?: boolean; }

/** A flat bright disk with a soft corona, in image coordinates (y down). */
function synth({ cx, cy, r, caption, blob }: Disk): Float32Array {
  const a = new Float32Array(N * N);
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const d = Math.hypot(x - cx, y - cy);
      // Disk, then a corona falling off outside it — the real profile's shape.
      a[y * N + x] = d <= r ? 150 : 150 * Math.exp(-(d - r) / 18);
    }
  }
  if (blob) {
    // A prominence off the west limb: bright, off-disk, and exactly what makes
    // a bounding box of bright pixels give the wrong centre and radius.
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (Math.hypot(x - (cx + r + 14), y - cy) < 12) a[y * N + x] = 220;
      }
    }
  }
  if (caption) {
    // The burned-in timestamp strip along the bottom.
    for (let y = Math.floor(N * 0.95); y < N; y++) {
      for (let x = 0; x < N; x++) a[y * N + x] = 255;
    }
  }
  return a;
}

describe('calibrateLuminance', () => {
  it('finds a centred disk', () => {
    const c = calibrateLuminance(synth({ cx: 128, cy: 128, r: 78 }), N)!;
    expect(c.centre.u * N).toBeCloseTo(128, 0);
    expect((1 - c.centre.v) * N).toBeCloseTo(128, 0);
    expect(c.radius * N).toBeCloseTo(78, -0.5);
  });

  it('finds an off-centre disk — which the real frames are', () => {
    // The live 304 Å frame sits 51 px off centre in 1280, so this is not a
    // hypothetical case.
    const c = calibrateLuminance(synth({ cx: 138, cy: 125, r: 78 }), N)!;
    expect(c.centre.u * N).toBeCloseTo(138, 0);
    expect((1 - c.centre.v) * N).toBeCloseTo(125, 0);
  });

  it('is barely moved by a prominence on one limb', () => {
    // A bounding box of bright pixels puts the centre 30 px off here. The
    // two-pass measurement gets it to under 2 px at this resolution — about 2%
    // of a solar radius — and the residual is real rather than a bug: the blob
    // touches the limb, so part of it is genuinely inside any window that also
    // contains the whole disk. Stated rather than asserted away.
    const clean = calibrateLuminance(synth({ cx: 128, cy: 128, r: 78 }), N)!;
    const withBlob = calibrateLuminance(synth({ cx: 128, cy: 128, r: 78, blob: true }), N)!;
    expect(Math.abs(withBlob.centre.u - clean.centre.u) * N).toBeLessThan(2.5);
    expect(Math.abs(withBlob.centre.v - clean.centre.v) * N).toBeLessThan(1);
    expect(Math.abs(withBlob.radius - clean.radius) * N).toBeLessThan(4);
  });

  it('ignores the caption strip burned into the bottom of the frame', () => {
    const clean = calibrateLuminance(synth({ cx: 128, cy: 128, r: 78 }), N)!;
    const withCaption = calibrateLuminance(synth({ cx: 128, cy: 128, r: 78, caption: true }), N)!;
    expect(withCaption.centre.v).toBeCloseTo(clean.centre.v, 2);
    expect(withCaption.radius).toBeCloseTo(clean.radius, 2);
  });

  it('reports the radius as a fraction of image width, not pixels', () => {
    const c = calibrateLuminance(synth({ cx: 128, cy: 128, r: 78 }), N)!;
    expect(c.radius).toBeGreaterThan(0.28);
    expect(c.radius).toBeLessThan(0.32);
  });

  it('returns v measured from the bottom, as texture coordinates are', () => {
    // A disk high in the image (small y) must give a large v.
    const high = calibrateLuminance(synth({ cx: 128, cy: 70, r: 50 }), N)!;
    const low = calibrateLuminance(synth({ cx: 128, cy: 160, r: 50 }), N)!;
    expect(high.centre.v).toBeGreaterThan(low.centre.v);
  });

  it('gives up on an empty frame rather than returning a plausible guess', () => {
    expect(calibrateLuminance(new Float32Array(N * N), N)).toBeNull();
  });

  it('gives up on a buffer too small to measure', () => {
    expect(calibrateLuminance(new Float32Array(16), 4)).toBeNull();
  });
});
