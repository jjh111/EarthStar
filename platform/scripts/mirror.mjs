/**
 * Stage B — write Earth Star's own copy of every feed the Viewer reads.
 *
 * The Viewer fetches NOAA directly from the reader's browser, which is why it
 * needs no server. The cost of that is a single point of failure we do not
 * own: if `services.swpc.noaa.gov` goes down, or withdraws
 * `Access-Control-Allow-Origin: *`, every reading on the page goes dark at
 * once and there is nothing on our side to fall back to. This writes that
 * fallback.
 *
 * Two rules make it trustworthy:
 *
 *  1. **Byte-for-byte.** Payloads are stored under their own upstream paths and
 *     are never reshaped. The app's fallback is a URL swap; the same parsers
 *     run over the same bytes. A mirror that reinterpreted the data would be a
 *     second implementation to hold in agreement with the first, and the
 *     earliest divergence would be invisible to both.
 *  2. **Their timestamps, not ours.** Every record keeps the time NOAA
 *     observed it, so a reader on the mirror still sees the true age of the
 *     measurement and the page still calls it stale on schedule. The only
 *     thing the mirror can hide is *its own* age, which is why the manifest
 *     records that separately and `health.mjs` checks it.
 *
 * The one liberty taken is length: the 1-minute L1 files are seven days deep
 * and megabytes wide, and committing that every half hour would bloat the
 * repository for data nobody displays. Long arrays are cut to their newest
 * rows — a suffix, in the same schema, with any header row kept. Shortening is
 * not reinterpreting: every row that survives is the row upstream published.
 *
 *   node scripts/mirror.mjs <out-dir>
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { DONKI, SWPC, discover, mirrorPath } from './endpoints.mjs';
import { MAX_ROWS, trim } from './trim.mjs';

const OUT = process.argv[2] ?? 'mirror-out';
const ORIGIN = 'https://earthstar.space';

const { urls, unchecked } = discover();

/** Newest ISO-ish stamp in a payload — for the manifest, so a human can see at
 *  a glance whether a lane has quietly stopped moving. */
function newestStamp(text) {
  const m = text.match(/\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}/g);
  return m ? m.sort()[m.length - 1].replace(' ', 'T') + 'Z' : null;
}

async function fetchOnce(url) {
  const res = await fetch(url, { cache: 'no-store', headers: { Origin: ORIGIN } });
  if (res.status >= 500) throw new Error(`HTTP ${res.status}`);
  return res;
}

/** One retry, for a transport that gave no answer. A 404 is not retried: a
 *  renamed product is news, and the mirror must not paper over it. */
async function fetchRetrying(url) {
  try { return await fetchOnce(url); }
  catch { await new Promise((ok) => setTimeout(ok, 2000)); return fetchOnce(url); }
}

const entries = [];
let failed = 0;

for (const url of urls) {
  const rel = mirrorPath(url);
  if (!rel) continue;                       // imagery and DONKI are not mirrored
  const record = { url: url.replace(SWPC, '').replace(DONKI, 'DONKI'), path: rel };
  try {
    const res = await fetchRetrying(url);
    record.status = res.status;
    const text = await res.text();
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    let body = text;
    if (url.endsWith('.json')) {
      const { value, trimmed, archive, byTime } = trim(JSON.parse(text));  // throws on a bad body
      body = JSON.stringify(value);
      record.trimmed = trimmed;
      if (archive) record.archive = true;
      // Recorded because it is the difference between keeping today's rows and
      // keeping yesterday's, and the two look identical from outside.
      if (trimmed) record.selected_by = byTime ? 'timestamp' : 'position';
    }
    const dest = join(OUT, rel);
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, body);

    record.bytes = Buffer.byteLength(body);
    record.upstream_bytes = Buffer.byteLength(text);
    record.data_time = newestStamp(text);
    record.ok = true;
  } catch (e) {
    // A lane we could not copy is simply not written this run. The previous
    // copy stays on the branch and keeps its own timestamps, so it ages
    // honestly rather than being replaced by a hole.
    record.ok = false;
    record.error = e.message;
    failed++;
  }
  entries.push(record);
}

const manifest = {
  mirrored_at: new Date().toISOString(),
  note: 'Byte-for-byte copies of NOAA SWPC payloads, long arrays cut to their '
    + 'newest rows. Every record keeps upstream\'s own timestamps. Consulted by '
    + 'the Viewer only when NOAA itself is unreachable.',
  max_rows: MAX_ROWS,
  total: entries.length,
  failed,
  unchecked,
  files: entries,
};
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));

const kb = entries.filter((e) => e.ok).reduce((n, e) => n + e.bytes, 0) / 1024;
for (const e of entries) {
  console.log(`${e.ok ? 'ok  ' : 'FAIL'} ${String(e.bytes ?? 0).padStart(8)}B `
    + `${e.trimmed ? 'trimmed' : e.archive ? 'archive' : '       '} `
    + `${e.path}${e.error ? ` — ${e.error}` : ''}`);
}
console.log(`\n${entries.length} files · ${failed} failed · ${kb.toFixed(0)} KB total`);

// A run that copied nothing is a broken run, not an empty upstream.
process.exit(entries.length > 0 && failed === entries.length ? 1 : 0);
