// "Sky now" — the splash's window onto The Viewer's data pool.
//
// Reads NOAA SWPC directly from the browser (stage A), falls back to the
// repo's stage-B mirror on the `data` branch, and otherwise says so. Every
// tile is in exactly one state — loading, live, stale, nodata, error — and
// a number is shown only in live/stale. Nothing is ever fabricated: the mock
// fixture renders only when the page is opened with ?mock=1, and it says MOCK.

const SWPC = 'https://services.swpc.noaa.gov';
const MIRROR = 'https://raw.githubusercontent.com/jjh111/EarthStar/data/v1/swpc';
const REFRESH_MS = 60_000;
const TIMEOUT_MS = 9_000;

const FEEDS = {
  kp:    { path: '/json/planetary_k_index_1m.json',       stale: 900 },
  mag:   { path: '/json/rtsw/rtsw_mag_1m.json',            stale: 900 },
  wind:  { path: '/json/rtsw/rtsw_wind_1m.json',           stale: 900 },
  xray:  { path: '/json/goes/primary/xrays-6-hour.json',   stale: 900 },
  scales:{ path: '/products/noaa-scales.json',             stale: 21_600 },
};

// ── fetch with timeout, direct then mirror ──────────────────────────────

async function getJSON(url) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { cache: 'no-store', signal: ctl.signal });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}

async function fetchFeed(key) {
  const f = FEEDS[key];
  try {
    return { data: await getJSON(SWPC + f.path), via: 'NOAA SWPC' };
  } catch (direct) {
    try {
      return { data: await getJSON(MIRROR + f.path), via: 'Earth Star mirror' };
    } catch (mirror) {
      return { error: classify(direct), via: null };
    }
  }
}

function classify(e) {
  if (!navigator.onLine) return 'offline';
  if (e && /HTTP 404/.test(e.message)) return 'upstream 404';
  if (e && e.name === 'AbortError') return 'timed out';
  // (a browser cannot tell a refused request from no network at all)
  return 'offline or blocked';
}

// ── parsing (shapes verified live; see heliosphere-data/sources.md) ────

function utc(s) {
  // Upstream timestamps arrive bare ("2026-09-09T15:42:00"), Z-suffixed, or
  // space-separated with milliseconds; all are UTC.
  if (!s) return null;
  const t = s.replace(' ', 'T');
  return new Date(/Z$/.test(t) ? t : t + 'Z');
}

function newest(rows, timeKey = 'time_tag', filter = () => true) {
  // Never assume upstream order — select by timestamp.
  let best = null;
  for (const r of rows) {
    if (!r || !filter(r)) continue;
    const d = utc(r[timeKey]);
    if (d && !Number.isNaN(+d) && (!best || d > best.d)) best = { d, r };
  }
  return best;
}

function num(v) {
  return typeof v === 'number' && Number.isFinite(v) && v > -999 ? v : null;
}

function kpLabel(s) {
  // "3P" / "3M" / "3Z" → "3+" / "3−" / "3"
  if (typeof s !== 'string') return null;
  const m = /^(\d)([PMZ])$/.exec(s);
  return m ? m[1] + ({ P: '+', M: '−', Z: '' })[m[2]] : s;
}

function fmtSigned(v, digits) {
  // As the Viewer writes a signed reading: U+2212 for minus, '+' for plus, and
  // no sign on a value that rounds to zero ("−0.0" would claim a direction)
  const s = Math.abs(v).toFixed(digits);
  if (Number(s) === 0) return s;
  return (v < 0 ? '\u2212' : '+') + s;
}

function xrayClass(flux) {
  if (flux == null || !(flux > 0)) return null;
  const bands = [['A', 1e-8], ['B', 1e-7], ['C', 1e-6], ['M', 1e-5], ['X', 1e-4]];
  let letter = 'A', base = 1e-8;
  for (const [l, b] of bands) if (flux >= b) { letter = l; base = b; }
  return letter + (flux / base).toFixed(1);
}

