/**
 * The verify page (plan §7): our parsed values vs SWPC's own published values,
 * by an independent path, at the same moment.
 *
 * Independence matters — comparing our parse of a feed against our parse of the
 * same feed proves nothing. So: solar wind is checked against
 * `products/summary/*` (what swpc.noaa.gov's dashboard shows), and the X-ray
 * class we compute is checked against the class SWPC labels it with.
 */

import './styles.css';
import './verify.css';
import { DirectSource } from './data/direct-source.js';
import { SWPC_URL, parseXrayLatestClass, xrayClass } from './data/swpc.js';
import { hhmmUTC } from './contract/types.js';

interface Row {
  name: string;
  ours: string;
  theirs: string;
  ok: boolean;
  note: string;
}

const j = async (u: string): Promise<unknown> =>
  (await fetch(u, { cache: 'no-store' })).json();

function near(a: number | null, b: number | null, tol: number): boolean {
  if (a === null || b === null) return false;
  return Math.abs(a - b) <= tol;
}

async function run(): Promise<void> {
  const out = document.getElementById('out')!;
  const rows: Row[] = [];

  const source = new DirectSource();
  const env = await source.fetchNow();
  const d = env.data;

  const [sumMag, sumSpeed, flares, series] = await Promise.all([
    j(SWPC_URL.summaryMag), j(SWPC_URL.summarySpeed), j(SWPC_URL.xrayFlares),
    source.fetchSolarWindSeries(),
  ]) as [Array<Record<string, number | string>>, Array<Record<string, number | string>>,
         Array<Record<string, unknown>>, Awaited<ReturnType<DirectSource['fetchSolarWindSeries']>>];

  const sm = sumMag[0], sp = sumSpeed[0];

  /**
   * Compare like with like. SWPC's summary is a single sample at its own
   * time_tag; our "now" is our own newest minute. Those can differ by a couple
   * of minutes, over which Bz genuinely moves several nT — a real difference
   * that says nothing about our parsing. So we look up OUR value at THEIR
   * timestamp and compare those.
   */
  const at = (stamp: unknown, col: keyof typeof series.data): { v: number | null; t: string | null } => {
    const want = String(stamp ?? '').replace(' ', 'T').replace(/Z?$/, 'Z');
    const idx = series.data.time.indexOf(new Date(Date.parse(want)).toISOString());
    if (idx < 0) return { v: null, t: null };
    const arr = series.data[col] as (number | null)[];
    return { v: arr[idx] ?? null, t: series.data.time[idx] ?? null };
  };

  const bz = at(sm?.['time_tag'], 'bz_gsm');
  const theirBz = sm ? Number(sm['bz_gsm']) : null;
  rows.push({
    name: 'IMF Bz (GSM), nT',
    ours: bz.v === null ? 'no data' : bz.v.toFixed(2),
    theirs: theirBz === null ? 'no data' : String(theirBz),
    ok: near(bz.v, theirBz, 0.55),
    note: `both at ${hhmmUTC(String(sm?.['time_tag'] ?? ''))} UTC · tol ±0.55 (their integer rounding)`,
  });

  const bt = at(sm?.['time_tag'], 'bt');
  const theirBt = sm ? Number(sm['bt']) : null;
  rows.push({
    name: 'IMF total Bt, nT',
    ours: bt.v === null ? 'no data' : bt.v.toFixed(2),
    theirs: theirBt === null ? 'no data' : String(theirBt),
    ok: near(bt.v, theirBt, 0.55),
    note: `both at ${hhmmUTC(String(sm?.['time_tag'] ?? ''))} UTC · tol ±0.55`,
  });

  const spd = at(sp?.['time_tag'], 'speed');
  const theirSpeed = sp ? Number(sp['proton_speed']) : null;
  rows.push({
    name: 'Solar wind speed, km/s',
    ours: spd.v === null ? 'no data' : spd.v.toFixed(1),
    theirs: theirSpeed === null ? 'no data' : String(theirSpeed),
    ok: near(spd.v, theirSpeed, 1.5),
    note: `both at ${hhmmUTC(String(sp?.['time_tag'] ?? ''))} UTC · tol ±1.5`,
  });

  // X-ray: OUR class, computed from OUR parsed flux, against the label SWPC
  // publishes in a different feed. This is the check that caught us reading
  // `current_int_xrlong` (an integrated quantity) as a W/m² flux.
  const theirClass = parseXrayLatestClass(flares)?.class ?? '';
  const ourClass = d.xray?.class ?? xrayClass(d.xray?.flux_long ?? null);
  rows.push({
    name: 'X-ray class',
    ours: ourClass ?? 'no data',
    theirs: theirClass || 'no data',
    ok: !!ourClass && !!theirClass && ourClass[0] === theirClass[0]
      && Math.abs(parseFloat(ourClass.slice(1)) - parseFloat(theirClass.slice(1))) <= 0.35,
    note: `our thresholds on our parsed flux (${d.xray?.flux_long ? d.xray.flux_long.toExponential(2) : '—'} W/m²) vs SWPC's published label`,
  });

  // Kp — round-trip our parse against the raw newest record.
  const kpRaw = await j(SWPC_URL.kp1m) as Array<Record<string, unknown>>;
  const newestKp = kpRaw.reduce((best, r) =>
    Date.parse(String(r['time_tag']) + 'Z') > Date.parse(String(best['time_tag']) + 'Z') ? r : best, kpRaw[0]!);
  rows.push({
    name: 'Planetary Kp (estimated)',
    ours: d.kp?.estimated_kp?.toFixed(2) ?? 'no data',
    theirs: String(newestKp['estimated_kp'] ?? 'no data'),
    ok: near(d.kp?.estimated_kp ?? null, Number(newestKp['estimated_kp']), 0.001),
    note: 'exact match required — same feed, checks our newest-record selection',
  });

  // Spacecraft selection — the trap that silently swaps in the wrong source.
  const magRaw = await j(SWPC_URL.mag) as Array<Record<string, unknown>>;
  const newestAny = magRaw.reduce((best, r) =>
    Date.parse(String(r['time_tag']) + 'Z') > Date.parse(String(best['time_tag']) + 'Z') ? r : best, magRaw[0]!);
  const activeSources = [...new Set(magRaw.filter((r) => r['active'] === true).map((r) => String(r['source'])))];
  rows.push({
    name: 'L1 spacecraft selected',
    ours: d.solar_wind?.spacecraft ?? 'no data',
    theirs: activeSources.join(', ') || 'none flagged active',
    ok: !!d.solar_wind?.spacecraft && activeSources.includes(d.solar_wind.spacecraft),
    note: `newest record of ANY source is "${String(newestAny['source'])}" — selecting that instead would be the bug this row guards`,
  });

  const pass = rows.filter((r) => r.ok).length;
  out.innerHTML = `
    <p class="summary ${pass === rows.length ? 'ok' : 'bad'}">
      ${pass} / ${rows.length} checks pass · ${new Date().toISOString().replace('T', ' ').slice(0, 19)} UTC
    </p>
    <table>
      <thead><tr><th>Check</th><th>The Viewer</th><th>NOAA SWPC</th><th></th><th>Note</th></tr></thead>
      <tbody>${rows.map((r) => `
        <tr class="${r.ok ? 'ok' : 'bad'}">
          <td>${r.name}</td><td class="num">${r.ours}</td><td class="num">${r.theirs}</td>
          <td>${r.ok ? 'pass' : 'DRIFT'}</td><td class="note">${r.note}</td>
        </tr>`).join('')}
      </tbody>
    </table>`;
}

run().catch((e) => {
  document.getElementById('out')!.innerHTML =
    `<p class="summary bad">Verification could not run: ${String(e)}</p>`;
});
