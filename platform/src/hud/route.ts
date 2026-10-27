/**
 * The address of what the reader is looking at — the view, the scale, the
 * layers, the tab or the detail — kept in the URL's fragment, so a reading can
 * be linked to, survives a reload, and Back closes what was opened.
 *
 *   #v=polar&s=true&t=sun&d=inst.bz&l=-wind,+coast
 *   #help
 *
 * Only what differs from the plain page is written: Deck, Globe, the Now tab
 * and the layers as they open make the empty fragment, so the plain Viewer is
 * still /viewer/. Unknown keys and values are ignored rather than guessed at;
 * an old link opens what it still names and nothing else.
 *
 * `help` is a bare key: the help dialog is open, over whatever else the
 * address names, so Back closes it and a link can open it.
 *
 * The splash links in through this: /viewer/#d=inst.kp, #d=inst.speed,
 * #d=inst.xray and #t=report (test/route.test.ts holds those four).
 */

import { VIEWS, type ViewName } from '../scene/camera-rig.js';
import type { ScaleMode } from '../scene/scales.js';
import { NOTICES_DETAIL, TABS, type TabId } from './margin.js';
import { subject } from './subjects.js';

export type LayerId = 'field' | 'aurora' | 'wind' | 'cmes' | 'coast';

/** The layers as the page opens them: everything on but the coastline overlay. */
export const DEFAULT_LAYERS: Readonly<Record<LayerId, boolean>> = {
  field: true, aurora: true, wind: true, cmes: true, coast: false,
};
const LAYER_IDS = Object.keys(DEFAULT_LAYERS) as LayerId[];

/** A tab the strip shows; 'detail' is a detail's own state, never an address. */
export type RouteTab = Exclude<TabId, 'detail'>;

export interface Route {
  view?: ViewName;
  scale?: ScaleMode;
  tab?: RouteTab;
  /** A registry subject id, or 'notices'. */
  detail?: string;
  /** Only the layers the address names; the others are as the page opens them. */
  layers: Partial<Record<LayerId, boolean>>;
  /** The help dialog is open. */
  help?: true;
}

/** Everything the address can say, as it is now. */
export interface RouteState {
  view: ViewName;
  scale: ScaleMode;
  tab: TabId;
  detail: string | null;
  layers: Record<LayerId, boolean>;
  help?: boolean;
}

const KEYS = new Set(['v', 's', 't', 'd', 'l', 'help']);

function decode(s: string): string {
  try { return decodeURIComponent(s); } catch { return ''; }
}

/**
 * Read a fragment. Null when it is not an address at all — the skip link's
 * `#margin-body`, say — which the router leaves alone; an empty fragment is
 * the plain page.
 */
export function parseHash(hash: string): Route | null {
  const raw = hash.replace(/^#/, '');
  const route: Route = { layers: {} };
  if (!raw) return route;
  const pairs = raw.split('&').map((p) => {
    const at = p.indexOf('=');
    return at < 0 ? [p, ''] : [p.slice(0, at), decode(p.slice(at + 1))];
  });
  if (!pairs.some(([k]) => KEYS.has(k!))) return null;

  for (const [k, v] of pairs as [string, string][]) {
    if (k === 'v') {
      const view = VIEWS.find((x) => x.id === v);
      if (view) route.view = view.id;
    } else if (k === 's') {
      if (v === 'globe' || v === 'true') route.scale = v;
    } else if (k === 't') {
      const tab = TABS.find((x) => x.id === v);
      if (tab) route.tab = tab.id as RouteTab;
    } else if (k === 'd') {
      if (v === NOTICES_DETAIL || subject(v)) route.detail = v;
    } else if (k === 'l') {
      for (const item of v.split(',')) {
        // '+' on, '-' off; U+2212 as the house minus, and a space where some
        // tool has decoded a '+' the way a query string would.
        const sign = item.charAt(0);
        const id = item.slice(1) as LayerId;
        if (!LAYER_IDS.includes(id)) continue;
        if (sign === '+' || sign === ' ') route.layers[id] = true;
        else if (sign === '-' || sign === '−') route.layers[id] = false;
      }
    } else if (k === 'help') {
      route.help = true;
    }
  }
  return route;
}

/** Write the fragment for a state: '' for the plain page, else '#…' with only what differs. */
export function formatHash(s: RouteState): string {
  const out: string[] = [];
  if (s.view !== 'deck') out.push(`v=${s.view}`);
  if (s.scale !== 'globe') out.push(`s=${s.scale}`);
  if (s.tab !== 'report' && s.tab !== 'detail') out.push(`t=${s.tab}`);
  if (s.detail) out.push(`d=${encodeURIComponent(s.detail)}`);
  const layers = LAYER_IDS.filter((id) => s.layers[id] !== DEFAULT_LAYERS[id])
    .map((id) => `${s.layers[id] ? '+' : '-'}${id}`);
  if (layers.length) out.push(`l=${layers.join(',')}`);
  if (s.help) out.push('help');
  return out.length ? `#${out.join('&')}` : '';
}
