/**
 * The one place a reading enters the Viewer from the network.
 *
 * Two behaviours live here, and both exist because the Viewer has no server of
 * its own: everything a reader sees is fetched from a public host by their own
 * browser, so every failure of that host is a failure of the page.
 *
 *  1. **One retry**, for a transport that delivered no answer.
 *  2. **The mirror** (stage B, plan §5.2): if upstream cannot be reached at
 *     all, the same bytes are read from Earth Star's own cache of them.
 *
 * The mirror stores upstream payloads *byte for byte* under their own paths.
 * The fallback is therefore a URL swap and nothing else — the same parsers run
 * over the same bytes, and every timestamp in the payload is upstream's own, so
 * age is still computed from when NOAA observed the datum and not from when we
 * copied it. A mirror that reshaped the data would be a second implementation
 * to hold in agreement with this one, and the first divergence between them
 * would be invisible to both.
 *
 * What the mirror is not: it is not a cache in front of upstream. It is only
 * ever consulted after a direct fetch has failed, so a healthy reader never
 * touches it and never sees data older than the minute.
 */

import { SWPC_BASE } from './swpc.js';

/** Committed by `.github/workflows/data-mirror.yml` to the `data` branch. */
export const MIRROR_BASE =
  'https://raw.githubusercontent.com/jjh111/EarthStar/data/v1';

const FETCH_TIMEOUT_MS = 15_000;
/** Long enough to clear a blip, short enough that a cold start still feels immediate. */
const RETRY_DELAY_MS = 600;

export interface Fetched<T> {
  json: T | null;
  error?: string;
  /** Set when these bytes came from the mirror rather than from upstream. */
  mirrored?: boolean;
}

/**
 * Where the mirror keeps a copy of `url`, or null for anything we do not
 * mirror — solar imagery (megabytes of PNG per frame, and a frame list is
 * useless without them) and DONKI, whose catalogue is human-curated and hours
 * behind events in any case. Those lanes degrade the ordinary way.
 */
export function mirrorUrl(url: string): string | null {
  if (!url.startsWith(SWPC_BASE)) return null;
  const path = url.slice(SWPC_BASE.length).split('?')[0]!;
  if (path.startsWith('/images/') || path.includes('/animations/')) return null;
  return `${MIRROR_BASE}/swpc${path}`;
}

/**
 * Which upstream URLs were last served from the mirror. Keyed by the *upstream*
 * URL, which is what `meta()` already has in hand, so provenance costs no extra
 * threading through fifteen call sites.
 */
const mirrored = new Set<string>();

export function servedFromMirror(url: string): boolean { return mirrored.has(url); }
export function anyServedFromMirror(): boolean { return mirrored.size > 0; }

/** One attempt. `retryable` means no answer arrived — as opposed to a status
 *  the server actually returned. */
async function attempt<T>(
  url: string, signal?: AbortSignal, parse: 'json' | 'text' = 'json',
): Promise<Fetched<T> & { retryable?: boolean }> {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(new Error('timeout')), FETCH_TIMEOUT_MS);
  const onAbort = () => ctl.abort(signal?.reason);
  signal?.addEventListener('abort', onAbort, { once: true });
  try {
    const res = await fetch(url, { cache: 'no-store', signal: ctl.signal });
    if (!res.ok) return { json: null, error: `HTTP ${res.status}` };
    return { json: (parse === 'json' ? await res.json() : await res.text()) as T };
  } catch (e) {
    return {
      json: null,
      error: e instanceof Error ? e.message : String(e),
      // The caller going away is not a failure worth repeating.
      retryable: !signal?.aborted,
    };
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', onAbort);
  }
}

const wait = (ms: number) => new Promise((ok) => setTimeout(ok, ms));

/**
 * Upstream, then upstream once more, then the mirror.
 *
 * The retry matters most on a cold start: the store never discards a good
 * envelope, so a mid-session blip merely ages: but a first load has nothing to
 * fall back on and the next attempt is a whole refresh interval away — sixty
 * seconds for the snapshot, five minutes for the aurora. Observed on the
 * OVATION grid, ~900 KB and the largest thing we fetch, where `res.json()`
 * threw on a body that parsed cleanly a moment later.
 *
 * An HTTP status is never retried and never falls back to the mirror. A `404`
 * is upstream answering, and it means a product has been renamed — news the
 * page should carry rather than paper over with a copy that will only get
 * older. The mirror is for *unreachable*, not for *changed*.
 */
export async function get<T>(
  url: string, signal?: AbortSignal, parse: 'json' | 'text' = 'json',
): Promise<Fetched<T>> {
  mirrored.delete(url);

  const first = await attempt<T>(url, signal, parse);
  if (!first.retryable) return { json: first.json, ...(first.error ? { error: first.error } : {}) };

  await wait(RETRY_DELAY_MS);
  if (signal?.aborted) return { json: null, error: first.error ?? 'aborted' };

  const second = await attempt<T>(url, signal, parse);
  if (!second.retryable) return { json: second.json, ...(second.error ? { error: second.error } : {}) };

  const backup = mirrorUrl(url);
  if (!backup || signal?.aborted) {
    return { json: null, error: second.error ?? 'unreachable' };
  }

  const third = await attempt<T>(backup, signal, parse);
  if (third.json === null) {
    // Both are gone. Report upstream's failure, not the mirror's — upstream is
    // the thing the reader is actually being told about.
    return { json: null, error: second.error ?? 'unreachable' };
  }
  mirrored.add(url);
  return { json: third.json, mirrored: true };
}

export const getJson = <T>(url: string, signal?: AbortSignal): Promise<Fetched<T>> =>
  get<T>(url, signal, 'json');

export const getText = (url: string, signal?: AbortSignal): Promise<Fetched<string>> =>
  get<string>(url, signal, 'text');
