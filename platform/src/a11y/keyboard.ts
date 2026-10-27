/**
 * Keyboard rig. Every control in the app is reachable by Tab; these shortcuts
 * are an accelerator on top, never the only route to a feature.
 *
 * They act only on the scene. A key pressed with a control, the margin's text
 * or a card in focus belongs to that — reading the report and pressing 2 used
 * to fly the camera to Sunward — and with text selected it belongs to the
 * selection. The one key that works from anywhere outside a text field is `?`,
 * because it is the way in to the rest.
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
  /** Open the help. */
  help(): void;
}

/** The scene's keys and what each does, as the help lists them. */
export const SCENE_KEYS: [string, string][] = [
  // Built from the view list, so it cannot drift from what the keys select
  // (it once announced "Overhead, System" for keys that chose Polar and Corona).
  ['1–5', `${VIEWS.slice(0, 5).map((v) => v.label).join(', ')} views`],
  ['s', 'Globe or True scale'],
  ['m', 'Motion on or off'], ['f', 'The magnetic field'],
  ['a', 'The aurora oval'], ['w', 'The solar wind stream'], ['c', 'CME cones'],
  ['t', 'Show or hide the instrument rail'],
  ['r', 'Refresh the data now'],
];

/**
 * Where a key was pressed, by what holds focus:
 *  · `typing` — a text field, where every key is the reader's text;
 *  · `scene` — the scene, the stage or the page itself, where the keys act;
 *  · `page` — anything else, a control, the margin's text, a card or the help,
 *    where only `?` does.
 * The canvas takes no focus (it is hidden from assistive technology), so a
 * click on the scene leaves it on the body, which is the scene's scope; from
 * the keyboard, Tab reaches the stage, which is focusable for this.
 */
export type KeyScope = 'typing' | 'scene' | 'page';

const NOT_TEXT = new Set(['button', 'checkbox', 'radio', 'range', 'submit', 'reset', 'color', 'file', 'image']);

export function keyScope(
  t: { tagName: string; id?: string; isContentEditable?: boolean; type?: string; classList?: { contains(c: string): boolean } } | null,
): KeyScope {
  if (!t) return 'scene';
  if (t.isContentEditable || /^(TEXTAREA|SELECT)$/.test(t.tagName)) return 'typing';
  if (t.tagName === 'INPUT' && !NOT_TEXT.has((t.type ?? 'text').toLowerCase())) return 'typing';
  if (t.tagName === 'BODY' || t.tagName === 'HTML' || t.id === 'scene') return 'scene';
  if (t.tagName === 'MAIN' && t.classList?.contains('stage')) return 'scene';
  return 'page';
}

export function installKeyboard(actions: KeyActions): () => void {
  const onKey = (e: KeyboardEvent): void => {
    // Never hijack typing or browser shortcuts.
    if (e.metaKey || e.ctrlKey || e.altKey || e.defaultPrevented) return;
    const scope = keyScope(e.target as HTMLElement | null);
    if (scope === 'typing') return;
    if (e.key === '?' || (e.key === '/' && e.shiftKey)) {
      actions.help();
      e.preventDefault();
      return;
    }
    // A selection is the reader's too: with text held, a key is not a command.
    const selected = !(window.getSelection()?.isCollapsed ?? true);
    if (scope !== 'scene' || selected) return;

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
