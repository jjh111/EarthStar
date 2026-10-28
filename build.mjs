// Earth Star site build.
//
//   node build.mjs            — build HTML/CSS/JS + archive fragments to repo root
//   node build.mjs --images   — additionally regenerate responsive images (slow)
//
// Output layout (committed, served directly by GitHub Pages from the branch root):
//   index.html        — minified, all CSS inlined (one request renders the page)
//   assets/js/main.js — single minified bundle
//   assets/fonts/     — self-hosted variable woff2 subsets
//   assets/img/       — responsive AVIF/WebP hero layers, logo, banner, favicons, og card
//   assets/img/glyphs, assets/img/gomens — the Earth Star script, generated from
//                       src/glyphs/ on every build (deterministic: seeded brush)
//   assets/img/works/ — the Works shelf's posters (--images; see section 6)
//   assets/data/search.json — what search finds that the page does not hold as
//                       text: the works and the field guide's species
//   archive/<id>.frag.html — pre-rendered document fragments, which the reader
//                       fetches on demand
//   archive/<id>.html — each document as a page of its own, what a card's link,
//                       a new tab, a reader without script or a crawler opens
//   404.html, sitemap.xml
//
// Filenames are not content-hashed on purpose: GitHub Pages serves everything
// with max-age=600 regardless, so hashing would add churn without cache benefit.

