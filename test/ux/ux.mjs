// UX at breakpoints: screenshots, and how much of the screen is content.
//
//   BASE_URL=http://localhost:8901 CHROMIUM=/path/to/chrome \
//   MIRROR=/path/to/data-branch/v1 node test/ux/ux.mjs [viewer|splash] [--only phone,desktop] [--out dir]
//     [--state offline|stale]
//
// Serve the repo root first (python3 -m http.server 8901). MIRROR is the `v1/`
// folder of the `data` branch (git archive origin/data | tar -x): when it is
// set, every NOAA and DONKI request is answered from it, byte for byte, and the
// page's clock is set to a few minutes after the mirror was taken, so the
// Viewer reads as it did live. Without it, upstream is whatever the network
// allows.
//
// The efficiency measure is by region, the way a designer would mark up a
// screenshot. Every CSS pixel of the viewport is one of:
//   content  what a visitor came for: the scene, readings, text, cards, figures
//   chrome   what operates or frames the page: bars, tabs, toolbars, controls,
//            panel frames and padding, the brand
//   art      the painting, where nothing sits on it and the ground has not
//            yet risen over it (the splash's --sink)
//   empty    nothing at all
// Regions are painted in the order listed in LAYERS, later over earlier, so a
// toolbar floating over the scene takes those pixels from it. The ratio
// reported is content ÷ chrome; the share is content ÷ viewport. A scrolling
// page is sampled one screen at a time, top to bottom, and the first screen
// (the fold) is reported on its own too.
//
// A ratio can be gamed: a long list of expired notices scores as content, and
// so does a panel's empty foot. So the Viewer's first screen is also measured
// directly (firstScreen in results.json, and the last six columns of
// results.md): where the state sentence starts, how many rows the header takes,
// how large Earth is drawn and how much of it sits under the page's own
// furniture, how much of the scene is open, and how many tiles show whole.
//
// --state captures a degraded Viewer at every size, under its own file names
// (viewer-<bp>-<state>.png):
//   offline  every outside host refused, as on a plane
//   stale    the mirror, with the page's clock 3 h on, so every reading is old
import { chromium } from 'playwright-core';
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const BASE = process.env.BASE_URL || 'http://localhost:8901';
const EXE = process.env.CHROMIUM;
const MIRROR = process.env.MIRROR;
const args = process.argv.slice(2);
const flag = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const OUT = flag('--out') || 'test/ux/out';
const ONLY = flag('--only')?.split(',');
const STATE = flag('--state');
const SURFACES = args.filter((a) => !a.startsWith('--') && !args[args.indexOf(a) - 1]?.startsWith('--'));

export const BREAKPOINTS = [
  { name: 'phone-s', width: 360, height: 740, mobile: true },
  { name: 'phone', width: 390, height: 844, mobile: true },
  { name: 'phone-land', width: 844, height: 390, mobile: true },
  { name: 'tablet', width: 768, height: 1024, mobile: true },
  { name: 'tablet-land', width: 1024, height: 768, mobile: true },
  { name: 'laptop', width: 1280, height: 800 },
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'fhd', width: 1920, height: 1080 },
  { name: 'qhd', width: 2560, height: 1440 },
];

