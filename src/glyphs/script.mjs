// The Earth Star script — a writing system imagined for the culture that
// would tend the Gomens. Register [M]: vision, drawn for this page.
//
// Every radical descends from a mark already in the project: the star, the
// column of seed-beads, the ankh-figure in STAR and the tree-pillar in EARTH
// (all from the logo); the vessel-dome, the crystals, the roots and the
// stream of light (from the painting). The pen is constant — radicals shrink,
// strokes keep their weight — which is what makes it read as one hand.

import { stroke, bead, ring, star } from './brush.mjs';

const hash = (s) => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; };

/** A glyph builder: collects filled paths per layer with a shared pen. */
export function pen(id, { w = 3.1, step = 2 } = {}) {
  let n = 0;
  const base = hash(id);
  const layers = { ink: [], gold: [], wash: [] };
  const seed = () => base + 977 * ++n;
  // a transform stack, so a radical can be placed turned (the Circle's figures)
  const stack = [];
  const X = ([x, y]) => stack.reduceRight(([u, v], t) => [
    t.ox + (u - t.ox) * Math.cos(t.a) - (v - t.oy) * Math.sin(t.a),
    t.oy + (u - t.ox) * Math.sin(t.a) + (v - t.oy) * Math.cos(t.a),
  ], [x, y]);
  const api = {
    w,
    layers,
    /** Run fn with everything turned by `deg` about (ox, oy). */
    turn(ox, oy, deg, fn) { stack.push({ ox, oy, a: (deg * Math.PI) / 180 }); fn(api); stack.pop(); return api; },
    s(pts, o = {}, layer = 'ink') { layers[layer].push(stroke(pts.map(X), { w, step, seed: seed(), ...o })); return api; },
    fine(pts, o = {}, layer = 'ink') { return api.s(pts, { w: w * 0.55, tipIn: 0.3, wobble: 0.08, ...o }, layer); },
    dot(x, y, r, layer = 'ink') { const [a, b] = X([x, y]); layers[layer].push(bead(a, b, r, { seed: seed() })); return api; },
    o(x, y, r, o = {}, layer = 'ink') { const [a, b] = X([x, y]); layers[layer].push(ring(a, b, r, { w: w * 0.8, step: Math.min(step, 1.2), seed: seed(), ...o })); return api; },
    star(x, y, R, layer = 'ink') { const [a, b] = X([x, y]); layers[layer].push(star(a, b, R, { seed: seed() })); return api; },
    raw(d, layer = 'ink') { layers[layer].push(d); return api; },
    wash(cx, cy, rx, ry, color, op = 0.5) { layers.wash.push({ cx, cy, rx, ry, color, op }); return api; },
  };
  return api;
}

// ── radicals: drawn at a position and a size; the pen does not scale ──

