/**
 * Vendor NASA Earth base imagery into public/ as WebP.
 *
 *   node scripts/vendor-earth.mjs [--cache-dir <dir>]
 *
 * Sources (both public domain, NASA):
 *   · Day — Blue Marble Next Generation, world.topo.bathy composite for
 *     December 2004 (`world.topo.bathy.200412.3x5400x2700.jpg`, 5400×2700,
 *     NASA GSFC Earth Observatory, imagerecords/73909). This is the BMNG
 *     "topography and bathymetry" month the Viewer quotes as the 2004
 *     composite; acquisition runs 2004-01 through 2004-12, composited with
 *     topography/bathymetry shading.
 *   · Night — Black Marble 2016 (`BlackMarble_2016_01deg.jpg`, 3600×1800,
 *     NASA GSFC Earth Observatory, imagerecords/144898): Suomi NPP VIIRS
 *     day/night band, the "at night" composite.
 *
 * Outputs (committed via public/ → ../viewer/):
 *   public/earth-day-4096.webp   4096×2048  desktop, target ≤ ~700 KB
 *   public/earth-day-2048.webp   2048×1024  phones, target ≤ ~250 KB
 *   public/earth-night-2048.webp 2048×1024  city lights, target ≤ ~300 KB
 *
 * Quality is stepped down until each file fits its target, so the numbers in
 * this header and the viewer/ payload budget (≤ 3 MB) hold without hand-tuning.
 */

import { mkdirSync, existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const DAY_URL =
  'https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg';
const NIGHT_URL =
  'https://eoimages.gsfc.nasa.gov/images/imagerecords/144000/144898/BlackMarble_2016_01deg.jpg';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(HERE, '..', 'public');
const CACHE = process.env['CACHE_DIR'] ?? '/private/tmp/earthstar-vendor-earth';

/** Pick the highest quality whose output stays under `targetBytes`. */
async function encodeUnder(input, resize, targetBytes, startQ = 82) {
  for (let q = startQ; q >= 40; q -= 4) {
    const buf = await sharp(input)
      .resize(resize.w, resize.h, { kernel: 'lanczos3' })
      .webp({ quality: q, effort: 6, smartSubsample: true })
      .toBuffer();
    if (buf.length <= targetBytes) return { buf, q };
  }
  throw new Error(`could not fit under ${targetBytes} bytes`);
}

async function fetchTo(cacheDir, url, name) {
  const file = path.join(cacheDir, name);
  if (existsSync(file)) {
    console.log(`cached: ${name}`);
    return file;
  }
  console.log(`fetching: ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(file, buf);
  return file;
}

mkdirSync(PUBLIC, { recursive: true });
mkdirSync(CACHE, { recursive: true });

const day = await fetchTo(CACHE, DAY_URL, 'bmng-day-200412.jpg');
const night = await fetchTo(CACHE, NIGHT_URL, 'black-marble-2016.jpg');

const jobs = [
  { in: day, out: 'earth-day-4096.webp', w: 4096, h: 2048, target: 700_000 },
  { in: day, out: 'earth-day-2048.webp', w: 2048, h: 1024, target: 250_000 },
  { in: night, out: 'earth-night-2048.webp', w: 2048, h: 1024, target: 300_000 },
];

for (const j of jobs) {
  const { buf, q } = await encodeUnder(j.in, { w: j.w, h: j.h }, j.target);
  const dest = path.join(PUBLIC, j.out);
  await writeFile(dest, buf);
  console.log(`${j.out}  ${j.w}×${j.h}  ${(buf.length / 1024).toFixed(0)} KB  (q${q})`);
}
