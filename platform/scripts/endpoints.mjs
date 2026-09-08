/**
 * The catalogue of upstream URLs the Viewer uses — *derived from the source*,
 * never maintained beside it.
 *
 * Both `health.mjs` and `mirror.mjs` read it, so a new endpoint is watched and
 * mirrored without anyone remembering to list it twice. A template placeholder
 * the substitution table does not know is reported rather than skipped: the one
 * outcome a catalogue must never have is silence.
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

export const SWPC = 'https://services.swpc.noaa.gov';
export const DONKI = 'https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get';

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith('.ts') && !name.includes('.test.')) out.push(p);
  }
  return out;
}

/** Returns `{ urls: string[], unchecked: string[] }`. */
export function discover(srcDir = new URL('../src/', import.meta.url).pathname) {
  const all = walk(srcDir).map((f) => readFileSync(f, 'utf8')).join('\n');

  /** SUVI/LASCO products, so `${spec.product}` fans out to the real ones. */
  const products = [...all.matchAll(/product:\s*'([^']+)'/g)].map((m) => m[1]);

  const SUBS = [
    [/\$\{(?:SWPC_|MIRROR_)?BASE\}/g, () => [SWPC]],
    [/\$\{DONKI_BASE\}/g, () => [DONKI]],
    [/\$\{spec\.product\}/g, () => products],
    // DONKI wants a start date; the app asks for the last week.
    [/\$\{start\.toISOString\(\)\.slice\(0, 10\)\}/g,
      () => [new Date(Date.now() - 7 * 864e5).toISOString().slice(0, 10)]],
  ];

  const expand = (raw) => {
    let forms = [raw];
    for (const [re, values] of SUBS) {
      const next = [];
      for (const f of forms) {
        if (!re.test(f)) { next.push(f); continue; }
        re.lastIndex = 0;
        for (const v of values()) next.push(f.replace(re, v));
      }
      forms = next;
    }
    return forms;
  };

  const raw = new Set();
  // Template literals beginning with a base placeholder and continuing with a path.
  for (const m of all.matchAll(/`(\$\{(?:SWPC_BASE|BASE|DONKI_BASE)\}\/[^`]*)`/g)) raw.add(m[1]);
  // Plain URLs with an actual path — a bare origin is a provenance label, not
  // an endpoint, and must not be probed as one.
  for (const m of all.matchAll(/'(https:\/\/services\.swpc\.noaa\.gov\/[^']+)'/g)) raw.add(m[1]);

  const urls = new Set();
  const unchecked = [];
  for (const r of raw) {
    for (const u of expand(r)) {
      if (u.includes('${')) unchecked.push(u);
      else urls.add(u);
    }
  }
  return { urls: [...urls].sort(), unchecked };
}

/**
 * Where the mirror keeps a copy, or null for what we deliberately do not
 * mirror. Must agree with `mirrorUrl()` in `src/data/fetch-json.ts`; a test
 * asserts they do.
 */
export function mirrorPath(url) {
  if (!url.startsWith(SWPC)) return null;
  const path = url.slice(SWPC.length).split('?')[0];
  if (path.startsWith('/images/') || path.includes('/animations/')) return null;
  return `swpc${path}`;
}
