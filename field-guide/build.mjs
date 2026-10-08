// Builds field-guide/index.html from taxonomy.json and the specimen plates
// rendered by blender/specimens.py (plates/<id>.png, with plates/<id>.json
// giving the projected position of every labelled feature and the scale bar).
//
//   node field-guide/build.mjs
//
// Everything is drawn here or in Blender: the cladogram, the web of returns,
// the scale of the Gomenata and the little diagrams of each order's
// mathematics are generated as SVG, the same way every time.
import { readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import sharp from 'sharp';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const T = JSON.parse(readFileSync(join(HERE, 'taxonomy.json'), 'utf8'));
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// the plates: Blender writes PNG masters (not committed); the page uses WebP with alpha
for (const s of T.species) {
  const png = join(HERE, 'plates', `${s.id}.png`), webp = join(HERE, 'plates', `${s.id}.webp`);
  if (existsSync(png) && (!existsSync(webp) || statSync(webp).mtimeMs < statSync(png).mtimeMs)) {
    await sharp(png).resize({ width: 1400 }).webp({ quality: 80, alphaQuality: 90, effort: 5 }).toFile(webp);
  }
}
const kingdom = Object.fromEntries(T.kingdoms.map((k) => [k.id, k]));
const order = Object.fromEntries(T.orders.map((o) => [o.id, o]));

// ── a seeded hand: lines that wobble a little, the same way every time ──
let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const f1 = (x) => Math.round(x * 10) / 10;

// ── references, numbered by first appearance ──
const refOrder = [];
const cite = (keys = []) => keys.map((k) => {
  if (!T.references[k]) throw new Error('unknown reference ' + k);
  if (!refOrder.includes(k)) refOrder.push(k);
  const n = refOrder.indexOf(k) + 1;
  return `<a class="ref" href="#ref-${k}" id="cite-${k}-${n}">${n}</a>`;
}).join('');
const reg = (r) => r ? `<span class="reg reg-${r}" title="${esc(T.registers[r])}">${r}</span>` : '';

// ── the mathematics, drawn small ──
function pictogram(id) {
  const S = 120, c = S / 2;
  const line = (pts, extra = '') => `<polyline points="${pts.map(([x, y]) => `${f1(x)},${f1(y)}`).join(' ')}" ${extra}/>`;
  let body = '';
  if (id === 'icosahedrales') {
    const p = (1 + Math.sqrt(5)) / 2;
    const V = [[-1, p, 0], [1, p, 0], [-1, -p, 0], [1, -p, 0], [0, -1, p], [0, 1, p], [0, -1, -p], [0, 1, -p], [p, 0, -1], [p, 0, 1], [-p, 0, -1], [-p, 0, 1]];
    const ry = 0.5, rx = 0.35;
    const P = V.map(([x, y, z]) => { const x1 = x * Math.cos(ry) + z * Math.sin(ry), z1 = -x * Math.sin(ry) + z * Math.cos(ry); const y1 = y * Math.cos(rx) - z1 * Math.sin(rx); return [c + x1 * 26, c + y1 * 26]; });
    for (let i = 0; i < 12; i++) for (let j = i + 1; j < 12; j++) {
      const d = Math.hypot(...V[i].map((v, k) => v - V[j][k]));
      if (Math.abs(d - 2) < 0.01) body += line([P[i], P[j]]);
    }
  } else if (id === 'turingiales' || id === 'sphaerales') {
    if (id === 'turingiales') {
      const n = 40; let U = new Float64Array(n * n).fill(1), Vv = new Float64Array(n * n);
      seed = 11;
      for (let k = 0; k < 10; k++) { const x = 4 + Math.floor(rnd() * 32), y = 4 + Math.floor(rnd() * 32); for (let a = -2; a < 2; a++) for (let b = -2; b < 2; b++) { U[(y + a) * n + x + b] = 0.5; Vv[(y + a) * n + x + b] = 0.25; } }
      for (let t = 0; t < 2500; t++) {
        const U2 = new Float64Array(n * n), V2 = new Float64Array(n * n);
        for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
          const i = y * n + x, L = (A) => A[((y + 1) % n) * n + x] + A[((y + n - 1) % n) * n + x] + A[y * n + (x + 1) % n] + A[y * n + (x + n - 1) % n] - 4 * A[i];
          const uvv = U[i] * Vv[i] * Vv[i];
          U2[i] = U[i] + 0.16 * L(U) - uvv + 0.0367 * (1 - U[i]);
          V2[i] = Vv[i] + 0.08 * L(Vv) + uvv - 0.1016 * Vv[i];
        }
        U = U2; Vv = V2;
      }
      for (let y = 0; y < n; y += 1) for (let x = 0; x < n; x += 1) if (Vv[y * n + x] > 0.25) body += `<rect x="${f1(10 + x * 2.5)}" y="${f1(10 + y * 2.5)}" width="2.6" height="2.6" class="fill"/>`;
    } else {
      body += `<circle cx="${c}" cy="${c}" r="44"/>`;
      const N = 40, g = Math.PI * (3 - Math.sqrt(5));
      for (let k = 0; k < N; k++) {
        const z = 1 - 2 * (k + 0.5) / N, r = Math.sqrt(1 - z * z), x = r * Math.cos(g * k), y = r * Math.sin(g * k);
        if (y < 0) continue;
        body += `<ellipse cx="${f1(c + x * 44)}" cy="${f1(c - z * 44)}" rx="${f1(7 * Math.max(0.25, y))}" ry="7"/>`;
      }
    }
  } else if (id === 'kuramotales') {
    for (let k = 0; k < 6; k++) {
      const ph = (5 - k) * 0.55 * (1 - k / 6);
      body += line(Array.from({ length: 41 }, (_, i) => [8 + i * 2.6, 22 + k * 15 + 5 * Math.sin(i * 0.4 + ph * (6 - k) * 0.3)]));
    }
  } else if (id === 'voronoiales') {
    seed = 5;
    const P = Array.from({ length: 13 }, () => [12 + rnd() * 96, 12 + rnd() * 96]);
    for (const [px, py] of P) {
      let poly = [[6, 6], [114, 6], [114, 114], [6, 114]];
      for (const [qx, qy] of P) {
        if (qx === px && qy === py) continue;
        const mx = (px + qx) / 2, my = (py + qy) / 2, nx = qx - px, ny = qy - py;
        const side = ([x, y]) => (x - mx) * nx + (y - my) * ny;
        const out = [];
        for (let i = 0; i < poly.length; i++) {
          const a = poly[i], b = poly[(i + 1) % poly.length], sa = side(a), sb = side(b);
          if (sa <= 0) out.push(a);
          if (sa * sb < 0) { const t = sa / (sa - sb); out.push([a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])]); }
        }
        poly = out;
      }
      body += `<polygon points="${poly.map(([x, y]) => `${f1(x)},${f1(y)}`).join(' ')}"/><circle cx="${f1(px)}" cy="${f1(py)}" r="1.6" class="fill"/>`;
    }
  } else if (id === 'gyroidales') {
    const z0 = 0.7, n = 60, F = (x, y) => Math.sin(x) * Math.cos(y) + Math.sin(y) * Math.cos(z0) + Math.sin(z0) * Math.cos(x);
    const sc = (4 * Math.PI) / n;
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      const v = [F(i * sc, j * sc), F((i + 1) * sc, j * sc), F((i + 1) * sc, (j + 1) * sc), F(i * sc, (j + 1) * sc)];
      const pts = [], corners = [[i, j], [i + 1, j], [i + 1, j + 1], [i, j + 1]];
      for (let e = 0; e < 4; e++) {
        const a = v[e], b = v[(e + 1) % 4];
        if ((a > 0) !== (b > 0)) { const t = a / (a - b), [x0, y0] = corners[e], [x1, y1] = corners[(e + 1) % 4]; pts.push([6 + (x0 + t * (x1 - x0)) * 108 / n, 6 + (y0 + t * (y1 - y0)) * 108 / n]); }
      }
      if (pts.length >= 2) body += line(pts.slice(0, 2));
      if (pts.length === 4) body += line(pts.slice(2, 4));
    }
  } else if (id === 'hilbertiales') {
    const n = 8, pts = [];
    for (let d = 0; d < n * n; d++) {
      let x = 0, y = 0, t = d;
      for (let s = 1; s < n; s *= 2) {
        const rx = 1 & (t >> 1), ry = 1 & (t ^ rx);
        if (ry === 0) { if (rx === 1) { x = s - 1 - x; y = s - 1 - y; } [x, y] = [y, x]; }
        x += s * rx; y += s * ry; t >>= 2;
      }
      pts.push([14 + x * 13, 106 - y * 13]);
    }
    body += line(pts);
  } else if (id === 'parabolales') {
    const f = 22;
    body += line(Array.from({ length: 41 }, (_, i) => { const y = -46 + i * 2.3; return [20 + (y * y) / (4 * f) * 1.0, c + y]; }));
    for (const y of [-38, -24, -10, 10, 24, 38]) { const x = 20 + (y * y) / (4 * f); body += line([[116, c + y], [x, c + y], [20 + f, c]], 'class="thin"'); }
    body += `<circle cx="${20 + f}" cy="${c}" r="3" class="fill"/>`;
  } else if (id === 'cyclales') {
    const P = Array.from({ length: 8 }, (_, k) => [c + 42 * Math.cos(k * Math.PI / 4), c + 42 * Math.sin(k * Math.PI / 4)]);
    body += `<polygon points="${P.map(([x, y]) => `${f1(x)},${f1(y)}`).join(' ')}"/>` + P.map(([x, y]) => `<circle cx="${f1(x)}" cy="${f1(y)}" r="4.5" class="paper"/>`).join('');
    body += `<path d="M${c} ${c + 8} C ${c - 14} ${c - 2}, ${c - 8} ${c - 12}, ${c} ${c - 5} C ${c + 8} ${c - 12}, ${c + 14} ${c - 2}, ${c} ${c + 8} Z" class="fill"/>`;
  } else if (id === 'steineriales') {
    const A = [[20, 30], [100, 30], [100, 90], [20, 90]], h = 30 / Math.sqrt(3);
    const S1 = [20 + h * 1.0 + 0.0, 60], S2 = [100 - h, 60];
    body += line([A[0], S1, A[3]]) + line([S1, S2]) + line([A[1], S2, A[2]]);
    body += A.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" class="paper"/>`).join('') + [S1, S2].map(([x, y]) => `<circle cx="${f1(x)}" cy="${y}" r="2" class="fill"/>`).join('');
  } else if (id === 'dendritales') {
    seed = 3;
    const stuck = new Map([['60,108', null]]), nb = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let rmax = 2;
    while (stuck.size < 900) {
      const a = Math.PI * (1 + rnd()), r = rmax + 3;
      let x = Math.round(60 + r * Math.cos(a)), y = Math.round(108 + r * Math.sin(a));
      for (let s = 0; s < 3000; s++) {
        const [dx, dy] = nb[Math.floor(rnd() * 4)]; x += dx; y += dy;
        if (y > 110 || Math.hypot(x - 60, y - 108) > rmax * 2 + 10) break;
        const hit = nb.map(([ex, ey]) => `${x + ex},${y + ey}`).find((k) => stuck.has(k));
        if (hit) { stuck.set(`${x},${y}`, hit); rmax = Math.max(rmax, Math.hypot(x - 60, y - 108)); break; }
      }
    }
    const sx = (x) => f1(60 + (x - 60) * 1.7), sy = (y) => f1(112 - (108 - y) * 1.7);
    for (const [k, p] of stuck) if (p) { const [x, y] = k.split(',').map(Number), [px, py] = p.split(',').map(Number); body += `<line x1="${sx(x)}" y1="${sy(y)}" x2="${sx(px)}" y2="${sy(py)}"/>`; }
  } else if (id === 'phyllotaxales') {
    for (let k = 1; k < 140; k++) { const r = 4.2 * Math.sqrt(k), t = k * 137.508 * Math.PI / 180; body += `<circle cx="${f1(c + r * Math.cos(t))}" cy="${f1(c + r * Math.sin(t))}" r="${f1(1 + k / 70)}" class="fill"/>`; }
  } else if (id === 'miurales') {
    const rows = 6, cols = 7;
    for (let j = 0; j <= rows; j++) body += line(Array.from({ length: cols + 1 }, (_, i) => [12 + i * 14 + (j % 2 ? 6 : 0), 14 + j * 15]));
    for (let i = 0; i <= cols; i++) body += line(Array.from({ length: rows + 1 }, (_, j) => [12 + i * 14 + (j % 2 ? 6 : 0), 14 + j * 15]), 'class="thin"');
  }
  return `<svg class="picto" viewBox="0 0 ${S} ${S}" role="img" aria-label="${esc(order[id].math)}">${body}</svg>`;
}

