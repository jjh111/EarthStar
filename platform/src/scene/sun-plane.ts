/**
 * Where the Sun is inside a solar image, how big it is, and how far the frame
 * reaches — the three numbers needed to hang that image on a plane through the
 * Sun at the scale it was taken at.
 *
 * Two kinds of frame arrive here and they are calibrated differently.
 *
 * A coronagraph is the opposite of a disk image: the Sun itself is deliberately
 * blocked, so `disk-calibration.ts` has nothing to find — there is no limb, and
 * the brightest thing in the frame is a streamer that is not centred on
 * anything. Placing a LASCO frame in the scene needs the same two numbers all
 * the same: where the Sun's centre is, and how many pixels a solar radius spans.
 *
 * Both are drawn into the frame. SWPC's LASCO renderings carry a thin white
 * circle marking the solar limb, inside the occulted zone where there is no
 * data to obscure. It is an annotation rather than a measurement, but it is an
 * annotation of exactly the quantity needed, and it travels with the image — so
 * a frame published at a different size or crop calibrates itself.
 *
 * Measured on the live product, 2026-09-08 (512×512 frames):
 *
 *   C2  limb radius 40.45 px ±0.6   Sun centre offset (0.0, +3.1) px   6.33 R☉ half-width
 *   C3  limb radius  8.51 px ±0.5   Sun centre offset (+2.5, −9.8) px  30.08 R☉ half-width
 *
 * Those half-widths agree with the published fields of view — C2 to 6 R☉, C3 to
 * 30 R☉ (Brueckner et al. 1995, Sol. Phys. 162, 357) — which is the check that
 * the circle means what it appears to mean. The centre offsets are why this is
 * measured rather than assumed: C3's is 1.15 solar radii, so a frame centred on
 * the image would misplace the whole corona by more than the Sun is wide.
 *
 * The discriminator is neutrality, not brightness. C2 renders orange and C3
 * blue, and a saturated streamer is bright in every channel that its palette
 * uses — but only the drawn circle is white in all three at once.
 */

import { CAPTION_FRACTION, calibrateLuminance } from './disk-calibration.js';

export type PlaneKind = 'coronagraph' | 'disk';

export interface SunPlaneCalibration {
  kind: PlaneKind;
  /** Sun centre in texture coordinates, origin bottom-left. */
  centre: { u: number; v: number };
  /** One solar radius, as a fraction of image width. */
  rsun: number;
  /** Half the frame's width, in solar radii — the field of view. */
  halfWidthRsun: number;
  /**
   * Radius, in solar radii, inside which the plane draws nothing.
   *
   * For a coronagraph it is the occulted zone, where the instrument saw
   * nothing — and discarding it takes the drawn limb circle with it. For a disk
   * image it is the limb itself, because everything inside is already on the
   * sphere: the card carries only what the sphere cannot hold, which is the
   * off-limb emission that made the sphere's projection drop it.
   */
  innerRsun: number;
  /**
   * The sky pedestal: the brightness the palette assigns to *no corona*, as a
   * fraction of full scale.
   *
   * These renderings are false-colour, and their zero is not black — C3's
   * empty sky is a solid mid-blue. Added into the scene as light it becomes a
   * luminous slab the size of the inner solar system, which is a statement
   * about the palette rather than about the corona. Subtracting the pedestal
   * removes the palette's offset and leaves the signal, so empty sky renders as
   * the empty space it represents.
   *
   * Measured per frame and per channel, because C2 and C3 use different
   * palettes and a scalar will not do: C3's empty sky is roughly (0.12, 0.24,
   * 0.67), whose luminance is 0.34 — subtract that from every channel and two
   * thirds of the blue survives, leaving the slab intact and only dimmer.
   */
  background: { r: number; g: number; b: number };
  /** How tightly the ring pixels fit the fitted circle, in pixels; null for a
   *  disk image, whose limb is found by intensity rather than by a fit. */
  residualPx: number | null;
}

/** Resolution the fit runs at. LASCO frames are 512²; this keeps them intact. */
const SAMPLE = 512;

/**
 * Search windows, tightest first, as a fraction of the frame width.
 *
 * One fixed window cannot serve both instruments. C2's drawn circle sits at 40
 * px inside an occulter of 91; C3's sits at 8.5 inside an occulter of 30. A
 * window wide enough to reach C2's ring takes in three times C3's occulter and
 * fills up with saturated streamers, and the fit fails. So the tightest window
 * that yields a clean circle wins — the annotation is always the innermost
 * white thing in the frame, and contamination only grows with radius.
 */
