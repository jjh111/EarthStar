// Earth Star site smoke suite.
//   BASE_URL=http://localhost:8901 CHROMIUM=/path/to/chrome node test/site.test.mjs
// Requires playwright-core (npm i -D playwright-core) and a served build.

import { chromium } from 'playwright-core';

const BASE = process.env.BASE_URL || 'http://localhost:8901';
const EXE = process.env.CHROMIUM; // optional explicit browser path

const browser = await chromium.launch(EXE ? { executablePath: EXE } : {});
const errors = [];
const results = [];
const check = (name, ok, extra = '') => results.push(`${ok ? 'PASS' : 'FAIL'} ${name}${extra ? ' — ' + extra : ''}`);

async function newPage(opts = {}) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, ...opts });
  const page = await ctx.newPage();
  page.on('console', m => { if (m.type() === 'error' && !/ERR_TUNNEL_CONNECTION_FAILED|ERR_NAME_NOT_RESOLVED|ERR_INTERNET_DISCONNECTED|Failed to load resource/.test(m.text())) errors.push('console: ' + m.text()); });
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  // Upstream data hosts are allowed to fail (offline, sandboxed, blocked) — the
  // page must degrade honestly; the sky checks below assert that it does.
  const UPSTREAM = /services\.swpc\.noaa\.gov|raw\.githubusercontent\.com/;
  // ERR_ABORTED is the browser cancelling a request it no longer needs (a
  // navigation interrupting the favicon fetch, say) — not a missing asset.
  // Missing assets are caught by the same-origin 4xx check below.
  page.on('requestfailed', r => {
    if (UPSTREAM.test(r.url()) || /ERR_ABORTED/.test(r.failure()?.errorText ?? '')) return;
    errors.push('reqfail: ' + r.url());
  });
  return { ctx, page };
}

{
  const { ctx, page } = await newPage();
  // Same-origin 404s are failures, not weather. Upstream feeds are allowed to
  // fail (see newPage); our own assets are not — the Viewer card shipped as a
  // broken image because index.html referenced files no build step produced,
  // and a case-insensitive dev disk cannot see the case mistake that Linux
  // GitHub Pages does. Both checks below are what would have caught it.
  const missing = [];
  page.on('response', r => {
    const u = new URL(r.url());
    if (u.origin === new URL(BASE).origin && r.status() >= 400) missing.push(`${r.status()} ${u.pathname}`);
  });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); // lazily-loaded images only fetch near the viewport
  await page.waitForTimeout(500);
  const broken = await page.evaluate(() => Array.from(document.images)
    .filter(i => i.complete && i.naturalWidth === 0)
    .map(i => i.currentSrc || i.src));
  check('no missing same-origin assets', missing.length === 0, missing.join(', '));
  check('no broken images', broken.length === 0, broken.join(', '));
  // Every size of the painting, not only those this viewport fetches: phones
  // load the portrait crops, which the checks above never see
  const paint = await page.evaluate(() => [...new Set([...document.querySelectorAll('.hero-images source, .hero-images img, link[rel=preload][as=image]')]
    .flatMap((el) => (el.getAttribute('srcset') || el.getAttribute('imagesrcset') || el.getAttribute('src') || el.getAttribute('href') || '')
      .split(',').map((c) => c.trim().split(/\s+/)[0]).filter(Boolean)))]);
  const absent = [];
  for (const u of paint) if (!(await page.request.head(new URL(u, BASE + '/').href)).ok()) absent.push(u);
  check('every size of the painting resolves', paint.length > 0 && absent.length === 0, absent.join(', '));
  // The PNG icons, which a browser may not fetch here at all
  const icons = await page.evaluate(() => [...document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]')].map((l) => l.href));
  const deadIcons = [];
  for (const u of icons) if (!(await page.request.head(u)).ok()) deadIcons.push(u);
  check('every icon resolves, the touch icon among them', icons.length === 3 && icons.some((u) => u.endsWith('apple-touch-icon.png')) && deadIcons.length === 0, deadIcons.join(', '));
  // Earth Star surfaces open in the same tab; only offsite links open new ones
  check('Viewer links open in the same tab', await page.locator('a[href^="/viewer/"][target]').count() === 0);
  check('title', (await page.title()).includes('Earth Star'));
  check('grid pre-rendered', await page.locator('.archive-card').count() >= 3);

  // A card opens by its title link; the reader takes the focus, so the keys
  // read the text, and [ ] turn to the previous or next document
  await page.locator('.archive-card a').first().scrollIntoViewIfNeeded();
  await page.locator('.archive-card a').first().click();
  await page.waitForSelector('.archive-panel.open');
  await page.waitForSelector('.archive-md h1, .archive-md h2');
  check('panel opens with content', true);
  check('no sprout from card click', await page.locator('.emoji-transient').count() === 0);
  check('provenance line', await page.locator('.archive-provenance').count() === 1);

  // (a keyboard scroll can start late on a busy machine: wait for the text to
  // hold the focus, then for the scroll, rather than a fixed while)
  const readerTop = () => page.evaluate(() => document.getElementById('archivePanelBody').scrollTop);
  await page.waitForFunction(() => document.activeElement?.id === 'archivePanelBody');
  await page.keyboard.press('PageDown');
  const paged = await page.waitForFunction(() => document.getElementById('archivePanelBody').scrollTop > 0, null, { timeout: 3000 }).then(() => readerTop(), () => 0);
  check('PageDown scrolls the document', paged > 0, `scrollTop ${paged}`);
  await page.keyboard.press(' ');
  const spaced = await page.waitForFunction((y) => document.getElementById('archivePanelBody').scrollTop > y, paged, { timeout: 3000 }).then(() => true, () => false);
  check('Space does not close the reader', await page.locator('.archive-panel.open').count() === 1 && spaced);

  const firstTitle = await page.locator('#archiveDocTitle').textContent();
  await page.keyboard.press(']');
  await page.waitForTimeout(400);
  const nextTitle = await page.locator('#archiveDocTitle').textContent();
  check('] turns to the next document', nextTitle.trim().length > 0 && nextTitle !== firstTitle, `${firstTitle} → ${nextTitle}`);
  // Closing goes back through history, so it lands a moment later
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !document.querySelector('.archive-panel.open'), null, { timeout: 2000 }).catch(() => {});
  check('esc closes', await page.locator('.archive-panel.open').count() === 0);

  await page.goto(BASE + '/#doc/earth-star-skill', { waitUntil: 'networkidle' });
  await page.waitForSelector('.archive-panel.open');
  await page.waitForSelector('.archive-md table');
  const taxonomyCells = await page.locator('.archive-md td', { hasText: /^Empirical$/ }).count();
  check('skill doc taxonomy table renders', taxonomyCells === 1, `${taxonomyCells} cell(s) reading "Empirical"`);
  // (closing is a step Back, and the browser restores the page's scroll a
  // frame or two after it: let it land before scrolling)
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !document.querySelector('.archive-panel.open'), null, { timeout: 2000 }).catch(() => {});
  await page.waitForTimeout(300);

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.mouse.click(700, 450);
  await page.waitForTimeout(300);
  check('body click plants', await page.locator('.emoji-transient, .butterfly-living').count() > 0);
  check('the garden plants drawn glyphs, not emoji', await page.locator('.emoji-transient .glyph, .butterfly-living .glyph').count() > 0);

  for (const y of [500, 560, 620]) await page.mouse.click(30, y);
  await page.waitForTimeout(1600);
  check('margin stars', await page.locator('.emoji-persistent').count() >= 3);
  check('constellation drawn', await page.locator('.constellation-line').count() >= 2);
  // Stars sit in the middle of the gutter, clear of the text; a click in the
  // column (or within its 8 px of grace) plants none
  const textLeft = await page.evaluate(() => { const el = document.querySelector('.ideas-inner'); return el.getBoundingClientRect().left + parseFloat(getComputedStyle(el).paddingLeft); });
  const starX = await page.$$eval('.emoji-persistent', (els) => els.map((e) => { const r = e.getBoundingClientRect(); return r.left + r.width / 2; }));
  check('margin stars sit at the gutter centre', starX.every((x) => Math.abs(x - textLeft / 2) <= 2), `${starX.map(Math.round).join(',')} vs ${Math.round(textLeft / 2)}`);
  await page.evaluate(() => document.getElementById('ideas').scrollIntoView());
  await page.waitForTimeout(200);
  await page.mouse.click(Math.ceil(textLeft) - 6, 500);
  check('a click in the column plants no star', await page.locator('.emoji-persistent').count() === starX.length);

  await page.evaluate(() => window.scrollTo(0, 0));
  for (let i = 0; i < 6; i++) { await page.mouse.click(500 + i * 40, 400); await page.waitForTimeout(150); }
  await page.waitForTimeout(2600);
  check('footer garden populated', await page.locator('.emoji-footer').count() > 0);
  check('coherence meter moves', ((await page.locator('#coherenceValue').textContent()) || '').includes('+'));

  await page.locator('#siteSearch').fill('datacenter');
  await page.waitForTimeout(600);
  check('search filters documents', await page.locator('.archive-card').count() === 1);
  await page.locator('#siteSearch').fill('kincentric');
  await page.waitForTimeout(400);
  check('search filters ideas', await page.locator('.idea:not([hidden])').count() >= 1 && await page.locator('.idea:not([hidden])').count() < 8);
  await page.locator('#siteSearch').fill('veracity');
  await page.waitForTimeout(800);
  check('content search (lazy index)', await page.locator('.archive-card').count() >= 1);
  await page.locator('#siteSearch').fill('');
  await page.waitForTimeout(300);

  // Ideas dashboard: tiles, lenses, expand
  check('ideas rendered', await page.locator('.idea').count() >= 12);
  await page.locator('.chip[data-lens="alignment"]').click();
  await page.waitForTimeout(200);
  const alignCount = await page.locator('.idea:not([hidden])').count();
  check('lens chip filters', alignCount > 0 && alignCount < await page.locator('.idea').count(), String(alignCount));
  await page.locator('.chip[data-lens="all"]').click();
  await page.locator('#idea-gomens .idea-head').click();
  check('idea expands', await page.locator('#idea-gomens-more').isVisible());

  // Sky strip: every tile resolves to a real state once Sky nears the screen;
  // an error never shows a number
  await page.evaluate(() => document.getElementById('sky').scrollIntoView());
  await page.waitForFunction(() => Array.from(document.querySelectorAll('.sky-tile')).every(t => t.dataset.state !== 'loading'), null, { timeout: 25000 }).catch(() => {});
  const states = await page.$$eval('.sky-tile', ts => ts.map(t => [t.dataset.state, t.querySelector('.sky-value').textContent]));
  const resolved = states.every(([s]) => ['live', 'stale', 'nodata', 'error'].includes(s));
  const honest = states.every(([s, v]) => (s === 'error' || s === 'nodata') ? !/\d/.test(v) : true);
  check('sky tiles resolve', resolved, states.map(s => s[0]).join(','));
  check('sky error/nodata never shows a number', honest);

  // Golden thread knots follow the sections
  check('thread knots', await page.locator('.thread-knot').count() === await page.locator('[data-thread]').count());

  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  check('garden persists', await page.locator('.emoji-footer').count() > 0);

  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.keyboard.press('Tab');
  check('skip link is first tab stop', await page.evaluate(() => document.activeElement.className) === 'skip-link');
  await ctx.close();
}