// ── the classification as a tree ──
function cladogram() {
  const rows = [];
  for (const k of T.kingdoms) {
    const sp = T.species.filter((s) => s.kingdom === k.id);
    const ords = [...new Set(sp.map((s) => s.order))];
    rows.push({ k, ords: ords.map((o) => ({ o, sp: sp.filter((s) => s.order === o) })) });
  }
  const leafH = 46, X = [120, 290, 500, 720];
  let y = 40, body = '';
  const spansKingdoms = (o) => new Set(T.species.filter((s) => s.order === o).map((s) => s.kingdom)).size > 1;
  const curve = (x0, y0, x1, y1) => `<path d="M${x0} ${f1(y0)} C ${x0 + (x1 - x0) * 0.55} ${f1(y0)}, ${x0 + (x1 - x0) * 0.45} ${f1(y1)}, ${x1} ${f1(y1)}"/>`;
  const kys = [];
  for (const r of rows) {
    const oys = [];
    for (const o of r.ords) {
      const sys = o.sp.map((s) => { const yy = y; y += leafH; return [s, yy]; });
      const oy = (sys[0][1] + sys[sys.length - 1][1]) / 2;
      for (const [s, sy] of sys) {
        body += curve(X[2] + 8, oy, X[3] - 8, sy);
        body += `<text x="${X[3]}" y="${f1(sy + 6)}"><a href="#${s.id}"><tspan class="bin">${esc(s.binomial)}</tspan></a><tspan class="cn" dx="14">${esc(s.common)} · ${s.plate}</tspan></text>`;
      }
      body += `<text x="${X[2]}" y="${f1(oy - 8)}" class="ord" text-anchor="middle">${esc(order[o.o].name)}${spansKingdoms(o.o) ? ' †' : ''}</text><circle cx="${X[2]}" cy="${f1(oy)}" r="3.5" class="fill"/>`;
      oys.push(oy);
    }
    const ky = (oys[0] + oys[oys.length - 1]) / 2;
    for (const oy of oys) body += curve(X[1] + 8, ky, X[2] - 8, oy);
    body += `<text x="${X[1]}" y="${f1(ky - 10)}" class="king" text-anchor="middle">${esc(r.k.name)}</text><text x="${X[1]}" y="${f1(ky + 22)}" class="scale" text-anchor="middle">${esc(r.k.scale.toLowerCase())}</text><circle cx="${X[1]}" cy="${f1(ky)}" r="4.5" class="fill"/>`;
    kys.push(ky);
    y += 18;
  }
  const dy = (kys[0] + kys[kys.length - 1]) / 2;
  for (const ky of kys) body += curve(X[0] + 10, dy, X[1] - 10, ky);
  body += `<text x="${X[0] - 10}" y="${f1(dy - 16)}" class="dom" text-anchor="middle">${esc(T.domain.name)}</text><circle cx="${X[0]}" cy="${f1(dy)}" r="6" class="fill"/>`;
  return `<svg class="clado" viewBox="0 0 1180 ${y + 10}" role="img" aria-label="The classification of the Gomenata, from domain to species">${body}</svg>`;
}