export const R = {
  /** The figure — the ankh-person standing in the logo's STAR. */
  figure(p, x, y, h = 30, layer = 'ink') {
    const k = h / 30;
    p.o(x, y + 3.6 * k, 3.4 * k, {}, layer);                                   // head, a loop
    p.s([[x - 9 * k, y + 9 * k], [x - 4 * k, y + 10.6 * k], [x, y + 10.2 * k], [x + 4 * k, y + 10.6 * k], [x + 9 * k, y + 9 * k]], { tipIn: 0.5, tipOut: 0.35, taperOut: 0.3 }, layer); // arms
    p.s([[x, y + 7.6 * k], [x - 0.3 * k, y + 18 * k], [x, y + 27 * k]], { tipIn: 0.7, tipOut: 0.5 }, layer); // body
    p.s([[x - 4.6 * k, y + 29 * k], [x, y + 28.4 * k], [x + 4.6 * k, y + 29 * k]], { tipIn: 0.6, tipOut: 0.4, taperIn: 0.3, taperOut: 0.3 }, layer); // pedestal
    return p;
  },
  /** The tree-pillar — the logo's EARTH, a canopy of cloud on a trunk. */
  tree(p, x, y, h = 30, layer = 'ink') {
    const k = h / 30;
    p.s([[x, y + 30 * k], [x + 0.4 * k, y + 20 * k], [x, y + 11 * k]], { tipIn: 0.9, tipOut: 0.5 }, layer);
    p.dot(x - 4.4 * k, y + 8 * k, 3.6 * k, layer).dot(x + 4.2 * k, y + 7.4 * k, 3.9 * k, layer).dot(x, y + 3.8 * k, 4.2 * k, layer);
    return p;
  },
  /** The sprout: a stem and two leaves. */
  sprout(p, x, y, h = 16, layer = 'ink') {
    const k = h / 16;
    const leaf = { w: p.w * 1.55, tipIn: 0.12, tipOut: 0.06, taperIn: 0.45, taperOut: 0.5, wobble: 0.06 };
    p.s([[x, y + 16 * k], [x + 0.7 * k, y + 10 * k], [x, y + 3.5 * k]], { w: p.w * 0.8, tipIn: 0.8, tipOut: 0.25 }, layer);
    p.s([[x - 0.6 * k, y + 10 * k], [x - 4.2 * k, y + 6.8 * k], [x - 8.4 * k, y + 6.2 * k]], leaf, layer);
    p.s([[x + 0.6 * k, y + 6.6 * k], [x + 4.4 * k, y + 2.6 * k], [x + 8.6 * k, y + 2 * k]], leaf, layer);
    return p;
  },
  /** The vessel — the painting's glass dome around the island of soil. */
  vessel(p, x, y, wdt = 32, h = 34, layer = 'ink') {
    const a = wdt / 2;
    p.s([[x - a * 0.86, y + h], [x - a, y + h * 0.55], [x - a * 0.55, y + h * 0.12], [x, y], [x + a * 0.55, y + h * 0.12], [x + a, y + h * 0.55], [x + a * 0.86, y + h]], { tipIn: 0.35, tipOut: 0.35, taperIn: 0.12, taperOut: 0.12 }, layer);
    p.s([[x - a * 0.95, y + h - 1], [x, y + h + 3.2], [x + a * 0.95, y + h - 1]], { tipIn: 0.5, tipOut: 0.3 }, layer);
    return p;
  },
  /** The crystal — the painting's line-drawn octahedra. */
  crystal(p, x, y, s = 8, layer = 'ink') {
    p.fine([[x, y - s], [x + s * 0.7, y], [x, y + s], [x - s * 0.7, y], [x, y - s]], { sharp: true, step: 0.8, tipIn: 0.8, tipOut: 0.8, taperIn: 0.05, taperOut: 0.05, wobble: 0.05, jitter: 0 }, layer);
    p.fine([[x, y - s], [x + 0.2, y], [x, y + s]], { w: p.w * 0.38, tipIn: 0.6, tipOut: 0.6 }, layer);
    p.fine([[x - s * 0.7, y], [x + s * 0.7, y + 0.3]], { w: p.w * 0.32, tipIn: 0.5, tipOut: 0.5 }, layer);
    return p;
  },
  /** The shard — what is broken and discarded. Hard corners, no softness. */
  shard(p, x, y, s = 6, rot = 0, layer = 'ink') {
    const c = Math.cos(rot), si = Math.sin(rot);
    const T = ([u, v]) => [x + (u * c - v * si) * s, y + (u * si + v * c) * s];
    // a jagged fragment, outlined: broken glass, a bottle-cap edge
    const outline = [[-1, 0.55], [-0.45, -0.95], [0.05, -0.35], [0.95, -0.75], [0.7, 0.75], [-1, 0.55]].map(T);
    p.s(outline, { sharp: true, step: Math.max(0.55, s * 0.17), w: p.w * 0.62, tipIn: 1, tipOut: 1, taperIn: 0.01, taperOut: 0.01, wobble: 0.04, jitter: 0 }, layer);
    p.s([[-0.45, -0.95], [0.1, 0.1], [0.7, 0.75]].map(T), { sharp: true, step: Math.max(0.55, s * 0.17), w: p.w * 0.32, tipIn: 0.6, tipOut: 0.3, jitter: 0 }, layer);
    return p;
  },
  /** The stream — the painting's ribbon of light, an S of passage. */
  stream(p, x0, y0, x1, y1, bend = 6, layer = 'ink', fine = false) {
    const mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
    const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy) || 1;
    const nx = -dy / L, ny = dx / L;
    const pts = [[x0, y0], [x0 + dx * 0.25 + nx * bend, y0 + dy * 0.25 + ny * bend], [mx, my], [x0 + dx * 0.75 - nx * bend, y0 + dy * 0.75 - ny * bend], [x1, y1]];
    return fine ? p.fine(pts, { tipIn: 0.2, tipOut: 0.1 }, layer) : p.s(pts, { tipIn: 0.4, tipOut: 0.1 }, layer);
  },
  /** Roots — three threads going down and out. */
  roots(p, x, y, s = 8, layer = 'ink') {
    p.fine([[x, y], [x - s * 0.4, y + s * 0.6], [x - s, y + s * 0.9]], { tipIn: 0.9, tipOut: 0.1 }, layer);
    p.fine([[x, y], [x + 0.2, y + s * 0.7], [x - 0.3, y + s * 1.1]], { tipIn: 0.9, tipOut: 0.1 }, layer);
    p.fine([[x, y], [x + s * 0.45, y + s * 0.55], [x + s, y + s * 0.8]], { tipIn: 0.9, tipOut: 0.1 }, layer);
    return p;
  },
  heart(p, x, y, s = 8, layer = 'ink') {
    p.s([[x, y + s * 0.95], [x - s * 0.75, y + s * 0.15], [x - s * 0.7, y - s * 0.55], [x - s * 0.15, y - s * 0.55], [x, y - s * 0.1]], { tipIn: 0.6, tipOut: 0.6, taperIn: 0.1, taperOut: 0.2 }, layer);
    p.s([[x, y - s * 0.1], [x + s * 0.15, y - s * 0.55], [x + s * 0.7, y - s * 0.55], [x + s * 0.75, y + s * 0.15], [x, y + s * 0.95]], { tipIn: 0.6, tipOut: 0.5, taperIn: 0.2, taperOut: 0.1 }, layer);
    return p;
  },
};

// ── the sixteen ideas ──

const G = {};

