/**
 * Live solar imagery — tier `[E]`, measured photons.
 *
 * NOAA SWPC hosts frame lists for GOES/SUVI (extreme ultraviolet) and
 * SOHO/LASCO (coronagraph). Each entry's filename carries the observation time,
 * so every frame we show can be stamped — an image without a timestamp would
 * fail the charter as surely as a number without one.
 *
 * Images are displayed in `<img>` elements, which are not subject to CORS the
 * way `fetch` is. That is why imagery works on stage A even though Helioviewer's
 * JSON API does not (see docs/sources.md §1).
 */

export interface ImageFrame {
  url: string;
  /** Observation time parsed from the filename, ISO-8601 UTC. */
  time: string;
}

export interface ImageLoop {
  id: string;
  label: string;
  /** What the instrument actually sees — shown on the panel, not decoration. */
  describes: string;
  instrument: string;
  /** Subsampled for playback; see MAX_FRAMES. Oldest first, newest last. */
  frames: ImageFrame[];
  /** How many frames upstream actually published, before subsampling. */
  totalAvailable: number;
  spanHours: number;
  /** Bytes for one frame, measured. Null when the probe failed. */
  frameBytes: number | null;
  sourceUrl: string;
}

/**
 * SUVI publishes 360 frames a day at ~1.1 MB each — nearly 400 MB for a full
 * loop, which would be a rude thing to download on someone's behalf. Playback
 * is therefore subsampled to this many frames evenly across the available
 * window, and the panel states the download cost before fetching any of it.
 */
export const MAX_FRAMES = 24;

const BASE = 'https://services.swpc.noaa.gov';

export interface LoopSpec {
  id: string;
  label: string;
  describes: string;
  instrument: string;
  product: string;
}

/**
 * SUVI wavelengths are different temperatures in the solar atmosphere, so the
 * descriptions are the point rather than flavour text.
 */
export const LOOPS: LoopSpec[] = [
  { id: 'suvi-304', label: 'SUVI 304 Å', product: 'suvi-primary-304',
    instrument: 'GOES-19 SUVI', describes: 'Chromosphere at ~50 000 K — prominences and filaments' },
  { id: 'suvi-195', label: 'SUVI 195 Å', product: 'suvi-primary-195',
    instrument: 'GOES-19 SUVI', describes: 'Corona at ~1.5 million K — active regions and coronal holes' },
  { id: 'suvi-171', label: 'SUVI 171 Å', product: 'suvi-primary-171',
    instrument: 'GOES-19 SUVI', describes: 'Quiet corona at ~600 000 K — coronal loops' },
  { id: 'suvi-131', label: 'SUVI 131 Å', product: 'suvi-primary-131',
    instrument: 'GOES-19 SUVI', describes: 'Flaring plasma at ~10 million K — brightest during flares' },
  { id: 'lasco-c2', label: 'LASCO C2', product: 'lasco-c2',
    instrument: 'SOHO LASCO', describes: 'Coronagraph, 2–6 solar radii — where CMEs first appear' },
  { id: 'lasco-c3', label: 'LASCO C3', product: 'lasco-c3',
    instrument: 'SOHO LASCO', describes: 'Coronagraph, 3.7–30 solar radii — CMEs heading outward' },
];

/**
 * Two filename conventions, both carrying the observation time:
 *   SUVI   …_s20260906T033600Z_e…      (start of exposure)
 *   LASCO  20260906_0336_c2_512.jpg    (UTC, no separator)
 * Returns null rather than guessing when neither matches — an undated frame is
 * not shown.
 */
export function frameTime(url: string): string | null {
  const suvi = /_s(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/.exec(url);
  if (suvi) {
    const [, y, mo, d, h, mi, s] = suvi;
    return `${y}-${mo}-${d}T${h}:${mi}:${s}.000Z`;
  }
  const lasco = /\/(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})_/.exec(url);
  if (lasco) {
    const [, y, mo, d, h, mi] = lasco;
    return `${y}-${mo}-${d}T${h}:${mi}:00.000Z`;
  }
  return null;
}

export async function fetchLoop(spec: LoopSpec, signal?: AbortSignal): Promise<ImageLoop | null> {
  const sourceUrl = `${BASE}/products/animations/${spec.product}.json`;
  try {
    const res = await fetch(sourceUrl, { cache: 'no-store', signal });
    if (!res.ok) return null;
    const raw = (await res.json()) as Array<{ url?: string }>;
    if (!Array.isArray(raw)) return null;

    const frames: ImageFrame[] = [];
    for (const r of raw) {
      if (!r?.url) continue;
      const time = frameTime(r.url);
      if (!time) continue;                    // undated frame, not shown
      frames.push({ url: `${BASE}${r.url}`, time });
    }
    frames.sort((a, b) => Date.parse(a.time) - Date.parse(b.time));
    if (frames.length === 0) return null;

    const spanHours = (Date.parse(frames[frames.length - 1]!.time)
      - Date.parse(frames[0]!.time)) / 3.6e6;

    // Even subsample that always keeps the newest frame — the current Sun is
    // the one frame that must not be dropped.
    let sampled = frames;
    if (frames.length > MAX_FRAMES) {
      const step = (frames.length - 1) / (MAX_FRAMES - 1);
      sampled = Array.from({ length: MAX_FRAMES },
        (_, i) => frames[Math.round(i * step)]!);
    }

    return {
      id: spec.id, label: spec.label, describes: spec.describes,
      instrument: spec.instrument, frames: sampled,
      totalAvailable: frames.length, spanHours,
      frameBytes: await frameSize(sampled[sampled.length - 1]!.url, signal),
      sourceUrl,
    };
  } catch {
    return null;
  }
}

/** Measured weight of one frame, so the panel can state the real cost. */
async function frameSize(url: string, signal?: AbortSignal): Promise<number | null> {
  try {
    const r = await fetch(url, { method: 'HEAD', signal });
    const len = r.headers.get('content-length');
    return len ? Number(len) : null;
  } catch {
    return null;
  }
}

/**
 * Warm the browser cache for a loop, reporting progress. Playback waits for
 * this so frames do not flash blank — swapping `src` faster than the network
 * can deliver simply cancels each load in turn.
 */
export function preloadLoop(
  loop: ImageLoop, onProgress: (loaded: number, total: number) => void,
  signal?: AbortSignal,
): Promise<void> {
  let loaded = 0;
  const total = loop.frames.length;
  return new Promise((resolve) => {
    if (signal?.aborted) { resolve(); return; }
    let settled = 0;
    const done = () => {
      loaded++; settled++;
      onProgress(loaded, total);
      if (settled >= total) resolve();
    };
    for (const f of loop.frames) {
      const img = new Image();
      img.onload = done;
      img.onerror = done;          // a missing frame must not stall playback
      img.src = f.url;
    }
    signal?.addEventListener('abort', () => resolve(), { once: true });
  });
}