// ── the web of returns: what each eats, and what it gives back ──
function returns() {
  const n = T.species.length, h = 34, top = 30, W = 1180;
  let body = `<text x="170" y="16" class="head" text-anchor="middle">WHAT INDUSTRY LEFT</text><text x="590" y="16" class="head" text-anchor="middle">WHO TAKES IT UP</text><text x="1010" y="16" class="head" text-anchor="middle">WHAT RETURNS</text>`;
  T.species.forEach((s, i) => {
    const y = top + 14 + i * h;
    body += `<text x="330" y="${y + 5}" text-anchor="end" class="w">${esc(s.waste_tag)}</text>`;
    body += `<path d="M338 ${y} C 400 ${y}, 420 ${y}, 470 ${y}"/>`;
    body += `<text x="590" y="${y + 5}" text-anchor="middle" class="g"><a href="#${s.id}">${esc(s.common.replace(/^The /, ''))}</a></text>`;
    body += `<path d="M710 ${y} C 760 ${y}, 780 ${y}, 842 ${y}" class="ret"/><text x="850" y="${y + 5}" class="r">${esc(s.returns_tag)}</text>`;
  });
  return `<svg class="web" viewBox="0 0 ${W} ${top + n * h + 10}" role="img" aria-label="Each Gomen, what it eats and what it returns">${body}</svg>`;
}