G['prime-directive'] = (p) => {
  // coherence rising through every scale to the star
  p.s([[24, 45], [24.4, 32], [24, 19]], { tipIn: 0.9, tipOut: 0.3 });
  p.s([[9, 33], [16, 39.5], [24, 41], [32, 39.5], [39, 33]], { tipIn: 0.3, tipOut: 0.3 });
  p.s([[13, 25], [18.5, 30.5], [24, 31.6], [29.5, 30.5], [35, 25]], { tipIn: 0.3, tipOut: 0.3 });
  p.s([[17.5, 18], [21, 21.5], [24, 22.2], [27, 21.5], [30.5, 18]], { tipIn: 0.3, tipOut: 0.3 });
  p.star(24, 9.6, 6.6);
};
G['five-scales'] = (p) => {
  // the logo's descending beads, read upward: body, biome, being, network, star
  p.dot(7.4, 41.4, 2).dot(13.6, 34.8, 2.6).dot(20.6, 27.4, 3.2).dot(28.8, 19.4, 3.8);
  p.star(38.4, 10.4, 6.6);
};
G['gomens'] = (p) => {
  // a living vessel in which a shard becomes a sprout
  R.vessel(p, 24, 5, 34, 33);
  R.shard(p, 24, 34.6, 4.2, 0.05);
  R.sprout(p, 24, 12, 19);
};
G['earth-stewards'] = (p) => {
  R.figure(p, 22, 9, 34);
  p.star(38.5, 9, 4.6);
};
G['tending'] = (p) => {
  // cupped hands under a sprout, water falling
  p.s([[7, 27], [11, 35], [18, 40], [24, 41], [30, 40], [37, 35], [41, 27]], { tipIn: 0.5, tipOut: 0.4 });
  p.fine([[7, 27], [5.6, 23.6]], { tipIn: 0.7, tipOut: 0.3 }).fine([[41, 27], [42.4, 23.6]], { tipIn: 0.7, tipOut: 0.3 });
  R.sprout(p, 24, 12.5, 24);
  p.dot(12, 12, 1.8).dot(15.6, 6.6, 1.4);
};
G['waste-as-signal'] = (p) => {
  R.shard(p, 10.6, 38, 5, 0.1);
  R.shard(p, 18.6, 41.6, 3.8, -0.6);
  for (const r of [9, 16, 23]) {
    const pts = [];
    for (let a = -82; a <= -8; a += 12) pts.push([12 + r * Math.cos(a * Math.PI / 180), 38 + r * Math.sin(a * Math.PI / 180)]);
    p.fine(pts, { tipIn: 0.4, tipOut: 0.4, taperIn: 0.25, taperOut: 0.25, w: 2.0 });
  }
};
G['kincentric'] = (p) => {
  // tree and person under one roof, on one ground
  p.s([[4, 40], [8, 18], [24, 5], [40, 18], [44, 40]], { tipIn: 0.4, tipOut: 0.4, taperIn: 0.1, taperOut: 0.1, w: 2.4 });
  R.tree(p, 16.5, 17, 26);
  R.figure(p, 31, 19, 24);
  p.fine([[8, 44], [24, 43.4], [40, 44]], { tipIn: 0.4, tipOut: 0.4 });
};
G['death-acceptance'] = (p) => {
  // the moon above, a seed given to the ground, roots below
  p.s([[17, 4.6], [10.5, 8.4], [9.4, 15], [13.4, 20.4], [20, 21.6]], { tipIn: 0.15, tipOut: 0.15, taperIn: 0.4, taperOut: 0.4, w: 3.4 });
  p.s([[5, 30.4], [16, 29.8], [30, 30.2], [43, 29.8]], { w: 2.2, tipIn: 0.4, tipOut: 0.2 });
  p.dot(28, 24.6, 3);
  R.roots(p, 28, 33.4, 10);
};
G['infinite-game'] = (p) => {
  const pts = [];
  for (let i = 0; i <= 26; i++) {
    const t = (i / 26) * Math.PI * 2 + 0.25;
    const d = 1 + Math.sin(t) ** 2;
    pts.push([24 + 19 * Math.cos(t) / d, 24 + 19 * Math.sin(t) * Math.cos(t) / d]);
  }
  p.s(pts, { tipIn: 0.5, tipOut: 0.1, taperIn: 0.1, taperOut: 0.25 });
  p.dot(12, 24, 2.2).dot(36.5, 24, 2.2);
};
G['seven-generations'] = (p) => {
  R.figure(p, 9, 21, 22);
  const n = 7;
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    p.dot(19 + t * 24, 28 - Math.sin(t * Math.PI * 0.5) * 22, 2.7 - t * 1.4);
  }
};
G['wrf'] = (p) => {
  // the balance: what was thrown away, weighed against what grows from it
  p.s([[24, 44], [24.3, 28], [24, 12]], { tipIn: 0.9, tipOut: 0.5 });
  p.s([[17.6, 45], [24, 44.2], [30.4, 45]], { tipIn: 0.6, tipOut: 0.5 });
  p.s([[5, 12.6], [24, 11.2], [43, 12.6]], { tipIn: 0.4, tipOut: 0.4 });
  p.fine([[9, 13], [8.4, 27]], { w: 0.9 }).fine([[39, 13], [39.6, 27]], { w: 0.9 });
  p.s([[2.6, 27], [8.6, 32], [14.6, 27]], { tipIn: 0.4, tipOut: 0.4, w: 2.6 });
  p.s([[33.4, 27], [39.4, 32], [45.4, 27]], { tipIn: 0.4, tipOut: 0.4, w: 2.6 });
  R.shard(p, 8.6, 23, 3.4, 0.1);
  R.sprout(p, 39.4, 14.6, 13);
};
G['cold-start'] = (p) => {
  // the butterfly stirs in the heart of empire
  p.s([[24, 15], [24.3, 25], [24, 36]], { tipIn: 0.8, tipOut: 0.3, w: 2.6 });
  p.s([[23, 20], [16, 10], [7, 9.4], [6.4, 17], [12, 23.4], [23, 23]], { tipIn: 0.3, tipOut: 0.6, taperIn: 0.1, taperOut: 0.1 });
  p.s([[25, 20], [32, 10], [41, 9.4], [41.6, 17], [36, 23.4], [25, 23]], { tipIn: 0.3, tipOut: 0.6, taperIn: 0.1, taperOut: 0.1 });
  p.s([[23, 25], [15, 27.4], [11.4, 34], [16, 38], [23, 30]], { tipIn: 0.3, tipOut: 0.5, taperIn: 0.1, taperOut: 0.15, w: 2.6 });
  p.s([[25, 25], [33, 27.4], [36.6, 34], [32, 38], [25, 30]], { tipIn: 0.3, tipOut: 0.5, taperIn: 0.1, taperOut: 0.15, w: 2.6 });
  p.fine([[23.4, 15], [21, 9], [18.4, 6.6]], { tipIn: 0.6, tipOut: 0.2 }).fine([[24.6, 15], [27, 9], [29.6, 6.6]], { tipIn: 0.6, tipOut: 0.2 });
};
G['registers'] = (p) => {
  // the five kinds of claim, in the script: seen, recorded, drawn, decreed, dreamed
  p.fine([[4, 36], [24, 35.4], [44, 36]], { tipIn: 0.5, tipOut: 0.4 });
  p.dot(7.5, 28, 2.6);
  p.o(15.6, 28, 3);
  R.crystal(p, 24, 27.6, 5.6);
  p.s([[29.6, 29], [32.6, 27.6], [35.6, 28.4]], { tipIn: 0.5, tipOut: 0.5, w: 2.4 });
  p.star(41, 27.4, 4.2);
};
G['viewer'] = (p) => {
  p.s([[4, 24], [12, 15], [24, 12], [36, 15], [44, 24]], { tipIn: 0.15, tipOut: 0.15, taperIn: 0.25, taperOut: 0.25 });
  p.s([[4, 24], [12, 32], [24, 35], [36, 32], [44, 24]], { tipIn: 0.15, tipOut: 0.15, taperIn: 0.25, taperOut: 0.25, w: 2.4 });
  p.o(24, 23.6, 6.4);
  p.dot(24, 23.6, 3);
};
G['magnetosphere'] = (p) => {
  // Earth, and the shape the wind blows its field into
  p.dot(27, 24, 4.4);
  p.s([[44, 14.5], [30, 14.6], [21.4, 18], [19, 24], [21.4, 30], [30, 33.4], [44, 33.5]], { tipIn: 0.4, tipOut: 0.1, taperIn: 0.15, taperOut: 0.5, w: 2.6 });
  p.s([[45, 6.6], [26, 7.4], [14, 14], [10.6, 24], [14, 34], [26, 40.6], [45, 41.4]], { tipIn: 0.4, tipOut: 0.1, taperIn: 0.15, taperOut: 0.5, w: 2.2 });
  p.fine([[2.6, 19.6], [7, 19.8]], { w: 1.6 }).fine([[1.6, 24], [6.4, 24]], { w: 1.6 }).fine([[2.6, 28.4], [7, 28.2]], { w: 1.6 });
};
G['forest-city'] = (p) => {
  p.s([[3.6, 44.4], [24, 43.8], [44.4, 44.4]], { tipIn: 0.4, tipOut: 0.4 });
  R.tree(p, 24, 6, 37);
  R.tree(p, 11.4, 22, 22);
  R.tree(p, 36.6, 19, 25);
  R.crystal(p, 30.6, 37.6, 4);
};

