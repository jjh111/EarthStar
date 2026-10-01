// Elementary cellular automata: one row of cells, each next cell decided by
// itself and its two neighbours through an 8-entry rule (Wolfram numbering).
// Used by the ground beneath the page.

export function step(row, rule) {
  const cols = row.length;
  const next = new Uint8Array(cols);
  for (let c = 0; c < cols; c++) {
    const l = row[(c - 1 + cols) % cols], m = row[c], r = row[(c + 1) % cols];
    next[c] = (rule >> ((l << 2) | (m << 1) | r)) & 1;
  }
  return next;
}
