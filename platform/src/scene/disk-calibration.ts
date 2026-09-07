/**
 * Where the Sun actually is inside a solar image.
 *
 * Projecting a SUVI frame back onto the rendered sphere needs two numbers: the
 * pixel position of the disk centre, and the disk radius in pixels. Neither is
 * published with the frames, and neither can be assumed.
 *
 * Measured on the live product, 2026-09-07: a 1280×1280 SUVI 304 Å frame has
 * its disk centred at (691, 628) — **51 pixels off the image centre**, which is
 * 13% of a solar radius — with a limb radius of 394 px. The 195 Å frame from
 * the same minute measures 402 px, because its corona reaches further and the
 * intensity edge sits slightly outside the photospheric limb. A hardcoded
 * constant would be wrong for both, and wrong differently.
 *
 * So each frame is measured. The disk is the one feature in these images with a
 * sharp edge: mean intensity is flat across it and then falls off a cliff, so
 * the limb is the steepest fall in the radial intensity profile. Bounding the
 * bright pixels does not work — a prominence or the corona on one side stretches
 * the box and moves the apparent centre.
 */

export interface DiskCalibration {
  /** Disk centre in texture coordinates, origin bottom-left. */
  centre: { u: number; v: number };
  /** Disk radius as a fraction of image width. */
  radius: number;
}

/**
 * Resolution the measurement runs at. The full frame agrees to within 1% and a
 * 256² readback is a quarter of a megabyte instead of six.
 */
const SAMPLE = 256;

/**
 * SUVI and LASCO burn a caption into the bottom of the frame. It is bright, it
 * is not the Sun, and including it drags the centroid downward.
 */
const CAPTION_FRACTION = 0.94;

/** Search bounds as a fraction of the profile, keeping clear of both ends. */
const SEARCH_LO = 0.12;
const SEARCH_HI = 0.92;

/**
 * Measure from anything drawable. Returns null when the image cannot be read —
 * a tainted canvas, a zero-size image — because a guessed calibration would put
 * active regions in the wrong place and look entirely convincing doing it.
 */
export function calibrateDisk(
  source: CanvasImageSource & { width?: number; height?: number },
): DiskCalibration | null {
  const canvas = document.createElement('canvas');
  canvas.width = SAMPLE;
  canvas.height = SAMPLE;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return null;

  let data: Uint8ClampedArray;
  try {
    ctx.drawImage(source, 0, 0, SAMPLE, SAMPLE);
    data = ctx.getImageData(0, 0, SAMPLE, SAMPLE).data;
  } catch {
    // Cross-origin without CORS taints the canvas. The images do send
    // `access-control-allow-origin: *`, but a proxy or a mirror might not.
    return null;
  }
  return calibrateLuminance(luminance(data, SAMPLE), SAMPLE);
}

/** Rec. 601 luma, which is what "brightness" means for these false-colour frames. */
function luminance(rgba: Uint8ClampedArray, n: number): Float32Array {
  const out = new Float32Array(n * n);
  for (let i = 0; i < n * n; i++) {
    out[i] = 0.299 * rgba[i * 4]! + 0.587 * rgba[i * 4 + 1]! + 0.114 * rgba[i * 4 + 2]!;
  }
  return out;
}

/**
 * The measurement itself, on a square luminance buffer. Separated from the
 * canvas so it can be tested against a synthetic disk with a known answer.
 */
/**
 * The measurement itself, on a square luminance buffer. Separated from the
 * canvas so it can be tested against a synthetic disk with a known answer.
 *
 * Two passes. The first centroid is over the whole frame, which a prominence or
 * a one-sided corona pulls off by a few percent of a radius; that is enough to
 * find an approximate limb. The second centroid uses only the pixels *inside*
 * that limb, where off-disk features cannot reach, and the limb is measured
 * again about the corrected centre.
 */
export function calibrateLuminance(lum: Float32Array, n: number): DiskCalibration | null {
  const rows = Math.floor(n * CAPTION_FRACTION);
  if (rows < 8) return null;

  let c = centroid(lum, n, rows, null);
  if (!c) return null;
  let radius = limbRadius(lum, n, rows, c);
  if (radius < 0) return null;

  // Re-centre on the disk alone, then re-measure the limb about it. The window
  // has to sit just *outside* the limb, not inside it: a circle smaller than a
  // uniform disk returns its own centre no matter where it is placed, so an
  // inside window cannot correct anything. Just outside, the window sees both
  // edges of the disk and excludes prominences beyond it.
  for (let pass = 0; pass < 2; pass++) {
    const better = centroid(lum, n, rows, { ...c, r: radius * 1.05 });
    if (!better) break;
    const again = limbRadius(lum, n, rows, better);
    if (again <= 0) break;
    c = better;
    radius = again;
  }

  return {
    // Texture space has v increasing upward; image rows increase downward.
    centre: { u: c.x / n, v: 1 - c.y / n },
    radius: radius / n,
  };
}

/**
 * Intensity-squared centroid. Squaring lets the disk, which is far brighter
 * than the corona, dominate. `within` restricts the sum to a circle, which is
 * how the second pass excludes everything off the limb.
 */
function centroid(
  lum: Float32Array, n: number, rows: number,
  within: { x: number; y: number; r: number } | null,
): { x: number; y: number } | null {
  let sx = 0, sy = 0, sw = 0;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < n; x++) {
      if (within && Math.hypot(x - within.x, y - within.y) > within.r) continue;
      const w = lum[y * n + x]! ** 2;
      sx += x * w; sy += y * w; sw += w;
    }
  }
  return sw > 0 ? { x: sx / sw, y: sy / sw } : null;
}

/**
 * The limb is the steepest fall in the mean radial intensity profile. Bounding
 * the bright pixels does not work: a prominence stretches the box on one side,
 * and the corona has no edge at all.
 */
function limbRadius(
  lum: Float32Array, n: number, rows: number, c: { x: number; y: number },
): number {
  const bins = Math.floor(n / 2);
  const sum = new Float64Array(bins);
  const count = new Float64Array(bins);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < n; x++) {
      const r = Math.round(Math.hypot(x - c.x, y - c.y));
      if (r >= bins) continue;
      sum[r]! += lum[y * n + x]!;
      count[r]! += 1;
    }
  }

  let best = -1;
  let steepest = 0;
  const lo = Math.floor(bins * SEARCH_LO);
  const hi = Math.floor(bins * SEARCH_HI);
  for (let r = lo; r < hi - 1; r++) {
    if (count[r]! === 0 || count[r + 1]! === 0) continue;
    const drop = sum[r]! / count[r]! - sum[r + 1]! / count[r + 1]!;
    if (drop > steepest) { steepest = drop; best = r; }
  }
  return best;
}