// [selector, kind, rule?], painted in order. Kinds: 1 content, 2 chrome, 3 art.
// One rule so far: { toLastChild: true } ends the region at the bottom of the
// element's last visible child and paints the rest of its box empty — a panel
// whose content stops half-way down is not content all the way down.
export const LAYERS = {
  viewer: [
    ['#scene', 1],
    ['header.top', 2], ['aside.margin', 2], ['.rail', 2], ['.subject-card', 2],
    ['#instruments', 1], ['.margin-body', 1, { toLastChild: true }], ['#clock', 1], ['.headline-alert', 1], ['#ticker', 1],
    ['.scale-note, .stage-note', 1], ['.rail-outage', 1], ['.as-of', 1],
    ['.subject-card .card-body, .subject-card p, .subject-card dl', 1], ['#tip', 1],
    ['.brand', 2], ['.controls', 2], ['.controls-toggle', 2], ['.rail-head', 2], ['.tabs', 2],
    // #perf is chrome inside chrome: listed so that classify's regions say
    // whether it was up at the moment of measuring (see perfNotice).
    ['.margin-actions', 2], ['#status', 2], ['#perf', 2],
  ],
  splash: [
    ['.hero', 3],
    ['header.cover .cover-title > *', 1],
    ['main section .stage-inner > *, main section > div > *', 1], ['#garden', 1],
    ['.logo-hero', 2], ['.hero-link', 2], ['.cover-cue', 2],
    ['.wayfinder', 2], ['#thread', 2], ['.section-label', 2], ['.skip-link:focus', 2],
    // search's list and count hang below the bar's box while they show (never at rest)
    ['.search-pop, .is-searching .wf-status', 2],
  ],
};

export const PAGES = { viewer: '/viewer/', splash: '/' };

function contentType(p) {
  return p.endsWith('.json') ? 'application/json' : p.endsWith('.txt') ? 'text/plain' : 'application/octet-stream';
}

/** Answer NOAA, DONKI and the mirror itself from MIRROR; fail every other outside host. */
export async function routeToMirror(ctx, mirror) {
  const send = (route, file) => existsSync(file)
    ? route.fulfill({ status: 200, body: readFileSync(file), headers: { 'content-type': contentType(file), 'access-control-allow-origin': '*' } })
    : route.fulfill({ status: 404, body: '', headers: { 'access-control-allow-origin': '*' } });
  await ctx.route((u) => !/^(localhost|127\.0\.0\.1)$/.test(u.hostname), (route) => {
    const u = new URL(route.request().url());
    if (u.hostname === 'services.swpc.noaa.gov') {
      if (u.pathname.startsWith('/images/') || u.pathname.includes('/animations/')) return route.abort('internetdisconnected');
      return send(route, join(mirror, 'swpc', u.pathname));
    }
    if (/ccmc\.gsfc\.nasa\.gov$/.test(u.hostname)) {
      const service = u.pathname.split('/').pop();
      return send(route, join(mirror, 'donki', `${service}.json`));
    }
    if (u.hostname === 'raw.githubusercontent.com') {
      const m = u.pathname.match(/\/data\/v1\/(.*)$/);
      return m ? send(route, join(mirror, m[1])) : route.abort('internetdisconnected');
    }
    return route.abort('internetdisconnected');
  });
  // The page's clock: a few minutes after the mirror was taken.
  const at = Date.parse(JSON.parse(readFileSync(join(mirror, 'manifest.json'), 'utf8')).mirrored_at) + 6 * 60e3;
  await ctx.addInitScript((offset) => {
    const RealDate = Date;
    class FakeDate extends RealDate {
      constructor(...a) { if (a.length === 0) super(RealDate.now() + offset); else super(...a); }
      static now() { return RealDate.now() + offset; }
    }
    globalThis.Date = FakeDate;
  }, at - Date.now());
}

/** Runs in the page: classify each 4 px cell of the viewport. Also returns the
 *  regions painted, [x0, y0, x1, y1, kind, layer index], in paint order. */