const SEARCH_FRACTIONS = [0.05, 0.075, 0.11, 0.16] as const;

/** Near-white: bright in the darkest channel, and not far from grey. */
const MIN_CHANNEL = 190;
const MAX_CHROMA = 25;

/**
 * Where the sky floor is taken from the brightness distribution across the
 * data-carrying annulus. Low, but not the minimum — that is a dead pixel — and
 * well below the median, which in C2 sits inside the corona itself.
 */
const BACKGROUND_PERCENTILE = 0.25;

/** Below this the fit has nothing to work with and null is the honest answer. */
const MIN_RING_PIXELS = 24;
/** A real ring is thin. Anything looser is a smear of corona, not a circle. */
const MAX_RESIDUAL_PX = 2.5;

/**
 * A drawn circle is closed and it is hollow. Both have to be checked, and
 * neither is implied by a good fit.
 *
 * The residual alone proves nothing once the fit has been refined: the refit
 * keeps only points within a couple of pixels of the fitted radius, so it
 * *manufactures* a small residual out of whatever it was given. A solid white
 * square passes it comfortably — the annulus cut out of the square's middle is
 * a perfectly good ring.
 *
 * So: the candidates must reach most of the way around the circle, and the
 * inside of it must be empty. A blob fails the second, a bright arc of corona
 * fails the first.
 */
const MIN_ANGULAR_COVERAGE = 0.6;
const MAX_INTERIOR_FRACTION = 0.25;
const ANGLE_BINS = 24;

interface Pt { x: number; y: number }

/**
 * Kåsa algebraic circle fit — centre and radius from one pass of sums. Chosen
 * over a Hough search because the candidate set is already small and nearly
 * pure; the refit loop below does the outlier rejection.
 */
function fitCircle(pts: Pt[]): { cx: number; cy: number; r: number } | null {
  const n = pts.length;
  if (n < 3) return null;
  let sx = 0, sy = 0, sxx = 0, syy = 0, sxy = 0, sxz = 0, syz = 0, sz = 0;
  for (const { x, y } of pts) {
    const z = x * x + y * y;
    sx += x; sy += y; sxx += x * x; syy += y * y; sxy += x * y;
    sxz += x * z; syz += y * z; sz += z;
  }
  const a = 2 * (sxx - (sx * sx) / n);
  const b = 2 * (sxy - (sx * sy) / n);
  const c = 2 * (syy - (sy * sy) / n);
  const d = sxz - (sx * sz) / n;
  const e = syz - (sy * sz) / n;
  const det = a * c - b * b;
  if (Math.abs(det) < 1e-9) return null;
  const cx = (d * c - b * e) / det;
  const cy = (a * e - d * b) / det;
  let r = 0;
  for (const { x, y } of pts) r += Math.hypot(x - cx, y - cy);
  return { cx, cy, r: r / n };
}

/** Spread of the ring about the fitted circle: p90 − p10, halved. */
function residual(pts: Pt[], cx: number, cy: number): number {
  const rs = pts.map((p) => Math.hypot(p.x - cx, p.y - cy)).sort((u, v) => u - v);
  return (rs[Math.floor(rs.length * 0.9)]! - rs[Math.floor(rs.length * 0.1)]!) / 2;
}

/**
 * The pure core: RGBA rows, `n` wide and tall. Separated from the DOM so the
 * geometry can be tested against synthetic frames without a canvas.
 */
export function calibrateCoronagraphRgba(
  rgba: Uint8ClampedArray, n: number,
): SunPlaneCalibration | null {
  for (const frac of SEARCH_FRACTIONS) {
    const found = fitAtWindow(rgba, n, Math.round(n * frac));
    if (found) return found;
  }
  return null;
}