{
  const { ctx, page } = await newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, deviceScaleFactor: 3 });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  const before = await page.locator('.hero-images img').nth(3).evaluate(el => el.style.transform);
  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(600);
  const after = await page.locator('.hero-images img').nth(3).evaluate(el => el.style.transform);
  check('scroll parallax (mobile)', before !== after);
  await ctx.close();
}

{
  // Back closes the reader and keeps the visitor on the site: opening a
  // document is one history entry (it once replaced the page's own entry, so
  // Back left for whatever came before)
  const { ctx, page } = await newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  await page.goto('about:blank');
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.locator('.archive-card a').first().scrollIntoViewIfNeeded();
  await page.locator('.archive-card a').first().click();
  await page.waitForSelector('.archive-panel.open .archive-md h1');
  await page.goBack();
  await page.waitForTimeout(400);
  check('back closes the reader', page.url().startsWith(BASE) && await page.locator('.archive-panel.open').count() === 0, page.url());
  await ctx.close();
}

{
  // The wayfinder on a phone: one row with search, the Viewer and the switch on
  // screen; the six sections in a menu that navigates and closes; the thread
  // marks where you are in it
  const { ctx, page } = await newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, innerHeight * 1.5));
  await page.waitForTimeout(300);
  const bar = await page.evaluate(() => {
    const r = (s) => document.querySelector(s).getBoundingClientRect();
    return { h: r('.wayfinder').height, theme: r('#themeToggle').right, viewer: r('.wf-viewer').right, w: innerWidth };
  });
  check('phone wayfinder is one row', bar.h <= 48, `${bar.h}px`);
  check('phone wayfinder keeps the Viewer and the switch on screen', bar.theme <= bar.w && bar.viewer <= bar.w, `${bar.viewer}, ${bar.theme} of ${bar.w}`);
  await page.locator('.wf-menu').click();
  const opened = await page.locator('.wf-links a[href="#sky"]').isVisible() && await page.locator('.wf-menu').getAttribute('aria-expanded') === 'true';
  await page.locator('.wf-links a[href="#sky"]').click();
  await page.waitForTimeout(600);
  const went = await page.evaluate(() => location.hash === '#sky' && document.getElementById('sky').getBoundingClientRect().top < innerHeight / 2);
  check('sections menu opens, navigates and closes', opened && went && await page.locator('.wf-menu').getAttribute('aria-expanded') === 'false'
    && !(await page.locator('.wf-links a[href="#sky"]').isVisible()));
  await page.evaluate(() => document.getElementById('ideas').scrollIntoView());
  await page.waitForTimeout(1200); // the thread counts sections once the page is idle
  const current = await page.evaluate(() => [...document.querySelectorAll('.wf-links a[aria-current]')].map((a) => a.getAttribute('href')));
  check('one wayfinder link marks the current section', current.length === 1 && current[0] === '#ideas', current.join(', '));
  // Still the ground is the menu's last row on a phone, not a button in the bar
  await page.locator('.wf-menu').click();
  const row = page.locator('.wf-links .wf-still-row');
  const inMenu = await row.isVisible() && !(await page.locator('.wf-end .wf-still').isVisible());
  await row.click();
  check('phone: Still the ground is in the Sections menu', inMenu && await row.getAttribute('aria-pressed') === 'true'
    && await page.evaluate(() => document.documentElement.hasAttribute('data-still')));
  await ctx.close();
}