function classify(layers) {
  const C = 4, W = innerWidth, H = innerHeight, cols = Math.ceil(W / C), rows = Math.ceil(H / C);
  const grid = new Uint8Array(cols * rows);
  const regions = [];
  const paint = (x0, y0, x1, y1, kind, layer) => {
    regions.push([x0, y0, x1, y1, kind, layer]);
    for (let y = Math.floor(y0 / C); y < Math.ceil(y1 / C); y++) for (let x = Math.floor(x0 / C); x < Math.ceil(x1 / C); x++) grid[y * cols + x] = kind;
  };
  // The painting is art until the ground colour has risen over it (--sink, 0 → 1 over the first screen).
  const sink = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sink')) || 0;
  for (const [layer, [sel, kind, rule]] of layers.entries()) {
    if (kind === 3 && sink > 0.5) continue;
    for (const el of document.querySelectorAll(sel)) {
      if (el.checkVisibility && !el.checkVisibility({ opacityProperty: true, visibilityProperty: true })) continue;
      const cs = getComputedStyle(el);
      if (parseFloat(cs.opacity) < 0.05) continue;
      // clip to every scrolling or clipping ancestor, so a long panel counts only where it shows
      let r = el.getBoundingClientRect(), x0 = r.left, y0 = r.top, x1 = r.right, y1 = r.bottom;
      for (let a = el.parentElement; a && a !== document.documentElement; a = a.parentElement) {
        const s = getComputedStyle(a);
        if (/(auto|scroll|hidden|clip)/.test(s.overflow + s.overflowX + s.overflowY)) {
          const q = a.getBoundingClientRect();
          x0 = Math.max(x0, q.left); y0 = Math.max(y0, q.top); x1 = Math.min(x1, q.right); y1 = Math.min(y1, q.bottom);
        }
      }
      x0 = Math.max(0, x0); y0 = Math.max(0, y0); x1 = Math.min(W, x1); y1 = Math.min(H, y1);
      if (x1 - x0 < 1 || y1 - y0 < 1) continue;
      if (rule?.toLastChild) {
        // Empty below the last visible child; a box that scrolls its overflow ends past its own foot, so it keeps it all.
        let end = -Infinity;
        for (const c of el.children) if (c.checkVisibility()) end = Math.max(end, c.getBoundingClientRect().bottom);
        const cut = Math.min(y1, Math.max(y0, end));
        if (y1 - cut >= 1) paint(x0, cut, x1, y1, 0, layer);
        if (cut - y0 >= 1) paint(x0, y0, x1, cut, kind, layer);
        continue;
      }
      paint(x0, y0, x1, y1, kind, layer);
    }
  }
  const n = [0, 0, 0, 0];
  for (const v of grid) n[v]++;
  return { cols, rows, cell: C, grid: Array.from(grid), counts: n, regions };
}

/** Runs in the page, Viewer only: the first screen's facts that the ratio cannot
 *  see, at scrollY = 0. Earth and the Sun are projected through the scene's own
 *  camera; what covers them is worked out afterwards from classify's regions. */
function firstScreen() {
  const q = (s) => document.querySelector(s);
  const W = innerWidth, H = innerHeight;
  const shown = (el) => el && el.checkVisibility() && el.getBoundingClientRect().height > 0;
  const out = {};
  const sentence = q('.state-sentence');
  if (shown(sentence)) {
    const r = sentence.getBoundingClientRect();
    out.sentenceTop = Math.round(r.top);
    // The whole sentence on the first screen, not just its first pixel row.
    out.sentenceAboveFold = r.top >= 0 && r.bottom <= H;
  } else { out.sentenceTop = null; out.sentenceAboveFold = false; }
  out.tabsTop = shown(q('#tabs')) ? Math.round(q('#tabs').getBoundingClientRect().top) : null;
  const header = q('header.top');
  out.headerH = Math.round(header.getBoundingClientRect().height);
  // Rows by the centres of the header's parts: two parts within 12 px of each
  // other share a row, and any real second row sits a control's height lower.
  const centres = [...header.querySelectorAll('.brand-block, .headline-alert, .controls-toggle, .ctl-set')]
    .map((el) => el.getBoundingClientRect()).filter((r) => r.width > 0 && r.height > 0)
    .map((r) => r.top + r.height / 2).sort((a, b) => a - b);
  out.headerRows = centres.filter((c, i) => i === 0 || c - centres[i - 1] > 12).length;
  out.hScroll = document.documentElement.scrollWidth > W + 1;
  out.onePage = document.documentElement.scrollHeight <= H;
  // Tiles wholly inside the rail's visible box (#instruments, cut to the viewport).
  const ins = q('#instruments');
  const tiles = ins ? [...ins.querySelectorAll('.tile')] : [];
  out.tiles = tiles.length;
  if (shown(ins)) {
    const b = ins.getBoundingClientRect(), top = Math.max(0, b.top) - 1, bottom = Math.min(H, b.bottom) + 1;
    out.tilesVisible = tiles.filter((t) => { const r = t.getBoundingClientRect(); return r.height > 0 && r.top >= top && r.bottom <= bottom; }).length;
  } else out.tilesVisible = 0;
  // README rule 6: the scale is stated on the stage, on the first screen.
  const note = q('#scale-note');
  if (note) {
    const r = note.getBoundingClientRect();
    out.scaleNote = {
      visible: note.checkVisibility() && r.width > 0,
      inViewport: r.left >= 0 && r.top >= 0 && r.right <= W && r.bottom <= H,
      text: note.textContent.replace(/\s+/g, ' ').trim(),
    };
  } else out.scaleNote = null;
  // Earth and the Sun as drawn: centre and radius in CSS px, from the camera.
  out.earth = out.sun = null;
  try {
    const v = window.__viewer, cam = v.rig.camera, cv = q('#scene').getBoundingClientRect();
    const project = (pos, radius) => {
      const p = pos.clone().project(cam);
      const ang = Math.asin(Math.min(1, radius / pos.distanceTo(cam.position)));
      const r = Math.tan(ang) / Math.tan(cam.fov * Math.PI / 360) * cv.height / 2;
      return { x: Math.round(cv.left + (p.x + 1) / 2 * cv.width), y: Math.round(cv.top + (1 - p.y) / 2 * cv.height), r: Math.round(r), behind: p.z > 1 };
    };
    out.earth = project(v.earth.group.position, v.geometryNow(new Date()).earthRadius);
    out.sun = project(v.sun.group.position, v.sun.disc.scale.x);
  } catch { /* no scene to project: WebGL failed, or the Viewer's internals moved */ }
  return out;
}

