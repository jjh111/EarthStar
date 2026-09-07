/**
 * Background stars. Deterministic (seeded) so the sky does not reshuffle on
 * every reload, but positions are decorative — `[M]`, and the Situation Report
 * says so. Real star catalogue placement is a later nicety, not a phase-0 claim.
 */

import {
  AdditiveBlending, BufferGeometry, Float32BufferAttribute, Points, PointsMaterial,
} from 'three';

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeStarfield(count = 2600, radius = 900): Points {
  const rnd = mulberry32(0xEA27_5747);
  const pos: number[] = [];
  const col: number[] = [];
  for (let i = 0; i < count; i++) {
    // Uniform on the sphere.
    const u = rnd() * 2 - 1;
    const th = rnd() * Math.PI * 2;
    const s = Math.sqrt(1 - u * u);
    pos.push(radius * s * Math.cos(th), radius * u, radius * s * Math.sin(th));
    const w = 0.65 + rnd() * 0.35;
    const warm = rnd();
    col.push(w * (0.85 + warm * 0.15), w * 0.9, w * (1.0 - warm * 0.12));
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new Float32BufferAttribute(col, 3));
  const mat = new PointsMaterial({
    size: 1.4, sizeAttenuation: false, vertexColors: true,
    transparent: true, opacity: 0.85, blending: AdditiveBlending, depthWrite: false,
  });
  const p = new Points(g, mat);
  p.name = 'starfield';
  p.frustumCulled = false;
  return p;
}
