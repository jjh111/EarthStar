/**
 * Keyboard rig. Every control in the app is reachable by Tab; these shortcuts
 * are an accelerator on top, never the only route to a feature.
 */

import { VIEWS } from '../scene/camera-rig.js';
export interface KeyActions {
  /** Number keys 1..5 select a view, in the order they appear in the header. */
  view(index: number): void;
  toggleScale(): void;
  toggleMotion(): void;
  toggleShield(): void;
  toggleAurora(): void;
  toggleWind(): void;
  toggleCmes(): void;
  /** Show or hide the instrument rail. */
  toggleRail(): void;
  refresh(): void;
  focusReport(): void;
}

const HELP: [string, string][] = [
  // Built from the view list, so it cannot drift from what the keys select
  // (it once announced "Overhead, System" for keys that chose Polar and Corona).
  ['1–5', `${VIEWS.slice(0, 5).map((v) => v.label).join(', ')} views`],
  ['s', 'Toggle Globe / True scale'],
  ['m', 'Toggle reduced motion'], ['f', 'Toggle the magnetic shield'],
  ['a', 'Toggle the aurora overlay'], ['w', 'Toggle the solar wind stream'], ['c', 'Toggle CME cones'],
  ['t', 'Show or hide the instrument rail'],
  ['r', 'Refresh data now'], ['?', 'This help'],
];

export function installKeyboard(actions: KeyActions): () => void {
  const onKey = (e: KeyboardEvent): void => {
    // Never hijack typing or browser shortcuts.
    const t = e.target as HTMLElement | null;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;

    switch (e.key) {
      case '1': case '2': case '3': case '4': case '5':
        actions.view(Number(e.key) - 1); break;
      case 's': case 'S': actions.toggleScale(); break;
      case 'm': case 'M': actions.toggleMotion(); break;
      case 'f': case 'F': actions.toggleShield(); break;
      case 'a': case 'A': actions.toggleAurora(); break;
      case 'w': case 'W': actions.toggleWind(); break;
      case 'c': case 'C': actions.toggleCmes(); break;
      case 't': case 'T': actions.toggleRail(); break;
      case 'r': case 'R': actions.refresh(); break;
      case '?': announce(HELP.map(([k, d]) => `${k}: ${d}`).join('. ')); break;
      default: return;
    }
    e.preventDefault();
  };
  window.addEventListener('keydown', onKey);
  return () => window.removeEventListener('keydown', onKey);
}

/**
 * Speak to assistive technology. The live region is `#announce`; this looked
 * for `#scale-announce`, a name from an earlier draft, so every announcement
 * the app has ever made went nowhere — silently, because a missing element is
 * indistinguishable from a screen reader that simply did not read it.
 */
export function announce(msg: string): void {
  const el = document.getElementById('announce');
  if (el) el.textContent = msg;
}
