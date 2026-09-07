/**
 * Parser tests. These encode the three upstream behaviours that would silently
 * put a wrong number on the HUD, each of which was observed live on 2026-09-06
 * (docs/sources.md §3). Fixtures below are trimmed real responses.
 */

import { describe, expect, it } from 'vitest';
import {
  parseAlerts, parseKpNow, parseScalesNow, parseSolarWindNow, parseSolarWindSeries,
  parseXrayFromSeries, parseXrayLatestClass, swpcTime, num, xrayClass,
} from '../src/data/swpc.js';

/* Real shape: NEWEST-FIRST, three spacecraft interleaved, only one `active`. */
const MAG = [
  { time_tag: '2026-09-06T17:18:00', active: false, source: 'IMAP', bt: 6.07, bx_gsm: 4.61, by_gsm: -3.76, bz_gsm: -4.06, overall_quality: 0, max_data_flag: 0 },
  { time_tag: '2026-09-06T17:16:00', active: true, source: 'SOLAR1', bt: 6.89, bx_gsm: 4.36, by_gsm: -2.63, bz_gsm: -4.58, overall_quality: 0, max_data_flag: -9999 },
  { time_tag: '2026-09-06T17:15:00', active: false, source: 'ACE', bt: 5.2, bx_gsm: 1.0, by_gsm: 1.0, bz_gsm: 9.99, overall_quality: 0, max_data_flag: 0 },
  { time_tag: '2026-09-05T17:22:00', active: true, source: 'SOLAR1', bt: 4.1, bx_gsm: 1.1, by_gsm: 1.2, bz_gsm: 1.3, overall_quality: 0, max_data_flag: -9999 },
];
const WIND = [
  { time_tag: '2026-09-06T17:18:06', active: false, source: 'IMAP', proton_speed: 999, proton_density: 99, proton_temperature: 1 },
  { time_tag: '2026-09-06T17:16:12', active: true, source: 'SOLAR1', proton_speed: 339.2, proton_density: 4.77, proton_temperature: 117080 },
  { time_tag: '2026-09-05T17:22:03', active: true, source: 'SOLAR1', proton_speed: 300, proton_density: 3, proton_temperature: 5000 },
];

describe('solar wind — spacecraft selection', () => {
  it('takes the newest ACTIVE record, not the newest record', () => {
    const sw = parseSolarWindNow(MAG, WIND)!;
    expect(sw.spacecraft).toBe('SOLAR1');
    expect(sw.bz_gsm).toBe(-4.58);       // not IMAP's -4.06
    expect(sw.speed).toBe(339.2);        // not IMAP's 999
    expect(sw.density).toBe(4.77);
  });

  it('is immune to array order — reversing the feed changes nothing', () => {
    const a = parseSolarWindNow(MAG, WIND)!;
    const b = parseSolarWindNow([...MAG].reverse(), [...WIND].reverse())!;
    expect(b).toEqual(a);
  });

  it('reports the OLDER of the mag/plasma timestamps so staleness is never understated', () => {
    const sw = parseSolarWindNow(MAG, WIND)!;
    expect(sw.time).toBe('2026-09-06T17:16:00.000Z');
  });

  it('returns null rather than a partial guess when both feeds are empty', () => {
    expect(parseSolarWindNow([], [])).toBeNull();
    expect(parseSolarWindNow(null, undefined)).toBeNull();
  });

  it('survives one feed failing, leaving the other side null not zero', () => {
    const sw = parseSolarWindNow(MAG, null)!;
    expect(sw.bz_gsm).toBe(-4.58);
    expect(sw.speed).toBeNull();
    expect(sw.density).toBeNull();
  });
});

describe('solar wind series', () => {
  it('is oldest → newest and contains only active-spacecraft samples', () => {
    const s = parseSolarWindSeries(MAG, WIND);
    expect(s.time).toEqual(['2026-09-05T17:22:00.000Z', '2026-09-06T17:16:00.000Z']);
    expect(s.bz_gsm).toEqual([1.3, -4.58]);
    // Plasma tags carry seconds; they must bin onto the same minute as mag.
    expect(s.speed).toEqual([300, 339.2]);
  });
});

describe('timestamps', () => {
  it('reads all three SWPC flavours as UTC', () => {
    expect(swpcTime('2026-09-06T17:16:00')).toBe('2026-09-06T17:16:00.000Z');
    expect(swpcTime('2026-09-06T17:16:00Z')).toBe('2026-09-06T17:16:00.000Z');
    expect(swpcTime('2026-09-06 12:12:15.890')).toBe('2026-09-06T12:12:15.890Z');
  });

  it('rejects junk rather than inventing an epoch', () => {
    expect(swpcTime('')).toBeNull();
    expect(swpcTime(null)).toBeNull();
    expect(swpcTime('not a date')).toBeNull();
  });
});

describe('fill values', () => {
  it('maps documented fills to null, never to a number', () => {
    expect(num(-9999)).toBeNull();
    expect(num(-999)).toBeNull();
    expect(num(null)).toBeNull();
    expect(num('')).toBeNull();
    expect(num(0)).toBe(0);        // a real zero must survive
    expect(num('4.5')).toBe(4.5);
  });
});

