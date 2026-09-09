/**
 * Upstream health — does every feed the Viewer depends on still answer?
 *
 * The Viewer has no server. Its freshness is entirely the freshness of ~30
 * public endpoints, and it degrades honestly when one dies: the lane shows
 * `no data · <error>`, the last good value ages visibly, nothing is
 * substituted. That is the right behaviour and it is also the problem — an
 * honest failure nobody is looking at is indistinguishable from no failure.
 * This is the thing that looks.
 *
 * The catalogue is *derived from the source*, never maintained beside it: the
 * script reads the URLs out of `src/**.ts`. Add an endpoint and it is checked
 * on the next run without anyone remembering to list it here. Use a template
 * placeholder the substitution table does not know, and the run reports the
 * URL as UNCHECKED and fails — silence is never an outcome.
 *
 *   node scripts/health.mjs           human-readable table
 *   node scripts/health.mjs --json    one JSON object, for CI
 *
 * Exit 0 only when every endpoint answered, sent a usable CORS header, and
 * parsed. Exit 1 otherwise.
 */

import { DONKI, SWPC, discover } from './endpoints.mjs';

/** The page itself, checked alongside the feeds it consumes. */
const DEPLOY = 'https://earthstar.space/viewer/';

/** Stage B's own manifest. The mirror is the one thing that can fail silently
 *  for weeks — nothing reads it until NOAA is already down. */
const MIRROR_MANIFEST =
  'https://raw.githubusercontent.com/jjh111/EarthStar/data/v1/manifest.json';

/**
 * A mirror older than this has genuinely stopped.
 *
 * The workflow asks for every thirty minutes. It does not get it: GitHub delays
 * scheduled workflows on public repositories, and the observed intervals over
 * five consecutive scheduled runs were 2.2, 2.5, 4.9, 5.4 and 4.1 hours —
 * median about four. The cron is a request, not a promise.
 *
 * Three hours was therefore a threshold the mirror breaches in normal
 * operation, which would have opened a standing issue reading "the mirror has
 * stopped" while it was running perfectly. That is the exact failure the
 * notifier exists to avoid: an alarm that is wrong sometimes gets muted, and a
 * muted alarm is worse than none because it is mistaken for coverage.
 *
 * Twelve hours clears the observed spread and still catches a real stop — a
 * disabled workflow, a broken push — within half a day. The mirror is a
 * fallback consulted only when NOAA is unreachable, and every record in it
 * keeps upstream's own timestamp, so a reader sees the true age of each
 * measurement however long ago the copy was taken.
 */
const MIRROR_STALE_H = 12;

const JSON_OUT = process.argv.includes('--json');

/**
 * Sent deliberately. Without an `Origin` header neither host returns
 * `Access-Control-Allow-Origin` at all, so a CORS assertion made from a bare
 * Node fetch is vacuous — it would pass on a server that had just switched
 * CORS off. Stage A works only because the browser is allowed to read these.
 */
const ORIGIN = 'https://earthstar.space';

/** A stamp older than this is worth a human's attention. Every feed in the
 *  catalogue that carries a timestamp publishes at least daily. */
const STALE_WARN_H = 24;

// ---------------------------------------------------------------- discovery

const { urls: catalogue, unchecked } = discover();
const urls = new Set(catalogue);

// ------------------------------------------------------------------ probing

/** Newest ISO-ish timestamp anywhere in a payload. Feeds disagree about which
 *  field is the time, and this only needs the age, not the schema. */
function newestStamp(text) {
  const m = text.match(/\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}/g);
  if (!m) return null;
  return m.sort()[m.length - 1].replace(' ', 'T') + 'Z';
}

/**
 * One retry, for network-level failures and 5xx only.
 *
 * A run of ~35 live fetches will occasionally lose one to a transient blip —
 * it happened while this script was being written. On a schedule that would
 * become a false alarm, and an alarm that is wrong sometimes gets muted, which
 * costs more than the check is worth. A 404 is not retried: a renamed product
 * is exactly the news we are here for.
 */
async function fetchOnce(url) {
  const res = await fetch(url, { cache: 'no-store', headers: { Origin: ORIGIN } });
  if (res.status >= 500) throw new Error(`HTTP ${res.status}`);
  return res;
}

async function fetchRetrying(url) {
  try {
    return await fetchOnce(url);
  } catch {
    await new Promise((ok) => setTimeout(ok, 2000));
    return fetchOnce(url);
  }
}

async function probe(url) {
  const r = { url: url.replace(SWPC, '').replace(DONKI, 'DONKI'), ok: false };
  try {
    const res = await fetchRetrying(url);
    r.status = res.status;
    r.cors = res.headers.get('access-control-allow-origin');
    const body = await res.text();
    r.kb = Math.round(body.length / 1024);
    if (!res.ok) { r.problem = `HTTP ${res.status}`; return r; }
    if (!r.cors || (r.cors !== '*' && r.cors !== ORIGIN)) {
      r.problem = `no usable CORS header (${r.cors ?? 'absent'})`;
      return r;
    }
    if (url.endsWith('.json') || url.includes('DONKI')) {
      try { JSON.parse(body); } catch { r.problem = 'body is not JSON'; return r; }
    }
    const stamp = newestStamp(body);
    if (stamp) {
      r.newest = stamp;
      r.ageH = (Date.now() - Date.parse(stamp)) / 3.6e6;
      // Forecast feeds legitimately run ahead of the clock; only lateness counts.
      if (r.ageH > STALE_WARN_H) r.warn = `newest datum is ${r.ageH.toFixed(0)} h old`;
    }
    r.ok = true;
    return r;
  } catch (e) {
    r.problem = e.message;
    return r;
  }
}

