/**
 * The subject registry, and the four properties that stop it drifting.
 *
 * The registry exists because the same fact used to live in three or four
 * places and those copies came apart — the Situation Report went on describing
 * the field lines as "clamped" for a whole session after the clamp was
 * deleted. Consolidating the prose only helps if nothing can quietly grow a
 * second copy or a missing one, so these are the tests that make that true.
 */

import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { SUBJECTS, TIER_LABEL, bodySubjectId, subject, subjectsOfKind } from '../src/hud/subjects.js';
import { INSTRUMENTS } from '../src/hud/instruments.js';

describe('every subject is complete', () => {
  it('has an id that says what kind of thing it is', () => {
    const seen = new Set<string>();
    for (const s of SUBJECTS) {
      expect(seen.has(s.id), `duplicate id ${s.id}`).toBe(false);
      seen.add(s.id);
      const prefix = s.kind === 'measurement' ? 'inst' : s.kind;
      expect(s.id.startsWith(`${prefix}.`), `${s.id} is kind ${s.kind}`).toBe(true);
    }
  });

  it('says what it does NOT say', () => {
    // The whole point. A subject that ships without its limits is the failure
    // mode the registry exists to prevent: a confident claim with no edge.
    for (const s of SUBJECTS) {
      expect(s.limits.trim().length, `${s.id} has no limits`).toBeGreaterThan(40);
      expect(s.oneLine.trim().length, `${s.id} has no one-liner`).toBeGreaterThan(10);
      expect(s.meaning.trim().length, `${s.id} has no meaning`).toBeGreaterThan(40);
      expect(s.howMade.trim().length, `${s.id} does not say how it is made`).toBeGreaterThan(20);
    }
  });

  it('makes every ambient subject declare whether it carries a measurement', () => {
    // `[M]` is two different things and the charter says so in prose: the wind
    // particles' rate and speed are real, the starfield carries nothing. The
    // author has to decide which they just drew — `undefined` is not an answer.
    for (const s of SUBJECTS) {
      if (s.tier === 'M') {
        expect(s.keyedTo !== undefined, `${s.id} is [M] and does not declare keyedTo`).toBe(true);
      } else {
        // An [E] or [D] subject is not artwork keyed to something. It is the thing.
        expect(s.keyedTo, `${s.id} is [${s.tier}] and should not be keyed`).toBeUndefined();
      }
    }
  });

  it('cites a source for everything modelled or measured', () => {
    for (const s of SUBJECTS) {
      if (s.tier === 'M') continue;
      expect(s.sources.length, `${s.id} cites nothing`).toBeGreaterThan(0);
      for (const src of s.sources) {
        expect(src.name.trim().length, `${s.id} has an unnamed source`).toBeGreaterThan(0);
      }
    }
  });

  it('resolves every id it points at', () => {
    // `related[]` is the graph a reader walks. A dead link is a dead end.
    for (const s of SUBJECTS) {
      for (const id of s.related) {
        expect(subject(id), `${s.id} → ${id} does not exist`).not.toBeNull();
      }
      expect(s.related, `${s.id} relates to itself`).not.toContain(s.id);
    }
  });

  it('leaves nothing stranded', () => {
    // Every subject should be reachable from another, or be one of the roots a
    // surface opens directly. An orphan is prose nobody will ever see.
    const pointedAt = new Set(SUBJECTS.flatMap((s) => s.related));
    const roots = new Set([
      ...INSTRUMENTS.map((i) => i.subject),
      ...subjectsOfKind('layer').map((s) => s.id),
      ...subjectsOfKind('body').map((s) => s.id),
    ]);
    for (const s of SUBJECTS) {
      expect(pointedAt.has(s.id) || roots.has(s.id), `${s.id} is unreachable`).toBe(true);
    }
  });
});

