// Earth Star site build.
//
//   node build.mjs            — build HTML/CSS/JS + archive fragments to repo root
//   node build.mjs --images   — additionally regenerate responsive images (slow)
//
// Output layout (committed, served directly by GitHub Pages from the branch root):
//   index.html        — minified, all CSS inlined (one request renders the page)
//   assets/js/main.js — single minified bundle
//   assets/fonts/     — self-hosted variable woff2 subsets
//   assets/img/       — responsive AVIF/WebP hero layers, logo, banner, favicon, og card
//   assets/img/glyphs, assets/img/gomens — the Earth Star script, generated from
//                       src/glyphs/ on every build (deterministic: seeded brush)
//   archive/<id>.html — pre-rendered document fragments, fetched on demand
//
// Filenames are not content-hashed on purpose: GitHub Pages serves everything
// with max-age=600 regardless, so hashing would add churn without cache benefit.

import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { marked } from 'marked';
import { transform } from 'esbuild';
import { cardHTML } from './src/js/card-template.mjs';
import {
  buildIdea, IDEA_IDS, buildGomen, GOMEN_IDS, washSvg, buildCartouche,
  buildMark, MARK_IDS, RADICALS, svgOf, pen,
} from './src/glyphs/script.mjs';

const ROOT = new URL('.', import.meta.url).pathname;
const p = (rel) => ROOT + rel;

const manifest = JSON.parse(readFileSync(p('src/archive/manifest.json'), 'utf8'));
const concepts = JSON.parse(readFileSync(p('src/concepts.json'), 'utf8'));
const gomenLore = JSON.parse(readFileSync(p('src/gomens.json'), 'utf8'));

// ── The script: every glyph, figure and mark on the page, drawn by the brush ──
// Shipped as SVG files used as CSS masks, so each layer takes the theme's ink
// or gold; the wash layer carries the painting's own colours. Regenerated from
// src/glyphs/ on every build — the source of truth is the code, not the files.

const GLYPHS = 'assets/img/glyphs', GOMENS = 'assets/img/gomens';
rmSync(p(GLYPHS), { recursive: true, force: true });
rmSync(p(GOMENS), { recursive: true, force: true });
mkdirSync(p(GLYPHS), { recursive: true });
mkdirSync(p(GOMENS), { recursive: true });
for (const id of IDEA_IDS) writeFileSync(p(`${GLYPHS}/idea-${id}.svg`), svgOf(buildIdea(id).ink));
for (const id of MARK_IDS) writeFileSync(p(`${GLYPHS}/${id}.svg`), svgOf(buildMark(id).ink));
for (const id of GOMEN_IDS) {
  const L = buildGomen(id);
  writeFileSync(p(`${GOMENS}/${id}-ink.svg`), svgOf(L.ink, { size: 96 }));
  writeFileSync(p(`${GOMENS}/${id}-gold.svg`), svgOf(L.gold, { size: 96 }));
  writeFileSync(p(`${GOMENS}/${id}-wash.svg`), washSvg(L.wash));
  const c = buildCartouche(id).ink;
  writeFileSync(p(`${GLYPHS}/cart-${id}.svg`), svgOf(c, { size: 52 }).replace('viewBox="0 0 52 52"', 'viewBox="0 0 28 52"'));
}
// The favicon: the script's star, gold on the night ground
{
  const f = pen('favicon', { w: 3, step: 1.5 });
  f.star(32, 33.5, 23);
  writeFileSync(p('assets/img/favicon.svg'),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0e2117"/>`
    + `<path fill="#e9b92c" d="${f.layers.ink.join('')}"/></svg>`);
}
const mask = (file) => `style="--m:url(${file})"`;