/** The region on top at (x, y): the last one classify() painted there. */
function topAt(regions, x, y) {
  for (let i = regions.length - 1; i >= 0; i--) {
    const [x0, y0, x1, y1] = regions[i];
    if (x >= x0 && x < x1 && y >= y0 && y < y1) return regions[i];
  }
  return null;
}

/** Share of the viewport where the scene is on top, sampled at each 4 px cell's centre. */
function openStage(regions, W, H, scene, C = 4) {
  let n = 0, open = 0;
  for (let y = C / 2; y < H; y += C) for (let x = C / 2; x < W; x += C) { n++; if (topAt(regions, x, y)?.[5] === scene) open++; }
  return pct(open, n);
}

/** How much of a projected disc is under something painted over the scene,
 *  and how much is off the screen, from a 25 × 25 lattice of points in it. */
function discCover(regions, d, W, H, scene) {
  if (!d || d.behind || !(d.r > 0)) return null;
  let n = 0, covered = 0, off = 0;
  for (let i = -12; i <= 12; i++) for (let j = -12; j <= 12; j++) {
    if (i * i + j * j > 144) continue;
    n++;
    const x = d.x + i / 12 * d.r, y = d.y + j / 12 * d.r;
    if (x < 0 || y < 0 || x >= W || y >= H) off++;
    else if (topAt(regions, x, y)?.[5] !== scene) covered++;
  }
  return { coveredPct: pct(covered, n), offscreenPct: pct(off, n) };
}

const COLOURS = [[40, 40, 44], [46, 170, 98], [222, 70, 60], [70, 110, 200]];
async function overlay(shot, m, file) {
  const { width, height } = await sharp(shot).metadata();
  const raw = Buffer.alloc(m.cols * m.rows * 4);
  m.grid.forEach((v, i) => { const c = COLOURS[v]; raw[i * 4] = c[0]; raw[i * 4 + 1] = c[1]; raw[i * 4 + 2] = c[2]; raw[i * 4 + 3] = v === 0 ? 120 : 150; });
  const mask = await sharp(raw, { raw: { width: m.cols, height: m.rows, channels: 4 } }).resize(width, height, { kernel: 'nearest' }).png().toBuffer();
  await sharp(shot).composite([{ input: mask }]).png().toFile(file);
}

