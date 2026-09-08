/**
 * The outage drill: load the page with NOAA blocked at the network, and see
 * what a reader would see.
 *
 * Stage B is only ever exercised on the day upstream is down — which is the
 * one day nobody can check it against upstream. So it is rehearsed instead.
 * The drill blocks every request to services.swpc.noaa.gov at the browser and
 * asserts the page still carries live-looking readings, that they came from
 * the mirror, and that the page says so.
 *
 * It has already earned its keep: the first mirror trimmed `rtsw_wind_1m.json`
 * with `slice(-N)` on a feed SWPC publishes newest-first, so the copy held
 * yesterday. Every automated signal was green — the manifest said `0 failed`,
 * the JSON was well-formed, the app parsed it without complaint. The only
 * symptom was the wind reading 18.9 hours old on this screen.
 *
 *   npm run build && npm run preview &
 *   CHROME="/path/to/Chrome" npm run drill
 */

import { chromium } from 'playwright-core';

const URL_ = process.env['DRILL_URL'] ?? 'http://localhost:4173/viewer/';
/** Every reading must be fresher than this, or the mirror is holding stale rows. */
const MAX_AGE_H = 3;

const browser = await chromium.launch({ executablePath: process.env['CHROME'] });
// A fresh context every run: a warm HTTP cache will happily serve the *last*
// mirror and make a broken one look fine.
const ctx = await browser.newContext({ viewport: { width: 1680, height: 940 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();

let blocked = 0;
const fromMirror = [];
await page.route('**://services.swpc.noaa.gov/**', (r) => { blocked++; return r.abort('connectionfailed'); });
page.on('response', (r) => {
  if (r.url().includes('/EarthStar/data/v1/')) fromMirror.push(r.url().split('/v1/')[1]);
});

await page.goto(URL_, { waitUntil: 'commit' });
await page.waitForTimeout(Number(process.env['DRILL_WAIT'] ?? 18_000));

const status = (await page.textContent('.status'))?.trim() ?? '';
const report = await page.evaluate(() => {
  const el = document.querySelector('#margin-body');
  return el ? el.textContent.slice(0, 400) : '';
});
const ages = await page.$$eval('#instruments .tile', (els) =>
  els.map((e) => e.innerText.replace(/\n/g, ' · ')));

console.log(`upstream requests blocked : ${blocked}`);
console.log(`served from the mirror    : ${fromMirror.length}`);
console.log(`status line               : ${status}`);
for (const a of ages) console.log(`  ${a}`);

if (process.env['DRILL_SHOT']) await page.screenshot({ path: process.env['DRILL_SHOT'] });
await browser.close();

const problems = [];
if (blocked === 0) problems.push('nothing was blocked — the drill did not run');
if (fromMirror.length === 0) problems.push('nothing came from the mirror');
if (!/mirror \(stage B\)/.test(status)) problems.push(`the page does not say it is on the mirror: "${status}"`);
if (!/\d/.test(report)) problems.push('the situation report carries no values');

// The assertion that catches a mirror holding the wrong end of a feed: it stays
// well-formed and parses cleanly, and only the ages give it away.
const stale = ages.filter((a) => {
  const m = /(\d+(?:\.\d+)?) h\b/.exec(a);
  return m && Number(m[1]) > MAX_AGE_H;
});
if (stale.length) problems.push(`${stale.length} reading(s) older than ${MAX_AGE_H} h:\n    ${stale.join('\n    ')}`);

if (problems.length) {
  console.error(`\nDRILL FAILED\n  - ${problems.join('\n  - ')}`);
  process.exit(1);
}
console.log('\nDrill passed: NOAA unreachable, the page still reads, and it says where from.');