// ── 0. Ideas dashboard: concept tiles rendered at build time (no JS needed to read them) ──

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function ideaHTML(c) {
  const search = [c.name, c.meaning, c.more, c.alignment, c.formula, ...(c.lens || [])].filter(Boolean).join(' ');
  const links = (c.links || []).map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join('');
  return `<article class="idea" id="idea-${esc(c.id)}" data-id="${esc(c.id)}" data-lens="${esc((c.lens || []).join(' '))}" data-register="${esc(c.register)}" data-search="${esc(search)}">
  <button class="idea-head" type="button" aria-expanded="false" aria-controls="idea-${esc(c.id)}-more">
    ${IDEA_IDS.includes(c.id)
      ? `<span class="idea-glyph glyph" aria-hidden="true" ${mask(`${GLYPHS}/idea-${esc(c.id)}.svg`)}></span>`
      : `<span class="idea-glyph" aria-hidden="true">${esc(c.glyph)}</span>`}
    <span class="idea-name">${esc(c.name)}</span>
    <span class="badge" title="${esc(concepts.registers[c.register] || '')}">${esc(c.register)}</span>
  </button>
  <p class="idea-meaning">${esc(c.meaning)}</p>
  <div class="idea-more" id="idea-${esc(c.id)}-more" hidden>
    ${c.formula ? `<p class="idea-formula">${esc(c.formula)}</p>` : ''}
    <p>${esc(c.more)}</p>
    ${c.alignment ? `<p class="idea-align"><strong>For AI:</strong> ${esc(c.alignment)}</p>` : ''}
    ${links ? `<p class="idea-links">${links}</p>` : ''}
  </div>
</article>`;
}

const ideasGrid = concepts.concepts.map(ideaHTML).join('\n');
const ideasLenses = concepts.lenses.map((l) =>
  `<button type="button" class="chip" data-lens="${esc(l.id)}" aria-pressed="${l.id === 'all'}">${esc(l.label)}</button>`).join('');
const registerLegend = Object.entries(concepts.registers).map(([k, v]) =>
  `<span class="legend-item"><span class="badge">${k}</span> ${esc(v)}</span>`).join(' ');

// ── 1. Archive fragments: markdown → HTML, written to /archive ──

mkdirSync(p('archive'), { recursive: true });
marked.setOptions({ mangle: false, headerIds: false });

for (const doc of manifest.docs) {
  const md = readFileSync(p(doc.source), 'utf8')
    .replace(/^---\n[\s\S]*?\n---\n/, ''); // strip YAML frontmatter (skill file)
  const html = marked.parse(md);
  writeFileSync(p(`archive/${doc.id}.html`), html);
  console.log(`archive/${doc.id}.html  ${(html.length / 1024).toFixed(1)}KB`);
}

// ── 2. Client manifest module (no content, just metadata) ──

const clientDocs = manifest.docs.map(({ id, title, category, description, tags, provenance }) =>
  ({ id, title, category, description, tags, provenance }));
writeFileSync(
  p('src/js/manifest.gen.js'),
  '// Generated by build.mjs from src/archive/manifest.json — do not edit.\n' +
  'export const DOCS = ' + JSON.stringify(clientDocs, null, 2) + ';\n'
);

// ── 3. JS bundle ──

mkdirSync(p('assets/js'), { recursive: true });
execFileSync(p('node_modules/.bin/esbuild'), [
  p('src/js/main.js'),
  '--bundle', '--minify', '--format=iife',
  '--target=es2020',
  '--outfile=' + p('assets/js/main.js')
], { stdio: 'inherit' });

// ── 4. Fonts ──

mkdirSync(p('assets/fonts'), { recursive: true });
for (const f of ['CormorantGaramond.woff2', 'CormorantGaramond-italic.woff2', 'DMSans.woff2']) {
  cpSync(p('src/fonts/' + f), p('assets/fonts/' + f));
}

// ── 5. HTML: inline minified CSS, pre-render archive grid, light minify ──

const fontsCss = readFileSync(p('src/fonts/fonts.css'), 'utf8');
const siteCss = readFileSync(p('src/css/site.css'), 'utf8');
const { code: minCss } = await transform(fontsCss + siteCss, { loader: 'css', minify: true });