// ── the scale of the Gomenata: nanometres to the orbits ──
function scaleChart() {
  const lo = -7, hi = 7, W = 1180, base = 140, X = (m) => 40 + (Math.log10(m) - lo) / (hi - lo) * (W - 80);
  let body = `<line x1="40" y1="${base}" x2="${W - 40}" y2="${base}"/>`;
  const marks = [[1e-6, '1 µm'], [1e-3, '1 mm'], [1, '1 m'], [1e3, '1 km'], [1e6, '1,000 km']];
  for (const [m, l] of marks) body += `<line x1="${f1(X(m))}" y1="${base - 6}" x2="${f1(X(m))}" y2="${base + 6}"/><text x="${f1(X(m))}" y="${base + 26}" text-anchor="middle" class="tick">${l}</text>`;
  // each label takes the nearest lane, above or below, where it does not touch another
  const lanes = [100, 162 + 40, 76, 186 + 40, 52, 210 + 40, 28, 234 + 40].map((y) => ({ y, used: [] }));
  const sorted = [...T.species].sort((a, b) => a.size_m - b.size_m);
  for (const s of sorted) {
    const x = X(s.size_m), name = s.common.replace(/^The /, ''), w = name.length * 8.6 + 14;
    const lane = lanes.find((L) => L.used.every(([a, b]) => x + w / 2 < a || x - w / 2 > b)) || lanes[0];
    lane.used.push([x - w / 2, x + w / 2]);
    const below = lane.y > base;
    body += `<line x1="${f1(x)}" y1="${base}" x2="${f1(x)}" y2="${below ? lane.y - 16 : lane.y + 6}" class="thin"/><circle cx="${f1(x)}" cy="${base}" r="4" class="fill"/><text x="${f1(x)}" y="${lane.y}" text-anchor="middle" class="sp"><a href="#${s.id}">${esc(name)}</a></text>`;
  }
  return `<svg class="scalechart" viewBox="0 0 ${W} 290" role="img" aria-label="The Gomens by size, on a logarithmic scale">${body}</svg>`;
}

