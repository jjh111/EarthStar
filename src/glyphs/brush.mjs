// The brush. Turns hand-placed centerlines into filled, tapered, slightly
// wavering strokes — the Earth Star logo's brush-pen hand — as static SVG path
// data. Build-time only: the page ships the paths, never this code.
//
// A stroke is a list of points the line passes through. Between them runs a
// centripetal Catmull-Rom curve (no overshoot, no cusps), resampled evenly by
// arc length. The width follows the pen: a pressed start, full body, a lifted
// tail, with a low, seeded tremor so no two strokes are mechanically alike.
// The outline is smoothed back into cubic Béziers.

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => t * t * (3 - 2 * t);

function crPoint(p0, p1, p2, p3, t) {
  const d = (a, b) => Math.max(1e-4, Math.sqrt(Math.hypot(b[0] - a[0], b[1] - a[1])));
  const t0 = 0, t1 = t0 + d(p0, p1), t2 = t1 + d(p1, p2), t3 = t2 + d(p2, p3);
  const u = t1 + (t2 - t1) * t;
  const L = (a, b, ta, tb) => [
    ((tb - u) / (tb - ta)) * a[0] + ((u - ta) / (tb - ta)) * b[0],
    ((tb - u) / (tb - ta)) * a[1] + ((u - ta) / (tb - ta)) * b[1],
  ];
  const A1 = L(p0, p1, t0, t1), A2 = L(p1, p2, t1, t2), A3 = L(p2, p3, t2, t3);
  const B1 = L(A1, A2, t0, t2), B2 = L(A2, A3, t1, t3);
  return L(B1, B2, t1, t2);
}

/** Dense polyline through `pts` (open, or closed when `closed`). */
function spline(pts, closed) {
  const n = pts.length;
  const P = closed
    ? [pts[n - 1], ...pts, pts[0], pts[1]]
    : [[2 * pts[0][0] - pts[1][0], 2 * pts[0][1] - pts[1][1]], ...pts,
       [2 * pts[n - 1][0] - pts[n - 2][0], 2 * pts[n - 1][1] - pts[n - 2][1]]];
  const out = [];
  const segs = closed ? n : n - 1;
  for (let i = 0; i < segs; i++) {
    for (let s = 0; s < 24; s++) out.push(crPoint(P[i], P[i + 1], P[i + 2], P[i + 3], s / 24));
  }
  out.push(closed ? out[0] : pts[n - 1]);
  return out;
}

/** Resample a polyline to points `step` apart along its length. */
function resample(line, step) {
  const out = [line[0]];
  let carry = 0;
  for (let i = 1; i < line.length; i++) {
    const a = line[i - 1], b = line[i];
    const seg = Math.hypot(b[0] - a[0], b[1] - a[1]);
    let pos = step - carry;
    while (pos <= seg) {
      const t = pos / seg;
      out.push([lerp(a[0], b[0], t), lerp(a[1], b[1], t)]);
      pos += step;
    }
    carry = seg - (pos - step);
  }
  const last = line[line.length - 1], end = out[out.length - 1];
  if (Math.hypot(last[0] - end[0], last[1] - end[1]) > step * 0.35) out.push(last);
  else out[out.length - 1] = last;
  return out;
}