let html = readFileSync(p('src/index.html'), 'utf8');
html = html.replace('<!--BUILD:CSS-->', '<style>' + minCss + '</style>');
html = html.replace('<!--BUILD:ARCHIVE_GRID-->', manifest.docs.map(cardHTML).join('\n'));
html = html.replace('<!--BUILD:IDEAS_GRID-->', ideasGrid);
html = html.replace('<!--BUILD:IDEAS_LENSES-->', ideasLenses);
html = html.replace('<!--BUILD:REGISTER_LEGEND-->', registerLegend);

// Section II: the Gomens and the key to their script, from src/gomens.json
const REG = { D: 'Design — a proposal, not built hardware', M: 'Mythopoetic — vision and commitment' };
const gomenLi = (g) => `<li class="scale" id="scale-${esc(g.scale.toLowerCase())}">
  <span class="scale-name">${esc(g.scale)}</span>
  <button type="button" class="gomen-pic" aria-pressed="false" aria-label="Wake ${esc(g.name)}">
    <span class="gomen-art" aria-hidden="true">
      <img class="ga-wash" src="${GOMENS}/${esc(g.id)}-wash.svg" alt="" width="96" height="96" decoding="async">
      <span class="ga-ink" ${mask(`${GOMENS}/${esc(g.id)}-ink.svg`)}></span>
      <span class="ga-gold" ${mask(`${GOMENS}/${esc(g.id)}-gold.svg`)}></span>
    </span>
    <span class="gomen-say" aria-hidden="true">${esc(g.say)}</span>
  </button>
  <div class="gomen-label">
    <span class="cart glyph" aria-hidden="true" ${mask(`${GLYPHS}/cart-${esc(g.id)}.svg`)}></span>
    <div>
      <span class="gomen-name">${esc(g.name)} <span class="badge" title="${esc(REG[g.register] || '')}">${esc(g.register)}</span></span>
      <p class="gomen-reading"><span class="gomen-radicals">${esc(g.radicals)}</span>${esc(g.reading)}</p>
    </div>
  </div>
  <p class="gomen-line">${esc(g.lore)}</p>${g.link ? `
  <a class="scale-live" href="${esc(g.link.href)}">${esc(g.link.label)}</a>` : ''}
</li>`;
html = html.replace('<!--BUILD:GOMENS-->', gomenLore.gomens.map(gomenLi).join('\n'));
const scriptKey = `<div class="script-key">
  <p class="key-lede"><span class="badge" title="${esc(REG.M)}">M</span> ${esc(gomenLore.key.lede)}</p>
  <ul class="key-row" aria-label="Key to the script">${RADICALS.map((r) =>
    `<li><span class="glyph" aria-hidden="true" ${mask(`${GLYPHS}/radical-${r}.svg`)}></span><span><b>${esc(r)}</b><small>${esc(gomenLore.key.radicals[r] || '')}</small></span></li>`).join('')}</ul>
</div>`;
html = html.replace('<!--BUILD:SCRIPT_KEY-->', scriptKey);
// Section numerals, counted in beads, and the wayfinder's star
html = html.replace(/<!--BUILD:NUM (\d)-->/g, (_, n) => `<span class="glyph num" aria-hidden="true" ${mask(`${GLYPHS}/num-${n}.svg`)}></span>`);
html = html.replace('<!--BUILD:STAR-->', `<span class="glyph" aria-hidden="true" ${mask(`${GLYPHS}/star.svg`)}></span>`);

// Mock fixture for ?mock=1 and tests — never consulted by the live path
mkdirSync(p('assets/data'), { recursive: true });
cpSync(p('src/data/now.mock.json'), p('assets/data/now.mock.json'));