const pct = (a, n) => +(100 * a / n).toFixed(1);
function summarise(counts) {
  const n = counts.reduce((a, b) => a + b, 0);
  return { content: pct(counts[1], n), chrome: pct(counts[2], n), art: pct(counts[3], n), empty: pct(counts[0], n),
    ratio: counts[2] ? +(counts[1] / counts[2]).toFixed(2) : Infinity };
}

async function settle(page, surface) {
  if (surface === 'viewer') {
    await page.waitForFunction(() => document.querySelectorAll('#instruments > *').length > 3, null, { timeout: 60e3 }).catch(() => {});
    await page.waitForTimeout(6000);
  } else {
    await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(1500);
  }
}

/** Refuse every outside host, the way a plane or a firewall does. */
async function offline(ctx) {
  await ctx.route((u) => !/^(localhost|127\.0\.0\.1)$/.test(u.hostname), (route) => route.abort('internetdisconnected'));
}

/** Move the page's clock on by `ms`, over whatever clock is already set. */
async function clockOn(ctx, ms) {
  await ctx.addInitScript((offset) => {
    const Prior = Date;
    class LaterDate extends Prior {
      constructor(...a) { if (a.length === 0) super(Prior.now() + offset); else super(...a); }
      static now() { return Prior.now() + offset; }
    }
    globalThis.Date = LaterDate;
  }, ms);
}

export async function measure(browser, surface, bp, out, state = STATE) {
  const ctx = await browser.newContext({ viewport: { width: bp.width, height: bp.height }, deviceScaleFactor: 1, isMobile: !!bp.mobile, hasTouch: !!bp.mobile });
  if (state === 'offline') await offline(ctx);
  else if (MIRROR) await routeToMirror(ctx, MIRROR);
  if (state === 'stale') await clockOn(ctx, 3 * 3600e3);
  const name = `${surface}-${bp.name}${state ? `-${state}` : ''}`;
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(BASE + PAGES[surface], { waitUntil: 'domcontentloaded' });
  await settle(page, surface);
  const docH = await page.evaluate(() => document.documentElement.scrollHeight);
  const hScroll = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
  const screens = surface === 'viewer' ? 1 : Math.min(24, Math.ceil(docH / bp.height));
  const total = [0, 0, 0, 0];
  let fold = null, scaleNote = null, first = null;
  for (let i = 0; i < screens; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * bp.height);
    await page.waitForTimeout(i ? 350 : 0);
    const m = await page.evaluate(classify, LAYERS[surface]);
    m.counts.forEach((c, k) => { total[k] += c; });
    if (i === 0) {
      fold = summarise(m.counts);
      if (surface === 'viewer') {
        ({ scaleNote, ...first } = await page.evaluate(firstScreen));
        const scene = LAYERS.viewer.findIndex(([sel]) => sel === '#scene');
        const earth = discCover(m.regions, first.earth, bp.width, bp.height, scene);
        const sun = discCover(m.regions, first.sun, bp.width, bp.height, scene);
        // The render-scale notice comes and goes with the frame rate, and under
        // SwiftShader it is noise: up, it takes ~45 px from the margin body.
        const perf = LAYERS.viewer.findIndex(([sel]) => sel === '#perf');
        first = {
          ...first,
          perfNotice: m.regions.some((r) => r[5] === perf),
          scaleNoteVisible: !!(scaleNote?.visible && scaleNote.inViewport),
          earthR: first.earth?.r ?? null, sunR: first.sun?.r ?? null,
          earthCoveredPct: earth?.coveredPct ?? null, sunCoveredPct: sun?.coveredPct ?? null,
          openStagePct: openStage(m.regions, bp.width, bp.height, scene),
          earth: first.earth && { ...first.earth, ...earth }, sun: first.sun && { ...first.sun, ...sun },
        };
      }
      const shot = join(out, `${name}.png`);
      await page.screenshot({ path: shot });
      await overlay(shot, m, join(out, `${name}-map.png`));
    }
  }
  if (surface === 'splash' && bp.name !== 'qhd') {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: join(out, `${name}-full.jpg`), fullPage: true, type: 'jpeg', quality: 70 });
  }
  await ctx.close();
  return { surface, ...(state ? { state } : {}), bp: bp.name, width: bp.width, height: bp.height, docH, screens, hScroll, fold, page: summarise(total), errors,
    ...(surface === 'viewer' ? { scaleNote, firstScreen: first } : {}) };
}

