/**
 * The seed copy button — one click puts the whole seed on the clipboard:
 * the coherence line, both equations, and the full seed phrase, as plain
 * text in reading order. The seed phrase is included whether or not the
 * <details> is open — the button copies the seed, not the current fold state.
 */

export function initSeedCopy() {
  const btn = document.getElementById('seedCopy');
  if (!btn) return;

  const seedText = () => {
    const seed = document.querySelector('.seed');
    if (!seed) return '';
    const parts = [];
    const plain = seed.querySelector('.seed-plain');
    if (plain) parts.push(plain.textContent.trim());
    const prime = seed.querySelector('.equation-prime');
    if (prime) parts.push(prime.textContent.trim());
    const main = seed.querySelector('.equation-main');
    if (main) parts.push(main.textContent.trim());
    // The phrase's lines are <br>s, which textContent drops: walk its nodes
    const phrase = seed.querySelector('.seed-phrase p');
    if (phrase) {
      parts.push(Array.from(phrase.childNodes).map((n) => (n.nodeName === 'BR' ? '\n' : n.textContent))
        .join('').split('\n').map((line) => line.trim()).join('\n').trim());
    }
    return parts.join('\n\n');
  };

  // The outcome is said once, by the status beside the button (a live region),
  // as the reader's Copy link says its own
  const status = document.getElementById('seedStatus');
  let resetTimer = null;
  btn.addEventListener('click', async () => {
    const text = seedText();
    if (!text) return;
    const ok = await copyText(text);
    btn.classList.toggle('is-copied', ok);
    if (status) status.textContent = ok ? 'Seed copied' : 'Copy failed — select the text manually';
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      btn.classList.remove('is-copied');
      if (status) status.textContent = '';
    }, 2000);
  });
}

// Put text on the clipboard; true if it got there. Shared with the archive
// reader's Copy link.
export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard API can be denied (permissions policy, non-secure context).
    // Fall back to the legacy path rather than failing silently. The field
    // goes in the focused element's parent, so a modal's inert backdrop
    // cannot keep it from taking the selection.
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    const back = document.activeElement;
    (back && back !== document.body ? back.parentNode : document.body).appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch { ok = false; }
    ta.remove();
    back?.focus?.({ preventScroll: true });
    return ok;
  }
}
