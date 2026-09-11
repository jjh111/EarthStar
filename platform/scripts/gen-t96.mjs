/**
 * Generate src/models/t96-coeffs.ts from vendor/t96.f.
 *
 *   node scripts/gen-t96.mjs
 *
 * T96 carries roughly nine hundred fitted numbers, spread over forty-seven
 * Fortran `DATA` statements in eighteen different subroutines. Unlike T89's
 * single 210-element block they are not uniform: some are scalars, some are
 * arrays of eighty, several statements initialise more than one array at once,
 * and the array lengths are declared elsewhere — sometimes in a `DIMENSION`,
 * sometimes in a `COMMON` block shared with another routine.
 *
 * So this parser has to actually read the Fortran rather than pattern-match one
 * block. Retyping nine hundred numbers is nine hundred chances to be wrong in a
 * way nothing would catch: a bad digit in one of the eighty R2SHEET harmonics
 * moves the Region 2 Birkeland sheet a little and still draws a magnetosphere.
 *
 * Three pieces of fixed-form Fortran 77 the reader has to handle, all of which
 * appear in the vendored file:
 *
 *  - **Tabs.** Tsyganenko's file uses them in the label field in twenty places.
 *    Under the GNU convention a tab ends the label field, and a digit right
 *    after it marks a continuation — the same role as a mark in column 6.
 *  - **Repeat counts.** `2*-7.D0` is two values, not a product. `XX1` is
 *    declared with twelve elements and its `DATA` lists six items.
 *  - **`D` exponents.** `0.16456D-01` is a double-precision literal; JavaScript
 *    reads `E` only.
 */
import { readFileSync, writeFileSync } from 'node:fs';

/**
 * Split fixed-form Fortran into logical statements, each tagged with the
 * routine it sits in. Comments and blank lines are dropped, continuations are
 * joined, and everything is upper-cased with whitespace removed — Fortran
 * ignores spaces inside statements, so `DATA A1 /.24777,` and `DATAA1/.24777,`
 * are the same statement and comparing them as text should say so.
 */
export function statements(text) {
  const out = [];
  let buf = null;
  let routine = '(file)';
  const flush = () => {
    if (buf === null) return;
    const m = /^(?:SUBROUTINE|(?:DOUBLEPRECISION|REAL\*8|INTEGER)?FUNCTION)([A-Z][A-Z0-9_]*)/.exec(buf);
    if (m) routine = m[1];
    out.push({ routine, text: buf });
    buf = null;
  };

  for (const raw of text.split('\n')) {
    const line = raw.replace(/\r$/, '');
    if (!line.trim()) continue;
    if (/^[cC*!]/.test(line)) continue;

    let stmt;
    let continuation;
    const tab = line.indexOf('\t');
    if (tab >= 0 && tab < 6) {
      const rest = line.slice(tab + 1);
      continuation = /^[1-9]/.test(rest);
      stmt = continuation ? rest.slice(1) : rest;
    } else {
      const body = line.slice(0, 72);
      continuation = body.length > 5 && body[5] !== ' ' && body[5] !== '0';
      stmt = body.slice(6);
    }
    // An inline `!` comment is not part of the statement. The vendored file has
    // several, and one of them sits inside a DATA statement's value list.
    const code = stmt.split('!')[0].toUpperCase().replace(/\s/g, '');
    if (!code) continue;
    if (continuation) buf = (buf ?? '') + code;
    else { flush(); buf = code; }
  }
  flush();
  return out;
}

/**
 * Declared array lengths for one routine, from every place Fortran can state
 * one: `DIMENSION A1(12)`, `DIMENSION D1(3,26)`, and `COMMON /COORD21/
 * XX2(14),YY2(14),ZZ2(14)` — T96 initialises COMMON arrays from `DATA`
 * statements inside the routine that uses them, so the COMMON blocks are not
 * optional reading.
 */