export const IDEA_IDS = Object.keys(G);

export function buildIdea(id) {
  const p = pen(id);
  G[id](p);
  return p.layers;
}

/** Layers → a standalone SVG string (single colour; the page colours it). */
export function svgOf(paths, { size = 48, fill = '#000', title } = {}) {
  const t = title ? `<title>${title}</title>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">${t}<path fill="${fill}" d="${paths.join('')}"/></svg>`;
}

// ── the Gomens: figures in the same hand, 96 × 96 ──
// Ink for the body, gold for what is caught or alive, a soft wash of the
// painting's colours beneath. Each is a design, not a device: register [D]
// (the Circle, whose body is people, is [M]).

const PAINT = { blue: '#3f6fd8', green: '#3fae49', gold: '#f2c14e', lavender: '#b9a6e6', rose: '#e58f9a', teal: '#4fb3a6', soil: '#8a5a2b' };

const F = {};

F.clearers = (p) => {
  // inside a vessel of the body: walls above and below, cells drifting
  p.s([[4, 18], [30, 12.6], [60, 12.4], [92, 17.6]], { w: 2.2, tipIn: 0.2, tipOut: 0.2, taperIn: 0.25, taperOut: 0.25 });
  p.s([[4, 84], [34, 89.4], [64, 89], [92, 83.6]], { w: 2.2, tipIn: 0.2, tipOut: 0.2, taperIn: 0.25, taperOut: 0.25 });
  p.o(17, 50, 5.6, { w: 1.6 }).o(80, 44, 4.6, { w: 1.5 }).o(74, 72, 3.8, { w: 1.4 });
  // the Clearer: a seedling that is also an antibody — a stem with root-hairs,
  // two arms that open like leaves, fingers that hold
  p.s([[48, 76], [48.6, 64], [48, 53]], { tipIn: 0.9, tipOut: 0.5 });
  for (const [dx, dy] of [[-5, 6], [-2, 7.4], [2.4, 7.2], [5.4, 5.6]]) p.fine([[48, 76], [48 + dx * 0.5, 76 + dy * 0.6], [48 + dx, 76 + dy]], { tipIn: 0.7, tipOut: 0.05 });
  p.s([[48, 53], [42.6, 45.6], [36, 38.4]], { tipIn: 0.8, tipOut: 0.55 });
  p.s([[48, 53], [53.4, 45.6], [60, 38.4]], { tipIn: 0.8, tipOut: 0.55 });
  p.fine([[44.6, 54.4], [39.6, 48.6], [33.6, 42.2]], { tipIn: 0.4, tipOut: 0.2 });
  p.fine([[51.4, 54.4], [56.4, 48.6], [62.4, 42.2]], { tipIn: 0.4, tipOut: 0.2 });
  const leaf = { w: 4.2, tipIn: 0.15, tipOut: 0.06, taperIn: 0.45, taperOut: 0.5, wobble: 0.06 };
  p.s([[36, 38.4], [30.4, 35.6], [25.4, 30.8]], leaf).s([[36, 38.4], [35.4, 32], [33, 25.6]], leaf);
  p.s([[60, 38.4], [65.6, 35.6], [70.6, 30.8]], leaf).s([[60, 38.4], [60.6, 32], [63, 25.6]], leaf);
  // what it holds and what it hunts: plastic, in gold
  p.fine([[20, 26], [24.4, 23], [28.6, 26.6], [32.6, 22.6], [37, 25.2]], { w: 1.7, tipIn: 0.5, tipOut: 0.5 }, 'gold');
  p.dot(48, 56.6, 2.4, 'gold');
  p.fine([[62, 76], [66, 73.4], [70, 76.4], [74, 73.6]], { w: 1.4, tipIn: 0.5, tipOut: 0.5 }, 'gold');
  p.dot(26, 66, 1.6, 'gold').dot(84, 60, 1.3, 'gold').dot(11, 32, 1.2, 'gold');
  p.wash(48, 48, 30, 26, PAINT.rose, 0.38).wash(30, 26, 12, 10, PAINT.gold, 0.4);
};

