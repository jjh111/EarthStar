/**
 * Screenshot rig — regenerates docs/screenshots/ and reports a real frame rate.
 * Not part of the build. Run against a live `npm run preview`:
 *
 *   npx vite preview --port 5190 &
 *   CHROME=/path/to/chrome node shoot.mjs
 *
 * `playwright-core` ships no browser, so point CHROME at any Chromium build
 * (an ms-playwright cache entry, or Chrome itself).
 */
import { chromium } from 'playwright-core';

const EXEC = process.env['CHROME'];
if (!EXEC) {
  console.error('Set CHROME to a Chromium executable. See the header of this file.');
  process.exit(1);
}
const BASE = process.env['BASE'] ?? 'http://localhost:5192/viewer/';
const OUT = 'docs/screenshots';

const browser = await chromium.launch({
  executablePath: EXEC,
  args: ['--enable-unsafe-swiftshader', '--use-gl=angle', '--enable-gpu'],
});
const ctx = await browser.newContext({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
page.on('console', m => { if (m.type() === 'error') console.log('  console error:', m.text()); });

async function settle(ms = 7000) { await page.waitForTimeout(ms); }

console.log('deck view...');
await page.goto(BASE, { waitUntil: 'networkidle' });
await settle();
const fps = await page.evaluate(() => new Promise(res => {
  let n = 0, t0 = performance.now();
  const tick = () => { if (++n < 120) requestAnimationFrame(tick); else res(1000 / ((performance.now() - t0) / n)); };
  requestAnimationFrame(tick);
}));
console.log('  measured fps:', fps.toFixed(1));
await page.screenshot({ path: `${OUT}/01-deck-view.png` });

console.log('magnetosphere view...');
await page.click('#view-shield');
await settle(4500);
await page.screenshot({ path: `${OUT}/07-magnetosphere.png` });
const shield = await page.evaluate(() => {
  const v = window.__viewer;
  return { lines: v.fieldLineStats, fps: +v.stats.fps.toFixed(1),
           standoff: v.now?.magnetopause?.standoff_re?.toFixed(2),
           bow: v.now?.magnetopause?.bow_shock_re?.toFixed(2) };
});
console.log('  shield:', JSON.stringify(shield));

console.log('deck with shield...');
await page.click('#view-deck');
await settle(4000);
await page.screenshot({ path: `${OUT}/01-deck-view.png` });

console.log('aurora over the pole...');
// Drive the camera to a high-latitude night-side vantage: the oval is a real
// forecast and at quiet Kp it is faint, so it needs a viewing angle that shows it.
await page.evaluate(() => {
  const v = window.__viewer;
  const g = v.geometryNow(new Date());
  const V = g.earthPos.constructor;
  const r = g.earthRadius;
  // Anti-sunward and well above the pole: night side, looking down on the oval.
  // Scene +Y is Earth's spin axis, so this looks down on the north polar
  // region, tilted onto the night side where the oval is not washed out.
  const pos = g.earthPos.clone()
    .add(new V(0, r * 4.0, 0))
    .addScaledVector(g.sunDir, -r * 2.2);
  v.rig.transitioning = false;
  v.rig.camera.position.copy(pos);
  v.rig.controls.target.copy(g.earthPos);
  v.rig.controls.update();
  v.setShieldVisible(false);   // the field-line cage would hide the oval
});
await settle(3000);
await page.screenshot({ path: `${OUT}/08-aurora.png` });
await page.evaluate(() => window.__viewer.setShieldVisible(true));

console.log('orbit view...');
await page.click('#view-orbit');
await settle(3500);
await page.screenshot({ path: `${OUT}/02-orbit-view.png` });

console.log('true scale...');
await page.click('#scale-toggle');
await settle(3000);
await page.screenshot({ path: `${OUT}/03-true-scale.png` });

console.log('provenance drawer...');
await page.click('#scale-toggle');
await page.click('#view-deck');
await settle(2500);
await page.evaluate(() => { document.querySelector('.drawer').open = true; });
await page.waitForTimeout(600);
await page.screenshot({ path: `${OUT}/04-provenance-drawer.png` });

console.log('verify page...');
await page.goto(`${BASE}verify.html`, { waitUntil: 'networkidle' });
await page.waitForTimeout(5000);
await page.screenshot({ path: `${OUT}/05-verify.png`, fullPage: true });

const stats = await page.evaluate(() => document.querySelector('.summary')?.textContent?.trim());
console.log('  verify summary:', stats);

console.log('mobile...');
const m = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const mp = await m.newPage();
await mp.goto(BASE, { waitUntil: 'networkidle' });
await mp.waitForTimeout(7000);
await mp.screenshot({ path: `${OUT}/06-mobile.png` });

await browser.close();
console.log('done. fps=' + fps.toFixed(1));