describe('X-ray class', () => {
  it('matches NOAA thresholds at the band edges', () => {
    expect(xrayClass(1e-8)).toBe('A1.0');
    expect(xrayClass(1e-7)).toBe('B1.0');
    expect(xrayClass(1e-6)).toBe('C1.0');
    expect(xrayClass(1e-5)).toBe('M1.0');
    expect(xrayClass(1e-4)).toBe('X1.0');
  });

  it('reproduces the live value SWPC labelled B3.7', () => {
    // Observed 2026-09-06T17:20Z: flux 3.7229e-7 W/m², SWPC class "B3.7".
    expect(xrayClass(3.7229077065603633e-7)).toBe('B3.7');
  });

  it('keeps X-class open-ended', () => {
    expect(xrayClass(1.24e-3)).toBe('X12.4');
  });

  it('returns null for absent or nonsense flux', () => {
    expect(xrayClass(null)).toBeNull();
    expect(xrayClass(0)).toBeNull();
    expect(xrayClass(-1)).toBeNull();
  });
});

describe('Kp', () => {
  it('picks the newest record from an oldest-first feed', () => {
    const kp = parseKpNow([
      { time_tag: '2026-09-06T17:19:00', kp_index: 1, estimated_kp: 0.67, kp: '1M' },
      { time_tag: '2026-09-06T17:20:00', kp_index: 1, estimated_kp: 1.33, kp: '1P' },
    ])!;
    expect(kp.estimated_kp).toBe(1.33);
    expect(kp.time).toBe('2026-09-06T17:20:00.000Z');
  });
});

describe('NOAA scales', () => {
  const RAW = {
    '-1': { DateStamp: '2026-09-05', R: { Scale: '1', Text: 'minor' }, S: { Scale: '0', Text: 'none' }, G: { Scale: '0', Text: 'none' } },
    '0': {
      DateStamp: '2026-09-06', TimeStamp: '17:22:00',
      R: { Scale: '2', Text: 'moderate', MinorProb: '35', MajorProb: '10' },
      S: { Scale: '0', Text: 'none', Prob: '5' },
      G: { Scale: '1', Text: 'minor' },
    },
  };

  it('reads today from key "0", not the first key', () => {
    const s = parseScalesNow(RAW)!;
    expect(s.date).toBe('2026-09-06');
    expect(s.R.scale).toBe(2);
  });

  it('combines DateStamp and TimeStamp so a live product is not pinned to midnight', () => {
    expect(parseScalesNow(RAW)!.time).toBe('2026-09-06T17:22:00.000Z');
  });

  it('falls back to midnight only when upstream omits TimeStamp', () => {
    const noClock = { '0': { DateStamp: '2026-09-06', R: {}, S: {}, G: {} } };
    expect(parseScalesNow(noClock)!.time).toBe('2026-09-06T00:00:00.000Z');
  });

  it('coerces the string Scale to a number and title-cases Text', () => {
    const s = parseScalesNow(RAW)!;
    expect(s.G.scale).toBe(1);
    expect(s.G.text).toBe('Minor');
    expect(s.S.text).toBe('None');
  });

  it('handles S carrying a single Prob where R carries Minor/Major', () => {
    const s = parseScalesNow(RAW)!;
    expect(s.R.minor_prob).toBe(35);
    expect(s.R.major_prob).toBe(10);
    expect(s.S.minor_prob).toBe(5);
    expect(s.G.minor_prob).toBeNull();   // G genuinely has no probabilities
  });
});

describe('alerts', () => {
  const RAW = [
    { product_id: 'K04A', issue_datetime: '2026-08-08 09:59:19.923', message: 'Space Weather Message Code: WARK04\r\nSerial Number: 99\r\n\r\nWARNING: Geomagnetic K-index of 4 expected\r\n' },
    { product_id: 'A20F', issue_datetime: '2026-09-06 12:12:15.890', message: 'Space Weather Message Code: WATA20\r\nSerial Number: 1122\r\n\r\nWATCH: Geomagnetic Storm Category G1 Predicted\r\n' },
  ];

  it('sorts newest first regardless of input order and parses the space-separated stamp', () => {
    const a = parseAlerts(RAW);
    expect(a[0]!.product).toBe('A20F');
    expect(a[0]!.issued).toBe('2026-09-06T12:12:15.890Z');
  });

  it('extracts the WATCH/WARNING headline rather than the message code line', () => {
    expect(parseAlerts(RAW)[0]!.headline).toBe('WATCH: Geomagnetic Storm Category G1 Predicted');
    expect(parseAlerts(RAW)[1]!.headline).toBe('WARNING: Geomagnetic K-index of 4 expected');
  });
});

describe('X-ray from the flux series', () => {
  const SERIES = [
    { time_tag: '2026-09-06T18:05:00Z', satellite: 18, energy: '0.1-0.8nm', flux: 3.6e-7 },
    { time_tag: '2026-09-06T18:06:00Z', satellite: 18, energy: '0.05-0.4nm', flux: 6.6e-9 },
    { time_tag: '2026-09-06T18:06:00Z', satellite: 18, energy: '0.1-0.8nm', flux: 3.703297011270479e-7 },
  ];

  it('separates the two interleaved energy bands', () => {
    const x = parseXrayFromSeries(SERIES)!;
    expect(x.flux_long).toBe(3.703297011270479e-7);
    expect(x.flux_short).toBe(6.6e-9);
  });

  it('reproduces the class SWPC published for the same minute', () => {
    // Observed live 2026-09-06T18:06Z: SWPC's own label was B3.7.
    expect(parseXrayFromSeries(SERIES)!.class).toBe('B3.7');
  });

  it('reads SWPC’s label feed for the class only — its int_xrlong is NOT a flux', () => {
    const raw = [{
      time_tag: '2026-09-06T18:06:00Z', current_class: 'B3.7',
      current_int_xrlong: 0.0019062842475250363,
    }];
    expect(parseXrayLatestClass(raw)!.class).toBe('B3.7');
    // Guard the regression directly: that field read as flux would be X-class.
    expect(xrayClass(0.0019062842475250363)![0]).toBe('X');
  });
});