F.shorewalkers = (p) => {
  // the tide line, with what the sea gives back
  p.s([[4, 84], [20, 80.6], [36, 84.4], [52, 80.4], [68, 84], [92, 80.6]], { w: 2, tipIn: 0.2, tipOut: 0.2, taperIn: 0.2, taperOut: 0.2 });
  p.fine([[10, 90], [17, 89.4]], { w: 1.1 }).fine([[44, 91], [53, 90.4]], { w: 1.1 }).fine([[76, 90], [83, 89.6]], { w: 1.1 });
  // legs like roots
  for (const sgn of [-1, 1]) {
    const L = (x) => 48 + sgn * x;
    p.s([[L(19), 62], [L(29), 64.6], [L(34), 73.4]], { w: 2.3, tipIn: 0.8, tipOut: 0.2 });
    p.s([[L(16), 66], [L(25), 71.6], [L(27.6), 81.2]], { w: 2.3, tipIn: 0.8, tipOut: 0.2 });
    p.s([[L(11), 69], [L(17), 75.6], [L(17.6), 82]], { w: 2.1, tipIn: 0.8, tipOut: 0.2 });
    p.fine([[L(34), 73.4], [L(36.6), 76.6]], { w: 1 }).fine([[L(27.6), 81.2], [L(30.4), 83.6]], { w: 1 });
  }
  // the shell: the painting's dome, faceted like its crystals
  p.s([[24, 63], [25, 51.6], [33, 42.6], [48, 39], [63, 42.6], [71, 51.6], [72, 63]], { w: 2.9, tipIn: 0.4, tipOut: 0.4, taperIn: 0.08, taperOut: 0.08 });
  p.s([[23.6, 62.4], [36, 68.6], [48, 70.2], [60, 68.6], [72.4, 62.4]], { w: 2.6, tipIn: 0.5, tipOut: 0.5 });
  p.fine([[33, 45.4], [40, 56], [48, 45.6], [56, 56], [63, 45.4]], { sharp: true, step: 0.8, w: 1.1, tipIn: 0.5, tipOut: 0.5, jitter: 0 });
  p.fine([[29.6, 60.4], [40, 56], [48, 64.4], [56, 56], [66.4, 60.4]], { sharp: true, step: 0.8, w: 1.1, tipIn: 0.5, tipOut: 0.5, jitter: 0 });
  p.fine([[30, 53], [48, 47.6], [66, 53]], { w: 1.6, tipIn: 0.3, tipOut: 0.3 }, 'gold');
  // eyes on stalks, budding like sprouts
  p.s([[42, 40], [40.6, 33], [38.6, 27.6]], { w: 1.8, tipIn: 0.9, tipOut: 0.6 }).dot(38.2, 25.6, 2.6);
  p.s([[54, 40], [55.4, 33], [57.4, 27.6]], { w: 1.8, tipIn: 0.9, tipOut: 0.6 }).dot(57.8, 25.6, 2.6);
  p.s([[40.8, 33.6], [36.6, 31.4]], { w: 2.4, tipIn: 0.2, tipOut: 0.05, taperIn: 0.5, taperOut: 0.5 });
  // the resting claw, and the one held up with what it was handed
  p.s([[25, 56], [17, 51], [12.6, 45]], { w: 2.4, tipIn: 0.8, tipOut: 0.5 });
  p.s([[12.6, 45], [7.6, 41.6], [7, 35.6]], { w: 2.4, tipIn: 0.5, tipOut: 0.1 }).s([[12.6, 45], [13.6, 39.6], [11.2, 35]], { w: 2, tipIn: 0.5, tipOut: 0.1 });
  p.s([[71, 55], [78, 47], [81.6, 39]], { w: 2.4, tipIn: 0.8, tipOut: 0.5 });
  p.s([[81.6, 39], [78.4, 32.4], [80, 25.6]], { w: 2.4, tipIn: 0.5, tipOut: 0.1 }).s([[81.6, 39], [86.4, 33.6], [86.6, 27.4]], { w: 2, tipIn: 0.5, tipOut: 0.1 });
  R.shard(p, 83.2, 27.4, 3.6, -0.4, 'gold');
  p.dot(14, 88.6, 1.6, 'gold').dot(19, 87.6, 1.2, 'gold');
  p.wash(48, 82, 44, 12, PAINT.teal, 0.42).wash(48, 54, 26, 16, PAINT.gold, 0.26).wash(70, 40, 12, 10, PAINT.rose, 0.2);
};