/** The deployed page: served at all, and serving the assets it names. */
async function probeDeploy() {
  const r = { url: DEPLOY, ok: false };
  try {
    const res = await fetch(DEPLOY, { cache: 'no-store' });
    r.status = res.status;
    if (!res.ok) { r.problem = `HTTP ${res.status}`; return r; }
    const html = await res.text();
    const assets = [...html.matchAll(/(?:src|href)="([^"]*\/assets\/[^"]+)"/g)].map((m) => m[1]);
    if (assets.length === 0) { r.problem = 'page served no hashed assets'; return r; }
    for (const a of assets) {
      const u = new URL(a, DEPLOY).href;
      const h = await fetch(u, { method: 'HEAD' });
      if (!h.ok) { r.problem = `asset ${a} → HTTP ${h.status}`; return r; }
    }
    r.assets = assets.length;
    r.ok = true;
    return r;
  } catch (e) {
    r.problem = e.message;
    return r;
  }
}

/**
 * Stage B: present, recent, and complete. A mirror that stopped updating a
 * fortnight ago looks exactly like a working one until the day it is needed.
 */
async function probeMirror() {
  const r = { url: MIRROR_MANIFEST, ok: false };
  try {
    const res = await fetch(MIRROR_MANIFEST, { cache: 'no-store' });
    r.status = res.status;
    if (!res.ok) {
      r.problem = res.status === 404
        ? 'no manifest on the data branch — has the mirror ever run?'
        : `HTTP ${res.status}`;
      return r;
    }
    const m = JSON.parse(await res.text());
    r.ageH = (Date.now() - Date.parse(m.mirrored_at)) / 3.6e6;
    r.files = m.total;
    r.failedFiles = m.failed;
    if (!Number.isFinite(r.ageH)) { r.problem = 'manifest carries no usable mirrored_at'; return r; }
    if (r.ageH > MIRROR_STALE_H) {
      r.problem = `last written ${r.ageH.toFixed(1)} h ago — the mirror has stopped`;
      return r;
    }
    if (m.failed > 0) { r.problem = `${m.failed} of ${m.total} feeds failed to copy`; return r; }
    if (m.unchecked?.length) { r.problem = `${m.unchecked.length} endpoint(s) the mirror could not resolve`; return r; }
    r.ok = true;
    return r;
  } catch (e) {
    r.problem = e.message;
    return r;
  }
}

// ------------------------------------------------------------------- report

const list = [...urls].sort();
const results = [];
for (const u of list) results.push(await probe(u));   // serial: we are a guest here
const deploy = await probeDeploy();
const mirror = await probeMirror();

const failed = results.filter((r) => !r.ok);
const warned = results.filter((r) => r.ok && r.warn);
const bad = failed.length > 0 || unchecked.length > 0 || !deploy.ok || !mirror.ok;

if (JSON_OUT) {
  console.log(JSON.stringify({
    ranAt: new Date().toISOString(),
    total: results.length, failed: failed.length, warned: warned.length,
    unchecked, deploy, mirror, endpoints: results,
  }, null, 2));
} else {
  const age = (h) => (h === undefined ? '' : h < 0 ? `+${(-h).toFixed(0)}h ahead`
    : h < 48 ? `${h.toFixed(0)}h old` : `${(h / 24).toFixed(0)}d old`);
  for (const r of results) {
    const tag = r.ok ? (r.warn ? 'WARN' : 'ok  ') : 'DEAD';
    console.log(`${tag} ${String(r.status ?? '---').padEnd(3)} ${String(r.kb ?? '?') .padStart(5)}K `
      + `${(r.newest ?? '—').padEnd(20)} ${age(r.ageH).padEnd(12)} ${r.url}`
      + (r.problem ? `\n       ↳ ${r.problem}` : '') + (r.warn ? `\n       ↳ ${r.warn}` : ''));
  }
  console.log(`\n${deploy.ok ? 'ok  ' : 'DEAD'} deployment ${DEPLOY}`
    + (deploy.ok ? ` — ${deploy.assets} hashed assets served` : `\n       ↳ ${deploy.problem}`));
  console.log(`${mirror.ok ? 'ok  ' : 'DEAD'} stage B mirror`
    + (mirror.ok
      ? ` — ${mirror.files} feeds, written ${mirror.ageH.toFixed(1)} h ago`
      : `\n       ↳ ${mirror.problem}`));
  for (const u of unchecked) console.log(`\nUNCHECKED  ${u}\n       ↳ unresolved placeholder; teach SUBS in scripts/health.mjs about it`);
  console.log(`\n${results.length} endpoints · ${failed.length} failing · ${warned.length} stale`
    + `${unchecked.length ? ` · ${unchecked.length} unchecked` : ''}`);
}

process.exit(bad ? 1 : 0);
