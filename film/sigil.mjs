// The clover ankh: the "t" of STAR in the Earth Star logo, lifted out on its
// own (a flood fill from its stem through the logo's alpha), for the centre of
// the black hole in "the loom, lifted".
//
//   node film/sigil.mjs        → film/clover-ankh.png (white, on transparency)
import sharp from 'sharp';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'Assets', 'EarthStar Logo JH 2025 w.png'), OUT = join(ROOT, 'film', 'clover-ankh.png');
const SEED = [2092, 1040];   // a pixel in the stem

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height, A = (x, y) => data[(y * W + x) * 4 + 3];
const seen = new Uint8Array(W * H), stack = [SEED];
let x0 = W, y0 = H, x1 = 0, y1 = 0;
while (stack.length) {
  const [x, y] = stack.pop();
  if (x < 0 || y < 0 || x >= W || y >= H) continue;
  const k = y * W + x;
  if (seen[k] || A(x, y) < 40) continue;
  seen[k] = 1; x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
  stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
}
// keep the shape and its antialiased rim: faint pixels within two of a kept one
const pad = 24, cw = x1 - x0 + 1 + 2 * pad, ch = y1 - y0 + 1 + 2 * pad, out = Buffer.alloc(cw * ch * 4);
const near = (x, y) => { for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) { const xx = x + dx, yy = y + dy; if (xx >= 0 && yy >= 0 && xx < W && yy < H && seen[yy * W + xx]) return true; } return false; };
for (let y = Math.max(0, y0 - pad); y <= Math.min(H - 1, y1 + pad); y++) for (let x = Math.max(0, x0 - pad); x <= Math.min(W - 1, x1 + pad); x++) {
  if (!near(x, y)) continue;
  const i = ((y - y0 + pad) * cw + (x - x0 + pad)) * 4;
  out[i] = out[i + 1] = out[i + 2] = 255; out[i + 3] = data[(y * W + x) * 4 + 3];
}
await sharp(out, { raw: { width: cw, height: ch, channels: 4 } }).png().toFile(OUT);
console.log(`${OUT} · ${cw}×${ch}`);