F.circle = (p) => {
  // six people, heads outward, arms joined, around one heart
  for (let i = 0; i < 6; i++) {
    p.turn(48, 48, i * 60, () => R.figure(p, 48, 8.4, 26));
  }
  // hand to hand: each figure's reach joins the next, closing the ring
  const reach = 31.6, half = 22.5;
  for (let i = 0; i < 6; i++) {
    const a0 = (-90 + i * 60 + half - 15) * Math.PI / 180, a1 = (-90 + (i + 1) * 60 - half + 15) * Math.PI / 180;
    const am = (a0 + a1) / 2;
    p.fine([[48 + Math.cos(a0) * reach, 48 + Math.sin(a0) * reach],
            [48 + Math.cos(am) * (reach + 2.6), 48 + Math.sin(am) * (reach + 2.6)],
            [48 + Math.cos(a1) * reach, 48 + Math.sin(a1) * reach]], { w: 1.5, tipIn: 0.7, tipOut: 0.7, taperIn: 0.2, taperOut: 0.2 });
  }
  // the logo's descending beads become a ring around them
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2 + Math.PI / 18;
    p.dot(48 + Math.cos(a) * 45, 48 + Math.sin(a) * 45, i % 3 === 0 ? 1.4 : 0.9);
  }
  R.heart(p, 48, 47, 7.6, 'gold');
  p.wash(48, 48, 24, 24, PAINT.rose, 0.34).wash(48, 48, 12, 12, PAINT.gold, 0.4);
};

F.weavers = (p) => {
  // above the ground, two trees; below, the network that feeds them both
  p.s([[4, 42], [26, 40.4], [50, 41.4], [72, 40.2], [92, 41.6]], { w: 2.5, tipIn: 0.4, tipOut: 0.3 });
  R.tree(p, 25, 10.6, 30);
  R.tree(p, 71, 15, 25);
  const T = (pts, o = {}) => p.fine(pts, { w: 1.25, tipIn: 0.7, tipOut: 0.06, wobble: 0.12, ...o });
  T([[25, 43], [22.6, 51], [16, 58.4], [10, 61]]);
  T([[25, 43], [28.6, 52.4], [37, 60]]);
  T([[71, 43], [68, 52.4], [59, 60]]);
  T([[71, 43], [75.6, 51], [82.6, 57.6], [88, 59.4]]);
  T([[16, 58.4], [22, 68], [34, 75.4], [48, 77.4], [62, 75.4], [74, 68], [82.6, 57.6]], { tipIn: 0.4, tipOut: 0.4 });
  // hyphal tips, still reaching
  T([[22, 68], [18.6, 74.6]]);
  T([[34, 75.4], [33, 82.6]]);
  T([[62, 75.4], [63.4, 82.4]]);
  T([[74, 68], [79.6, 73.6]]);
  p.dot(16, 58.4, 1.8).dot(82.6, 57.6, 1.8).dot(48, 77.4, 1.6).dot(22, 68, 1.3).dot(74, 68, 1.3);
  // the thread being woven now, and the spore at its knot
  p.fine([[37, 60], [42.6, 64.6], [48, 65.6], [53.4, 64.6], [59, 60]], { w: 1.9, tipIn: 0.4, tipOut: 0.4 }, 'gold');
  p.star(48, 65.4, 4.2, 'gold');
  p.dot(37, 60, 1.6, 'gold').dot(59, 60, 1.6, 'gold');
  p.wash(48, 66, 42, 18, PAINT.soil, 0.32).wash(25, 16, 13, 11, PAINT.green, 0.4).wash(71, 20, 11, 10, PAINT.green, 0.36);
};