/** Smooth closed polygon → cubic Bézier path data (Catmull-Rom to Bézier). */
function smoothClosed(poly, dp = 1) {
  const f = (v) => {
    const s = (+v.toFixed(dp)).toString();
    return s === '-0' ? '0' : s;
  };
  const n = poly.length;
  let d = `M${f(poly[0][0])} ${f(poly[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = poly[(i - 1 + n) % n], p1 = poly[i], p2 = poly[(i + 1) % n], p3 = poly[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return d + 'Z';
}

/** Low-frequency seeded tremor in [-1, 1] along u ∈ [0, 1]. */
function tremor(rand) {
  const parts = [0, 1, 2].map(() => ({ f: 0.6 + rand() * 2.2, p: rand() * Math.PI * 2, a: 0.4 + rand() * 0.6 }));
  const norm = parts.reduce((s, q) => s + q.a, 0);
  return (u) => parts.reduce((s, q) => s + q.a * Math.sin(2 * Math.PI * q.f * u + q.p), 0) / norm;
}

/**
 * One brush stroke.
 *   pts       points the stroke passes through
 *   w         body width
 *   tipIn     width at the start, as a fraction of w (a pressed start is ~0.5)
 *   tipOut    width at the end (a lifted tail is ~0.1)
 *   taperIn / taperOut   fraction of the length spent reaching / leaving full width
 *   wobble    width tremor (fraction); jitter  centerline tremor (units)
 *   closed    a closed loop (rings, beads)
 */
export function stroke(pts, o = {}) {
  const {
    w = 3, tipIn = 0.45, tipOut = 0.12, taperIn = 0.2, taperOut = 0.35,
    wobble = 0.1, jitter = 0.12, seed = 7, closed = false, step = 0.9, dp = 1, sharp = false,
  } = o;
  const rand = rng(seed);
  const tw = tremor(rand), tj = tremor(rand);
  // `sharp`: straight segments with hard corners — for broken things
  const line = resample(sharp ? pts : spline(pts, closed), step);
  const n = line.length;
  if (n < 2) return '';
  // arc-length fraction per sample
  const acc = [0];
  for (let i = 1; i < n; i++) acc.push(acc[i - 1] + Math.hypot(line[i][0] - line[i - 1][0], line[i][1] - line[i - 1][1]));
  const total = acc[n - 1] || 1;
  const left = [], right = [];
  for (let i = 0; i < n; i++) {
    const u = acc[i] / total;
    const a = line[Math.max(0, i - 1)], b = line[Math.min(n - 1, i + 1)];
    let tx = b[0] - a[0], ty = b[1] - a[1];
    const tl = Math.hypot(tx, ty) || 1; tx /= tl; ty /= tl;
    const nx = -ty, ny = tx;
    let env = 1;
    if (!closed) {
      if (u < taperIn) env = lerp(tipIn, 1, ease(u / taperIn));
      else if (u > 1 - taperOut) env = lerp(tipOut, 1, ease((1 - u) / taperOut));
    }
    const hw = (w / 2) * env * (1 + wobble * tw(u));
    const j = jitter * tj(u);
    const cx = line[i][0] + nx * j, cy = line[i][1] + ny * j;
    left.push([cx + nx * hw, cy + ny * hw]);
    right.push([cx - nx * hw, cy - ny * hw]);
  }
  if (closed) {
    // two concentric loops, the inner drawn backwards: a ring with a hole
    return smoothClosed(left.slice(0, -1), dp) + smoothClosed(right.slice(0, -1).reverse(), dp);
  }
  // Round caps. The normal is the tangent turned +90°, so the way round from
  // the left edge to the right edge *outside* the stroke is a negative sweep,
  // at both ends.
  const cap = (c, from, k = 4) => {
    const a0 = Math.atan2(from[1] - c[1], from[0] - c[0]);
    const r = Math.hypot(from[0] - c[0], from[1] - c[1]);
    const out = [];
    for (let s = 1; s < k; s++) {
      const a = a0 - (Math.PI * s) / k;
      out.push([c[0] + Math.cos(a) * r, c[1] + Math.sin(a) * r]);
    }
    return out;
  };
  const mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  const poly = [
    ...left,
    ...cap(mid(left[n - 1], right[n - 1]), left[n - 1]),
    ...[...right].reverse(),
    ...cap(mid(left[0], right[0]), right[0]),
  ];
  return smoothClosed(poly, dp);
}

/** A bead: a filled, slightly irregular blot (the logo's descending dots). */
export function bead(cx, cy, r, { seed = 3, irregular = 0.12, k = 9, dp = 1 } = {}) {
  const rand = rng(seed);
  const pts = [];
  const rot = rand() * Math.PI * 2;
  for (let i = 0; i < k; i++) {
    const a = rot + (i / k) * Math.PI * 2;
    const rr = r * (1 + irregular * (rand() * 2 - 1));
    pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * (0.92 + rand() * 0.12)]);
  }
  return smoothClosed(pts, dp);
}

/** A ring: a hollow bead, drawn as one closed stroke. */
export function ring(cx, cy, r, o = {}) {
  const k = Math.max(8, Math.round(r * 2.2));
  const pts = [];
  for (let i = 0; i < k; i++) {
    const a = (i / k) * Math.PI * 2 - Math.PI / 2;
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  return stroke(pts, { closed: true, wobble: 0.14, jitter: 0.08, ...o });
}

/**
 * The star: five points, hand-cut like the logo's — points a little uneven,
 * the body slightly leaning, corners softened.
 */
export function star(cx, cy, R, { seed = 11, inner = 0.46, lean = -0.08, dp = 1 } = {}) {
  const rand = rng(seed);
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + lean + (i * Math.PI) / 5;
    const r = (i % 2 === 0 ? R * (0.9 + rand() * 0.18) : R * inner * (0.9 + rand() * 0.2));
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  // soften: insert near-corner points so the smoothing keeps points sharp but
  // rounds the inner angles a touch, like a brush filling a cut stencil
  const soft = [];
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], q = pts[(i + 1) % pts.length];
    soft.push(p, [lerp(p[0], q[0], 0.18), lerp(p[1], q[1], 0.18)], [lerp(p[0], q[0], 0.82), lerp(p[1], q[1], 0.82)]);
  }
  return smoothClosed(soft, dp);
}