/** One attempt at one search radius. Null when this window holds no clean ring. */
function fitAtWindow(
  rgba: Uint8ClampedArray, n: number, win: number,
): SunPlaneCalibration | null {
  const mid = n / 2;
  let pts: Pt[] = [];
  for (let y = Math.max(0, Math.floor(mid - win)); y < Math.min(n, mid + win); y++) {
    for (let x = Math.max(0, Math.floor(mid - win)); x < Math.min(n, mid + win); x++) {
      const i = (y * n + x) * 4;
      const r = rgba[i]!, g = rgba[i + 1]!, b = rgba[i + 2]!;
      const lo = Math.min(r, g, b);
      if (lo > MIN_CHANNEL && Math.max(r, g, b) - lo < MAX_CHROMA) pts.push({ x, y });
    }
  }
  if (pts.length < MIN_RING_PIXELS) return null;

  let f = fitCircle(pts);
  if (!f) return null;
  // Shed whatever is not on the ring. One pass is usually enough; three is
  // cheap and converges even when a saturated streak reaches into the occulter.
  for (let k = 0; k < 3; k++) {
    const keep = pts.filter((p) => Math.abs(Math.hypot(p.x - f!.cx, p.y - f!.cy) - f!.r) < 2.5);
    if (keep.length < MIN_RING_PIXELS) break;
    const next = fitCircle(keep);
    if (!next) break;
    pts = keep;
    f = next;
  }
  if (f.r <= 1) return null;

  // The circle must lie inside the window that found it, or it is a fit to
  // whatever happened to be in the corner.
  if (f.r > win) return null;

  const res = residual(pts, f.cx, f.cy);
  if (res > MAX_RESIDUAL_PX) return null;
  if (coverage(pts, f.cx, f.cy) < MIN_ANGULAR_COVERAGE) return null;
  if (interiorFraction(rgba, n, f.cx, f.cy, f.r, pts.length) > MAX_INTERIOR_FRACTION) return null;

  const occulterPx = findOcculter(rgba, n, f.cx, f.cy, f.r);

  const halfWidthRsun = (n / 2) / f.r;
  const background = measureBackground(rgba, n, f.cx, f.cy, occulterPx, halfWidthRsun * f.r);

  return {
    kind: 'coronagraph',
    // Texture coordinates run bottom-up; image rows run top-down.
    centre: { u: f.cx / n, v: 1 - f.cy / n },
    rsun: f.r / n,
    halfWidthRsun,
    innerRsun: occulterPx / f.r,
    background,
    residualPx: res,
  };
}

/** Fraction of the circle the candidate points actually reach around. */
function coverage(pts: Pt[], cx: number, cy: number): number {
  const bins = new Set<number>();
  for (const { x, y } of pts) {
    const a = Math.atan2(y - cy, x - cx) + Math.PI;
    bins.add(Math.min(ANGLE_BINS - 1, Math.floor((a / (2 * Math.PI)) * ANGLE_BINS)));
  }
  return bins.size / ANGLE_BINS;
}

/**
 * How much of the circle's inside is also near-white — near zero for a drawn
 * annotation on a dark occulter, and large for a solid blob that merely
 * happens to fit a circle.
 */
function interiorFraction(
  rgba: Uint8ClampedArray, n: number, cx: number, cy: number, rad: number, ringCount: number,
): number {
  const lim = rad * 0.6;
  let inside = 0;
  const x0 = Math.max(0, Math.floor(cx - lim)), x1 = Math.min(n, Math.ceil(cx + lim));
  const y0 = Math.max(0, Math.floor(cy - lim)), y1 = Math.min(n, Math.ceil(cy + lim));
  for (let y = y0; y < y1; y++) {
    for (let x = x0; x < x1; x++) {
      if (Math.hypot(x - cx, y - cy) > lim) continue;
      const i = (y * n + x) * 4;
      const r = rgba[i]!, g = rgba[i + 1]!, b = rgba[i + 2]!;
      const lo = Math.min(r, g, b);
      if (lo > MIN_CHANNEL && Math.max(r, g, b) - lo < MAX_CHROMA) inside++;
    }
  }
  return ringCount > 0 ? inside / ringCount : 1;
}

/**
 * The sky pedestal, taken as a low percentile of brightness across the annulus
 * that actually carries data — outside the occulter, inside the field of view.
 *
 * A low percentile rather than the minimum, which would be a dead pixel, and
 * rather than the median, which in C2 sits inside the corona itself.
 */
function measureBackground(
  rgba: Uint8ClampedArray, n: number, cx: number, cy: number,
  occulterPx: number, edgePx: number,
): { r: number; g: number; b: number } {
  const ch: number[][] = [[], [], []];
  for (let y = 0; y < n; y += 2) {
    for (let x = 0; x < n; x += 2) {
      const r = Math.hypot(x - cx, y - cy);
      if (r < occulterPx || r > edgePx) continue;
      const i = (y * n + x) * 4;
      ch[0]!.push(rgba[i]!); ch[1]!.push(rgba[i + 1]!); ch[2]!.push(rgba[i + 2]!);
    }
  }
  if (ch[0]!.length < 32) return { r: 0, g: 0, b: 0 };
  const pct = (a: number[]): number => {
    a.sort((u, v) => u - v);
    return a[Math.floor(a.length * BACKGROUND_PERCENTILE)]! / 255;
  };
  return { r: pct(ch[0]!), g: pct(ch[1]!), b: pct(ch[2]!) };
}

