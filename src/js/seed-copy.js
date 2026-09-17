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
    const phrase = seed.querySelector('.seed-phrase p');
    if (phrase) parts.push(phrase.textContent.replace(/\s*<br>\s*/g, '\n').trim());
    return parts.join('\n\n');
  };

  let resetTimer = null;
  btn.addEventListener('click', async () => {
    const text = seedText();
    if (!text) return;
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      // Clipboard API can be denied (permissions policy, non-secure context).
      // Fall back to the legacy path rather than failing silently.
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { ok = document.execCommand('copy'); } catch { ok = false; }
      ta.remove();
    }
    btn.classList.toggle('is-copied', ok);
    btn.setAttribute('aria-label', ok ? 'Copied' : 'Copy failed — select the text manually');
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      btn.classList.remove('is-copied');
      btn.setAttribute('aria-label', 'Copy the seed: coherence line, equations, and seed phrase');
    }, 2000);
  });
}
