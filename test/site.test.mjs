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
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('requestfailed', r => errors.push('reqfail: ' + r.url()));
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
  const cell = await page.locator('.archive-md td').nth(1).textContent();
  check('skill doc taxonomy table renders', cell.trim() === 'Empirical', cell.trim());
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

  await page.locator('#archiveSearch').scrollIntoViewIfNeeded();
  await page.locator('#archiveSearch').fill('datacenter');
  await page.waitForTimeout(600);
  check('search filters', await page.locator('.archive-card').count() === 1);
  await page.locator('#archiveSearch').fill('veracity');
  await page.waitForTimeout(800);
  check('content search (lazy index)', await page.locator('.archive-card').count() >= 1);

  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  check('garden persists', await page.locator('.emoji-footer').count() > 0);

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
  const { ctx, page } = await newPage({ reducedMotion: 'reduce' });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.mouse.click(700, 450);
  await page.waitForTimeout(900);
  check('reduced motion: no butterflies', await page.locator('.butterfly-living').count() === 0);
  check('reduced motion: sprout reaches footer', await page.locator('.emoji-footer').count() === 1);
  await ctx.close();
}

console.log(results.join('\n'));
console.log('\n--- errors ---');
console.log(errors.length ? errors.join('\n') : '(none)');
await browser.close();
process.exit(results.some(r => r.startsWith('FAIL')) || errors.length ? 1 : 0);
