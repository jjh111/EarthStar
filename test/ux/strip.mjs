import sharp from 'sharp';
const [src, out, colW = 600, H = 1500] = process.argv.slice(2);
const img = sharp(src); const { width, height } = await img.metadata();
const scaled = await sharp(src).resize(+colW).toBuffer(); const h = Math.round(height * colW / width);
const n = Math.ceil(h / H); const parts = [];
for (let i = 0; i < n; i++) { const top = i * H, hh = Math.min(H, h - top); parts.push({ input: await sharp(scaled).extract({ left: 0, top, width: +colW, height: hh }).toBuffer(), left: i * (+colW + 10), top: 0 }); }
await sharp({ create: { width: n * (+colW + 10) - 10, height: +H, channels: 3, background: '#141414' } }).composite(parts).jpeg({ quality: 80 }).toFile(out);
console.log(n, 'columns');
