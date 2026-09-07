// Accessibility audit — axe-core against the built Viewer, at a desktop and a
// phone viewport, on every tab.
//
//   node scripts/a11y.mjs
//
// Requires a static server on the repo root at 127.0.0.1:5199 (so that
// /viewer/ resolves exactly as GitHub Pages serves it) and CHROME pointing at
// a Chromium binary. Upstream feeds are replayed from a recorded set when one
// is present, because the audit needs the panel populated: an empty panel has
// no colour contrast to check and no links to name.
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const SC='/private/tmp/claude-501/-Users-johnhanacek-Documents-GitHub-EarthStar/d83fe656-023a-4511-a2c5-4518ce5f2085/scratchpad';
const R = process.env.REPLAY_DIR || (SC+'/replay');
const AXE = fs.readFileSync(new URL('../node_modules/axe-core/axe.min.js', import.meta.url), 'utf8');
let FAILED = false;
const b = await chromium.launch({ executablePath: process.env.CHROME, args:['--no-sandbox'] });

async function run(name, viewport) {
  const p = await b.newPage({ viewport, deviceScaleFactor: 1 });
  if (fs.existsSync(SC+'/frame_suvi-primary-304.png')) {
    await p.route('**://services.swpc.noaa.gov/images/**', r =>
      r.fulfill({ status:200, contentType:'image/png', headers:{'access-control-allow-origin':'*'},
        body: fs.readFileSync(SC+'/frame_suvi-primary-304.png') }));
  }
  await p.route('**://services.swpc.noaa.gov/**', route => {
    const u = new URL(route.request().url());
    const f = R + '/' + u.pathname.replace(/^\//,'').replace(/\.(json|txt)$/,'').replace(/\//g,'_')
            + (u.pathname.endsWith('.txt') ? '.txt' : '.json');
    if (fs.existsSync(f)) return route.fulfill({ status:200, contentType: f.endsWith('.txt')?'text/plain':'application/json',
      headers:{'access-control-allow-origin':'*'}, body: fs.readFileSync(f) });
    return route.abort();
  });
  if (fs.existsSync(R+'/donki_cmeanalysis.json')) {
    await p.route('**://kauai.ccmc.gsfc.nasa.gov/**', r =>
      r.fulfill({ status:200, contentType:'application/json', headers:{'access-control-allow-origin':'*'},
        body: fs.readFileSync(R+'/donki_cmeanalysis.json') }));
  }
  for (const h of ['fonts.googleapis.com','fonts.gstatic.com','api.nasa.gov'])
    await p.route(`**://${h}/**`, r=>r.abort());

  await p.goto('http://127.0.0.1:5199/viewer/', { waitUntil:'commit' });
  await p.waitForTimeout(11000);
  await p.addScriptTag({ content: AXE });
  const scan = async (label) => {
    const res = await p.evaluate(async () => {
      const r = await window.axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a','wcag2aa','wcag21a','wcag21aa','best-practice'] },
      });
      return r.violations.map(v => ({
        id: v.id, impact: v.impact, help: v.help, n: v.nodes.length,
        sample: v.nodes.slice(0,3).map(n => ({ target: n.target.join(' '), summary: (n.failureSummary||'').split('\n').slice(0,3).join(' | ') })),
      }));
    });
    console.log(`  ${label}: ${res.length ? res.length + ' violation types' : 'clean'}`);
    for (const v of res) {
      console.log(`    [${v.impact}] ${v.id} (${v.n}) — ${v.help}`);
      for (const s of v.sample) console.log(`        ${s.target}\n          ${s.summary}`);
    }
    return res.length;
  };
  console.log(`\n=== ${name} (${viewport.width}x${viewport.height}) ===`);
  let total = await scan('Now');
  for (const t of ['Ahead','Sun','Sources','Checks']) {
    await p.evaluate((n) => {
      const b = [...document.querySelectorAll('[role=tab]')].find(x => x.textContent.trim() === n);
      b?.click();
    }, t);
    await p.waitForTimeout(t === 'Checks' ? 16000 : 6000);
    total += await scan(t);
  }
  // And a body detail, opened from a tile rather than the tab strip.
  await p.evaluate(() => document.getElementById('tile-kp')?.click());
  await p.waitForTimeout(800);
  total += await scan('tile detail');
  console.log(`  TOTAL violations: ${total}`);
  if (total > 0) FAILED = true;
  await p.close();
}
await run('desktop', { width: 1680, height: 940 });
await run('phone', { width: 375, height: 812 });
await b.close();
if (FAILED) { console.error('\naccessibility violations found'); process.exitCode = 1; }