// Conservative HTML minify: strip comments and leading indentation only —
// never touches intra-line whitespace, so inline elements are safe.
html = html
  .replace(/<!--(?!\[)[\s\S]*?-->/g, '')
  .split('\n').map(l => l.trimEnd()).filter(l => l.trim() !== '').map(l => l.replace(/^\s+/, '')).join('\n');

writeFileSync(p('index.html'), html);
console.log(`index.html  ${(html.length / 1024).toFixed(1)}KB (css inlined)`);

// ── 6. Images (only with --images: slow, output is committed) ──

if (process.argv.includes('--images')) {
  const sharp = (await import('sharp')).default;
  const IMG = p('assets/img');
  rmSync(IMG, { recursive: true, force: true });
  mkdirSync(IMG, { recursive: true });

  const layers = [
    { src: 'Assets/0-BG.png', name: '0-BG', widths: [640, 960, 1280], avifQuality: 45 },
    { src: 'Assets/1-earth.png', name: '1-earth', widths: [960, 1440, 2048] },
    { src: 'Assets/2-sun.png', name: '2-sun', widths: [960, 1440, 2048] },
    { src: 'Assets/3-islandship.png', name: '3-islandship', widths: [960, 1440, 2048] },
    { src: 'Assets/4-glimmer.png', name: '4-glimmer', widths: [960, 1440, 2048] }
  ];

  for (const { src, name, widths, avifQuality } of layers) {
    for (const w of widths) {
      const base = sharp(p(src)).resize({ width: w });
      await base.clone().avif({ quality: avifQuality ?? 55, effort: 6 }).toFile(`${IMG}/${name}-${w}.avif`);
      await base.clone().webp({ quality: 78 }).toFile(`${IMG}/${name}-${w}.webp`);
      console.log(`${name}-${w} avif+webp`);
    }
  }

  await sharp(p('Assets/EarthStar Logo JH 2025 w.png')).resize({ width: 480 })
    .webp({ quality: 88 }).toFile(`${IMG}/logo-480.webp`);

  const banner = sharp(p('Assets/EarthstarBanner.PNG')).resize({ width: 1200 });
  await banner.clone().avif({ quality: 60, effort: 6 }).toFile(`${IMG}/banner-1200.avif`);
  await banner.clone().webp({ quality: 80 }).toFile(`${IMG}/banner-1200.webp`);

  // OG card: the header painting (hero layers, object-fit: cover) with the
  // logo top-left at 300px — mirrors .hero-image-frame + .logo-hero. 1200x630.
  const paintStack = [];
  for (const f of ['0-BG.png', '1-earth.png', '2-sun.png', '3-islandship.png', '4-glimmer.png']) {
    paintStack.push({
      input: await sharp(p('Assets/' + f)).resize({ width: 1200, height: 630, fit: 'cover', position: 'centre' }).png().toBuffer()
    });
  }
  const logoBuf = await sharp(p('Assets/EarthStar Logo JH 2025 w.png')).resize({ width: 300 }).png().toBuffer();
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#0e2117' } })
    .composite([...paintStack, { input: logoBuf, left: 36, top: 36 }])
    .jpeg({ quality: 86 }).toFile(`${IMG}/og.jpg`);

  // (The favicon is drawn by the script's brush on every build; see above.)

  // The index page's Viewer screenshot card. Source is the Viewer's own og card
  // (`viewer/og.jpg`) so the two can never disagree, and it IS generated here
  // because index.html references these files: a reference with no producer is
  // how the card shipped as a broken image on 2026-09-17. 400w + 800w, because
  // the frame renders ~335px wide (see .sky-lower in src/css/site.css).
  for (const w of [400, 800]) {
    await sharp(p('viewer/og.jpg')).resize({ width: w }).jpeg({ quality: 84, mozjpeg: true })
      .toFile(`${IMG}/viewer-og-${w}.jpg`);
    console.log(`viewer-og-${w} jpg`);
  }

  console.log('images done');
}

console.log('build complete');