/**
 * The edge of the occulted zone: the steepest *rise* in the radial brightness
 * profile, dark disc to corona. The mirror of the limb-finding in
 * `disk-calibration.ts`, which looks for the steepest fall.
 *
 * It matters because everything inside it must be discarded, including the
 * drawn circle — an annotation rendered into the scene would be a bright ring
 * around the Sun that no instrument measured.
 */
function findOcculter(
  rgba: Uint8ClampedArray, n: number, cx: number, cy: number, rsunPx: number,
): number {
  const maxR = Math.floor(n / 2);
  const sum = new Float64Array(maxR);
  const count = new Uint32Array(maxR);
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const r = Math.round(Math.hypot(x - cx, y - cy));
      if (r >= maxR) continue;
      const i = (y * n + x) * 4;
      sum[r]! += (rgba[i]! + rgba[i + 1]! + rgba[i + 2]!) / 3;
      count[r]! += 1;
    }
  }
  const prof = new Float64Array(maxR);
  for (let r = 0; r < maxR; r++) prof[r] = count[r] ? sum[r]! / count[r]! : 0;

  // Search outward from just beyond the drawn circle to well inside the frame.
  const lo = Math.max(2, Math.ceil(rsunPx * 1.3));
  const hi = Math.min(maxR - 2, Math.floor(rsunPx * 8));
  let bestR = Math.round(rsunPx * 2.2);        // a sane default if the edge is soft
  let bestRise = 0;
  for (let r = lo; r < hi; r++) {
    const rise = prof[r + 1]! - prof[r - 1]!;
    if (rise > bestRise) { bestRise = rise; bestR = r; }
  }
  return bestR;
}

/**
 * Measure from anything drawable. Returns null when the frame cannot be read or
 * carries no limb circle — a guessed centre would put the corona somewhere the
 * instrument never looked, and look entirely convincing doing it. Callers fall
 * back to the instrument's published field of view and say that they did.
 */
export function calibrateCoronagraph(
  source: CanvasImageSource & { width?: number; height?: number },
): SunPlaneCalibration | null {
  const canvas = document.createElement('canvas');
  canvas.width = SAMPLE;
  canvas.height = SAMPLE;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return null;
  try {
    ctx.drawImage(source, 0, 0, SAMPLE, SAMPLE);
    return calibrateCoronagraphRgba(ctx.getImageData(0, 0, SAMPLE, SAMPLE).data, SAMPLE);
  } catch {
    return null;   // tainted canvas, zero-size image
  }
}


/* ------------------------------------------------------------------ *
 * Disk images — the card that carries what the sphere cannot
 * ------------------------------------------------------------------ */

/**
 * The same plane, for a SUVI frame.
 *
 * The sphere carries the disk, and by construction it can carry nothing else:
 * a point outside the limb has no sphere to land on, so `sun.ts` discards it
 * rather than smearing it into a bright ring at the edge. But that discarded
 * light is real, measured, and often the most interesting thing in the frame —
 * prominences standing off the limb, and the corona the disk sits in. On a
 * SUVI 304 Å frame the limb is at 394 px of 640, so **a third of the picture
 * was being thrown away.**
 *
 * So the same frame is also hung on the image plane, with everything inside the
 * limb discarded because the sphere already has it. Sphere and card together
 * are the whole exposure, each part drawn where it belongs: the disk wrapped
 * onto the body it came from, the off-limb emission left flat on the plane it
 * was actually projected onto. Neither is faked into the other.
 *
 * The geometry comes from `calibrateDisk`'s limb-finding, which is already the
 * thing that places the sphere's projection — so the two cannot disagree about
 * where the Sun is.
 */