import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, readdirSync, statSync } from 'node:fs';
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
const works = JSON.parse(readFileSync(p('src/works.json'), 'utf8'));
const taxonomy = JSON.parse(readFileSync(p('field-guide/taxonomy.json'), 'utf8'));

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
// The favicon: the script's star, gold on the night ground. Drawn on every
// build, and with it the PNGs for what cannot read an SVG icon: a 32 px tab
// icon, and the 180 px home-screen icon, square and edge to edge with the star
// a little smaller, because iOS rounds the corners itself.
const ICONS = ['favicon-32.png', 'apple-touch-icon.png'];
{
  const f = pen('favicon', { w: 3, step: 1.5 });
  f.star(32, 33.5, 23);
  const star = `<path fill="#e9b92c" d="${f.layers.ink.join('')}"/>`;
  const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0e2117"/>${star}</svg>`;
  writeFileSync(p('assets/img/favicon.svg'), icon);
  const sharp = (await import('sharp')).default;
  const png = (svg, size) => sharp(Buffer.from(svg), { density: 72 * size / 64 }).resize(size, size);
  await png(icon, 32).png({ compressionLevel: 9 }).toFile(p(`assets/img/${ICONS[0]}`));
  await png(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 74 74">${star}</svg>`, 180)
    .flatten({ background: '#0e2117' }).png({ compressionLevel: 9 }).toFile(p(`assets/img/${ICONS[1]}`));
}
const mask = (file) => `style="--m:url(${file})"`;

// ── 0. Ideas dashboard: concept tiles rendered at build time (no JS needed to read them) ──

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// A register's badge: its capital in a hairline box is for the eye; a screen
// reader hears the word beside it instead ('empirical', not 'E'), and a pointer
// finds the whole register in the title. Where the word follows in the text
// already (the legend), the capital is only hidden.
const badgeHTML = (r, title = concepts.registers[r], { said = false } = {}) =>
  `<span class="badge" title="${esc(title)}" aria-hidden="true">${esc(r)}</span>`
  + (said ? '' : `<span class="visually-hidden"> ${esc(title.split(' — ')[0].toLowerCase())}</span>`);

// The head is a plain line until ideas.js makes it the button that opens the
// notes: without script nothing would answer it, so there the notes stand open.
// Notes with a second paragraph (for AI) may set in two columns; one, never
function ideaHTML(c) {
  const search = [c.name, c.meaning, c.more, c.alignment, c.formula, ...(c.lens || [])].filter(Boolean).join(' ');
  const links = (c.links || []).map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join('');
  return `<article class="idea" id="idea-${esc(c.id)}" data-id="${esc(c.id)}" data-lens="${esc((c.lens || []).join(' '))}" data-register="${esc(c.register)}" data-search="${esc(search)}">
  <div class="idea-head">
    ${IDEA_IDS.includes(c.id)
      ? `<span class="idea-glyph glyph" aria-hidden="true" ${mask(`${GLYPHS}/idea-${esc(c.id)}.svg`)}></span>`
      : `<span class="idea-glyph" aria-hidden="true">${esc(c.glyph)}</span>`}
    <span class="idea-name">${esc(c.name)}</span>
    ${badgeHTML(c.register)}
  </div>
  <p class="idea-meaning">${esc(c.meaning)}</p>
  <div class="idea-more${c.alignment ? ' idea-more--two' : ''}" id="idea-${esc(c.id)}-more" hidden>
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
// The key to the five registers, and one sentence on how the Viewer reads three
const registerLegend = Object.entries(concepts.registers).map(([k, v]) =>
  `<span class="legend-item">${badgeHTML(k, v, { said: true })} ${esc(v)}</span>`).join(' ')
  + ` <span class="legend-viewer">The Viewer marks every reading with three of them: E for measured, D for modelled and M for ambient.</span>`;

// ── 1. Archive fragments: markdown → HTML, written to /archive (the pages
//       that hold them are written in section 5, with the CSS) ──

mkdirSync(p('archive'), { recursive: true });

// Every h2 and h3 is addressable. Its id is the reader's own address for it,
// 'doc/<id>/<slug>', so #doc/<id>/<slug> both deep-links the reader (archive.js)
// and scrolls the bare fragment; the prefix keeps a heading such as 'Ideas'
// from taking a section's id on the page. Long documents open with a contents
// list of their h2s.
let heads = null; // the document being rendered: { id, slugs, h2 }
marked.use({
  renderer: {
    heading({ tokens, depth }) {
      const inner = this.parser.parseInline(tokens);
      if (!heads || (depth !== 2 && depth !== 3)) return `<h${depth}>${inner}</h${depth}>\n`;
      const text = inner.replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
      const base = text.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'section';
      let slug = base;
      for (let n = 2; heads.slugs.has(slug); n++) slug = `${base}-${n}`;
      heads.slugs.add(slug);
      if (depth === 2) heads.h2.push({ slug, text: text.trim() });
      return `<h${depth} id="doc/${heads.id}/${slug}">${inner}</h${depth}>\n`;
    },
  },
});

const rendered = [];  // { doc, toc, body }, for the documents' own pages
for (const doc of manifest.docs) {
  const md = readFileSync(p(doc.source), 'utf8')
    .replace(/^---\n[\s\S]*?\n---\n/, ''); // strip YAML frontmatter (skill file)
  heads = { id: doc.id, slugs: new Set(), h2: [] };
  const body = marked.parse(md);
  const toc = heads.h2.length >= 4
    ? `<details class="archive-toc"><summary>Contents</summary><ol>${heads.h2.map((h) =>
      `<li><a href="#doc/${doc.id}/${h.slug}">${esc(h.text)}</a></li>`).join('')}</ol></details>\n`
    : '';
  heads = null;
  rendered.push({ doc, toc, body });
  writeFileSync(p(`archive/${doc.id}.frag.html`), toc + body);
  console.log(`archive/${doc.id}.frag.html  ${((toc + body).length / 1024).toFixed(1)}KB`);
}

// ── 2. Client manifest module (no content, just metadata) ──

// `agents` (optional): the note and .skill download the reader shows in its
// provenance bar, kept out of the description, which is written for readers
const clientDocs = manifest.docs.map(({ id, title, category, description, tags, provenance, agents }) =>
  ({ id, title, category, description, tags, provenance, agents }));
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

// Section II: the Gomens and the key to their script, from src/gomens.json.
// A figure is a picture until gomens.js makes it the button that wakes it
const REG = { D: 'Design — a proposal, not built hardware', M: 'Mythopoetic — vision and commitment' };
// A list of words set with dots between: a word of two never splits, and each
// dot binds to the word after it, so a line never ends on one (as the
// Archive's tags are set, card-template.mjs)
const dotted = (words) => words.map((w) => esc(w).replace(/ /g, '\u00a0')).join(' ·\u00a0');
const gomenLi = (g) => `<li class="scale" id="scale-${esc(g.scale.toLowerCase())}">
  <span class="scale-name">${esc(g.scale)}</span>
  <span class="gomen-pic" data-wake="Wake ${esc(g.name)}">
    <span class="gomen-art" aria-hidden="true">
      <img class="ga-wash" src="${GOMENS}/${esc(g.id)}-wash.svg" alt="" width="96" height="96" decoding="async">
      <span class="ga-ink" ${mask(`${GOMENS}/${esc(g.id)}-ink.svg`)}></span>
      <span class="ga-gold" ${mask(`${GOMENS}/${esc(g.id)}-gold.svg`)}></span>
    </span>
    <span class="gomen-say" aria-hidden="true">${esc(g.say)}</span>
  </span>
  <div class="gomen-label">
    <span class="cart glyph" aria-hidden="true" ${mask(`${GLYPHS}/cart-${esc(g.id)}.svg`)}></span>
    <div>
      <span class="gomen-name">${esc(g.name)} ${badgeHTML(g.register, REG[g.register])}</span>
      <p class="gomen-reading"><span class="gomen-radicals">${dotted(g.radicals.split(' · '))}</span>${esc(g.reading)}</p>
    </div>
  </div>
  <p class="gomen-line">${esc(g.lore)}</p>${g.link ? `
  <a class="scale-live" href="${esc(g.link.href)}">${esc(g.link.label)}</a>` : ''}
  <a class="scale-guide" href="field-guide/#${esc(g.id)}">the plate in the field guide <span aria-hidden="true">↗</span></a>
</li>`;
html = html.replace('<!--BUILD:GOMENS-->', gomenLore.gomens.map(gomenLi).join('\n'));
// The field guide's counts, read from its own taxonomy and said in words
const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
  'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const inWords = (n) => (n < 20 ? WORDS[n] : TENS[Math.floor(n / 10)] + (n % 10 ? '-' + WORDS[n % 10] : ''));
const guideCount = { kingdoms: taxonomy.kingdoms.length, species: taxonomy.species.length, refs: Object.keys(taxonomy.references).length };
const scriptKey = `<div class="script-key">
  <p class="key-lede">${badgeHTML('M', REG.M)} ${esc(gomenLore.key.lede)}</p>
  <ul class="key-row" aria-label="Key to the script">${RADICALS.map((r) =>
    `<li><span class="glyph" aria-hidden="true" ${mask(`${GLYPHS}/radical-${r}.svg`)}></span><span><b>${esc(r)}</b><small>${esc(gomenLore.key.radicals[r] || '')}</small></span></li>`).join('')}</ul>
  <p class="key-guide">${badgeHTML('D', REG.D)} <a href="field-guide/">Gomenata, a field guide to the adjacent life <span aria-hidden="true">↗</span></a>: ${inWords(guideCount.kingdoms)} kingdoms, ${inWords(guideCount.species)} species, ${inWords(guideCount.refs)} references</p>
</div>`;
html = html.replace('<!--BUILD:SCRIPT_KEY-->', scriptKey);
// Section numerals, counted in beads, the wayfinder's star, and any other mark
html = html.replace(/<!--BUILD:NUM (\d)-->/g, (_, n) => `<span class="glyph num" aria-hidden="true" ${mask(`${GLYPHS}/num-${n}.svg`)}></span>`);
html = html.replace('<!--BUILD:STAR-->', `<span class="glyph" aria-hidden="true" ${mask(`${GLYPHS}/star.svg`)}></span>`);
html = html.replace(/<!--BUILD:GLYPH ([\w-]+)-->/g, (_, id) => `<span class="glyph" aria-hidden="true" ${mask(`${GLYPHS}/${id}.svg`)}></span>`);

// Section VI: the Works, from src/works.json: the field guide and the films on
// a shelf, the Gomens in Blender beneath it, and 'a seed' beside the seed in
// Section I. A film's card is a link to its file, which works.js opens in the
// film dialog instead. Its length is written by hand and its size read from
// the file, so no card states a size the file does not have. The posters are
// drawn with --images (section 6).
const WORKS = 'assets/img/works';
const megabytes = (file) => `${(statSync(p(file)).size / 1e6).toFixed(1)} MB`;
const kilobytes = (file) => `${(statSync(p(file)).size / 1e3).toFixed(1)} KB`;
const runtime = (s) => (s < 60 ? `${s} s` : `${Math.floor(s / 60)} min${s % 60 ? ` ${s % 60} s` : ''}`);
const badge = (r) => badgeHTML(r, REG[r]);
const poster = (id, sizes) => `<picture class="work-media">
    <source type="image/avif" srcset="${WORKS}/${id}-640.avif 640w, ${WORKS}/${id}-1280.avif 1280w" sizes="${sizes}">
    <source type="image/webp" srcset="${WORKS}/${id}-640.webp 640w, ${WORKS}/${id}-1280.webp 1280w" sizes="${sizes}">
    <img src="${WORKS}/${id}-640.webp" width="640" height="360" alt="" loading="lazy" decoding="async">
  </picture>`;
// a card on the shelf is 78vw on a phone, half the column on a tablet, a
// quarter of it from 1001 px (≈264 px at the 1200 px column, 21vw beyond)
const SHELF = '(max-width: 640px) 78vw, (max-width: 1000px) 48vw, (min-width: 1440px) 21vw, 280px';
// beside the seed it is at most 520 px; under it, a poster beside the words
const SEED_ROW = '(min-width: 1100px) 520px, (max-width: 480px) 140px, 320px';
const filmSize = (f) => `${runtime(f.seconds)} · ${megabytes(f.file)}`;
const filmCard = (f, tag, sizes) => `<${tag} class="work work-film" id="work-${f.id}">
  ${poster(f.id, sizes)}
  <div class="work-body">
    <p class="work-kicker">${badge('M')} ${filmSize(f)}</p>
    <h3 class="work-title"><a class="work-open" href="${f.file}" data-film="${f.id}" data-poster="${WORKS}/${f.id}-1280.webp"${f.tall ? ` data-tall="${f.tall}" data-tall-poster="${WORKS}/${f.id}-tall-720.webp"` : ''}>${esc(f.title)}<span class="visually-hidden">: play the film</span></a></h3>
    <p class="work-about">${esc(f.about)}</p>
    <p class="work-prov">${esc(works.filmProv)}</p>
  </div>
</${tag}>`;
const G = works.guide, L = works.portraits;
const guideCard = `<li class="work work-guide" id="work-${G.id}">
  ${poster(G.id, SHELF)}
  <div class="work-body">
    <p class="work-kicker">${badge(G.register)} ${guideCount.species} species · ${guideCount.refs} references</p>
    <h3 class="work-title"><a class="work-open" href="${G.href}">${esc(G.title)} <span aria-hidden="true">↗</span></a></h3>
    <p class="work-about">${esc(G.about)}</p>
    <p class="work-prov">${esc(G.prov)}</p>
  </div>
</li>`;
// The lineup's five panels are equal fifths; each figure opens its plate. It
// spans the column, or from 1101 px stands beside its caption, at most 1400 px
// (≈874 px at 1440, 1287 at 1920; see .works-portraits)
const gomenById = Object.fromEntries(gomenLore.gomens.map((g) => [g.id, g]));
const portraits = `<figure class="works-portraits" id="work-${L.id}">
  <div class="portraits">
    <img src="${WORKS}/${L.id}-960.webp" srcset="${WORKS}/${L.id}-960.webp 960w, ${WORKS}/${L.id}-1920.webp 1920w" sizes="(min-width: 1101px) min(1400px, 70vw - 120px), calc(100vw - 32px)" width="1920" height="484" alt="" loading="lazy" decoding="async">
    <ul class="portrait-links" aria-label="${esc(L.title)} in the field guide">${L.panels.map((id) =>
      `<li><a href="field-guide/#${id}"><span class="portrait-name">${esc(gomenById[id].name)}</span><span class="visually-hidden">: the plate in the field guide</span></a></li>`).join('')}</ul>
  </div>
  <figcaption>${badge(L.register)} <b>${esc(L.title)}</b>, ${esc(L.caption)}. Each opens its plate in the field guide <span aria-hidden="true">↗</span></figcaption>
</figure>`;
const shelfFilms = works.films.filter((f) => f.place !== 'seed');
html = html.replace('<!--BUILD:WORKS-->', `<ul class="works-shelf">${guideCard}\n${shelfFilms.map((f) => filmCard(f, 'li', SHELF)).join('\n')}</ul>\n${portraits}`);
html = html.replace('<!--BUILD:SEED_FILM-->', works.films.filter((f) => f.place === 'seed').map((f) => filmCard(f, 'div', SEED_ROW)).join('\n'));

// Section VII: for agents, each document's .skill with its size, read from dist/
html = html.replace('<!--BUILD:SKILLS-->', manifest.docs.filter((d) => d.agents?.skill).map((d) =>
  `<li><a class="skill" href="${esc(d.agents.skill)}" download><span class="skill-name">${esc(d.agents.skill.split('/').pop())}</span> · <span class="skill-size">${kilobytes(d.agents.skill)}</span><span class="skill-sep"> · </span><span class="skill-holds">the ${esc(d.title)}</span></a></li>`).join('\n'));

// Mock fixture for ?mock=1 and tests — never consulted by the live path
mkdirSync(p('assets/data'), { recursive: true });
cpSync(p('src/data/now.mock.json'), p('assets/data/now.mock.json'));

// What search finds beyond the page's own text (works.js fetches it on first
// focus): the works, and the field guide's fifteen species by name, binomial,
// order and its mathematics, what each eats, and the work it cites (so
// 'Kuramoto' finds the Lung-Sweepers)
const lower1 = (s) => s.charAt(0).toLowerCase() + s.slice(1);
const searchIndex = {
  works: [
    { id: G.id, title: `${G.title}, the field guide`, href: G.href,
      text: `${G.title} field guide ${G.about} ${taxonomy.title} ${taxonomy.subtitle} plates species`,
      about: `Field guide · ${guideCount.species} species · ${guideCount.refs} references · ${G.about}` },
    ...works.films.map((f) => ({ id: f.id, title: f.title, film: f.id,
      text: `${f.title} film ${f.about} ${works.filmProv}`, about: `Film · ${filmSize(f)} · ${f.about}` })),
    { id: L.id, title: `${L.title}, in Blender`, href: `#work-${L.id}`,
      text: `${L.title} Blender portraits ${L.panels.map((id) => gomenById[id].name).join(' ')}`,
      about: `${L.panels.map((id) => gomenById[id].name).join(', ')}: ${L.caption}` },
  ],
  species: taxonomy.species.map((s) => {
    const o = taxonomy.orders.find((x) => x.id === s.order);
    const order = o.name.charAt(0) + o.name.slice(1).toLowerCase();
    const cited = [...new Set([...(o.refs || []), ...(s.how || []).flatMap((h) => h.refs || [])])].map((k) => taxonomy.references[k]);
    return { id: s.id, title: s.common, href: `field-guide/#${s.id}`,
      text: [s.common, s.binomial, order, o.math, s.waste_tag, s.eats, ...cited].join(' '),
      about: `${s.binomial} · ${order}, ${lower1(o.math)} · ${s.eats}` };
  }),
};
writeFileSync(p('assets/data/search.json'), JSON.stringify(searchIndex));

