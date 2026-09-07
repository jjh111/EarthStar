/**
 * Keyboard rig. Every control in the app is reachable by Tab; these shortcuts
 * are an accelerator on top, never the only route to a feature.
 */

export interface KeyActions {
  deck(): void;
  shieldView(): void;
  orbit(): void;
  toggleScale(): void;
  toggleMotion(): void;
  toggleShield(): void;
  toggleAurora(): void;
  refresh(): void;
  focusReport(): void;
}

const HELP: [string, string][] = [
  ['1', 'Deck view'], ['2', 'Magnetosphere view'], ['3', 'Orbit view'],
  ['s', 'Toggle Globe / True scale'],
  ['m', 'Toggle reduced motion'], ['f', 'Toggle the magnetic shield'],
  ['a', 'Toggle the aurora overlay'],
  ['r', 'Refresh data now'], ['?', 'This help'],
];

export function installKeyboard(actions: KeyActions): () => void {
  const onKey = (e: KeyboardEvent): void => {
    // Never hijack typing or browser shortcuts.
    const t = e.target as HTMLElement | null;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;

    switch (e.key) {
      case '1': actions.deck(); break;
      case '2': actions.shieldView(); break;
      case '3': actions.orbit(); break;
      case 's': case 'S': actions.toggleScale(); break;
      case 'm': case 'M': actions.toggleMotion(); break;
      case 'f': case 'F': actions.toggleShield(); break;
      case 'a': case 'A': actions.toggleAurora(); break;
      case 'r': case 'R': actions.refresh(); break;
      case '?': announce(HELP.map(([k, d]) => `${k}: ${d}`).join('. ')); break;
      default: return;
    }
    e.preventDefault();
  };
  window.addEventListener('keydown', onKey);
  return () => window.removeEventListener('keydown', onKey);
}

export function announce(msg: string): void {
  const el = document.getElementById('scale-announce');
  if (el) el.textContent = msg;
}