export function calibrateDiskPlane(
  source: CanvasImageSource & { width?: number; height?: number },
): SunPlaneCalibration | null {
  const canvas = document.createElement('canvas');
  canvas.width = SAMPLE;
  canvas.height = SAMPLE;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return null;

  let rgba: Uint8ClampedArray;
  try {
    ctx.drawImage(source, 0, 0, SAMPLE, SAMPLE);
    rgba = ctx.getImageData(0, 0, SAMPLE, SAMPLE).data;
  } catch {
    return null;                     // tainted canvas, zero-size image
  }

  const lum = new Float32Array(SAMPLE * SAMPLE);
  for (let i = 0, p = 0; i < lum.length; i++, p += 4) {
    lum[i] = (rgba[p]! + rgba[p + 1]! + rgba[p + 2]!) / 3;
  }
  const disk = calibrateLuminance(lum, SAMPLE);
  if (!disk || disk.radius <= 0) return null;

  const rsunPx = disk.radius * SAMPLE;
  const cx = disk.centre.u * SAMPLE;
  const cy = (1 - disk.centre.v) * SAMPLE;

  /**
   * Stop the card short of the burned-in caption.
   *
   * SUVI writes "GOES-19 SUVI Composite 304 Angstroms <timestamp>" across the
   * bottom of every frame. It is white, it is not the Sun, and drawn onto a
   * plane in space it appears as a band of text floating beside the corona —
   * which looked, in the first render, like a label the Viewer had put there
   * itself. The circular cut is pulled in to the largest circle that clears the
   * caption line, measured from this frame's own Sun centre rather than assumed
   * to be the middle. LASCO needs no such treatment: its caption sits in a
   * corner, outside the inscribed circle already.
   */
  return {
    kind: 'disk',
    centre: disk.centre,
    rsun: disk.radius,
    halfWidthRsun: cardReachRsun(SAMPLE, cy, rsunPx),
    // The limb. Everything inside it is on the sphere already.
    innerRsun: 1,
    // Measured over the off-limb annulus this card actually draws, so a frame
    // with a bright background does not add a disc of it to the scene.
    background: measureBackground(rgba, SAMPLE, cx, cy, rsunPx, SAMPLE / 2),
    residualPx: null,
  };
}

/**
 * How far the card reaches: the frame's own half-width, or the largest circle
 * that clears the burned-in caption, whichever is smaller.
 *
 * Measured from this frame's own Sun centre rather than the middle of the
 * image, because the two differ — a circle sized from the wrong one either
 * clips real corona or keeps the caption. A circle of this radius touches the
 * caption line at its lowest point, so every pixel inside it is above.
 */
export function cardReachRsun(n: number, cy: number, rsunPx: number): number {
  return Math.min((n / 2) / rsunPx, (CAPTION_FRACTION * n - cy) / rsunPx);
}

/* ------------------------------------------------------------------ *
 * What is covered, and what is not
 * ------------------------------------------------------------------ */

export interface CoverageBand {
  /** Instrument label, or null for a gap nothing on this page observes. */
  label: string | null;
  fromRsun: number;
  toRsun: number;
}

/**
 * The radial coverage of whatever is currently shown, in solar radii, with the
 * gaps between named as gaps.
 *
 * At true radial scale the Sun looks small inside a coronagraph, and it should:
 * C2's occulting disc stands off at 2.3 solar radii and C3's at 4.4, because
 * that is where the instrument put them. The temptation is to scale the picture
 * until the Sun fills its cutout, which reads beautifully and is a lie about
 * distance — the corona would be drawn two to four times closer in than it is.
 *
 * So the geometry stays honest and the page says what it has instead. Built
 * from each frame's own calibration, so it cannot drift from what is drawn.
 *
 * The gap it exposes today is 1.5 to 2.3 R☉ — between where SUVI's off-limb
 * card runs out and where C2's occulter lets go. MLSO's K-Cor covers exactly
 * that band, 1.05 to 3 R☉, but it is ground-based: no CORS, weather-dependent,
 * and the observatory has only just reopened after three years. It is a
 * stage-B candidate, not a layer.
 */
export function coverageBands(
  disk: SunPlaneCalibration | null,
  corona: SunPlaneCalibration | null,
  sphereShown: boolean,
): CoverageBand[] {
  const covered: CoverageBand[] = [];
  if (sphereShown) covered.push({ label: 'disk, on the sphere', fromRsun: 0, toRsun: 1 });
  if (disk) covered.push({ label: 'off-limb, on the card', fromRsun: 1, toRsun: disk.halfWidthRsun });
  if (corona) {
    covered.push({ label: 'coronagraph', fromRsun: corona.innerRsun, toRsun: corona.halfWidthRsun });
  }
  covered.sort((a, b) => a.fromRsun - b.fromRsun);

  const out: CoverageBand[] = [];
  let reach = 0;
  for (const band of covered) {
    // Overlaps are not gaps: C3's occulter opens at 4.4 while C2 still runs to
    // 6.3, and two instruments seeing the same shell is coverage, not a hole.
    if (band.fromRsun > reach + 0.05) {
      out.push({ label: null, fromRsun: reach, toRsun: band.fromRsun });
    }
    out.push(band);
    reach = Math.max(reach, band.toRsun);
  }
  return out;
}