// ── a plate: the drawing, its callouts in ink, its scale bar ──
function plateFigure(s) {
  const metaPath = join(HERE, 'plates', `${s.id}.json`);
  if (!existsSync(metaPath) || !existsSync(join(HERE, 'plates', `${s.id}.webp`))) return `<p class="missing">Plate ${s.plate} is still being drawn.</p>`;
  const meta = JSON.parse(readFileSync(metaPath, 'utf8'));
  const PW = meta.w, PH = meta.h, M = 330;
  const items = s.marks.map(([key, label], i) => ({ key, label, i: i + 1, at: meta.anchors[key] })).filter((m) => m.at);
  const sides = { left: [], right: [] };
  for (const m of items) (m.at[0] < 0.5 ? sides.left : sides.right).push(m);
  let lines = '', labels = '', nums = '';
  for (const [side, list] of Object.entries(sides)) {
    list.sort((a, b) => a.at[1] - b.at[1]);
    let last = -1e9;
    const ys = list.map((m) => { const y = Math.max(m.at[1] * PH, last + 112); last = y; return y; });
    const over = Math.max(0, last - (PH - 40));
    list.forEach((m, k) => {
      const ly = Math.max(40, ys[k] - over), ax = m.at[0] * PW, ay = m.at[1] * PH;
      const lx = side === 'left' ? -18 : PW + 18, ex = side === 'left' ? Math.min(ax - 30, 60) : Math.max(ax + 30, PW - 60);
      const wob = (rnd() - 0.5) * 10;
      lines += `<path d="M${f1(lx + (side === 'left' ? 6 : -6))} ${f1(ly)} Q ${f1((lx + ex) / 2)} ${f1(ly + wob)}, ${f1(ex)} ${f1(ly)} L ${f1(ax)} ${f1(ay)}"/><circle cx="${f1(ax)}" cy="${f1(ay)}" r="5" class="fill"/>`;
      const words = m.label.split(' '), rowsTxt = [];
      let cur = '';
      for (const w of words) { if ((cur + ' ' + w).trim().length > 17 && cur) { rowsTxt.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); }
      rowsTxt.push(cur);
      labels += `<text x="${f1(lx)}" y="${f1(ly + 12 - (rowsTxt.length - 1) * 20)}" text-anchor="${side === 'left' ? 'end' : 'start'}">${rowsTxt.map((r, j) => `<tspan x="${f1(lx)}" dy="${j ? 42 : 0}">${esc(r)}</tspan>`).join('')}</text>`;
      nums += `<g class="num"><circle cx="${f1(ax)}" cy="${f1(ay)}" r="40"/><text x="${f1(ax)}" y="${f1(ay + 15)}" text-anchor="middle">${m.i}</text></g>`;
    });
  }
  const sb = meta.scale_px;
  const scalebar = `<g class="scalebar"><line x1="60" y1="${PH - 40}" x2="${f1(60 + sb)}" y2="${PH - 40}"/><line x1="60" y1="${PH - 52}" x2="60" y2="${PH - 28}"/><line x1="${f1(60 + sb)}" y1="${PH - 52}" x2="${f1(60 + sb)}" y2="${PH - 28}"/><text x="${f1(60 + sb / 2)}" y="${PH - 60}" text-anchor="middle">${esc(s.scale)}</text></g>`;
  const legend = `<ol class="legend">${items.map((m) => `<li>${esc(m.label)}</li>`).join('')}</ol>`;
  return `<figure class="plate">
  <svg class="plate-svg wide" viewBox="${-M} 0 ${PW + 2 * M} ${PH}" role="img" aria-label="Plate ${s.plate}: ${esc(s.common)}, ${esc(s.binomial)}">
    <image href="plates/${s.id}.webp" x="0" y="0" width="${PW}" height="${PH}"/>
    <g class="leaders">${lines}</g><g class="labels">${labels}</g>${scalebar}
  </svg>
  <svg class="plate-svg narrow" viewBox="0 0 ${PW} ${PH}" role="img" aria-label="Plate ${s.plate}: ${esc(s.common)}, ${esc(s.binomial)}">
    <image href="plates/${s.id}.webp" x="0" y="0" width="${PW}" height="${PH}"/>
    <g class="nums">${nums}</g>${scalebar}
  </svg>
  ${legend}
  <figcaption>Plate ${s.plate}. <i>${esc(s.binomial)}</i>, ${esc(s.common.replace(/^The /, 'the '))}.</figcaption>
</figure>`;
}

function account(s) {
  const k = kingdom[s.kingdom], o = order[s.order];
  const how = s.how.map((h) => `<li>${reg(h.reg)} ${esc(h.text)}${cite(h.refs)}</li>`).join('');
  return `<article class="species" id="${s.id}">
  <header>
    <p class="plate-no">Plate ${s.plate}${s.canon ? ' <span class="canon" title="One of the first five Gomens of Earth Star">✦ of the first five</span>' : ''}</p>
    <h3>${esc(s.common)}</h3>
    <p class="binomial"><i>${esc(s.binomial)}</i> <span class="auth">Earth Star, 2026</span> ${reg(s.reg)}</p>
    <p class="rank">Kingdom ${esc(k.name)} · Order ${esc(o.name)} · Family ${esc(s.family)}</p>
  </header>
  ${plateFigure(s)}
  <div class="cols">
    <dl class="facts">
      <dt>Size</dt><dd>${esc(s.size)}</dd>
      <dt>Habitat</dt><dd>${esc(s.habitat)}</dd>
      <dt>Feeds on</dt><dd>${esc(s.eats)}</dd>
      <dt>Leaves behind</dt><dd>${esc(s.leaves)}</dd>
      <dt>Life, and its ending</dt><dd>${esc(s.life)}</dd>
    </dl>
    <div class="natural">
      <h4>The mathematics of its body</h4>
      <div class="math">${pictogram(s.order)}<p><b>${esc(o.math)}.</b> ${esc(s.math)}</p></div>
      <h4>How it works</h4>
      <ul class="how">${how}</ul>
      <blockquote class="says">“${esc(s.says)}”</blockquote>
      <aside class="caveat"><b>Field note.</b> ${esc(s.caveat)}${cite(s.caveat_refs)}</aside>
    </div>
  </div>
</article>`;
}