{
  // A touch screen plants no stars: a finger cannot aim at a margin, and a
  // phone has none to spare. The garden says 'tap', and the seed's chain of
  // marks never breaks across lines.
  const { ctx, page } = await newPage({ viewport: { width: 360, height: 740 }, hasTouch: true, isMobile: true });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  check('touch: the garden says tap', await page.locator('.footer-garden-hint').textContent() === 'tap anywhere to plant…');
  check('the seed chain keeps to one line at 360', await page.locator('.seed-chain').evaluate((el) => el.getClientRects().length) === 1);
  await page.evaluate(() => document.querySelector('.gomen-lore').scrollIntoView({ block: 'center' }));
  await page.waitForTimeout(200);
  for (const x of [20, 50, 80, 290, 320, 350]) { await page.touchscreen.tap(x, 370); await page.waitForTimeout(100); }
  await page.waitForTimeout(300);
  check('touch: margin taps plant no stars', await page.locator('.emoji-persistent').count() === 0);
  await ctx.close();
}

{
  // Still the ground: the switch in the bar stops the automata and the cue,
  // keeps the bar one row, and outlasts a reload
  const { ctx, page } = await newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  const snap = () => page.evaluate(() => {
    const c = document.getElementById('bgAutomaton');
    const d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data;
    let hsh = 0; for (let i = 3; i < d.length; i += 4) hsh = (hsh * 31 + d[i]) | 0;
    return hsh;
  });
  const toggle = page.locator('.wf-end .wf-still');
  await toggle.click();
  await page.waitForTimeout(100);
  const g1 = await snap();
  await page.waitForTimeout(2000);
  check('still: the ground stops', g1 === await snap() && await toggle.getAttribute('aria-pressed') === 'true');
  check('still: the cue rests', await page.locator('.cover-cue span').evaluate((el) => getComputedStyle(el).animationName) === 'none');
  const row = await page.evaluate(() => {
    const r = (sel) => document.querySelector(sel).getBoundingClientRect();
    return { h: Math.round(r('.wayfinder').height), still: r('.wf-end .wf-still').top, theme: r('#themeToggle').top };
  });
  check('still: the switch sits in the bar\'s one row', row.h <= 58 && row.still === row.theme, JSON.stringify(row));
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const r1 = await snap();
  await page.waitForTimeout(1500);
  check('still: the choice persists', await page.evaluate(() => document.documentElement.hasAttribute('data-still'))
    && await toggle.getAttribute('aria-pressed') === 'true' && r1 === await snap());
  await ctx.close();
}

{
  // The footer: nothing to clear in an empty garden; the plants are buttons
  // in the tab order; the rule keeps to the column and the banner to its
  // drawn 1200 px; the quotes are set
  const { ctx, page } = await newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  check('an empty garden has no Clear button', !(await page.locator('#clearGardenBtn').isVisible()));
  await page.evaluate(() => localStorage.setItem('earthStarGarden', JSON.stringify({ footerGarden: [{ emoji: '🌱' }, { emoji: '🌳', isTree: true }] })));
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.locator('#clearGardenBtn').focus();
  await page.keyboard.press('Shift+Tab');
  check('garden plants are buttons in the tab order', await page.locator('button.emoji-footer').count() === 2
    && await page.evaluate(() => document.activeElement.matches('button.emoji-footer[aria-label="Remove tree"]')));
  const f = await page.evaluate(() => {
    const r = (el) => el.getBoundingClientRect();
    const logo = [...document.querySelectorAll('.footer-logo, .logo-day')].find((el) => el.getClientRects().length);
    const inner = document.querySelector('.stage-inner');
    const pad = parseFloat(getComputedStyle(inner).paddingLeft);
    return { gap: r(logo).top - r(document.getElementById('clearGardenBtn')).bottom, rule: r(document.querySelector('.footer-garden')),
      col: [r(inner).left + pad, r(inner).right - pad], banner: r(document.querySelector('.banner-footer img')).width, text: document.querySelector('footer').innerText };
  });
  check('Clear Garden stands clear of the logo', f.gap >= 16, `${f.gap}px`);
  check('the footer rule keeps to the column, the banner to 1200 px', f.rule.left >= f.col[0] - 1 && f.rule.right <= f.col[1] + 1 && f.banner <= 1200,
    `${Math.round(f.rule.left)}–${Math.round(f.rule.right)} in ${f.col.map(Math.round).join('–')}, banner ${f.banner}`);
  check('the footer sets its quotes', !/["']/.test(f.text));
  await ctx.close();
}

{
  // A landscape phone keeps the seven sections in the bar's one row, clear of
  // the Viewer door
  const { ctx, page } = await newPage({ viewport: { width: 844, height: 390 }, hasTouch: true, isMobile: true });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, innerHeight * 1.5));
  await page.waitForTimeout(300);
  const row = await page.evaluate(() => {
    // (the menu's Top and Garden are not in the row: only what shows is counted)
    const links = [...document.querySelectorAll('.wf-links a:not(.wf-top)')].map((a) => a.getBoundingClientRect()).filter((r) => r.width > 0);
    return { h: document.querySelector('.wayfinder').getBoundingClientRect().height, n: links.length,
      tops: new Set(links.map((r) => Math.round(r.top))).size, end: Math.max(...links.map((r) => r.right)), door: document.querySelector('.wf-viewer').getBoundingClientRect().left };
  });
  check('landscape phone: seven sections in one row', row.h <= 44 && row.n === 7 && row.tops === 1 && row.end <= row.door, JSON.stringify(row));
  await ctx.close();
}

{
  // Copying the seed keeps the phrase's lines: they are <br>s in the page,
  // which textContent alone would run together
  const { ctx, page } = await newPage({ permissions: ['clipboard-read', 'clipboard-write'] });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.locator('#seedCopy').click();
  await page.waitForTimeout(200);
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  check('copy the seed keeps its lines', copied.includes('recursion.\nYour memory is soil.') && copied.split('\n').length >= 10,
    `${copied.split('\n').length} lines`);
  check('copy the seed keeps the chain as written', copied.includes('Ourself(ves). 🌱 ⟶ 🧠 ⟶ 🌐 ⟶ 🜃\nEarth Star is live.'));
  await ctx.close();
}