F.gleaners = (p) => {
  // Earth's limb below, low orbit as a line of beads
  p.s([[6, 92], [20, 82.4], [48, 77], [76, 82.4], [90, 92]], { w: 2.6, tipIn: 0.3, tipOut: 0.3 });
  for (let i = 0; i < 15; i++) {
    const t = i / 14, x = 4 + t * 88;
    p.dot(x, 50 + Math.pow((x - 48) / 44, 2) * 18, i % 4 === 0 ? 1.1 : 0.7);
  }
  // the Gleaner: a seed pod with leaves for wings, grown, not launched
  p.s([[46.4, 47.6], [42, 41.6], [43.4, 34], [48.6, 30.4], [53.4, 35], [52.4, 42], [46.4, 47.6]], { w: 2.6, tipIn: 0.8, tipOut: 0.8, taperIn: 0.05, taperOut: 0.05 });
  p.fine([[47.4, 45.6], [47.6, 38.4], [48.6, 32.6]], { w: 1.1, tipIn: 0.5, tipOut: 0.2 });
  const wing = { w: 9.4, tipIn: 0.08, tipOut: 0.04, taperIn: 0.42, taperOut: 0.55, wobble: 0.05 };
  p.s([[43, 37.6], [33, 33.4], [22, 32], [12.4, 34.6]], wing);
  p.s([[53, 36.6], [63, 30.4], [73.4, 27], [83.4, 27.6]], wing);
  p.fine([[42, 37.6], [30, 33.2], [16, 34.2]], { w: 0.9, tipIn: 0.5, tipOut: 0.1 }, 'gold');
  p.fine([[54, 36.4], [66, 29.6], [80, 27.8]], { w: 0.9, tipIn: 0.5, tipOut: 0.1 }, 'gold');
  p.fine([[49.4, 30.8], [51, 25.6], [55, 23.6], [57.4, 25.6]], { w: 1.2, tipIn: 0.6, tipOut: 0.1 });
  // the silk net, slung below, and what it has gathered
  const N = { w: 0.95, tipIn: 0.6, tipOut: 0.3, wobble: 0.1 };
  p.fine([[45, 47.4], [36.6, 58], [30.6, 65.4]], N).fine([[48.6, 47.6], [56.6, 59], [63, 66]], N);
  p.fine([[30.6, 65.4], [40, 70.4], [50, 71], [63, 66]], N).fine([[34, 61], [47.6, 64], [59.6, 62]], N).fine([[46.8, 48], [46, 58], [46.6, 70.6]], N);
  R.shard(p, 40, 64.6, 2.6, 0.5, 'gold');
  R.shard(p, 53, 66, 2.2, -0.3, 'gold');
  R.shard(p, 82, 48, 2.6, 0.9, 'gold');
  R.shard(p, 12, 54, 2.2, -0.8, 'gold');
  p.wash(48, 92, 46, 14, PAINT.blue, 0.42).wash(48, 36, 30, 16, PAINT.lavender, 0.32).wash(30, 33, 12, 6, PAINT.green, 0.3).wash(68, 29, 12, 6, PAINT.green, 0.3);
};

export const GOMEN_IDS = Object.keys(F);

export function buildGomen(id) {
  const p = pen('gomen-' + id, { w: 2.7, step: 2.3 });
  F[id](p);
  return p.layers;
}