// ── the page (cited in reading order, so the numbers run down the page) ──
const domainDef = `${esc(T.domain.definition)}${cite(T.domain.definition_refs)}`;
const traits = T.domain.traits.map((t, i) => `<li><b>${['I', 'II', 'III', 'IV', 'V'][i]}. ${esc(t.name)}.</b> ${esc(t.text)} ${t.reg ? reg(t.reg) : ''}${cite(t.refs)}</li>`).join('');
const kingdoms = T.kingdoms.map((k) => `<li><b>${esc(k.name)}</b> <span class="scale">${esc(k.scale.toLowerCase())} · ${esc(k.range)}</span> ${reg(k.reg)}<br>${esc(k.text)}</li>`).join('');
const speciesHTML = T.kingdoms.map((k) => {
  const list = T.species.filter((s) => s.kingdom === k.id);
  return `<section class="kingdom" id="k-${k.id}"><h2><span class="smallcaps">Kingdom</span> ${esc(k.name)}<span class="sub">${esc(k.scale)} · ${esc(k.range)}</span></h2>${list.map(account).join('\n')}</section>`;
}).join('\n');
const ordersHTML = T.orders.map((o) => `<li id="o-${o.id}">${pictogram(o.id)}<div><b>${esc(o.name)}</b> <i>${esc(o.math)}</i> ${reg(o.reg)}<p>${esc(o.text)}${cite(o.refs)}</p></div></li>`).join('');
const refsHTML = refOrder.map((k, i) => `<li id="ref-${k}" value="${i + 1}">${esc(T.references[k])}</li>`).join('');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Gomenata · A Field Guide to the Adjacent Life</title>
<meta name="description" content="A naturalist’s field guide to the Gomens: living responses to the wastes of the industrial world, classified by scale and by the mathematics of their bodies, with fifteen plates. Every design rests on cited science.">
<link rel="icon" href="../assets/img/favicon.svg">
<style>
@font-face { font-family: 'Cormorant Garamond'; font-style: normal; font-weight: 300 700; font-display: swap; src: url(../assets/fonts/CormorantGaramond.woff2) format('woff2'); }
@font-face { font-family: 'Cormorant Garamond'; font-style: italic; font-weight: 300 700; font-display: swap; src: url(../assets/fonts/CormorantGaramond-italic.woff2) format('woff2'); }
:root {
  --paper: #efe4c8; --paper-2: #e6d7b4; --ink: #2a1d12; --sepia: #6b4a2e; --faded: #8a7458;
  --oxblood: #8a2c1c; --gold: #9a7408; --verd: #3d6e60;
  --serif: 'Cormorant Garamond', 'FreeSerif', Georgia, serif;
}
* { box-sizing: border-box; }
html { font-size: 19px; }
body {
  margin: 0; color: var(--ink); font-family: var(--serif); line-height: 1.5;
  background-color: var(--paper);
  background-image:
    radial-gradient(ellipse at 20% 10%, rgba(255,250,235,.55), transparent 55%),
    radial-gradient(ellipse at 80% 90%, rgba(150,110,60,.12), transparent 60%),
    radial-gradient(circle at 12% 64%, rgba(140,95,45,.07) 0 2px, transparent 3px),
    radial-gradient(circle at 87% 23%, rgba(140,95,45,.08) 0 3px, transparent 4px),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .35 0 0 0 0 .25 0 0 0 0 .12 0 0 0 .09 0'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)'/%3E%3C/svg%3E");
}
a { color: var(--oxblood); }
main { max-width: 1120px; margin: 0 auto; padding: 0 28px 80px; }
.smallcaps, .rank, .plate-no, .head { font-variant: small-caps; letter-spacing: .08em; }
h1, h2, h3, h4 { font-weight: 500; line-height: 1.1; margin: 0; }
p { margin: .5em 0; }

/* title page */
.title { min-height: 92vh; display: grid; place-content: center; text-align: center; padding: 60px 0 40px; border-bottom: 1px solid rgba(42,29,18,.25); }
.title .rule { width: 220px; height: 1px; background: var(--ink); margin: 18px auto; opacity: .5; }
.title h1 { font-size: clamp(3rem, 11vw, 6.6rem); letter-spacing: .14em; font-weight: 400; }
.title .sub { font-size: clamp(1.25rem, 3.2vw, 1.9rem); font-style: italic; margin-top: 8px; }
.title .imprint { max-width: 34em; margin: 22px auto 0; font-style: italic; color: var(--sepia); }
.title .front { width: min(420px, 78vw); margin: 18px auto 0; mix-blend-mode: multiply; }
.title .colophon { margin-top: 26px; font-size: .9rem; color: var(--faded); }