function parse(key, data) {
  if (key === 'kp') {
    const n = newest(data);
    if (!n) return null;
    return { time: n.d, estimated_kp: num(n.r.estimated_kp), kp: kpLabel(n.r.kp) };
  }
  if (key === 'mag' || key === 'wind') {
    // The newest active row that holds the reading, as for the X-rays below:
    // a row with no speed (or no field) is a gap, and the row before it
    // carries its own, older time
    const has = key === 'mag' ? 'bz_gsm' : 'proton_speed';
    const n = newest(data, 'time_tag', (r) => r.active === true && num(r[has]) != null);
    if (!n) return null;
    return key === 'mag'
      ? { time: n.d, spacecraft: n.r.source, bz_gsm: num(n.r.bz_gsm), bt: num(n.r.bt) }
      : { time: n.d, spacecraft: n.r.source, speed: num(n.r.proton_speed), density: num(n.r.proton_density) };
  }
  if (key === 'xray') {
    // flux 0 is GOES's gap marker (eclipse season, dropouts), not a reading:
    // take the newest real sample, which carries its own older timestamp
    const n = newest(data, 'time_tag', (r) => r.energy === '0.1-0.8nm' && num(r.flux) > 0);
    if (!n) return null;
    const flux = num(n.r.flux);
    return { time: n.d, flux_long: flux, class: xrayClass(flux), satellite: n.r.satellite };
  }
  if (key === 'scales') {
    const now = data && data['0'];
    if (!now) return null;
    const sc = (k) => ({ scale: Number(now[k]?.Scale), text: String(now[k]?.Text ?? '') });
    return { time: utc(now.DateStamp + 'T' + now.TimeStamp), R: sc('R'), S: sc('S'), G: sc('G') };
  }
  return null;
}

// ── state machine ────────────────────────────────────────────────────────

const TILES = ['kp', 'wind', 'xray', 'scales'];
const NOTE_DOWN = 'NOAA could not be reached from this browser (offline or blocked). The page tries again each minute.';
const NOTE_STALE = 'NOAA’s newest readings are old: each tile shows its age, and the page tries again every minute.';
let noteLive = null; // the note as the page ships it, restored once a reading arrives
let nextAt = 0;      // when the next attempt is due, for a failed tile to say

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function ageSeconds(d) {
  return d ? Math.round((Date.now() - d.getTime()) / 1000) : Infinity;
}

// As the Viewer writes a time (whenUTC): 'HH:MM UTC' today, 'DD Mon HH:MM UTC'
// on any other day, so a reading from yesterday never passes for this morning's
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function when(d) {
  if (!d) return '';
  const iso = d.toISOString(), hm = iso.slice(11, 16) + ' UTC';
  if (iso.slice(0, 10) === new Date().toISOString().slice(0, 10)) return hm;
  return `${String(d.getUTCDate()).padStart(2, '0')} ${MON[d.getUTCMonth()]} ${hm}`;
}

// As the Viewer writes an age (formatAge): '45s', '12 min', '3.2 h'
function age(seconds) {
  if (!Number.isFinite(seconds)) return 'unknown';
  const s = Math.max(0, Math.round(seconds));
  if (s < 90) return `${s}s`;
  const m = Math.round(s / 60);
  if (m < 90) return `${m} min`;
  return `${(m / 60).toFixed(1)} h`;
}

// The dot between the parts of a line binds to the part after it, so a line
// breaks before a dot, never after one
const DOT = ' ·\u00a0';

// A run of words that never breaks across a line
function nw(text) {
  const s = document.createElement('span');
  s.className = 'nw';
  s.textContent = text;
  return s;
}

