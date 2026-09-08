/**
 * Stage B: that the two halves agree, and that the app can read what the
 * mirror writes.
 *
 * The mirror is only ever consulted when NOAA is unreachable — which is to say,
 * on the one day it must work, nobody will be able to check it against
 * upstream. So it is checked here instead, and by the workflow before anything
 * is committed to the branch.
 */

import { describe, expect, it, vi } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { mirrorPath } from '../scripts/endpoints.mjs';
import { MIRROR_BASE, mirrorUrl } from '../src/data/fetch-json.js';
import { DirectSource } from '../src/data/direct-source.js';
import { SWPC_BASE } from '../src/data/swpc.js';

describe('the writer and the reader agree on where a copy lives', () => {
  const cases = [
    '/json/rtsw/rtsw_wind_1m.json',
    '/products/alerts.json',
    '/json/ovation_aurora_latest.json',
    '/text/discussion.txt',
  ];

  it.each(cases)('%s maps to the same place from both sides', (path) => {
    const upstream = `${SWPC_BASE}${path}`;
    // The app builds a URL; the workflow builds a file path. If these ever
    // disagree the fallback 404s, and it 404s only during an outage — the one
    // time nobody can debug it against upstream.
    expect(mirrorUrl(upstream)).toBe(`${MIRROR_BASE}/${mirrorPath(upstream)}`);
  });

  it('mirrors neither imagery nor anything off SWPC', () => {
    expect(mirrorUrl(`${SWPC_BASE}/products/animations/suvi-primary-304.json`)).toBeNull();
    expect(mirrorUrl(`${SWPC_BASE}/images/animations/suvi/primary/304/x.png`)).toBeNull();
    expect(mirrorUrl('https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/CMEAnalysis')).toBeNull();
    expect(mirrorPath(`${SWPC_BASE}/products/animations/lasco-c2.json`)).toBeNull();
  });

  it('drops the query string, which is not part of a stored path', () => {
    expect(mirrorUrl(`${SWPC_BASE}/products/alerts.json?t=1`))
      .toBe(`${MIRROR_BASE}/swpc/products/alerts.json`);
  });
});

/**
 * Run against a real mirror directory:
 *   node scripts/mirror.mjs out && MIRROR_DIR=out npx vitest run test/mirror.test.ts
 *
 * The workflow does exactly this before it commits, so a snapshot the app
 * cannot parse never reaches the branch. Skipped when there is no directory to
 * point at, because it needs live output rather than a fixture — a fixture
 * would only ever prove that last week's schema still parses.
 */
const dir = process.env['MIRROR_DIR'];
describe.skipIf(!dir)('the app can read what the mirror wrote', () => {
  it('produces a complete snapshot from mirrored bytes alone', async () => {
    // Serve the mirror from disk and refuse everything else, so a lane that
    // quietly reached upstream instead cannot pass this test for the wrong
    // reason.
    const served: string[] = [];
    vi.stubGlobal('fetch', async (input: RequestInfo | URL) => {
      const url = String(input);
      if (!url.startsWith(SWPC_BASE)) throw new TypeError('blocked');
      const rel = mirrorPath(url);
      const file = rel ? join(dir!, rel) : null;
      if (!file || !existsSync(file)) throw new TypeError('not mirrored');
      served.push(rel!);
      return new Response(readFileSync(file, 'utf8'), { status: 200 });
    });

    const env = await new DirectSource().fetchNow();
    vi.unstubAllGlobals();

    expect(served.length).toBeGreaterThan(5);
    // The readings a reader would actually be looking at during an outage.
    expect(env.data.solar_wind?.speed).toBeGreaterThan(100);
    expect(env.data.solar_wind?.bz_gsm).not.toBeNull();
    expect(env.data.kp?.estimated_kp).not.toBeNull();
    expect(env.data.xray?.flux_long).toBeGreaterThan(0);
    // Timestamps must be NOAA's own, not the moment we copied them.
    expect(Date.parse(env.data.solar_wind!.time)).toBeLessThanOrEqual(Date.now());

    // And they must be *recent*. This is the assertion that catches a trim
    // which kept the wrong end of a newest-first feed: the mirror stays
    // well-formed, the manifest still says 0 failed, and the only symptom is
    // that every reading is a day old. See test/trim.test.ts.
    const ageH = (Date.now() - Date.parse(env.data.solar_wind!.time)) / 3.6e6;
    expect(ageH).toBeLessThan(2);
  });

  it('keeps the sunspot record whole, so the century-scale claim stays true', () => {
    const f = join(dir!, 'swpc/json/solar-cycle/observed-solar-cycle-indices.json');
    const rows = JSON.parse(readFileSync(f, 'utf8')) as Array<Record<string, unknown>>;
    expect(rows.length).toBeGreaterThan(3000);
    expect(String(rows[0]!['time-tag'])).toMatch(/^17\d\d-/);
  });

  it('records its own age separately from the data’s', () => {
    const m = JSON.parse(readFileSync(join(dir!, 'manifest.json'), 'utf8'));
    expect(Date.now() - Date.parse(m.mirrored_at)).toBeLessThan(3600_000);
    expect(m.failed).toBe(0);
    expect(m.unchecked).toEqual([]);
  });
});