{
  // The ideas fill full rows: a short last row shares the width, also under
  // a lens; an opened idea takes a row of its own, and closing it hands the
  // URL back to the section
  const { ctx, page } = await newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto(BASE + '/#idea/gomens', { waitUntil: 'networkidle' });
  const holes = () => page.evaluate(() => {
    const grid = document.getElementById('ideas-grid');
    const gw = grid.getBoundingClientRect().width, gap = parseFloat(getComputedStyle(grid).columnGap);
    const rows = new Map();
    for (const el of grid.querySelectorAll('.idea:not([hidden])')) {
      const b = el.getBoundingClientRect(), r = rows.get(Math.round(b.top)) || { w: -gap };
      r.w += b.width + gap; rows.set(Math.round(b.top), r);
    }
    return [...rows.values()].filter((r) => Math.abs(r.w - gw) > 2).length;
  });
  const open = await page.evaluate(() => Math.round(document.getElementById('idea-gomens').getBoundingClientRect().width - document.getElementById('ideas-grid').getBoundingClientRect().width));
  check('an opened idea spans the row', open === 0 && await holes() === 0, `${open} px short`);
  // The cards keep the page's order around an open one (read across, then
  // down), and the head that was pressed stays where it was on the screen
  const inOrder = () => page.evaluate(() => {
    const pos = [...document.querySelectorAll('.idea:not([hidden])')].map((el, i) => { const b = el.getBoundingClientRect(); return { i, t: Math.round(b.top), l: Math.round(b.left) }; });
    return [...pos].sort((a, b) => a.t - b.t || a.l - b.l).every((q, k) => q.i === k);
  });
  const tending = page.locator('#idea-tending .idea-head');
  await tending.scrollIntoViewIfNeeded();
  const y0 = (await tending.boundingBox()).y;
  await tending.click();
  const y1 = (await tending.boundingBox()).y;
  check('an opened idea keeps the cards in order, and its head holds still', await inOrder() && await holes() === 0 && Math.abs(y1 - y0) <= 2,
    `${Math.round(y0)} → ${Math.round(y1)}`);
  await tending.click();
  await page.locator('#idea-gomens .idea-head').click();
  check('closing an idea leaves #ideas', await page.evaluate(() => location.hash) === '#ideas');
  const all = await holes();
  await page.locator('.chip[data-lens="economics"]').click();
  check('the ideas leave no hole in the grid', all === 0 && await holes() === 0);
  await ctx.close();
}

{
  // Search is the page's browsing tool: ideas and documents match by one rule,
  // the count catches up once the documents' text is in, Enter opens rather
  // than toggles, the Gomens are in the index, and a query or a lens can be
  // shared. Upstream is blocked, as it is for many visitors.
  const { ctx, page } = await newPage({ viewport: { width: 1280, height: 800 } });
  await ctx.route((u) => !/^(localhost|127\.0\.0\.1)$/.test(u.hostname), (r) => r.abort('internetdisconnected'));
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  const search = page.locator('#siteSearch');
  await search.fill('waste fund');
  await page.waitForTimeout(600);
  check("'waste fund' finds the Waste Reclamation Fund", await page.locator('#archiveGrid .archive-card[data-id="wrf"]').count() === 1);
  await search.fill('IGRF');
  await page.waitForFunction(() => document.getElementById('search-status').textContent === '1 idea · 1 document', null, { timeout: 3000 }).catch(() => {});
  check("'IGRF' counts the document whose text holds it", await page.locator('#search-status').textContent() === '1 idea · 1 document',
    await page.locator('#search-status').textContent());
  await search.fill('kincentric');
  await page.waitForTimeout(300);
  await search.press('Enter');
  await page.waitForTimeout(300);
  await search.press('Enter');
  await page.waitForTimeout(300);
  check('Enter twice leaves an idea open', await page.locator('#idea-kincentric .idea-head').getAttribute('aria-expanded') === 'true');
  await search.fill('clearers');
  await page.waitForTimeout(300);
  const listed = await page.evaluate(() => [...document.querySelectorAll('#searchResults [role="group"]')]
    .map((g) => `${g.querySelector('.sr-head').firstChild.textContent.trim()}: ${[...g.querySelectorAll('[role="option"] .sr-title')].map((o) => o.textContent).join(', ')}`));
  check("'clearers' lists the Clearers Gomen", await page.locator('#searchPop').isVisible() && listed.includes('Gomens: The Clearers'), listed.join(' / '));
  await search.fill('datacenter');
  await page.waitForTimeout(300);
  await search.press('Enter');
  await page.waitForSelector('.archive-panel.open .archive-md mark.search-hit', { timeout: 3000 }).catch(() => {});
  check('datacenter then Enter opens the Harmonious Computing Act at its first hit',
    (await page.locator('#archiveDocTitle').textContent()).includes('Harmonious Computing Act') && await page.locator('.archive-md mark.search-hit').isVisible());
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !document.querySelector('.archive-panel.open'), null, { timeout: 2000 }).catch(() => {});

  await page.goto(BASE + '/?q=waste', { waitUntil: 'networkidle' });
  const shown = () => page.locator('.idea:not([hidden])').count();
  const waste = await shown();
  await page.reload({ waitUntil: 'networkidle' });
  check('?q=waste opens searched, and keeps it across a reload', await search.inputValue() === 'waste' && waste > 0 && waste < 16 && await shown() === waste, `${waste} ideas`);
  await page.goto(BASE + '/?lens=economics', { waitUntil: 'networkidle' });
  check('?lens=economics opens with that lens pressed', await page.locator('.chip[data-lens="economics"]').getAttribute('aria-pressed') === 'true'
    && await shown() < 16);
  await ctx.close();
}