function shapesFor(stmts) {
  const shapes = new Map();
  for (const { text } of stmts) {
    let decl = null;
    if (text.startsWith('DIMENSION')) decl = text.slice('DIMENSION'.length);
    else if (text.startsWith('COMMON/')) decl = text.slice(text.indexOf('/', 1) + 1);
    else if (/^(REAL\*8|REAL|DOUBLEPRECISION|INTEGER)(?!\()/.test(text)) {
      decl = text.replace(/^(REAL\*8|REAL|DOUBLEPRECISION|INTEGER)/, '');
    }
    if (!decl) continue;
    for (const m of decl.matchAll(/([A-Z][A-Z0-9_]*)\(([0-9,]+)\)/g)) {
      const size = m[2].split(',').reduce((n, d) => n * Number(d), 1);
      shapes.set(m[1], size);
    }
  }
  return shapes;
}

/** Fortran numeric literal → JavaScript number. `D` and `E` both mark an exponent. */
function value(token) {
  const n = Number(token.replace(/[dD]([-+]?\d)/, 'e$1'));
  if (!Number.isFinite(n)) throw new Error(`unparsable coefficient: ${token}`);
  return n;
}

/**
 * Every `DATA`-initialised constant in the file, keyed `ROUTINE_NAME`.
 *
 * The routine prefix is not decoration: `D0`, `F`, `BETA`, `A` and `PL1` each
 * appear in more than one subroutine with different values, and a flat
 * namespace would silently keep whichever came last.
 */
export function parseT96(text) {
  const all = statements(text);
  const byRoutine = new Map();
  for (const s of all) {
    if (!byRoutine.has(s.routine)) byRoutine.set(s.routine, []);
    byRoutine.get(s.routine).push(s);
  }

  const out = new Map();
  for (const [routine, stmts] of byRoutine) {
    const shapes = shapesFor(stmts);
    for (const { text: stmt } of stmts) {
      if (!stmt.startsWith('DATA')) continue;
      // One statement may hold several `nlist/clist/` groups: R2_BIRK's reads
      // `DATA DELARG/0.030D0/,DELARG1/0.015D0/,PSI/10.D0/`.
      let rest = stmt.slice(4);
      while (rest) {
        if (rest.startsWith(',')) { rest = rest.slice(1); continue; }
        const open = rest.indexOf('/');
        const close = rest.indexOf('/', open + 1);
        if (open < 0 || close < 0) throw new Error(`malformed DATA in ${routine}: ${stmt}`);
        const names = rest.slice(0, open).split(',').filter(Boolean);

        // Expand repeat counts before assigning: `2*-7.D0` is two values.
        const values = [];
        for (const token of rest.slice(open + 1, close).split(',')) {
          if (!token) continue;
          const rep = /^(\d+)\*(.+)$/.exec(token);
          if (rep) for (let i = 0; i < Number(rep[1]); i++) values.push(value(rep[2]));
          else values.push(value(token));
        }
        rest = rest.slice(close + 1);

        let at = 0;
        for (const name of names) {
          const size = shapes.get(name);
          if (size === undefined) {
            if (at >= values.length) throw new Error(`${routine}.${name}: ran out of values`);
            out.set(`${routine}_${name}`, values[at++]);
          } else {
            if (at + size > values.length) {
              throw new Error(`${routine}.${name}: wanted ${size} values, ${values.length - at} left`);
            }
            out.set(`${routine}_${name}`, values.slice(at, at + size));
            at += size;
          }
        }
        if (at !== values.length) {
          throw new Error(`${routine}: ${values.length - at} values left over after ${names.join(',')}`);
        }
      }
    }
  }
  return out;
}

/**
 * How long a numbered family has to be before it is emitted as an array.
 *
 * `R2SHEET` declares `A1` through `A80` as eighty separate scalars and then
 * writes out a 240-term sum longhand. That sum is a regular double loop — five
 * latitude profiles × four azimuthal harmonics × four radial terms — and
 * transcribing it as 240 named terms would be 240 chances to type `A47` where
 * `A48` belongs, in an expression where no test could tell. As an array it is
 * the loop the Fortran is spelling out.
 *
 * Five, so that the deliberately-short families stay scalars and keep their
 * Fortran names: `TAIL87`'s `B0,B1,B2` are three unrelated amplitudes that only
 * look like a family.
 */
const FAMILY_MIN = 5;

/**
 * Collapse `NAME1…NAMEn` into one array named for the stem.
 *
 * Only an unbroken run from 1 counts, so a gap or a missing member leaves every
 * name alone rather than silently producing a short array. Returns the grouped
 * map; `test/t96.test.ts` re-derives the grouping from the ungrouped parse and
 * checks the generated module against it, so this cannot quietly mis-group.
 */
export function groupFamilies(coeffs) {
  const stems = new Map();
  for (const name of coeffs.keys()) {
    const m = /^(.*[A-Z_])(\d+)$/.exec(name);
    if (!m || Array.isArray(coeffs.get(name))) continue;
    if (!stems.has(m[1])) stems.set(m[1], []);
    stems.get(m[1]).push(Number(m[2]));
  }

  const out = new Map();
  const grouped = new Set();
  for (const [stem, indices] of stems) {
    if (indices.length < FAMILY_MIN) continue;
    indices.sort((a, b) => a - b);
    if (indices.some((n, i) => n !== i + 1)) continue;
    for (const n of indices) grouped.add(`${stem}${n}`);
  }
  for (const [name, v] of coeffs) {
    const m = grouped.has(name) ? /^(.*[A-Z_])(\d+)$/.exec(name) : null;
    if (!m) { out.set(name, v); continue; }
    const stem = m[1].replace(/_$/, '');
    if (!out.has(stem)) out.set(stem, []);
    out.get(stem)[Number(m[2]) - 1] = v;
  }
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const text = readFileSync(new URL('../vendor/t96.f', import.meta.url), 'utf8');
  const coeffs = groupFamilies(parseT96(text));

  const wrap = (nums) => {
    const body = nums.map((v) => String(v)).join(', ');
    return body.length <= 84 ? `[${body}]` : `[\n  ${body.replace(/(.{1,84}) /g, '$1\n  ').trim()},\n]`;
  };
  const lines = [];
  let scalars = 0;
  let arrays = 0;
  for (const [name, v] of coeffs) {
    if (Array.isArray(v)) {
      arrays++;
      lines.push(`export const ${name}: readonly number[] = ${wrap(v)};`);
    } else {
      scalars++;
      lines.push(`export const ${name} = ${v};`);
    }
  }

  const out = `/**
 * Tsyganenko T96 coefficients — GENERATED, do not edit.
 * Source: vendor/t96.f (N. A. Tsyganenko, release dated 22 June 1996).
 * Regenerate: node scripts/gen-t96.mjs
 *
 * Every \`DATA\` constant in the vendored source, named \`ROUTINE_NAME\` after the
 * subroutine it belongs to and the Fortran name it has there. Arrays keep the
 * Fortran's own order and are zero-based here, so the port reads \`A(7)\` as
 * \`A[6]\`; \`test/t96.test.ts\` re-parses the vendored file and asserts this
 * module still matches, so the two cannot drift.
 */

${lines.join('\n')}
`;
  writeFileSync(new URL('../src/models/t96-coeffs.ts', import.meta.url), out);
  console.log(`wrote src/models/t96-coeffs.ts (${scalars} scalars, ${arrays} arrays, `
    + `${[...coeffs.values()].reduce((n, v) => n + (Array.isArray(v) ? v.length : 1), 0)} numbers)`);
}
