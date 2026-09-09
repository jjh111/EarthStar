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
  page.on('requestfailed', r => { if (!UPSTREAM.test(r.url())) errors.push('reqfail: ' + r.url()); });
  return { ctx, page };
}

{
  const { ctx, page } = await newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  check('title', (await page.title()).includes('Earth Star'));
  check('grid pre-rendered', await page.locator('.archive-card').count() >= 3);

  await page.locator('.archive-card').first().scrollIntoViewIfNeeded();
  await page.locator('.archive-card').first().click();
  await page.waitForSelector('.archive-panel.open');
  await page.waitForSelector('.archive-md h1, .archive-md h2');
  check('panel opens with content', true);
  check('no sprout from card click', await page.locator('.emoji-transient').count() === 0);
  check('provenance line', await page.locator('.archive-provenance').count() === 1);

  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(400);
  check('arrow nav', ((await page.locator('#archiveDocTitle').textContent()) || '').trim().length > 0);
  await page.keyboard.press('Escape');
  check('esc closes', await page.locator('.archive-panel.open').count() === 0);

  await page.goto(BASE + '/#doc/earth-star-skill', { waitUntil: 'networkidle' });
  await page.waitForSelector('.archive-panel.open');
  await page.waitForSelector('.archive-md table');
  const taxonomyCells = await page.locator('.archive-md td', { hasText: /^Empirical$/ }).count();
  check('skill doc taxonomy table renders', taxonomyCells === 1, `${taxonomyCells} cell(s) reading "Empirical"`);
  await page.keyboard.press('Escape');

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.mouse.click(700, 450);
  await page.waitForTimeout(300);
  check('body click plants', await page.locator('.emoji-transient, .butterfly-living').count() > 0);

  for (const y of [500, 560, 620]) await page.mouse.click(30, y);
  await page.waitForTimeout(1600);
  check('margin stars', await page.locator('.emoji-persistent').count() >= 3);
  check('constellation drawn', await page.locator('.constellation-line').count() >= 2);

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

  // Sky strip: every tile resolves to a real state; an error never shows a number
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

// Mock mode renders numbers and says so
{
  const { ctx, page } = await newPage();
  await page.goto(BASE + '/?mock=1', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const v = await page.locator('#sky-kp .sky-value').textContent();
  check('mock mode shows fixture value', /\d/.test(v), v);
  check('mock mode is labelled', await page.locator('#sky-now.is-mock').count() === 1);
  await ctx.close();
}

{
  const { ctx, page } = await newPage({ reducedMotion: 'reduce' });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.mouse.click(700, 450);
  await page.waitForTimeout(900);
  check('reduced motion: no butterflies', await page.locator('.butterfly-living').count() === 0);
  check('reduced motion: sprout reaches footer', await page.locator('.emoji-footer').count() === 1);
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

console.log(results.join('\n'));
console.log('\n--- errors ---');
console.log(errors.length ? errors.join('\n') : '(none)');
await browser.close();
process.exit(results.some(r => r.startsWith('FAIL')) || errors.length ? 1 : 0);