section { padding: 56px 0 8px; }
section > h2 { font-size: clamp(1.7rem, 4vw, 2.4rem); text-align: center; margin-bottom: 18px; }
section > h2 .sub { display: block; font-size: 1rem; font-style: italic; color: var(--sepia); margin-top: 6px; letter-spacing: 0; }
.prose { max-width: 40em; margin: 0 auto; }
.prose > p:first-of-type::first-letter { float: left; font-size: 3.6em; line-height: .8; padding: 6px 8px 0 0; color: var(--oxblood); }
.traits, .kingdom-list { list-style: none; padding: 0; max-width: 42em; margin: 18px auto; }
.traits li, .kingdom-list li { margin: 10px 0; }
.kingdom-list .scale { font-style: italic; color: var(--sepia); }
.keyline { text-align: center; color: var(--sepia); font-style: italic; }

.reg { display: inline-block; font: 600 .62rem/1 var(--serif); letter-spacing: .05em; border: 1px solid currentColor; border-radius: 3px; padding: 2px 4px 1px; vertical-align: .18em; }
.reg-E { color: var(--verd); } .reg-D { color: var(--gold); } .reg-M { color: var(--oxblood); }
.ref { font-size: .62em; vertical-align: super; text-decoration: none; margin-left: 1px; }
.ref + .ref::before { content: ','; color: var(--ink); }

/* diagrams */
svg text { font-family: var(--serif); fill: var(--ink); }
svg path, svg line, svg polyline, svg polygon, svg circle, svg ellipse { fill: none; stroke: var(--ink); stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
svg .fill { fill: var(--ink); stroke: none; }
svg .paper { fill: var(--paper); }
svg .thin { stroke-width: .8; opacity: .7; }
.diagram { overflow-x: auto; }
.clado { width: 100%; min-width: 760px; }
.clado text { font-size: 19px; paint-order: stroke; stroke: var(--paper); stroke-width: 6px; stroke-linejoin: round; }
.clado .dom { font-size: 26px; letter-spacing: .12em; }
.clado .king { font-size: 20px; letter-spacing: .1em; }
.clado .scale { font-size: 16px; font-style: italic; fill: var(--sepia); }
.clado .ord { font-size: 15px; letter-spacing: .08em; fill: var(--sepia); }
.clado .bin { font-style: italic; fill: var(--ink); }
.clado .cn { font-size: 16px; fill: var(--faded); }
.web { width: 100%; min-width: 760px; }
.web text { font-size: 19px; } .web .head { font-size: 15px; fill: var(--sepia); letter-spacing: .1em; }
.web .w { fill: var(--oxblood); font-style: italic; } .web .r { fill: var(--verd); font-style: italic; }
.web .g a { fill: var(--ink); } .web .ret { stroke: var(--verd); }
.scalechart { width: 100%; min-width: 760px; }
.scalechart .tick { font-size: 16px; fill: var(--sepia); font-style: italic; }
.scalechart .sp { font-size: 17px; paint-order: stroke; stroke: var(--paper); stroke-width: 6px; stroke-linejoin: round; } .scalechart .sp a { fill: var(--ink); }
.figcap { text-align: center; font-style: italic; color: var(--sepia); font-size: .95rem; margin-top: 4px; }

/* species */
.kingdom > h2 { border-top: 1px solid rgba(42,29,18,.3); padding-top: 34px; }
.species { padding: 40px 0 30px; border-bottom: 1px dashed rgba(42,29,18,.25); }
.species header { text-align: center; }
.plate-no { color: var(--oxblood); font-size: .95rem; margin: 0; }
.canon { color: var(--gold); font-variant: normal; font-style: italic; letter-spacing: 0; }
.species h3 { font-size: clamp(2rem, 5vw, 2.8rem); margin: 4px 0; }
.binomial { font-size: 1.35rem; margin: 2px 0; }
.binomial .auth { font-size: .85rem; color: var(--faded); }
.rank { font-size: .92rem; color: var(--sepia); }
.plate { margin: 10px 0 18px; }
.plate-svg { width: 100%; height: auto; display: block; }
.plate-svg image { mix-blend-mode: multiply; }
.plate-svg .labels text { font-size: 40px; font-style: italic; fill: var(--sepia); }
.plate-svg .leaders path { stroke: var(--sepia); stroke-width: 1.6; }
.plate-svg .leaders circle { fill: var(--sepia); }
.plate-svg .scalebar line { stroke: var(--ink); stroke-width: 3; }
.plate-svg .scalebar text { font-size: 28px; font-style: italic; }
.plate-svg.narrow { display: none; }
.plate-svg .num circle { fill: var(--paper); stroke: var(--sepia); stroke-width: 3; }
.plate-svg .num text { font-size: 46px; fill: var(--sepia); }
.plate-svg.narrow .scalebar text { font-size: 44px; }
.plate-svg.narrow .scalebar line { stroke-width: 5; }
.plate .legend { display: none; }
.plate figcaption { text-align: center; font-style: italic; color: var(--sepia); font-size: .95rem; }
.cols { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.5fr); gap: 34px; }
.facts dt { font-variant: small-caps; letter-spacing: .08em; color: var(--oxblood); margin-top: 12px; }
.facts dd { margin: 2px 0 0; }
.natural h4 { font-variant: small-caps; letter-spacing: .08em; color: var(--oxblood); font-size: 1.05rem; margin: 14px 0 6px; }
.math { display: grid; grid-template-columns: 96px 1fr; gap: 14px; align-items: start; }
.picto { width: 96px; height: 96px; }
.picto * { stroke-width: 1.2; }
.how { padding-left: 1.1em; margin: 0; } .how li { margin: 6px 0; }
.says { margin: 16px 0 8px; font-size: 1.4rem; font-style: italic; color: var(--sepia); text-align: center; }
.caveat { border-left: 3px solid var(--gold); padding: 6px 12px; background: rgba(154,116,8,.06); font-size: .95rem; }
.missing { text-align: center; font-style: italic; color: var(--faded); padding: 60px 0; }