// Conservative HTML minify: strip comments and leading indentation only —
// never touches intra-line whitespace, so inline elements are safe.
html = html
  .replace(/<!--(?!\[)[\s\S]*?-->/g, '')
  .split('\n').map(l => l.trimEnd()).filter(l => l.trim() !== '').map(l => l.replace(/^\s+/, '')).join('\n');

writeFileSync(p('index.html'), html);
console.log(`index.html  ${(html.length / 1024).toFixed(1)}KB (css inlined)`);

// ── 5b. The documents' own pages, the 404, the sitemap ──
// A card's link is its document's own page, so a reader without script, a
// middle-click, a copied link or a crawler gets a whole page: the text as the
// reader sets it, its provenance above it (a draft bill reads as a draft), and
// the way home and into the reader. It is the document's canonical address.
// The pages carry the splash's CSS (its paths one folder up, or from the root
// for the 404, which is served at any depth) and a few lines of their own.
const PAGE_CSS = `
.doc-page { max-width: calc(64ch + 2 * var(--pad-x)); margin: 0 auto; padding: 0 var(--pad-x) 56px; }
.doc-head { display: flex; flex-wrap: wrap; align-items: center; gap: 0 24px; margin-bottom: 24px; border-bottom: 1px solid var(--line); font-size: 0.86em; }
.doc-head a { display: inline-flex; align-items: center; gap: 8px; min-height: 48px; color: var(--ink); text-decoration: none; }
.doc-head a:hover { text-decoration: underline 1px var(--gold); text-underline-offset: 4px; }
.doc-home { font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; }
.doc-home .glyph { width: 22px; height: 22px; color: var(--gold); }
.doc-head .doc-open { margin-left: auto; color: var(--ink-2); }
.doc-page .archive-toc { max-width: none; }
.lost { min-height: 100vh; min-height: 100svh; display: grid; place-content: center; justify-items: center; gap: 12px; padding: 48px var(--pad-x); text-align: center; }
.lost-mark { display: inline-flex; color: var(--gold); }
.lost-mark .glyph { width: 56px; height: 56px; }
.lost h1 { font-size: clamp(1.6rem, 1rem + 2.4vw, 2.4rem); font-style: italic; letter-spacing: 0.02em; text-transform: none; margin: 0; }
.lost ul { list-style: none; display: flex; flex-wrap: wrap; justify-content: center; gap: 0 24px; }
.lost a:not(.lost-mark) { display: inline-flex; align-items: center; gap: 0.3em; min-height: 44px; color: var(--ink); text-decoration: underline 1px var(--gold); text-underline-offset: 4px; }
`;
const { code: pageCss } = await transform(PAGE_CSS, { loader: 'css', minify: true });
const THEME = `<script>try{var t=localStorage.getItem('earthStarTheme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}</script>`;
const SITE = 'https://earthstar.space/';
const pageHead = ({ base, title, description, canonical, extra = '' }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${canonical ? `<link rel="canonical" href="${canonical}">\n` : ''}${extra}<meta name="theme-color" media="(prefers-color-scheme: light)" content="#e4d7b8">
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0e2117">
<link rel="icon" href="${base}assets/img/favicon-32.png" type="image/png" sizes="32x32">
<link rel="icon" href="${base}assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${base}assets/img/apple-touch-icon.png">
${THEME}
<style>${minCss.replaceAll('url(assets/', `url(${base}assets/`)}${pageCss}</style>
</head>`;
const star = (base) => `<span class="glyph" aria-hidden="true" style="--m:url(${base}assets/img/glyphs/star.svg)"></span>`;
// The provenance bar, as the reader draws it (archive.js)
const provHTML = (doc, base) => {
  const prov = doc.provenance, agents = doc.agents;
  return `<div class="archive-provenance">
  <span class="prov-kind">${esc(doc.category)}</span>
  ${prov ? `<span class="prov-status">${esc(prov.status)}</span>
  <span class="prov-meta">${esc(prov.author)} · ${esc(prov.date)}</span>` : ''}
  ${agents ? `<span class="prov-agents">${esc(agents.note)}${agents.skill ? ` <a href="${base}${esc(agents.skill)}" download>take the .skill</a>` : ''}</span>` : ''}
</div>`;
};
for (const { doc, toc, body } of rendered) {
  const page = `${pageHead({ base: '../', title: `${doc.title} — Earth Star Archive`, description: doc.description, canonical: `${SITE}archive/${doc.id}.html` })}
<body>
<div class="doc-page">
<header class="doc-head"><a class="doc-home" href="/">${star('../')}Earth Star</a><a class="doc-open" href="/#doc/${esc(doc.id)}">Open in the Archive</a></header>
<main>
${provHTML(doc, '../')}
${toc}<article class="archive-md">
${body}</article>
</main>
</div>
</body>
</html>
`;
  writeFileSync(p(`archive/${doc.id}.html`), page);
  console.log(`archive/${doc.id}.html  ${(page.length / 1024).toFixed(1)}KB (page)`);
}
writeFileSync(p('404.html'), `${pageHead({ base: '/', title: 'Not found — Earth Star', description: 'No page grows at this address.', extra: '<meta name="robots" content="noindex">\n' })}
<body>
<main class="lost">
  <a class="lost-mark" href="/" aria-label="Earth Star — home">${star('/')}</a>
  <h1>Nothing grows at this address.</h1>
  <ul>
    <li><a href="/">Earth Star</a></li>
    <li><a href="/viewer/">The Viewer <span aria-hidden="true">↗</span></a></li>
    <li><a href="/field-guide/">Gomenata, the field guide <span aria-hidden="true">↗</span></a></li>
  </ul>
</main>
</body>
</html>
`);
// Every page there is to find: the three surfaces and the documents
const locs = ['', 'viewer/', 'field-guide/', ...manifest.docs.map((d) => `archive/${d.id}.html`)];
writeFileSync(p('sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locs.map((l) => `  <url><loc>${SITE}${l}</loc></url>`).join('\n')}
</urlset>
`);

// ── 6. Images (only with --images: slow, output is committed) ──

if (process.argv.includes('--images')) {
  const sharp = (await import('sharp')).default;
  const IMG = p('assets/img');
  // Clear the old rasters so a dropped size cannot linger, but keep the
  // script's SVGs (glyphs/, gomens/, favicon.svg) and the icons drawn from
  // them, written above in this run
  mkdirSync(IMG, { recursive: true });
  for (const f of readdirSync(IMG)) if (/\.(avif|webp|jpg|png)$/.test(f) && !ICONS.includes(f)) rmSync(`${IMG}/${f}`);

  // The painting's five layers. `widths` serve screens wider than 2:3;
  // `portrait` serves the tall ones (src/index.html): a full-height, centred
  // crop at 720:1060, a little wider than such a screen shows so the parallax
  // drift never reaches its edges. A phone draws it ~1.6x its own width, hence
  // 1440 for DPR 3. The base layer's source is only 914 px tall, so its crop
  // is offered at that native size and no larger.
  const PORTRAIT = 720 / 1060;
  const layers = [
    { src: 'Assets/0-BG.png', name: '0-BG', widths: [960, 1280], portrait: [620], avifQuality: 45 },
    { src: 'Assets/1-earth.png', name: '1-earth', widths: [960, 1440, 2048], portrait: [720, 1080, 1440] },
    { src: 'Assets/2-sun.png', name: '2-sun', widths: [960, 1440, 2048], portrait: [720, 1080, 1440] },
    { src: 'Assets/3-islandship.png', name: '3-islandship', widths: [960, 1440, 2048], portrait: [720, 1080, 1440] },
    { src: 'Assets/4-glimmer.png', name: '4-glimmer', widths: [960, 1440, 2048], portrait: [720, 1080, 1440] }
  ];

  for (const { src, name, widths, portrait, avifQuality } of layers) {
    const write = async (img, file) => {
      await img.clone().avif({ quality: avifQuality ?? 55, effort: 6 }).toFile(`${IMG}/${file}.avif`);
      await img.clone().webp({ quality: 78 }).toFile(`${IMG}/${file}.webp`);
      console.log(`${file} avif+webp`);
    };
    for (const w of widths) await write(sharp(p(src)).resize({ width: w }), `${name}-${w}`);
    const { width, height } = await sharp(p(src)).metadata();
    const crop = { left: Math.round((width - height * PORTRAIT) / 2), top: 0, width: Math.round(height * PORTRAIT), height };
    for (const w of portrait) {
      await write(sharp(p(src)).extract(crop).resize({ width: w, height: Math.round(w / PORTRAIT) }), `${name}-p${w}`);
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

  // (The favicon and its PNGs are drawn by the script's brush on every build;
  // see above.)

  // The index page's Viewer screenshot card. Source is the Viewer's own og card
  // (`viewer/og.jpg`) so the two can never disagree, and it IS generated here
  // because index.html references these files: a reference with no producer is
  // how the card shipped as a broken image on 2026-09-17. 400w + 800w, because
  // the frame renders ~280–520px wide (see .sky-lower in src/css/site.css).
  for (const w of [400, 800]) {
    await sharp(p('viewer/og.jpg')).resize({ width: w }).jpeg({ quality: 84, mozjpeg: true })
      .toFile(`${IMG}/viewer-og-${w}.jpg`);
    console.log(`viewer-og-${w} jpg`);
  }

  // The Works shelf (src/works.json). A film's poster is one frame of the film,
  // drawn by its own render(t) through film/render.mjs --stills, which needs
  // Chromium (CHROMIUM); the still is a step on the way and is not kept. The
  // field guide's is its frontispiece plate, whole, on the guide's paper. All
  // 16:9 at 640 and 1280 px, AVIF and WebP (and a tall cut's 9:16 at 720 px,
  // WebP); the Blender lineup at 960 and 1920 px, WebP.
  const WORKS_IMG = p(WORKS);
  rmSync(WORKS_IMG, { recursive: true, force: true });
  mkdirSync(WORKS_IMG, { recursive: true });
  const writePoster = async (img, id, fit = 'cover') => {
    for (const w of [640, 1280]) {
      const r = img.clone().resize({ width: w, height: Math.round(w * 9 / 16), fit, background: '#efe4c8' });
      await r.clone().avif({ quality: 55, effort: 6 }).toFile(`${WORKS_IMG}/${id}-${w}.avif`);
      await r.clone().webp({ quality: 80 }).toFile(`${WORKS_IMG}/${id}-${w}.webp`);
      console.log(`works/${id}-${w} avif+webp`);
    }
  };
  for (const f of works.films) {
    execFileSync(process.execPath, [p('film/render.mjs'), f.render, '--stills', String(f.still)], { stdio: 'inherit' });
    const still = p(`film/renders/${f.render}-${String(f.still).replace('.', '_')}.jpg`);
    await writePoster(sharp(still), f.id);
    rmSync(still);
    // A film with a tall cut has a tall poster too, the same moment of its
    // tall render, so the dialog opens on a portrait screen at the shape the
    // film will play (works.js), and nothing moves when it starts
    if (f.tall) {
      execFileSync(process.execPath, [p('film/render.mjs'), `${f.render}-tall`, '--stills', String(f.still)], { stdio: 'inherit' });
      const tall = p(`film/renders/${f.render}-tall-${String(f.still).replace('.', '_')}.jpg`);
      await sharp(tall).resize({ width: 720 }).webp({ quality: 80 }).toFile(`${WORKS_IMG}/${f.id}-tall-720.webp`);
      console.log(`works/${f.id}-tall-720 webp`);
      rmSync(tall);
    }
  }
  // The guide's plate is drawn out to 16:9 by its own edge columns, so its
  // paper runs on to the poster's edge with no seam where the plate ends (set
  // on flat paper, its shadowed edge stepped against the fill)
  const plate = sharp(p(`field-guide/plates/${works.guide.plate}.webp`)).flatten({ background: '#efe4c8' });
  const { width: pw, height: ph } = await plate.metadata();
  const pad = Math.round((ph * 16 / 9 - pw) / 2);
  await writePoster(sharp(await plate.extend({ left: pad, right: pad, extendWith: 'copy' }).png().toBuffer()), works.guide.id);
  for (const w of [960, 1920]) {
    await sharp(p(works.portraits.src)).resize({ width: w }).webp({ quality: 80 }).toFile(`${WORKS_IMG}/${works.portraits.id}-${w}.webp`);
    console.log(`works/${works.portraits.id}-${w} webp`);
  }

  console.log('images done');
}

console.log('build complete');