// The measured tier's badge, as the page draws its others: E for the eye,
// the word for a screen reader
function measured() {
  const b = document.createElement('span');
  b.className = 'badge';
  b.title = 'Measured';
  b.setAttribute('aria-hidden', 'true');
  b.textContent = 'E';
  const word = document.createElement('span');
  word.className = 'visually-hidden';
  word.textContent = 'measured';
  return [b, word];
}

/** state ∈ loading | live | stale | nodata | error. `at` is the reading's
 *  time; `since`, the time its age is counted from (the older of a pair) */
function setTile(id, state, { value = '', unit = '', detail = '', at = null, since = at, via = '', error = '' } = {}) {
  const el = document.getElementById('sky-' + id);
  if (!el) return;
  el.dataset.state = state;
  const v = el.querySelector('.sky-value');
  const u = el.querySelector('.sky-unit');
  const d = el.querySelector('.sky-detail');
  const p = el.querySelector('.sky-prov');
  if (state === 'loading') {
    v.textContent = '…'; u.textContent = unit; d.textContent = 'loading'; p.textContent = '';
    v.setAttribute('aria-label', 'loading');
  } else if (state === 'nodata') {
    v.textContent = 'no data'; u.textContent = ''; d.textContent = detail || 'the feed answered with nothing usable';
    p.textContent = at ? 'newest ' + when(at) : '';
    v.removeAttribute('aria-label');
  } else if (state === 'error') {
    // the time of the next attempt, as the Viewer says it ('retrying 19:02 UTC'),
    // to the minute after it, so it never reads as a time already past
    const retry = nextAt ? `retrying\u00a0${when(new Date(Math.ceil(nextAt / 60e3) * 60e3)).replace(/ /g, '\u00a0')}` : 'retrying';
    v.textContent = 'unavailable'; u.textContent = ''; d.textContent = error ? `${error}${DOT}${retry}` : retry;
    p.textContent = '';
    v.removeAttribute('aria-label');
  } else {
    // The time, then for a stale reading its age ('stale · 3.2 h'), then the
    // tier and the source: three runs that never break inside, each after the
    // first led by its dot, so a line breaks only before a dot
    v.textContent = value; u.textContent = unit; d.textContent = detail;
    const source = nw('· '); source.append(...measured(), ' ' + via);
    p.replaceChildren(nw(when(at)), ...(state === 'stale' ? [' ', nw(`· stale · ${age(ageSeconds(since))}`)] : []), ' ', source);
    v.removeAttribute('aria-label');
  }
}

function fromMock(m) {
  const t = (s) => new Date(s);
  return {
    kp: { time: t(m.kp.time), estimated_kp: m.kp.estimated_kp, kp: m.kp.kp },
    mag: { time: t(m.wind.time), spacecraft: m.wind.spacecraft, bz_gsm: m.wind.bz_gsm, bt: m.wind.bt },
    wind: { time: t(m.wind.time), spacecraft: m.wind.spacecraft, speed: m.wind.speed, density: m.wind.density },
    xray: { time: t(m.xray.time), flux_long: m.xray.flux_long, class: m.xray.class, satellite: m.xray.satellite },
    scales: { time: t(m.scales.time), R: { scale: m.scales.R, text: m.scales.text.R }, S: { scale: m.scales.S, text: m.scales.text.S }, G: { scale: m.scales.G, text: m.scales.text.G } },
  };
}

