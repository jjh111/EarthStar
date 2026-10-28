// Before and after, side by side: one row per breakpoint, each row the
// screenshot and its colour map from two runs of ux.mjs.
//
//   node test/ux/compare.mjs <before dir> <after dir> <viewer|splash> <out.jpg> [phone,desktop,...]
import sharp from 'sharp';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { BREAKPOINTS } from './ux.mjs';

const [before, after, surface, out, only] = process.argv.slice(2);
const ROW = 420, GAP = 8, BG = '#141414';
const rows = BREAKPOINTS.filter((b) => !only || only.split(',').includes(b.name));

const cells = [];
let width = 0, top = 0;
for (const bp of rows) {
  let left = 0;
  for (const file of [join(before, `${surface}-${bp.name}.png`), join(before, `${surface}-${bp.name}-map.png`),
    join(after, `${surface}-${bp.name}.png`), join(after, `${surface}-${bp.name}-map.png`)]) {
    if (!existsSync(file)) continue;
    const w = Math.round(ROW * bp.width / bp.height);
    cells.push({ input: await sharp(file).resize(w, ROW).toBuffer(), left, top });
    left += w + GAP;
  }
  width = Math.max(width, left - GAP);
  top += ROW + GAP;
}
await sharp({ create: { width, height: top - GAP, channels: 3, background: BG } }).composite(cells).jpeg({ quality: 78 }).toFile(out);
console.log(`${out}: ${rows.length} rows, ${width}×${top - GAP}`);
