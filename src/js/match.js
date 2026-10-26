// One rule for every search on the page: the query splits into words, and a
// thing matches when every word appears somewhere in its text. Ideas, the
// Gomens and the documents are all found by it, so the count on the page and
// the list under the field can never disagree.

export function queryWords(q) {
  return String(q || '').toLowerCase().split(/\s+/).filter(Boolean);
}

export function matchesAll(text, words) {
  const hay = String(text || '').toLowerCase();
  return words.every((w) => hay.includes(w));
}

export function matchesAny(text, words) {
  const hay = String(text || '').toLowerCase();
  return words.some((w) => hay.includes(w));
}

// A line of about 72 characters around the first word found, cut between
// words, with an ellipsis wherever it leaves text out. No word in it: its start.
export function snippet(text, words, size = 72) {
  const t = String(text || '').replace(/\s+/g, ' ').trim();
  if (t.length <= size + 8) return t;
  const low = t.toLowerCase();
  let at = Math.min(...words.map((w) => low.indexOf(w)).filter((i) => i >= 0));
  if (!Number.isFinite(at)) at = 0;
  let start = Math.max(0, at - Math.round(size / 3));
  if (start > 0) {
    const sp = t.indexOf(' ', start);
    if (sp >= 0 && sp < at) start = sp + 1;
  }
  let end = Math.min(t.length, start + size);
  if (end < t.length) {
    const sp = t.lastIndexOf(' ', end);
    if (sp > start + size - 12 && sp > at) end = sp;
  }
  return (start > 0 ? '…' : '') + t.slice(start, end).trim() + (end < t.length ? '…' : '');
}