function render(results, via) {
  const st = (key, t) => (ageSeconds(t) > FEEDS[key].stale ? 'stale' : 'live');

  const kp = results.kp;
  if (kp === undefined) setTile('kp', 'error', { error: results.errors.kp });
  else if (!kp || kp.estimated_kp == null) setTile('kp', 'nodata', { at: kp?.time });
  // One decimal: the 1-minute estimate moves in thirds, so a second decimal is
  // false precision. Its label is NOAA's 1-minute estimate, not the 3-hour Kp.
  else setTile('kp', st('kp', kp.time), { value: kp.estimated_kp.toFixed(1), unit: 'Kp', detail: '1-minute estimate' + (kp.kp ? `${DOT}NOAA Kp ${kp.kp}` : ''), at: kp.time, via });

  const mag = results.mag, wind = results.wind;
  const bz = mag?.bz_gsm ?? null, sp = wind?.speed ?? null;
  if (mag === undefined && wind === undefined) setTile('wind', 'error', { error: results.errors.mag || results.errors.wind });
  else if (bz == null && sp == null) setTile('wind', 'nodata', { at: mag?.time || wind?.time });
  else {
    // One quantity per tile: the speed is the reading, at its own time, and
    // the field rides in the detail with its unit (and its own time, where
    // the magnetometer's differs). The pair is as old as the older of the two,
    // as the Viewer counts it, so a frozen plasma feed never passes for live.
    // With no speed, the field is the reading.
    const shown = [sp != null && wind.time, bz != null && mag.time].filter(Boolean);
    const older = new Date(Math.min(...shown.map(Number)));
    const dir = bz != null ? (bz < 0 ? 'southward' : 'northward') : '';
    const craft = (sp != null ? wind.spacecraft : mag.spacecraft) || '';
    let tile;
    if (sp == null) {
      tile = { value: fmtSigned(bz, 1), unit: 'nT', detail: `Bz${DOT}${dir}${DOT}no speed reading${DOT}${craft}`, at: mag.time };
    } else {
      const own = bz != null && when(mag.time) !== when(wind.time) ? `${DOT}${when(mag.time).replace(' UTC', '').replace(/ /g, '\u00a0')}` : '';
      const field = bz != null ? `Bz ${fmtSigned(bz, 1)} nT${own}${DOT}${dir}${DOT}` : '';
      tile = { value: String(Math.round(sp)), unit: 'km/s', detail: field + craft, at: wind.time };
    }
    setTile('wind', st('wind', older), { ...tile, since: older, via });
  }

  const x = results.xray;
  if (x === undefined) setTile('xray', 'error', { error: results.errors.xray });
  else if (!x || x.flux_long == null) setTile('xray', 'nodata', { at: x?.time });
  else setTile('xray', st('xray', x.time), { value: x.class, unit: '', detail: `${x.flux_long.toExponential(1)} W/m²${DOT}GOES-${x.satellite}`, at: x.time, via });

  const s = results.scales;
  if (s === undefined) setTile('scales', 'error', { error: results.errors.scales });
  else if (!s) setTile('scales', 'nodata');
  else setTile('scales', st('scales', s.time), { value: `R${s.R.scale} S${s.S.scale} G${s.G.scale}`, unit: '', detail: `geomagnetic: ${s.G.text}`, at: s.time, via });

  const states = TILES.map((id) => document.getElementById('sky-' + id)?.dataset.state);
  const down = states.every((v) => v === 'error');

  const line = document.getElementById('sky-sentence');
  if (line) {
    // A symbol never wraps away from its number, nor a number from its unit
    // (\u00a0, a no-break space); the word 'wind' may stand at a line's end
    const parts = [], times = [];
    const add = (text, t) => { parts.push(text); times.push(t); };
    if (kp && kp.estimated_kp != null) add(`Kp\u00a0${kp.estimated_kp.toFixed(1)}`, kp.time);
    if (sp != null) add(`wind ${Math.round(sp)}\u00a0km/s`, wind.time);
    if (bz != null) add(`Bz\u00a0${fmtSigned(bz, 1)}\u00a0nT`, mag.time);
    if (x && x.class) add(`X-rays\u00a0${x.class}`, x.time);
    // The sky's mood is said in the present tense only while every reading in
    // the sentence is live; an old one makes it a dated record, as old as its
    // oldest reading
    const oldest = times.length ? new Date(Math.min(...times.map(Number))) : null;
    const stale = oldest && ageSeconds(oldest) > FEEDS.kp.stale;
    const mood = kp && kp.estimated_kp != null ? (kp.estimated_kp < 4 ? 'Quiet sky' : kp.estimated_kp < 5 ? 'Unsettled sky' : 'Storm') : 'The sky';
    const text = !parts.length ? (down ? 'NOAA could not be reached from this browser.' : 'NOAA sent no usable readings.')
      : stale ? `Last readings, ${when(oldest)} (${age(ageSeconds(oldest))} old): ${parts.join(', ')}.`
      : `${mood} — ${parts.join(', ')}.`;
    // Written only when it says something new, so a refresh that brings the
    // same sky leaves it alone (it is not a live region: the page's only voices
    // are search's count and the copy buttons)
    if (line.textContent !== text) line.textContent = text;
  }

  // When no feed answered at all, the note says why instead of promising
  // live readings, and when every reading is old it says that; any live
  // reading brings the promise back
  const note = document.querySelector('#sky .sky-note');
  if (note) {
    noteLive ??= note.innerHTML;
    const old = states.includes('stale') && !states.includes('live');
    const html = down ? NOTE_DOWN : old ? NOTE_STALE : noteLive;
    if (note.innerHTML !== html) note.innerHTML = html;
  }
}

