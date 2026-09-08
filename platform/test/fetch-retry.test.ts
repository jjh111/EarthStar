/**
 * The retry, and its limits.
 *
 * `DirectSource` is the only thing between the reader and thirty public feeds,
 * and on a cold start it has no previous envelope to fall back on. One dropped
 * body therefore costs a whole refresh interval of blankness — five minutes,
 * for the aurora. These assert that a transport failure is tried again and
 * that a server's own answer is not.
 */

import { describe, expect, it, vi, afterEach } from 'vitest';
import { DirectSource } from '../src/data/direct-source.js';

const ok = (body: unknown) => new Response(JSON.stringify(body), { status: 200 });

afterEach(() => { vi.unstubAllGlobals(); });

/** Counts attempts per URL while letting every other feed answer emptily. */
function harness(failing: string, fail: () => Response | Promise<Response>) {
  const attempts = new Map<string, number>();
  vi.stubGlobal('fetch', async (input: RequestInfo | URL) => {
    const url = String(input);
    const n = (attempts.get(url) ?? 0) + 1;
    attempts.set(url, n);
    if (url.includes(failing) && n === 1) return fail();
    return ok([]);
  });
  return attempts;
}

describe('cold-start resilience', () => {
  it('tries again when the body will not parse', async () => {
    const attempts = harness('ovation',
      () => new Response('{"truncated": ', { status: 200 }));
    await new DirectSource().fetchAurora();
    const url = [...attempts.keys()].find((u) => u.includes('ovation'))!;
    expect(attempts.get(url)).toBe(2);
  });

  it('tries again when the connection drops', async () => {
    const attempts = harness('ovation', () => { throw new TypeError('Failed to fetch'); });
    await new DirectSource().fetchAurora();
    const url = [...attempts.keys()].find((u) => u.includes('ovation'))!;
    expect(attempts.get(url)).toBe(2);
  });

  it('does not retry a status the server actually returned', async () => {
    const attempts = harness('ovation', () => new Response('nope', { status: 404 }));
    const env = await new DirectSource().fetchAurora();
    const url = [...attempts.keys()].find((u) => u.includes('ovation'))!;
    expect(attempts.get(url)).toBe(1);
    expect(env.data).toBeNull();
  });

  it('reports no data rather than a number when both attempts fail', async () => {
    vi.stubGlobal('fetch', async (input: RequestInfo | URL) =>
      String(input).includes('ovation')
        ? (() => { throw new TypeError('Failed to fetch'); })()
        : ok([]));
    const env = await new DirectSource().fetchAurora();
    expect(env.data).toBeNull();
  });
});
