/**
 * Word-sized data graphics, drawn from real series.
 *
 * Follows Tufte's conventions for sparklines: no axes, no gridlines, no frame;
 * the line carries the shape and a few coloured marks carry the anchors — the
 * most recent value in red, the period's extremes in blue. Where a series has a
 * meaningful reference level (zero for Bz, storm threshold for Kp) a band or
 * rule is drawn behind it, because "is it negative" is the whole question for
 * some of these numbers.
 *
 * These are intended to sit inline in a sentence, at the height of the
 * surrounding text, so a paragraph can carry its own evidence.
 */

export interface Series {
  time: string[];
  value: (number | null)[];
}

export interface SparkOptions {
  /** Rendered size in ex-units of the surrounding text. */
  width?: number;
  height?: number;
  /** Draw a rule at this value when it falls inside the range (e.g. 0 for Bz). */
  rule?: number | null;
  /** Shade this band behind the line (e.g. quiet Kp, or normal glucose). */
  band?: [number, number] | null;
  /** log10 the values first — X-ray flux spans four decades. */
  log?: boolean;
  /** Mark the highest and lowest points. */
  extremes?: boolean;
  label?: string;
  className?: string;
}

interface Prepared {
  pts: Array<{ x: number; y: number; v: number }>;
  min: number;
  max: number;
  last: { x: number; y: number; v: number } | null;
  lo: { x: number; y: number; v: number } | null;
  hi: { x: number; y: number; v: number } | null;
  w: number;
  h: number;
}

function prepare(s: Series, o: Required<Pick<SparkOptions, 'width' | 'height'>> & SparkOptions): Prepared | null {
  const raw = s.value;
  if (!raw || raw.length < 2) return null;

  const tf = (v: number): number => (o.log ? Math.log10(Math.max(v, 1e-12)) : v);
  const idx: number[] = [];
  const vals: number[] = [];
  for (let i = 0; i < raw.length; i++) {
    const v = raw[i];
    if (v === null || v === undefined || !Number.isFinite(v)) continue;
    if (o.log && v <= 0) continue;
    idx.push(i);
    vals.push(tf(v));
  }
  if (vals.length < 2) return null;

  let min = Math.min(...vals);
  let max = Math.max(...vals);
  // Include the rule and band in the domain, else they would sit off-canvas.
  if (o.rule !== null && o.rule !== undefined) {
    const r = tf(o.rule);
    min = Math.min(min, r); max = Math.max(max, r);
  }
  if (o.band) {
    min = Math.min(min, tf(o.band[0])); max = Math.max(max, tf(o.band[1]));
  }
  const span = max - min || 1;

  const n = raw.length - 1;
  const pad = 1.2;
  const X = (i: number) => (i / n) * (o.width - pad * 2) + pad;
  const Y = (v: number) => o.height - pad - ((v - min) / span) * (o.height - pad * 2);

  const pts = idx.map((i, k) => ({ x: X(i), y: Y(vals[k]!), v: vals[k]! }));
  let lo = pts[0]!, hi = pts[0]!;
  for (const p of pts) { if (p.v < lo.v) lo = p; if (p.v > hi.v) hi = p; }

  return {
    pts, min, max, last: pts[pts.length - 1] ?? null,
    lo, hi, w: o.width, h: o.height,
  };
}

function path(pts: Prepared['pts']): string {
  return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join('');
}

/**
 * Inline sparkline sized to the text around it. Returns an `<svg>` string with
 * `vertical-align: baseline`-ish placement so it sits in a sentence like a word.
 */
export function inlineSpark(s: Series, opts: SparkOptions = {}): string {
  const o = {
    width: 62, height: 15, rule: null, band: null, log: false,
    extremes: false, label: '', className: '', ...opts,
  };
  const p = prepare(s, o);
  if (!p) return '<span class="spark-missing" title="no history">—</span>';

  const tf = (v: number): number => (o.log ? Math.log10(Math.max(v, 1e-12)) : v);
  const span = p.max - p.min || 1;
  const pad = 1.2;
  const Y = (v: number) => o.height - pad - ((v - p.min) / span) * (o.height - pad * 2);

  const band = o.band
    ? `<rect class="spark-band" x="0" y="${Y(tf(o.band[1])).toFixed(2)}" width="${o.width}"
        height="${Math.max(0.5, Y(tf(o.band[0])) - Y(tf(o.band[1]))).toFixed(2)}" />`
    : '';
  const rule = o.rule !== null && o.rule !== undefined
    ? `<line class="spark-rule" x1="0" y1="${Y(tf(o.rule)).toFixed(2)}" x2="${o.width}" y2="${Y(tf(o.rule)).toFixed(2)}" />`
    : '';
  const extremes = o.extremes
    ? `<circle class="spark-lo" cx="${p.lo!.x.toFixed(2)}" cy="${p.lo!.y.toFixed(2)}" r="1.3" />
       <circle class="spark-hi" cx="${p.hi!.x.toFixed(2)}" cy="${p.hi!.y.toFixed(2)}" r="1.3" />`
    : '';
  const last = p.last
    ? `<circle class="spark-last" cx="${p.last.x.toFixed(2)}" cy="${p.last.y.toFixed(2)}" r="1.6" />`
    : '';

  return `<svg class="spark-inline ${o.className}" viewBox="0 0 ${o.width} ${o.height}"
    width="${o.width}" height="${o.height}" role="img" aria-label="${escapeAttr(o.label || 'trend')}"
    preserveAspectRatio="none">${band}${rule}<path class="spark-path" d="${path(p.pts)}" />${extremes}${last}</svg>`;
}

/** The larger form used in the detail panel, with its range stated beneath. */
export function panelSpark(
  s: Series, opts: SparkOptions & { unit?: string; format?: (v: number) => string } = {},
): string {
  const o = { width: 268, height: 46, extremes: true, ...opts };
  const p = prepare(s, { ...o, width: o.width, height: o.height });
  if (!p) return '<p class="tile-meta">No history loaded.</p>';

  const fmt = o.format ?? ((v: number) => v.toFixed(1));
  const inv = (v: number) => (o.log ? Math.pow(10, v) : v);
  const hours = s.time.length > 1
    ? (Date.parse(s.time[s.time.length - 1]!) - Date.parse(s.time[0]!)) / 3.6e6
    : 0;

  return `${inlineSpark(s, { ...o, label: o.label ?? 'history' })}
    <p class="tile-meta">${fmt(inv(p.lo!.v))} to ${fmt(inv(p.hi!.v))}${o.unit ? ` ${o.unit}` : ''}
    over the last ${hours.toFixed(0)} h · <span class="spark-key-last">●</span> now
    <span class="spark-key-ex">●</span> range</p>`;
}

function escapeAttr(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}