// The last readings drawn, so that a return to Sky can redraw them against
// the clock (their ages, and live turning stale) before the next fetch lands
let drawn = null;

async function refresh(mockMode) {
  if (mockMode) {
    try {
      const m = await getJSON(new URL('assets/data/now.mock.json', document.baseURI).href);
      render({ ...fromMock(m), errors: {} }, 'MOCK fixture — not live');
      document.getElementById('sky-now')?.classList.add('is-mock');
    } catch (e) {
      for (const id of TILES) setTile(id, 'error', { error: 'mock fixture missing' });
    }
    return;
  }
  nextAt = Date.now() + REFRESH_MS;
  const keys = Object.keys(FEEDS);
  const got = await Promise.all(keys.map(fetchFeed));
  const results = { errors: {} };
  let via = '';
  keys.forEach((k, i) => {
    const g = got[i];
    if (g.error) { results.errors[k] = g.error; return; }
    via = via || g.via;
    if (g.via !== 'NOAA SWPC') via = g.via;
    try { results[k] = parse(k, g.data); } catch { results[k] = null; }
  });
  drawn = { results, via: via || '' };
  render(drawn.results, drawn.via);
}

export function initSky() {
  const root = document.getElementById('sky-now');
  if (!root) return;
  if (REDUCED) root.classList.add('no-pulse');
  const mockMode = new URLSearchParams(location.search).get('mock') === '1';
  for (const id of TILES) setTile(id, 'loading');
  if (mockMode) { refresh(true); return; }
  // The feeds are fetched only while the page is in view and Sky is near the
  // screen (within 600 px): the four 1-minute files are megabytes a minute,
  // and a reader who never scrolls to Sky, or leaves the tab, should not pay
  // for them. Until Sky first nears the screen its tiles say 'loading'. On a
  // return, what was drawn is redrawn by the clock, and a fetch goes out at
  // once if a minute has passed since the last.
  let near = false, last = 0, timer = 0;
  const due = () => document.visibilityState === 'visible' && near;
  const tick = () => { if (due() && Date.now() - last >= REFRESH_MS - 1000) { last = Date.now(); refresh(false); } };
  const arm = () => {
    clearInterval(timer);
    timer = 0;
    if (!due()) return;
    timer = setInterval(tick, REFRESH_MS);
    nextAt = Date.now() + REFRESH_MS; // the interval's first tick, unless tick() goes now
    if (drawn) render(drawn.results, drawn.via);
    tick();
  };
  const sky = document.getElementById('sky') || root;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => { if (near !== e.isIntersecting) { near = e.isIntersecting; arm(); } }, { rootMargin: '600px 0px' }).observe(sky);
  } else { near = true; arm(); }
  document.addEventListener('visibilitychange', arm);
}