/** The first-screen columns: sentenceTop, headerRows, earthR, earthCovered%, openStage%, tiles. */
function firstCells(f) {
  if (!f) return ['—', '—', '—', '—', '—', '—'];
  const v = (x) => x ?? '—';
  return [v(f.sentenceTop), f.headerRows, v(f.earthR), v(f.earthCoveredPct), f.openStagePct, `${f.tilesVisible}/${f.tiles}`];
}

if (import.meta.url === `file://${process.argv[1]}`) {
  if (STATE && !['offline', 'stale'].includes(STATE)) throw new Error(`--state ${STATE}: expected offline or stale`);
  if (STATE === 'stale' && !MIRROR) throw new Error('--state stale ages the mirror: set MIRROR');
  mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ executablePath: EXE, args: ['--enable-unsafe-swiftshader', '--use-gl=angle', '--ignore-gpu-blocklist'] });
  const rows = [];
  for (const surface of SURFACES.length ? SURFACES : ['viewer', 'splash']) {
    for (const bp of BREAKPOINTS.filter((b) => !ONLY || ONLY.includes(b.name))) {
      const r = await measure(browser, surface, bp, OUT);
      rows.push(r);
      const f = r.fold, p = r.page, s = r.firstScreen;
      console.log(`${surface.padEnd(6)} ${bp.name.padEnd(11)} ${String(bp.width).padStart(4)}×${String(bp.height).padEnd(4)}  fold: content ${f.content}% chrome ${f.chrome}% art ${f.art}% empty ${f.empty}% ratio ${f.ratio}` +
        (surface === 'splash' ? `   page(${r.screens}): content ${p.content}% chrome ${p.chrome}% art ${p.art}% empty ${p.empty}% ratio ${p.ratio}` : '') +
        (s ? `   first: sentence ${s.sentenceTop} rows ${s.headerRows} earthR ${s.earthR} covered ${s.earthCoveredPct}% open ${s.openStagePct}% tiles ${s.tilesVisible}/${s.tiles}` : '') +
        (r.state ? `  [${r.state}]` : '') + (s?.perfNotice ? '  PERF-NOTICE' : '') + (r.hScroll ? '  H-SCROLL' : '') + (r.errors.length ? `  errors: ${r.errors.join(' | ')}` : ''));
    }
  }
  writeFileSync(join(OUT, 'results.json'), JSON.stringify(rows, null, 2));
  const md = ['| surface | breakpoint | size | fold: content / chrome / art / empty | fold ratio | page: content / chrome / art / empty | page ratio | sentenceTop | headerRows | earthR | earthCovered% | openStage% | tiles |',
    '|---|---|---|---|---|---|---|---|---|---|---|---|---|',
    ...rows.map((r) => `| ${r.surface}${r.state ? ` (${r.state})` : ''} | ${r.bp} | ${r.width}×${r.height} | ${r.fold.content} / ${r.fold.chrome} / ${r.fold.art} / ${r.fold.empty} | ${r.fold.ratio}${r.firstScreen?.perfNotice ? ' †' : ''} | ` +
      (r.screens > 1 ? `${r.page.content} / ${r.page.chrome} / ${r.page.art} / ${r.page.empty} | ${r.page.ratio} |` : '— | — |') +
      ` ${firstCells(r.firstScreen).join(' | ')} |`)];
  if (rows.some((r) => r.firstScreen?.perfNotice)) md.push('', '† The render-scale notice (#perf) was up: the frame rate under SwiftShader, not the layout. Re-run that size.');
  writeFileSync(join(OUT, 'results.md'), md.join('\n') + '\n');
  await browser.close();
}
