// Renders the Earth Star films frame by frame: each page draws render(t)
// deterministically, Playwright screenshots every frame, and ffmpeg encodes
// the frames with a score synthesised from sine waves (lavfi aevalsrc).
//
//   FF=/path/to/ffmpeg node film/render.mjs lifted          # the film
//   node film/render.mjs lifted --stills 4,21,56            # stills only
//
// CHROMIUM overrides the browser path; the 3D film needs WebGL, which runs
// on SwiftShader when there is no GPU (about 1.2 s a frame at 1080p).
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url)), ROOT = join(HERE, '..');
const CHROMIUM = process.env.CHROMIUM || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const FPS = 30;
const SCORES = {
  seed: (chime) => [
  '0.10*sin(2*PI*110*t)*(0.75+0.25*sin(2*PI*0.09*t))',
  '0.06*sin(2*PI*164.81*t)*(0.7+0.3*sin(2*PI*0.06*t+1))',
  '0.045*sin(2*PI*220*t)',
  '0.03*sin(2*PI*329.63*t)*(0.5+0.5*sin(2*PI*0.05*t+2))',
  chime(3.4, 880), chime(3.4, 1318.5, 0.04), chime(5.2, 659.26), chime(10.6, 987.77), chime(16.1, 880, 0.05),
  chime(16.7, 987.77, 0.045), chime(17.3, 1108.73, 0.045), chime(17.9, 1318.51, 0.045), chime(18.5, 1479.98, 0.045),
  chime(22.6, 659.26), chime(27.3, 880), chime(27.3, 1318.51, 0.05), chime(28.2, 1760, 0.03),
  ],
  loom: (chime) => [
  '0.09*sin(2*PI*110*t)*(0.75+0.25*sin(2*PI*0.08*t))',
  '0.055*sin(2*PI*164.81*t)*(0.7+0.3*sin(2*PI*0.05*t+1))',
  '0.04*sin(2*PI*220*t)',
  '0.035*sin(2*PI*277.18*t)*min(1,max(0,(t-38)/4))',
  '0.03*sin(2*PI*440*t)*(0.5+0.5*sin(2*PI*0.3*t))*min(1,max(0,(t-40)/3))',
  '0.06*sin(2*PI*150*t)*exp(-28*mod(t-1.2,0.72))*between(t,1.2,43.4)',
  '0.025*sin(2*PI*300*t)*exp(-40*mod(t-1.56,0.72))*between(t,1.56,43.4)',
  chime(1.3, 659.26, 0.04), chime(11.2, 659.26), chime(17.8, 739.99), chime(24.4, 880), chime(24.4, 1108.73, 0.035),
  chime(31.0, 987.77), chime(37.4, 1108.73), chime(41.0, 1318.51, 0.05), chime(41.6, 1760, 0.03),
  chime(44.4, 880), chime(44.4, 1108.73, 0.04), chime(44.4, 1318.51, 0.04),
  ],
  lifted: (chime) => [
  '0.09*sin(2*PI*110*t)*(0.75+0.25*sin(2*PI*0.08*t))',
  '0.05*sin(2*PI*164.81*t)*(0.7+0.3*sin(2*PI*0.05*t+1))*min(1,max(0,(t-9)/4))',
  '0.04*sin(2*PI*220*t)*min(1,max(0,(t-11)/4))',
  '0.06*sin(2*PI*55*t)*min(1,max(0,(t-45)/8))',
  '0.035*sin(2*PI*277.18*t)*min(1,max(0,(t-47)/5))',
  '0.028*sin(2*PI*440*t)*(0.5+0.5*sin(2*PI*0.3*t))*min(1,max(0,(t-52)/4))',
  '0.05*sin(2*PI*150*t)*exp(-28*mod(t-1.2,0.72))*between(t,1.2,44)',
  '0.02*sin(2*PI*300*t)*exp(-40*mod(t-1.56,0.72))*between(t,1.56,44)',
  chime(10.4, 440, 0.04), chime(10.9, 554.37, 0.04), chime(11.4, 659.26, 0.04), chime(11.9, 880, 0.04),
  chime(22.0, 659.26), chime(26.7, 739.99), chime(31.2, 880), chime(31.2, 1108.73, 0.03),
  chime(35.7, 987.77), chime(40.1, 1108.73), chime(43.0, 1318.51, 0.045),
  chime(55.6, 880), chime(55.6, 1108.73, 0.04), chime(55.6, 1318.51, 0.04), chime(56.4, 1760, 0.025),
  ],
};
const CHIMES = {
  seed: (t0, f, a = 0.07) => `${a}*sin(2*PI*${f}*t)*exp(-2.2*(t-${t0}))*gte(t,${t0})`,
  loom: (t0, f, a = 0.06) => `${a}*sin(2*PI*${f}*t)*exp(-1.8*(t-${t0}))*gte(t,${t0})`,
  lifted: (t0, f, a = 0.055) => `${a}*sin(2*PI*${f}*t)*exp(-1.6*(t-${t0}))*gte(t,${t0})`,
};
const FILMS = {
  seed: { page: 'seed.html', seconds: 30, out: 'earth-star-a-seed.mp4', title: 'Earth Star — a seed' },
  loom: { page: 'loom.html', seconds: 48, out: 'earth-star-the-loom.mp4', title: 'Earth Star — the loom' },
  lifted: { page: 'lifted.html', seconds: 60, out: 'earth-star-the-loom-lifted.mp4', title: 'Earth Star — the loom, lifted', gl: true },
};

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.png': 'image/png',
  '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.json': 'application/json', '.webp': 'image/webp', '.jpg': 'image/jpeg' };
