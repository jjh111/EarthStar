// A long full-page capture cut into columns, side by side, so a whole page
// can be read in one image.
//
//   node test/ux/strip.mjs <full-page image> <out.jpg> [column width 600] [column height 1500]
import sharp from 'sharp';

const [src, out, colW = 600, colH = 1500] = process.argv.slice(2);
const W = +colW, H = +colH;
const { data, info } = await sharp(src).resize(W).toBuffer({ resolveWithObject: true });
const n = Math.ceil(info.height / H);
const parts = [];
for (let i = 0; i < n; i++) {
  const top = i * H, height = Math.min(H, info.height - top);
  parts.push({ input: await sharp(data).extract({ left: 0, top, width: W, height }).toBuffer(), left: i * (W + 10), top: 0 });
}
await sharp({ create: { width: n * (W + 10) - 10, height: H, channels: 3, background: '#141414' } }).composite(parts).jpeg({ quality: 80 }).toFile(out);
console.log(`${out}: ${n} columns`);
