# Staying fresh

**What this covers:** what updates by itself, what has an expiry date on it, and what a
person has to do. Written 2026-09-08 against a live audit of every feed.

The Viewer has no server. It is a static bundle on GitHub Pages that fetches ~30 public
endpoints from the reader's own browser. That is why it costs nothing to run and why it
cannot quietly serve yesterday's numbers — there is no cache between the reader and NOAA.
It is also why nothing on our side notices when an upstream product is renamed.

---

## 1. What updates by itself

| Lane | Cadence | Contents |
|------|---------|----------|
| Snapshot | 60 s | wind, Kp, X-ray, protons, electrons, GOES magnetometer, Dst, scales, alerts |
| Slow | 5 min | OVATION aurora grid, solar regions, DONKI CMEs, L1 ephemerides |
| On demand | first open | solar-cycle record (1749→now), SUVI/LASCO frame lists |
| Scene | every frame | planet, Sun and Moon positions, from the clock |

Plus a catch-up refresh on `visibilitychange`, so a backgrounded tab is never showing an
hour-old number the moment it is looked at again.

**No reading is baked into the bundle.** Not one. The 3 332-month sunspot record is
fetched like everything else.

### When a feed fails

`NowStore.refresh()` never discards the last good envelope. The lane ages visibly, the
value keeps its own timestamp, `no data` appears as literal text and never as a number or
a dash, and the four slow-lane feeds fail independently of each other and of the snapshot.

A **cold start** is the one case with nothing to fall back on, so `getJson` retries once
— for a transport that failed to deliver, never for a status the server returned. That is
not theoretical: it was observed on the OVATION grid, the largest payload we fetch, where
`res.json()` threw on a body that parsed cleanly a moment later.

---

## 2. What has an expiry date

### IGRF-14 — expires 2030.0

Past the window the synthesis keeps extrapolating the secular variation and returns
numbers exactly as convincing as the day before. Two things now say so: the citation
changes wording (`igrfCitation`), and the Checks tab carries a row reporting the
remaining runway on every run, so the expiry announces itself years early rather than
firing on the day.

**To renew:** IAGA publishes IGRF-15 around late 2029. Drop the coefficient file into
`vendor/`, run `node scripts/gen-igrf.mjs`, update `IGRF_EPOCH` / `IGRF_VALID_UNTIL`. The
BGS reference values in `test/igrf14.test.ts` need refetching for the new model.

### Spacecraft identity — continuous

NOAA repoints the `primary` alias between GOES satellites and does **not** move the fleet
together: on 2026-09-08 the X-ray primary was GOES-18 while SUVI's and the magnetometer's
was GOES-19. Every attribution is therefore read from the data at runtime — the
`satellite` field for X-rays, particles and the magnetometer; the `_g19_` token in the
filename for SUVI imagery. Nothing here needs maintaining, which is the point.

The same applies at L1: DSCOVR has already left the ephemeris feed, and the table adapted
with no code change. A genuinely new monitor gets a live position and no descriptive note
until someone adds one line to `SPACECRAFT_NOTE` — an omission, never an invention.

### Endpoint URLs — whenever SWPC reorganises

Thirty-one URLs across `src/data/`. A rename shows the reader `no data · HTTP 404` on
that lane alone. This is the failure `npm run health` exists to catch (§3).

---

## 3. `npm run health`

Probes every endpoint the Viewer uses, plus the deployed page and the assets it names.
Exit 0 only when all of them answered, sent a usable CORS header, and parsed.

The catalogue is **derived from the source**, never maintained beside it: the script reads
the URLs out of `src/**/*.ts`. Add an endpoint and it is checked on the next run. Use a
template placeholder the substitution table does not know, and the run reports the URL as
`UNCHECKED` and fails — silence is never an outcome.

Two details that matter:

- It sends an `Origin` header. Without one, neither host returns
  `Access-Control-Allow-Origin` at all, and a CORS assertion made from a bare Node fetch
  would pass on a server that had just switched CORS off.
- It retries once on a transport failure, never on an HTTP status. A run of 35 live
  fetches loses one occasionally; on a schedule that becomes a false alarm, and an alarm
  that is wrong sometimes gets muted.

`.github/workflows/upstream-health.yml` runs it every six hours and keeps **one** standing
issue — commented on while the failure persists, closed when the feeds answer again.

---

## 4. The calendar

| When | What | Who |
|------|------|-----|
| Every 6 h | `npm run health` via Actions | automatic |
| On failure | one standing GitHub issue | automatic |
| ~Q1 2030 | IGRF-15 coefficients | a person |
| When a new L1 monitor appears | one line in `SPACECRAFT_NOTE` | a person, optional |

Everything else — values, timestamps, spacecraft identities, the aurora, the Sun's
picture, the sunspot record — takes care of itself, or says plainly that it could not.