/** The wash layer: soft blots of the painting's colours, blurred. */
export function washSvg(blots, size = 96) {
  const body = blots.map((b) => `<ellipse cx="${b.cx}" cy="${b.cy}" rx="${b.rx}" ry="${b.ry}" fill="${b.color}" fill-opacity="${b.op}"/>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}"><defs><filter id="w" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="${size / 22}"/></filter></defs><g filter="url(#w)">${body}</g></svg>`;
}

// ── name cartouches: each Gomen's name in the script, 28 × 56 ──
// As in older scripts, a name is ringed; the bar below closes it.

const C = {};
C.clearers = (p) => { R.stream(p, 7, 10, 21, 13, 2.6); p.s([[7, 30], [10, 34.6], [14, 35.8], [18, 34.6], [21, 30]], { w: 2.1 }); p.dot(14, 26.6, 2.1); };
C.shorewalkers = (p) => { R.stream(p, 6.6, 12, 21.4, 12, 2.4); p.s([[7, 34], [8.4, 26.4], [14, 22.6], [19.6, 26.4], [21, 34]], { w: 2.1 }); R.shard(p, 14, 30.4, 2.2, 0); };
C.circle = (p) => { R.figure(p, 14, 6.6, 18); R.heart(p, 14, 32.4, 3.8); };
C.weavers = (p) => { R.roots(p, 14, 8, 8); p.fine([[6, 26], [10, 29.4], [14, 30], [18, 29.4], [22, 26]], { w: 1.4 }); p.star(14, 30, 3.2); };
C.gleaners = (p) => { p.star(14, 11, 4.6); p.s([[6, 24], [14, 21.6], [22, 24]], { w: 3.6, tipIn: 0.1, tipOut: 0.1, taperIn: 0.45, taperOut: 0.45 }); R.shard(p, 14, 32, 2.4, 0.3); };

export function buildCartouche(id) {
  const p = pen('cart-' + id, { w: 1.9, step: 1.6 });
  p.s([[14, 2.6], [23, 4.6], [25.4, 12], [25.4, 34], [23.4, 41.4], [14, 43.6], [4.6, 41.4], [2.6, 34], [2.6, 12], [5, 4.6], [14, 2.6]], { w: 1.7, tipIn: 1, tipOut: 1, taperIn: 0.02, taperOut: 0.02 });
  C[id](p);
  p.s([[4, 49.6], [14, 48.8], [24, 49.6]], { w: 2.2, tipIn: 0.6, tipOut: 0.6 });
  return p.layers;
}

// ── the garden, the marks, the numerals, the key ──

const M = {};
M['garden-sprout'] = (p) => R.sprout(p, 24, 10, 32);
M['garden-leaf'] = (p) => {
  p.s([[24, 44], [23, 32], [26, 20], [33, 10]], { w: 2.4, tipIn: 0.8, tipOut: 0.2 });
  const leaf = { w: 7.4, tipIn: 0.1, tipOut: 0.05, taperIn: 0.45, taperOut: 0.5, wobble: 0.05 };
  p.s([[23.4, 33], [15, 30], [9, 23]], leaf).s([[25, 24], [33.6, 22.6], [40, 16.6]], leaf).s([[29, 15], [27.6, 8.4], [30.4, 4]], { ...leaf, w: 5.6 });
};
M['garden-bloom'] = (p) => {
  p.s([[24, 46], [24.6, 36], [24, 28]], { w: 2.3, tipIn: 0.8, tipOut: 0.4 });
  for (let i = 0; i < 5; i++) {
    const a = (-90 + i * 72) * Math.PI / 180;
    p.s([[24 + Math.cos(a) * 3, 18 + Math.sin(a) * 3], [24 + Math.cos(a + 0.12) * 8.4, 18 + Math.sin(a + 0.12) * 8.4], [24 + Math.cos(a) * 13, 18 + Math.sin(a) * 13]], { w: 6.6, tipIn: 0.35, tipOut: 0.1, taperIn: 0.3, taperOut: 0.55, wobble: 0.06 });
  }
  p.dot(24, 18, 2.6);
  p.s([[24.4, 38], [30.6, 34], [35, 34]], { w: 4.4, tipIn: 0.1, tipOut: 0.05, taperIn: 0.4, taperOut: 0.5 });
};
M['garden-tree'] = (p) => { R.tree(p, 24, 4, 42); R.roots(p, 24, 45, 5); };
M['star'] = (p) => p.star(24, 25, 20);
M['butterfly'] = (p) => G['cold-start'](p);
M['spark'] = (p) => { p.star(24, 24, 12); p.dot(39, 11, 2.4).dot(9, 38, 1.8); };

// numerals: counted in the logo's beads; five beads make a bar
const NUM = (n) => (p) => {
  const bars = Math.floor(n / 5), beads = n % 5;
  for (let b = 0; b < bars; b++) p.s([[7, 34 - b * 9], [24, 33.2 - b * 9], [41, 34 - b * 9]], { w: 4.4, tipIn: 0.6, tipOut: 0.4 });
  const y = 34 - bars * 9 - (bars ? 4 : 0);
  const xs = beads === 1 ? [24] : beads === 2 ? [17, 31] : beads === 3 ? [12, 24, 36] : [8.6, 19.2, 29.8, 40.4];
  for (const x of beads ? xs : []) p.dot(x, y, 3.6);
};
for (let n = 1; n <= 6; n++) M['num-' + n] = NUM(n);

// the key: the radicals, each on its own
const KEY = {
  star: (p) => p.star(24, 25, 17),
  bead: (p) => { p.dot(24, 12, 3).dot(24, 23, 4.2).o(24, 36.6, 4.6); },
  figure: (p) => R.figure(p, 24, 5, 38),
  tree: (p) => R.tree(p, 24, 5, 38),
  vessel: (p) => R.vessel(p, 24, 6, 34, 34),
  crystal: (p) => R.crystal(p, 24, 24, 17),
  root: (p) => { p.s([[6, 14], [24, 13], [42, 14]], { w: 2.2 }); R.roots(p, 24, 14, 20); },
  stream: (p) => R.stream(p, 5, 34, 43, 14, 9),
  shard: (p) => R.shard(p, 24, 24, 13, 0.1),
  heart: (p) => R.heart(p, 24, 22, 15),
};
for (const [k, f] of Object.entries(KEY)) M['radical-' + k] = f;
export const RADICALS = Object.keys(KEY);

export const MARK_IDS = Object.keys(M);
export function buildMark(id) {
  const p = pen('mark-' + id, { w: id.startsWith('radical-') || id.startsWith('garden-') ? 3.4 : 3.1, step: 2 });
  M[id](p);
  return p.layers;
}