describe('the registry and the app cannot come apart', () => {
  it('gives every instrument tile a subject', () => {
    for (const inst of INSTRUMENTS) {
      const s = subject(inst.subject);
      expect(s, `${inst.id} → ${inst.subject} does not exist`).not.toBeNull();
      expect(s!.kind).toBe('measurement');
    }
    // And no measurement subject is left behind after its tile is removed.
    const claimed = new Set(INSTRUMENTS.map((i) => i.subject));
    for (const s of subjectsOfKind('measurement')) {
      expect(claimed.has(s.id), `${s.id} has no tile`).toBe(true);
    }
  });

  it('gives every body the scene can show a subject', () => {
    // The names are the scene's own spelling, from scales.ts and the picker.
    for (const name of ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter',
      'Saturn', 'Uranus', 'Neptune', 'Moon']) {
      expect(subject(bodySubjectId(name)), `no subject for ${name}`).not.toBeNull();
    }
  });

  /**
   * The one that matters most, and the reason it reads source text rather than
   * building a scene: every `Object3D.name` the renderer assigns is either
   * claimed by a layer subject or is explicitly structural. Add a layer without
   * an explanation and this fails; delete a layer and leave its explanation
   * behind and it fails the other way.
   *
   * Reading the source is the same trick `test/igrf14.test.ts` uses against the
   * vendored coefficient file, and it works here for the same reason: it needs
   * no WebGL context and it cannot be satisfied by a mock.
   */
  it('accounts for every object the scene names', () => {
    const dir = new URL('../src/scene/', import.meta.url);
    const names = new Set<string>();
    for (const file of readdirSync(dir)) {
      if (!file.endsWith('.ts')) continue;
      const text = readFileSync(new URL(file, dir), 'utf8');
      // `x.name = 'literal'` and `x.name = \`prefix-${...}\`` both count; the
      // template form contributes its literal prefix.
      for (const m of text.matchAll(/\.name\s*=\s*'([^']+)'/g)) names.add(m[1]!);
      for (const m of text.matchAll(/\.name\s*=\s*`([^`$]*)\$\{/g)) {
        if (m[1]) names.add(m[1]);
      }
      // `l.name = cond ? 'a' : 'b'`
      for (const m of text.matchAll(/\.name\s*=\s*[^;]*\?\s*'([^']+)'\s*:\s*'([^']+)'/g)) {
        names.add(m[1]!); names.add(m[2]!);
      }
    }

    // Containers and per-body meshes: structure and bodies, not layers. Bodies
    // have their own subjects; these are the groups the scene hangs things on.
    const STRUCTURAL = new Set(['earth-fixed-frame', 'planet-', 'moon']);

    const claimed = new Set(subjectsOfKind('layer').flatMap((s) => s.scene ?? []));
    const unexplained = [...names].filter((n) => !claimed.has(n) && !STRUCTURAL.has(n));
    expect(unexplained, `scene objects with no subject: ${unexplained.join(', ')}`)
      .toEqual([]);

    const stale = [...claimed].filter((n) => !names.has(n));
    expect(stale, `subjects naming objects the scene no longer draws: ${stale.join(', ')}`)
      .toEqual([]);
  });
});

describe('tier labels', () => {
  it('names all three, and only three', () => {
    expect(Object.keys(TIER_LABEL).sort()).toEqual(['D', 'E', 'M']);
    expect(TIER_LABEL.E).toBe('Measured');
    expect(TIER_LABEL.D).toBe('Modelled');
    expect(TIER_LABEL.M).toBe('Ambient');
  });
});

describe('the prose is prose', () => {
  it('carries no markup, because it is escaped on the way out', () => {
    // Every surface escapes these strings, so `**bold**` renders as asterisks
    // and `<em>` renders as angle brackets. Caught in the browser the first
    // time; asserted here so it cannot come back.
    const fields = (s: { meaning: string; limits: string; oneLine: string;
      howMade: string; toPromote?: string }) =>
      [s.oneLine, s.meaning, s.howMade, s.limits, s.toPromote ?? ''];
    for (const s of SUBJECTS) {
      for (const text of fields(s)) {
        expect(text, `${s.id} contains markdown emphasis`).not.toMatch(/\*\*|__/);
        expect(text, `${s.id} contains a tag`).not.toMatch(/<[a-z/]/i);
      }
    }
  });
});
