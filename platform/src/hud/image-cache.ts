/**
 * Decoded-image cache.
 *
 * The solar frames are 1280×1280 PNGs: about 1.1 MB on the wire and 6.3 MB
 * decoded. The panel was rebuilt with `innerHTML` on every store tick and every
 * tab change, which destroyed the `<img>` element each time — so even with the
 * bytes already in the HTTP cache (transferSize 0), the browser paid to decode
 * the image again. Measured at 381 ms for a single frame. That is the stall.
 *
 * Keeping the element alive keeps the decode. This is an LRU over live
 * `HTMLImageElement`s, budgeted in decoded bytes rather than in count, because
 * a coronagraph frame and an EUV frame differ by an order of magnitude in area
 * and a count-based cap would be wrong for both.
 *
 * An element currently in the document is never evicted: dropping the image the
 * reader is looking at to make room for one they are not would be worse than
 * the stall it is trying to avoid.
 */

interface Entry {
  img: HTMLImageElement;
  /** Decoded size, known only once the image has loaded. */
  bytes: number;
  loaded: boolean;
  failed: boolean;
}

/** 96 MB — about fifteen full-size SUVI frames. */
const DEFAULT_BUDGET = 96 * 1024 * 1024;

export interface CacheStats {
  count: number;
  bytes: number;
  hits: number;
  misses: number;
  evictions: number;
}

export class ImageCache {
  /** Insertion order is the LRU order; a hit re-inserts at the end. */
  private map = new Map<string, Entry>();
  private hits = 0;
  private misses = 0;
  private evictions = 0;

  constructor(private budgetBytes = DEFAULT_BUDGET) {}

  /**
   * The element for `url`, creating and starting the load if it is new. The
   * same element comes back every time, so putting it into the document is a
   * move rather than a fresh decode.
   */
  acquire(url: string): HTMLImageElement {
    const found = this.map.get(url);
    if (found) {
      this.hits++;
      // Re-insert to mark most-recently-used.
      this.map.delete(url);
      this.map.set(url, found);
      return found.img;
    }

    this.misses++;
    const img = new Image();
    // Required before `src`. NOAA serves the frames with
    // `access-control-allow-origin: *`, and without this the element cannot be
    // uploaded as a WebGL texture or read back for calibration — WebGL throws
    // on a cross-origin image, unlike canvas drawing, which merely taints.
    img.crossOrigin = 'anonymous';
    img.decoding = 'async';
    img.loading = 'eager';
    const entry: Entry = { img, bytes: 0, loaded: false, failed: false };
    img.addEventListener('load', () => {
      entry.loaded = true;
      entry.bytes = img.naturalWidth * img.naturalHeight * 4;
      this.evict();
    }, { once: true });
    img.addEventListener('error', () => { entry.failed = true; }, { once: true });
    img.src = url;
    this.map.set(url, entry);
    return img;
  }

  /** Start loading without needing the element — for a lookahead. */
  warm(urls: Iterable<string>): void {
    for (const u of urls) this.acquire(u);
  }

  isLoaded(url: string): boolean {
    const e = this.map.get(url);
    return !!e && e.loaded;
  }

  isFailed(url: string): boolean {
    const e = this.map.get(url);
    return !!e && e.failed;
  }

  private evict(): void {
    let total = 0;
    for (const e of this.map.values()) total += e.bytes;
    if (total <= this.budgetBytes) return;

    for (const [url, e] of this.map) {
      if (total <= this.budgetBytes) break;
      // Never drop what is on screen.
      if (e.img.isConnected) continue;
      this.map.delete(url);
      total -= e.bytes;
      this.evictions++;
      // Releasing the src lets the browser reclaim the decoded bitmap; without
      // it the element can stay alive in the DOM's detached tree.
      e.img.src = '';
    }
  }

  stats(): CacheStats {
    let bytes = 0;
    for (const e of this.map.values()) bytes += e.bytes;
    return {
      count: this.map.size, bytes,
      hits: this.hits, misses: this.misses, evictions: this.evictions,
    };
  }

  clear(): void {
    for (const e of this.map.values()) if (!e.img.isConnected) e.img.src = '';
    this.map.clear();
  }
}
