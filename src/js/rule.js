// Elementary cellular automata: one row of cells, each next cell decided by
// itself and its two neighbours through an 8-entry rule (Wolfram numbering).
// Shared by the seedbed you play with and the ground beneath the page.

export const RULES = {
  30: 'chaos from one cell',
  90: 'the same triangle at every scale',
  110: 'rich enough to compute anything',
};

export function step(row, rule) {
  const cols = row.length;
  const next = new Uint8Array(cols);
  for (let c = 0; c < cols; c++) {
    const l = row[(c - 1 + cols) % cols], m = row[c], r = row[(c + 1) % cols];
    next[c] = (rule >> ((l << 2) | (m << 1) | r)) & 1;
  }
  return next;
}

// Current rule and seed, so a ground that reseeds itself uses what the
// visitor planted rather than forgetting it
export const sown = { rule: 30, seed: null }; // seed: fractions 0..1 of lit columns