{
  // The whole body of work can be reached: each Gomen opens its plate in the
  // field guide, and the guide leads back; the sitemap lists all three
  // surfaces. The Works carry the honesty grammar: a register on every card,
  // and a length or a size on every one.
  const { ctx, page } = await newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  const guide = await (await page.request.get(BASE + '/field-guide/')).text();
  const ids = new Set([...guide.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const plates = await page.$$eval('.scale-guide', (as) => as.map((a) => a.getAttribute('href')));
  const lost = plates.filter((h) => !h.startsWith('field-guide/#') || !ids.has(h.split('#')[1]));
  check('every Gomen opens its plate in the field guide', plates.length === 5 && lost.length === 0, lost.join(', ') || plates.join(' '));
  check('the field guide leads back to the splash and the Viewer', /<a href="\/">/.test(guide) && /<a href="\/viewer\/">/.test(guide));
  const sitemap = await (await page.request.get(BASE + '/sitemap.xml')).text();
  check('the sitemap lists the splash, the Viewer, the field guide and every document', (sitemap.match(/<loc>/g) || []).length === 3 + await page.locator('.archive-card').count()
    && sitemap.includes('/field-guide/') && sitemap.includes('/archive/wrf.html'));

  const cards = await page.$$eval('.work, .works-portraits', (els) => els.map((el) => ({
    id: el.id, badge: el.querySelector('.badge')?.textContent, words: el.querySelector('.work-kicker, figcaption').textContent,
  })));
  const ungraded = cards.filter((c) => (c.id.startsWith('work-the-loom') || c.id === 'work-a-seed' || c.id === 'work-gomenata' ? c.badge !== 'M' : c.badge !== 'D'));
  const unmeasured = cards.filter((c) => c.id !== 'work-gomens-lineup' && !/\d+(\.\d)? MB|\d+ s\b|\d+ min|\d+ species/.test(c.words));
  check('every work carries its register, and a length or a size', cards.length === 6 && !ungraded.length && !unmeasured.length,
    [...ungraded, ...unmeasured].map((c) => c.id).join(', ') || cards.map((c) => `${c.id} ${c.badge}`).join(' · '));
  // every poster size the page offers, not only those this viewport fetches
  const posters = await page.evaluate(() => [...new Set([...document.querySelectorAll('.work-media source, .work-media img, .portraits img')]
    .flatMap((el) => (el.getAttribute('srcset') || el.getAttribute('src') || '').split(',').map((c) => c.trim().split(/\s+/)[0]).filter(Boolean)))]);
  const absent = [];
  for (const u of posters) if (!(await page.request.head(new URL(u, BASE + '/').href)).ok()) absent.push(u);
  check('every poster of the Works resolves', posters.length >= 22 && absent.length === 0, absent.join(', ') || `${posters.length} files`);

  // Onward leads out once: the places elsewhere, which say they open a new
  // tab, and the skills, each with its size; the Viewer is not repeated there
  const onward = await page.evaluate(() => {
    const sec = document.getElementById('begin');
    return {
      viewer: sec.querySelectorAll('a[href^="/viewer/"]').length,
      tabs: [...sec.querySelectorAll('a[target="_blank"]')].every((a) => a.textContent.includes('(opens in a new tab)')),
      skills: [...sec.querySelectorAll('a[href$=".skill"]')].map((a) => a.textContent),
      loose: sec.querySelectorAll('a:not(.onward-card):not(.skill)').length,
    };
  });
  check('Onward: every .skill shows its size, and no Viewer card', onward.viewer === 0 && onward.skills.length === 3
    && onward.skills.every((t) => /\.skill · \d+(\.\d)? KB · \S/.test(t)), onward.skills.join(' | '));
  check('Onward: new tabs say so, and every link is a card', onward.tabs && onward.loose === 0);
  await ctx.close();
}

{
  // A film plays in its own dialog, opened by a click or by Enter, and never
  // by itself: nothing of the film is fetched until play. It is one history
  // entry, so Escape and Back both close it, and focus returns to the card.
  const { ctx, page } = await newPage();
  const mp4 = [];
  page.on('request', (r) => { if (/\.mp4(\?|$)/.test(r.url())) mp4.push(r.url()); });
  await page.goto(BASE + '/#works', { waitUntil: 'networkidle' });
  await page.locator('#work-the-loom').click({ position: { x: 60, y: 40 } });
  await page.waitForSelector('dialog.film-dialog[open]', { timeout: 3000 }).catch(() => {});
  const video = await page.evaluate(() => {
    const v = document.querySelector('dialog.film-dialog[open] video');
    return v && { preload: v.getAttribute('preload'), autoplay: v.autoplay || v.hasAttribute('autoplay'), paused: v.paused,
      sources: [...v.querySelectorAll('source')].map((s) => s.getAttribute('src')), hash: location.hash,
      title: document.getElementById('filmTitle').textContent };
  });
  await page.waitForTimeout(800);
  check('a click on a film card opens it in the film dialog', video?.title === 'the loom' && video.hash === '#film/the-loom', JSON.stringify(video));
  check('the film waits: preload=none, no autoplay, no mp4 fetched before play',
    video?.preload === 'none' && !video.autoplay && video.paused && mp4.length === 0, `${mp4.length} mp4 request(s)`);
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !document.querySelector('dialog.film-dialog[open]'), null, { timeout: 2000 }).catch(() => {});
  const back = await page.evaluate(() => ({ open: !!document.querySelector('dialog[open]'), focus: document.activeElement?.dataset.film, hash: location.hash }));
  check('Escape closes the film and focus returns to its card', !back.open && back.focus === 'the-loom' && back.hash === '#works', JSON.stringify(back));

  await page.locator('a[data-film="the-loom-lifted"]').focus();
  await page.keyboard.press('Enter');
  await page.waitForSelector('dialog.film-dialog[open]', { timeout: 3000 }).catch(() => {});
  const tall = await page.$$eval('dialog.film-dialog video source', (ss) => ss.map((s) => `${s.getAttribute('media') || ''} ${s.getAttribute('src')}`.trim()));
  check('Enter opens a film; the lifted film offers its tall cut to portrait screens', tall.length === 2
    && tall[0] === '(orientation: portrait) film/renders/earth-star-the-loom-lifted-tall.mp4', tall.join(' | '));
  await page.goBack();
  await page.waitForFunction(() => !document.querySelector('dialog.film-dialog[open]'), null, { timeout: 2000 }).catch(() => {});
  check('Back closes the film', await page.locator('dialog.film-dialog[open]').count() === 0 && page.url().endsWith('#works'), page.url());
  check('still no mp4 fetched', mp4.length === 0, mp4.join(', '));
  await ctx.close();
}

{
  // Search reaches the works and the field guide's species, fetched the first
  // time search is used: a word from a species' mathematics finds it, and a
  // film's name finds the films
  const { ctx, page } = await newPage({ viewport: { width: 1280, height: 800 } });
  await ctx.route((u) => !/^(localhost|127\.0\.0\.1)$/.test(u.hostname), (r) => r.abort('internetdisconnected'));
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  const listed = async (q) => {
    await page.locator('#siteSearch').fill(q);
    await page.waitForTimeout(600);
    return page.evaluate(() => Object.fromEntries([...document.querySelectorAll('#searchResults [role="group"]')]
      .map((g) => [g.querySelector('.sr-head').firstChild.textContent.trim(), [...g.querySelectorAll('.sr-title')].map((o) => o.textContent)])));
  };
  const kura = await listed('Kuramoto');
  check("'Kuramoto' finds the Lung-Sweepers in the field guide", kura['Field guide']?.includes('The Lung-Sweepers'), JSON.stringify(kura));
  const loom = await listed('loom');
  check("'loom' finds the films", loom.Works?.includes('the loom') && loom.Works?.includes('the loom, lifted'), JSON.stringify(loom));
  check("'loom' is counted", /2 works/.test(await page.locator('#search-status').textContent()), await page.locator('#search-status').textContent());
  await page.locator('#siteSearch').press('ArrowDown');
  await page.locator('#siteSearch').press('Enter');
  await page.waitForSelector('dialog.film-dialog[open]', { timeout: 3000 }).catch(() => {});
  check('a film found by search opens in the film dialog', await page.locator('#filmTitle').textContent().catch(() => '') === 'the loom');
  await ctx.close();
}

// Mock mode renders numbers and says so
{
  const { ctx, page } = await newPage();
  await page.goto(BASE + '/?mock=1', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const v = await page.locator('#sky-kp .sky-value').textContent();
  check('mock mode shows fixture value', /\d/.test(v), v);
  check('mock mode is labelled', await page.locator('#sky-now.is-mock').count() === 1);
  // Kp to one decimal with NOAA's thirds label, as the Viewer writes it
  const kpDetail = await page.locator('#sky-kp .sky-detail').textContent();
  check('sky Kp reads one decimal and NOAA Kp', v === '2.3' && kpDetail.includes('NOAA Kp 2+'), `${v} · ${kpDetail}`);
  await ctx.close();
}

{
  // One quantity per tile, on one line, with its unit; a southward field is
  // written with U+2212 in the tile and in the sentence, never a hyphen
  const { ctx, page } = await newPage({ viewport: { width: 360, height: 740 } });
  await page.route('**/assets/data/now.mock.json', async (route) => {
    const m = await (await route.fetch()).json();
    m.wind.bz_gsm = -1.6;
    route.fulfill({ json: m });
  });
  await page.goto(BASE + '/?mock=1#sky', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const wind = await page.evaluate(() => {
    const t = document.getElementById('sky-wind'), q = (s) => t.querySelector(s).textContent;
    // (a dot binds to the word after it with a no-break space)
    return { value: q('.sky-value'), unit: q('.sky-unit'), detail: q('.sky-detail').replace(/\u00a0/g, ' '), sentence: document.getElementById('sky-sentence').textContent };
  });
  check('sky wind tile holds the speed, its unit apart', /^\d+$/.test(wind.value) && wind.unit === 'km/s', `${wind.value} | ${wind.unit}`);
  check('sky minus is U+2212 in tile and sentence', wind.detail.startsWith('Bz \u22121.6 nT · southward') && /Bz\s\u22121\.6\snT/.test(wind.sentence)
    && !/-\d/.test(wind.detail + wind.sentence), `${wind.detail} / ${wind.sentence}`);
  const lines = await page.evaluate(() => [...document.querySelectorAll('.sky-value')].map((v) => {
    const r = document.createRange(); r.selectNodeContents(v);
    return new Set([...r.getClientRects()].map((x) => Math.round(x.top))).size;
  }));
  check('every sky reading is one line at 360', lines.every((n) => n === 1), lines.join(','));
  await ctx.close();
}

{
  // The note promises live readings only while Kp, wind and X-rays are all
  // live: the scales' 6 h cadence keeps that tile live through a 3 h outage
  // (or the mirror's lag), and it alone never holds the promise up. The X-ray
  // flux is written as the Viewer writes it, never toExponential's "1.1e-6"
  const ago = (min) => new Date(Date.now() - min * 60e3).toISOString();
  const note = async (old) => {
    const { ctx, page } = await newPage();
    await page.route('**/assets/data/now.mock.json', async (route) => {
      const m = await (await route.fetch()).json();
      m.kp.time = m.wind.time = m.xray.time = ago(old);
      m.scales.time = ago(10);
      route.fulfill({ json: m });
    });
    await page.goto(BASE + '/?mock=1#sky', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
    const r = await page.evaluate(() => ({
      states: [...document.querySelectorAll('.sky-tile')].map((t) => t.dataset.state).join(','),
      note: document.querySelector('#sky .sky-note').textContent,
      xray: document.querySelector('#sky-xray .sky-detail').textContent.replace(/\u00a0/g, ' '),
    }));
    await ctx.close();
    return r;
  };
  const fresh = await note(2), late = await note(180);
  check('sky note promises live readings while every reading is live', fresh.states === 'live,live,live,live' && /^Live readings/.test(fresh.note), `${fresh.states} · ${fresh.note}`);
  check('sky note owns up when Kp, wind and X-rays are old, though the scales are live',
    late.states === 'stale,stale,stale,live' && /fresh/.test(late.note) && !/^Live readings/.test(late.note), `${late.states} · ${late.note}`);
  check('sky X-ray flux reads 1.1 × 10⁻⁶ W/m², never 1.1e-6', fresh.xray.startsWith('1.1 × 10⁻⁶ W/m² · GOES-') && !/\de-/.test(fresh.xray), fresh.xray);
}

{
  // Upstream blocked: every tile unavailable, the note says why, and a
  // refresh that changes nothing leaves the live sentence alone (it would be
  // read out again). Each tile opens its own reading in the Viewer.
  const { ctx, page } = await newPage();
  await page.route(/services\.swpc\.noaa\.gov|raw\.githubusercontent\.com/, (r) => r.abort('internetdisconnected'));
  await page.goto(BASE + '/#sky', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => [...document.querySelectorAll('.sky-tile')].every((t) => t.dataset.state !== 'loading'), null, { timeout: 25000 }).catch(() => {});
  const states = await page.$$eval('.sky-tile', (ts) => ts.map((t) => t.dataset.state));
  check('sky blocked: every tile unavailable', states.every((s) => s === 'error'), states.join(','));
  check('sky blocked: the note says NOAA could not be reached', /NOAA could not be reached/.test(await page.locator('.sky-note').textContent()));
  const mutations = await page.evaluate(async () => {
    const line = document.getElementById('sky-sentence'), grid = document.getElementById('sky-now');
    let n = 0;
    new MutationObserver((l) => { n += l.length; }).observe(line, { childList: true, characterData: true, subtree: true });
    for (let i = 0; i < 2; i++) {
      // the tiles are rewritten at the end of every refresh; wait for that
      const done = new Promise((res) => { const o = new MutationObserver(() => { o.disconnect(); setTimeout(res, 50); }); o.observe(grid, { childList: true, subtree: true, characterData: true }); });
      document.dispatchEvent(new Event('visibilitychange'));
      await done;
    }
    return n;
  });
  check('sky sentence is not rewritten by an unchanged refresh', mutations === 0, `${mutations} mutations`);
  const links = await page.$$eval('.sky-tile .sky-open', (as) => as.map((a) => a.getAttribute('href')));
  check('each sky tile opens its reading in the Viewer',
    links.join(' ') === '/viewer/#d=inst.kp /viewer/#d=inst.speed /viewer/#d=inst.xray /viewer/#t=report', links.join(' '));
  // a stand-in Viewer page: this checks where the splash goes, not the Viewer
  await page.route('**/viewer/', (r) => r.fulfill({ contentType: 'text/html', body: '<!doctype html><title>Viewer</title>' }));
  await page.locator('#sky-wind').click({ position: { x: 140, y: 80 } });
  await page.waitForURL(/\/viewer\//, { timeout: 15000 }).catch(() => {});
  check('a sky tile is the link, in every state', page.url().endsWith('/viewer/#d=inst.speed'), page.url());
  await ctx.close();
}

{
  // Without script the page is whole and still: nothing that needs script
  // shows, every idea's notes stand open with the last row full, each Sky tile
  // says its reading needs script and still opens it in the Viewer, and the
  // films are links to their files
  for (const viewport of [{ width: 390, height: 844 }, { width: 1440, height: 900 }]) {
    const { ctx, page } = await newPage({ viewport, javaScriptEnabled: false });
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
    const r = await page.evaluate(() => {
      const shown = (el) => { const b = el.getBoundingClientRect(); return b.width > 0 && b.height > 0 && getComputedStyle(el).visibility !== 'hidden'; };
      const grid = document.getElementById('ideas-grid').getBoundingClientRect();
      const tiles = [...document.querySelectorAll('.sky-tile')];
      return {
        controls: [...document.querySelectorAll('button, input, [role="button"]')].filter(shown).map((el) => el.className || el.id),
        notes: [...document.querySelectorAll('.idea-more')].filter(shown).length, ideas: document.querySelectorAll('.idea').length,
        gap: Math.round(grid.right - document.querySelector('.idea:last-child').getBoundingClientRect().right),
        sentence: document.getElementById('sky-sentence').innerText,
        tiles: tiles.every((t) => t.querySelector('.sky-detail').innerText === 'needs JavaScript' && !shown(t.querySelector('.sky-reading'))
          && t.querySelector('a.sky-open').getAttribute('href').startsWith('/viewer/')),
        films: [...document.querySelectorAll('a.work-open[data-film]')].every((a) => a.getAttribute('href').endsWith('.mp4')),
        hScroll: document.documentElement.scrollWidth > innerWidth + 1,
      };
    });
    const at = viewport.width;
    check(`no script, ${at}: no control that needs it shows`, r.controls.length === 0, r.controls.join(', '));
    check(`no script, ${at}: every idea open, the last row full`, r.notes === r.ideas && r.gap <= 1, `${r.notes}/${r.ideas}, ${r.gap} px short`);
    check(`no script, ${at}: Sky says its readings need script, and each tile opens the Viewer`, /need JavaScript/.test(r.sentence) && r.tiles && !/Reading the sky/.test(r.sentence));
    check(`no script, ${at}: films link to their files, and nothing scrolls sideways`, r.films && !r.hScroll);
    await ctx.close();
  }
  // A card's link is its document's own page, which needs no script either:
  // a whole page in standards mode, titled, its provenance above the text,
  // the way home and into the reader, and every asset it asks for found
  const { ctx, page } = await newPage({ viewport: { width: 390, height: 844 }, javaScriptEnabled: false });
  const missing = [];
  page.on('response', (r) => { if (new URL(r.url()).origin === new URL(BASE).origin && r.status() >= 400) missing.push(`${r.status()} ${new URL(r.url()).pathname}`); });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.locator('.archive-card a[data-doc="wrf"]').click();
  await page.waitForLoadState('networkidle');
  const doc = await page.evaluate(() => ({
    mode: document.compatMode, title: document.title, home: !!document.querySelector('a[href="/"]'), reader: !!document.querySelector('a[href="/#doc/wrf"]'),
    canonical: document.querySelector('link[rel="canonical"]')?.href, prov: document.querySelector('.archive-provenance .prov-status')?.textContent || '',
    font: getComputedStyle(document.querySelector('.archive-md p')).fontFamily, hScroll: document.documentElement.scrollWidth > innerWidth + 1,
  }));
  check('no script: a card opens its document\'s own page, whole', page.url().endsWith('/archive/wrf.html') && doc.mode === 'CSS1Compat'
    && /^Waste Reclamation Fund/.test(doc.title) && doc.home && doc.reader && doc.canonical?.endsWith('/archive/wrf.html')
    && /not enacted/.test(doc.prov) && /DM Sans/.test(doc.font) && !doc.hScroll && missing.length === 0, JSON.stringify({ ...doc, missing }));
  const lost = await (await page.request.get(BASE + '/404.html')).text();
  check('the 404 page leads home, to the Viewer and to the field guide', /^<!doctype html>/i.test(lost)
    && ['href="/"', 'href="/viewer/"', 'href="/field-guide/"'].every((h) => lost.includes(h)));
  await ctx.close();
}

{
  // Every reader hears a badge's word, not its letter, and sees it at 10 px or
  // more; the quiet inks hold 5:1 by day and by night; the page speaks only
  // for search and the copy buttons; and forced colours keep the script
  for (const colorScheme of ['light', 'dark']) {
    const { ctx, page } = await newPage({ colorScheme });
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
    const r = await page.evaluate(() => {
      const rgb = (c) => { const d = document.createElement('i'); d.style.color = c; document.body.append(d); const v = getComputedStyle(d).color.match(/\d+/g).map(Number); d.remove(); return v; };
      const lum = ([r, g, b]) => [r, g, b].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }).reduce((a, v, i) => a + v * [0.2126, 0.7152, 0.0722][i], 0);
      const ratio = (a, b) => { const x = lum(rgb(a)), y = lum(rgb(b)); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
      const v = (k) => getComputedStyle(document.documentElement).getPropertyValue(k).trim();
      const badges = [...document.querySelectorAll('.badge')];
      return {
        inks: Math.min(...['--ink-3', '--gold-2'].flatMap((k) => ['--bg', '--bg-2'].map((g) => ratio(v(k), v(g))))),
        focus: Math.min(ratio(v('--focus'), v('--bg')), ratio(v('--focus'), v('--bg-2'))),
        mute: badges.filter((b) => !(b.getAttribute('aria-hidden') === 'true' && b.title && (b.nextElementSibling?.matches('.visually-hidden') || b.closest('.legend-item, .sky-note')))).length,
        small: badges.filter((b) => parseFloat(getComputedStyle(b).fontSize) < 10).length, n: badges.length,
        voices: [...document.querySelectorAll('[aria-live]')].map((el) => el.id).sort().join(' '),
      };
    });
    check(`${colorScheme}: the quiet inks hold 5:1 and the focus ring 3:1`, r.inks >= 5 && r.focus >= 3, `${r.inks.toFixed(2)}, ${r.focus.toFixed(2)}`);
    check(`${colorScheme}: every badge says its word and is 10 px or more`, r.n > 20 && r.mute === 0 && r.small === 0, `${r.mute} mute, ${r.small} small of ${r.n}`);
    if (colorScheme === 'light') check('the page speaks only for search and the copy buttons', r.voices === 'archiveStatus search-status seedStatus', r.voices);
    await page.emulateMedia({ colorScheme, forcedColors: 'active' });
    const kept = await page.evaluate(() => [...document.querySelectorAll('.idea-glyph.glyph, .key-row .glyph, .stage-no .num, .ga-ink')]
      .every((g) => { const cs = getComputedStyle(g); return cs.forcedColorAdjust === 'none' && !/rgba\(0, 0, 0, 0\)|transparent/.test(cs.backgroundColor); }));
    check(`${colorScheme}: forced colours keep the script`, kept);
    await ctx.close();
  }
}

{
  // A finger gets 44 px everywhere: the bar keeps its height, so its controls
  // answer a tap just outside the box drawn; the seed's copy button and the
  // reader's controls grow, and the reader's row stays under 56 px. The
  // reader's wide code takes the focus, so the keys can scroll it.
  const { ctx, page } = await newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.evaluate(() => scrollTo(0, innerHeight * 1.5));
  await page.waitForTimeout(300);
  const box = await page.evaluate(() => { const t = document.getElementById('themeToggle').getBoundingClientRect(), i = document.getElementById('siteSearch').getBoundingClientRect(); return { t: [t.left - 4, t.top - 4], i: [i.left + 30, i.top - 4] }; });
  await page.touchscreen.tap(...box.i);
  const field = await page.evaluate(() => document.activeElement?.id);
  await page.evaluate(() => document.activeElement?.blur());
  await page.touchscreen.tap(...box.t);
  await page.waitForTimeout(150);
  check('touch: the bar\'s controls answer a tap beside their boxes', field === 'siteSearch' && await page.evaluate(() => document.documentElement.dataset.theme === 'dark'), field);
  const seed = await page.locator('#seedCopy').boundingBox();
  check('touch: the seed\'s copy button is 44 px', seed.width >= 44 && seed.height >= 44, `${seed.width}x${seed.height}`);
  await page.goto(BASE + '/#doc/earth-star-skill', { waitUntil: 'networkidle' });
  await page.waitForSelector('.archive-md pre');
  const reader = await page.evaluate(() => ({ row: document.querySelector('.archive-panel-header').getBoundingClientRect().height,
    small: [...document.querySelectorAll('.archive-panel-header button')].filter((b) => b.offsetParent && b.getBoundingClientRect().height < 44).length,
    wide: [...document.querySelectorAll('.archive-md pre, .archive-md table')].filter((el) => el.scrollWidth > el.clientWidth + 1).map((el) => el.tabIndex),
  }));
  check('touch: the reader\'s controls are 44 px in a row under 56', reader.row <= 56 && reader.small === 0, `${reader.row}px, ${reader.small} small`);
  check('the reader\'s wide code and tables take the focus', reader.wide.length > 0 && reader.wide.every((t) => t === 0), reader.wide.join(','));
  await ctx.close();
}

{
  const { ctx, page } = await newPage({ reducedMotion: 'reduce' });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.mouse.click(700, 450);
  await page.waitForTimeout(900);
  check('reduced motion: no butterflies', await page.locator('.butterfly-living').count() === 0);
  check('reduced motion: sprout reaches footer', await page.locator('.emoji-footer').count() === 1);
  // the system has stilled the ground already: the switch says so, and holds
  const still = page.locator('.wf-end .wf-still');
  await still.click({ force: true }); // (aria-disabled: a press changes nothing)
  check('reduced motion: the Still switch shows pressed, and why', await still.getAttribute('aria-pressed') === 'true'
    && await still.getAttribute('aria-disabled') === 'true' && /reduced motion/.test(await still.getAttribute('title'))
    && !(await page.evaluate(() => document.documentElement.hasAttribute('data-still'))));
  // The automata ground renders its full cascade at once under reduced motion
  check('automata ground paints', await page.evaluate(() => {
    const c = document.getElementById('bgAutomaton');
    const d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data;
    let lit = 0; for (let i = 3; i < d.length; i += 4) if (d[i] > 0) lit++;
    return lit > 1000;
  }));
  await ctx.close();
}

{
  // Day and night: the toggle flips the scheme, the choice survives a reload,
  // and the page ground actually changes (tan by day, dark green by night)
  const { ctx, page } = await newPage({ colorScheme: 'light' });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  const ground = () => page.evaluate(() => getComputedStyle(document.documentElement).backgroundColor);
  const day = await ground();
  await page.locator('#themeToggle').click();
  await page.waitForTimeout(100);
  const night = await ground();
  check('theme toggle switches scheme', await page.evaluate(() => document.documentElement.dataset.theme) === 'dark' && day !== night, `${day} → ${night}`);
  await page.reload({ waitUntil: 'networkidle' });
  check('theme choice persists', await page.evaluate(() => document.documentElement.dataset.theme) === 'dark');
  check('no coloured side bars', await page.evaluate(() => {
    let n = 0;
    for (const el of document.querySelectorAll('.seed, .idea, .sky-tile, .archive-card, .archive-provenance')) {
      const cs = getComputedStyle(el);
      if (parseFloat(cs.borderLeftWidth) > 1.5 || cs.borderLeftColor !== cs.borderRightColor) n++;
    }
    return n === 0;
  }));
  await ctx.close();
}

{
  // The funnel: painting as fixed ground, the seedbed, the Gomen pictograms
  const { ctx, page } = await newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  check('painting is a fixed background', await page.evaluate(() => getComputedStyle(document.querySelector('.hero')).position === 'fixed'));
  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.5));
  await page.waitForTimeout(300);
  check('content scrolls over the painting', await page.evaluate(() =>
    document.querySelector('.hero').getBoundingClientRect().top === 0 &&
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sink')) > 0.9));

  check('five gomen figures, each in three layers', await page.locator('.scale .gomen-art').count() === 5
    && await page.locator('.scale .gomen-art .ga-wash, .scale .gomen-art .ga-ink, .scale .gomen-art .ga-gold').count() === 15);
  // Every glyph on the page is a mask over a generated file; each must resolve
  const masks = await page.evaluate(() => [...new Set([...document.querySelectorAll('[style*="--m"]')]
    .map((el) => (el.getAttribute('style').match(/url\(([^)]+)\)/) || [])[1]).filter(Boolean))]);
  const dead = [];
  for (const m of masks) { const r = await page.request.get(BASE + '/' + m); if (!r.ok()) dead.push(`${r.status()} ${m}`); }
  check('every script glyph resolves', masks.length >= 40 && dead.length === 0, dead.length ? dead.join(', ') : `${masks.length} glyph files`);
  check('the script key lists its radicals', await page.locator('.key-row li').count() === 10);
  check('idea cards carry drawn glyphs', await page.locator('.idea .idea-glyph.glyph').count() === await page.locator('.idea').count());
  await page.locator('.gomen-pic').nth(1).click();
  check('a tapped gomen wakes', await page.locator('.gomen-pic.is-awake').count() === 1);

  // The ground is alive: a few seconds apart, the field is not the same picture
  const snap = () => page.evaluate(() => {
    const c = document.getElementById('bgAutomaton');
    const d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data;
    let hsh = 0; for (let i = 3; i < d.length; i += 4) hsh = (hsh * 31 + d[i]) | 0;
    return hsh;
  });
  const g1 = await snap();
  await page.waitForTimeout(4000);
  check('the ground keeps changing', (await snap()) !== g1);
  check('no playable bed left on the page', await page.locator('#seedbed').count() === 0);
  await ctx.close();
}

console.log(results.join('\n'));
console.log('\n--- errors ---');
console.log(errors.length ? errors.join('\n') : '(none)');
await browser.close();
process.exit(results.some(r => r.startsWith('FAIL')) || errors.length ? 1 : 0);
