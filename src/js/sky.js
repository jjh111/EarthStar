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
  return 'blocked';
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

function xrayClass(flux) {
  if (flux == null) return null;
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
    const n = newest(data, 'time_tag', (r) => r.active === true);
    if (!n) return null;
    return key === 'mag'
      ? { time: n.d, spacecraft: n.r.source, bz_gsm: num(n.r.bz_gsm), bt: num(n.r.bt) }
      : { time: n.d, spacecraft: n.r.source, speed: num(n.r.proton_speed), density: num(n.r.proton_density) };
  }
  if (key === 'xray') {
    const n = newest(data, 'time_tag', (r) => r.energy === '0.1-0.8nm');
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

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function ageSeconds(d) {
  return d ? Math.round((Date.now() - d.getTime()) / 1000) : Infinity;
}

function hhmm(d) {
  return d ? d.toISOString().slice(11, 16) + ' UTC' : '';
}

/** state ∈ loading | live | stale | nodata | error */
function setTile(id, state, { value = '', unit = '', detail = '', when = null, via = '', error = '' } = {}) {
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
    p.textContent = when ? 'newest ' + hhmm(when) : '';
    v.removeAttribute('aria-label');
  } else if (state === 'error') {
    v.textContent = 'unavailable'; u.textContent = ''; d.textContent = error ? `${error} · next try in 60 s` : 'next try in 60 s';
    p.textContent = '';
    v.removeAttribute('aria-label');
  } else {
    v.textContent = value; u.textContent = unit; d.textContent = detail;
    p.textContent = `${hhmm(when)}${state === 'stale' ? ' · stale' : ''} · [E] ${via}`;
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
  const st = (key, d) => (ageSeconds(d.time) > FEEDS[key].stale ? 'stale' : 'live');

  const kp = results.kp;
  if (kp === undefined) setTile('kp', 'error', { error: results.errors.kp });
  else if (!kp || kp.estimated_kp == null) setTile('kp', 'nodata', { when: kp?.time });
  else setTile('kp', st('kp', kp), { value: kp.estimated_kp.toFixed(2), unit: 'Kp', detail: kp.kp ? 'NOAA ' + kp.kp : '', when: kp.time, via });

  const mag = results.mag, wind = results.wind;
  if (mag === undefined && wind === undefined) setTile('wind', 'error', { error: results.errors.mag || results.errors.wind });
  else if ((!mag || mag.bz_gsm == null) && (!wind || wind.speed == null)) setTile('wind', 'nodata', { when: mag?.time || wind?.time });
  else {
    const bz = mag?.bz_gsm, sp = wind?.speed;
    const value = (sp != null ? Math.round(sp) + ' km/s' : '—') + (bz != null ? ` · Bz ${bz > 0 ? '+' : ''}${bz.toFixed(1)} nT` : '');
    const t = mag?.time || wind?.time;
    setTile('wind', st('mag', { time: t }), { value, unit: '', detail: (mag?.spacecraft || wind?.spacecraft || '') + (bz != null ? (bz < 0 ? ' · southward' : ' · northward') : ''), when: t, via });
  }

  const x = results.xray;
  if (x === undefined) setTile('xray', 'error', { error: results.errors.xray });
  else if (!x || x.flux_long == null) setTile('xray', 'nodata', { when: x?.time });
  else setTile('xray', st('xray', x), { value: x.class, unit: '', detail: x.flux_long.toExponential(1) + ' W/m² · GOES-' + x.satellite, when: x.time, via });

  const s = results.scales;
  if (s === undefined) setTile('scales', 'error', { error: results.errors.scales });
  else if (!s) setTile('scales', 'nodata');
  else setTile('scales', st('scales', s), { value: `R${s.R.scale} S${s.S.scale} G${s.G.scale}`, unit: '', detail: `geomagnetic: ${s.G.text}`, when: s.time, via });

  const line = document.getElementById('sky-sentence');
  if (line) {
    const parts = [];
    if (kp && kp.estimated_kp != null) parts.push(`Kp ${kp.estimated_kp.toFixed(1)}`);
    if (wind && wind.speed != null) parts.push(`wind ${Math.round(wind.speed)} km/s`);
    if (mag && mag.bz_gsm != null) parts.push(`Bz ${mag.bz_gsm > 0 ? '+' : ''}${mag.bz_gsm.toFixed(1)} nT`);
    if (x && x.class) parts.push(`X-rays ${x.class}`);
    const quiet = kp && kp.estimated_kp != null ? (kp.estimated_kp < 4 ? 'Quiet sky' : kp.estimated_kp < 5 ? 'Unsettled sky' : 'Storm') : 'The sky';
    line.textContent = parts.length ? `${quiet} — ${parts.join(', ')}.` : 'The sky is not reporting right now.';
  }
}

async function refresh(mockMode) {
  if (mockMode) {
    try {
      const m = await getJSON(new URL('assets/data/now.mock.json', document.baseURI).href);
      render({ ...fromMock(m), errors: {} }, 'MOCK fixture — not live');
      document.getElementById('sky-now')?.classList.add('is-mock');
    } catch (e) {
      for (const id of ['kp', 'wind', 'xray', 'scales']) setTile(id, 'error', { error: 'mock fixture missing' });
    }
    return;
  }
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
  render(results, via || '');
}

export function initSky() {
  const root = document.getElementById('sky-now');
  if (!root) return;
  const mockMode = new URLSearchParams(location.search).get('mock') === '1';
  for (const id of ['kp', 'wind', 'xray', 'scales']) setTile(id, 'loading');
  refresh(mockMode);
  if (mockMode) return;
  let timer = setInterval(() => refresh(false), REFRESH_MS);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') { refresh(false); clearInterval(timer); timer = setInterval(() => refresh(false), REFRESH_MS); }
  });
  if (REDUCED) root.classList.add('no-pulse');
}