/* orders */
.orders { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px 30px; }
.orders li { display: grid; grid-template-columns: 96px 1fr; gap: 14px; align-items: start; }
.orders b { letter-spacing: .08em; font-weight: 600; }
.orders p { margin: 4px 0 0; font-size: .95rem; }
.convergent { max-width: 40em; margin: 0 auto 18px; text-align: center; font-style: italic; color: var(--sepia); }
.refs { font-size: .9rem; max-width: 52em; margin: 0 auto; padding-left: 2em; }
.refs li { margin: 4px 0; }
.foot { text-align: center; color: var(--faded); font-style: italic; padding: 30px 0 0; }

@media print {
  .title { min-height: auto; break-after: page; padding-top: 120px; }
  #systema, #returns, #orders, #references, .kingdom > h2 { break-before: page; }
  .species { break-inside: avoid; }
  .kingdom > h2 + .species { break-before: avoid; }
  .species + .species { break-before: page; }
  .diagram { overflow: visible; }
}
@media (max-width: 760px) {
  html { font-size: 18px; }
  main { padding: 0 16px 60px; }
  .cols { grid-template-columns: 1fr; gap: 6px; }
  .plate-svg.wide { display: none; }
  .plate-svg.narrow { display: block; }
  .plate .legend { display: block; columns: 2; font-style: italic; color: var(--sepia); font-size: .95rem; margin: 6px 0; padding-left: 1.4em; }
  .orders { grid-template-columns: 1fr; }
}
</style>
</head>
<body>
<main>
  <header class="title">
    <p class="smallcaps">Earth Star · field notes</p>
    <div class="rule"></div>
    <h1>${esc(T.title.toUpperCase())}</h1>
    <p class="sub">${esc(T.subtitle)}</p>
    <img class="front" src="plates/snowmakers.webp" alt="" width="700" height="500">
    <p class="imprint">${esc(T.imprint)}</p>
    <p class="colophon">${esc(T.colophon)}</p>
  </header>

  <section id="preface">
    <h2>Preface<span class="sub">on the domain ${esc(T.domain.name)}, ${esc(T.domain.common)}</span></h2>
    <div class="prose">
      <p>${domainDef}</p>
      <p><i>${esc(T.domain.etymology)}</i></p>
    </div>
    <h2 style="font-size:1.5rem;margin-top:30px">The five traits of the domain</h2>
    <ul class="traits">${traits}</ul>
    <p class="keyline">Every statement below carries its register: ${reg('E')} evidence, published and real now; ${reg('D')} design, what the Gomen would be; ${reg('M')} metaphor, a body made of people.</p>
  </section>

  <section id="systema">
    <h2>Systema Gomenatae<span class="sub">the classification, by scale and by the mathematics of the body</span></h2>
    <ul class="kingdom-list">${kingdoms}</ul>
    <div class="diagram">${cladogram()}</div>
    <p class="convergent">† The orders cut across kingdoms. The same mathematics turns up at different scales, the way eyes have evolved more than once: reaction–diffusion spaces the Unbinders’ colonies in the gut and the Landfill Mats’ domes on a dump.</p>
  </section>

  <section id="returns">
    <h2>The Web of Returns<span class="sub">what each takes up, and what it gives back. Nothing is hoarded.</span></h2>
    <div class="diagram">${returns()}</div>
  </section>

  <section id="scale">
    <h2>The Gomenata by Size<span class="sub">from proteins to the orbits, on a logarithmic scale</span></h2>
    <div class="diagram">${scaleChart()}</div>
  </section>

  ${speciesHTML}

  <section id="orders">
    <h2>The Mathematics of the Orders<span class="sub">each order is named for the proof its bodies are built on</span></h2>
    <ul class="orders">${ordersHTML}</ul>
  </section>

  <section id="references">
    <h2>References</h2>
    <ol class="refs">${refsHTML}</ol>
    <p class="foot">Gomen’nasai, we say, as we begin.</p>
  </section>
</main>
</body>
</html>
`;
writeFileSync(join(HERE, 'index.html'), html);
console.log(`field-guide/index.html · ${T.species.length} species · ${refOrder.length} references`);