function serve() {
  const srv = createServer(async (req, res) => {
    const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^([/\\])+/, '');
    try { const body = await readFile(join(ROOT, path)); res.writeHead(200, { 'content-type': MIME[extname(path)] || 'application/octet-stream' }); res.end(body); }
    catch { res.writeHead(404); res.end(); }
  });
  return new Promise((ok) => srv.listen(0, '127.0.0.1', () => ok(srv)));
}

const [name, flag, list] = process.argv.slice(2);
const film = FILMS[name];
if (!film) { console.log(`usage: node film/render.mjs <${Object.keys(FILMS).join('|')}> [--stills t1,t2,…]`); process.exit(1); }
const srv = await serve();
const args = film.gl ? ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] : [];
const browser = await chromium.launch({ executablePath: CHROMIUM, args });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on('pageerror', (e) => console.log('page error:', e.message));
await page.goto(`http://127.0.0.1:${srv.address().port}/film/${film.page}`);
await page.evaluate(() => window.ready);

if (flag === '--stills') {
  for (const t of (list || '0').split(',').map(Number)) {
    await page.evaluate((t) => render(t), t);
    const file = join(HERE, 'renders', `${name}-${String(t).replace('.', '_')}.jpg`);
    await page.screenshot({ path: file, type: 'jpeg', quality: 85 }); console.log(file);
  }
} else {
  const FF = process.env.FF || 'ffmpeg', S = film.seconds, N = FPS * S;
  const drone = SCORES[name](CHIMES[name]).join('+');
  const ff = spawn(FF, ['-y', '-loglevel', 'error',
    '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-f', 'lavfi', '-i', `aevalsrc='${drone}':s=48000:d=${S}`,
    '-filter_complex', `[1:a]lowpass=f=2400,afade=t=in:d=2.5,afade=t=out:st=${S - 2.5}:d=2.5,volume=0.9[a]`,
    '-map', '0:v', '-map', '[a]', '-c:v', 'libx264', '-preset', 'slow', '-crf', '21', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    '-c:a', 'aac', '-b:a', '160k', '-metadata', `title=${film.title}`, join(HERE, 'renders', film.out)], { stdio: ['pipe', 'inherit', 'inherit'] });
  const done = new Promise((ok, no) => ff.on('close', (c) => (c === 0 ? ok() : no(new Error('ffmpeg exited ' + c)))));
  const t0 = Date.now();
  for (let f = 0; f < N; f++) {
    await page.evaluate((t) => render(t), f / FPS);
    const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
    if (!ff.stdin.write(buf)) await new Promise((ok) => ff.stdin.once('drain', ok));
    if (f % 150 === 0) console.log(`frame ${f}/${N} · ${((Date.now() - t0) / 1000).toFixed(0)} s`);
  }
  ff.stdin.end(); await done;
  console.log(`${film.out} in ${((Date.now() - t0) / 1000).toFixed(0)} s`);
}
await browser.close(); srv.close();
