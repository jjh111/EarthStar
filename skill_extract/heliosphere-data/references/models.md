# Models the Platform Implements — formulas, citations, unit-test values

Everything here is tier **Modeled** `[D·model]`. Each section gives the formula, the
citation the in-app provenance drawer must show, the inputs, and reference values that a
unit test can assert against. Where a value came from an external calculator, the exact
request is stated so it can be reproduced; where it came from our own implementation, the
implementation was cross-checked against the external calculator first.

Constants used throughout: R_E = 6371.2 km (IGRF reference radius; note the WGS-84
equatorial radius 6378.137 km is *not* the same thing), R_☉ = 695,700 km, 1 AU =
149,597,870.7 km, m_p = 1.6726 × 10⁻²⁷ kg.

## 1. IGRF-14 — Earth's main field

**Citation.** IAGA Working Group V-MOD, *International Geomagnetic Reference Field, 14th
generation* (released November 2024). Coefficients:
`https://www.ngdc.noaa.gov/IAGA/vmod/coeffs/igrf14coeffs.txt` (file dated 2024-11-18,
42.4 KB, CORS `*`; mirrored at NCEI's product page and by BGS). Vendor the file.

**Epoch validity.** Definitive (DGRF) through 2020.0; IGRF 2025.0 provisional; the last
column is secular variation (nT/yr) for **2025.0 → 2030.0**. Beyond 2030.0 the model is
extrapolating — the platform should raise an "IGRF expired" alarm after 2030-01-01 and
warn from 2029-07-01. Before 2025.0, interpolate linearly between the bracketing 5-year
epochs.

**Synthesis** (Schmidt semi-normalized, degree n ≤ 13):

```
V = a Σ_{n=1}^{13} (a/r)^{n+1} Σ_{m=0}^{n} [g_n^m cos(mφ) + h_n^m sin(mφ)] P_n^m(cos θ)
B_r = −∂V/∂r      = Σ (a/r)^{n+2} (n+1) [g cos mφ + h sin mφ] P
B_θ = −(1/r)∂V/∂θ = −Σ (a/r)^{n+2} [g cos mφ + h sin mφ] dP/dθ
B_φ = −(1/(r sin θ))∂V/∂φ = −Σ (a/r)^{n+2} m [−g sin mφ + h cos mφ] P / sin θ
X (north) = −B_θ,  Y (east) = B_φ,  Z (down) = −B_r      (geocentric)
```
with a = 6371.2 km, θ = geocentric colatitude, φ = east longitude. Convert geodetic
(WGS-84) latitude/altitude to geocentric r, θ first, then rotate X, Z back to the geodetic
frame (`X_geodetic = X cos δ + Z sin δ`, `Z_geodetic = Z cos δ − X sin δ`, δ the small
geocentric–geodetic angle). Recursion for P_n^m: `P_n^n = sin θ · P_{n−1}^{n−1}`,
`P_n^m = cos θ · P_{n−1}^m − K_n^m P_{n−2}^m` with `K = ((n−1)² − m²)/((2n−1)(2n−3))`
(K = 0 for n = 1); Schmidt factors `S_n^0 = S_{n−1}^0 (2n−1)/n`,
`S_n^m = S_n^{m−1} √((n−m+1)(δ_{m1}+1)/(n+m))`. Decimal year: `year + day_of_year/days_in_year`.

**Reference values** — BGS web service, `https://geomag.bgs.ac.uk/web_service/GMModels/igrf/14/?latitude=…&longitude=…&altitude=…&date=…&format=json`
(fetched 2026-09-06T17:35Z; no key needed; NCEI's calculator needs a registered key). Our
own Python synthesis (`igrf.py`, the recipe above) reproduces every value to **≤ 1 nT and
≤ 0.001°**:

| Site | lat °N | lon °E | alt km | date | X nT | Y nT | Z nT | H nT | F nT | D ° | I ° |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Boulder (BOU) | 40.137 | −105.237 | 1.682 | 2026-09-06 | 20519 | 2758 | 46764 | 20703 | 51142 | 7.656 | 66.120 |
| Equator/Greenwich | 0 | 0 | 0 | 2025-01-01 | 27457 | −1926 | −15997 | 27524 | 31835 | −4.014 | −30.166 |
| São Paulo (SAA) | −23.55 | −46.63 | 0 | 2026-09-06 | 15979 | −6426 | −14922 | 17222 | 22787 | −21.908 | −40.906 |
| Tromsø | 69.65 | 18.96 | 0 | 2026-09-06 | 10587 | 2107 | 52803 | 10795 | 53896 | 11.256 | 78.446 |
| ISS altitude | 0 | 0 | 400 | 2026-09-06 | 22544 | −1651 | −11655 | 22605 | 25433 | −4.188 | −27.276 |
| Kakioka (KAK), end of validity | 36.23 | 140.19 | 0.036 | 2029-12-31 | 29864 | −4279 | 36232 | 30169 | 47148 | −8.154 | 50.217 |

Sanity anchors: g₁⁰(2025.0) = −29350.0 nT, SV +12.6 nT/yr (dipole weakening); the SAA row
is the weakest surface field of the set (22.8 μT); Tromsø inclination 78° (near-vertical
field lines — where OVATION paints aurora). Test tolerance: 2 nT / 0.01° absolute.

**Cross-check with live data.** USGS BOU 2026-09-06T00:00Z variation values were X ≈ 20394,
Z ≈ 45064 nT (`sources.md` §14) — *variation* data have an arbitrary baseline and will not
equal IGRF; compare `F` against INTERMAGNET `adjusted` data (KAK F ≈ 46965 nT on
2026-09-08 vs IGRF 47148 at 2029-12-31 — same ballpark; the ~180 nT gap is crustal anomaly
plus SV, expected).

## 2. Shue et al. 1998 — magnetopause

**Citation.** Shue, J.-H., et al. (1998), *Magnetopause location under extreme solar wind
conditions*, J. Geophys. Res., 103(A8), 17691–17700, doi:10.1029/98JA01103. (Refines Shue
et al. 1997, doi:10.1029/97JA00196 — cite 1998, whose coefficients are below.)

```
r(θ) = r₀ · ( 2 / (1 + cos θ) )^α
r₀ = ( 10.22 + 1.29 · tanh( 0.184 · (Bz + 8.14) ) ) · Dp^(−1/6.6)         [R_E]
α  = ( 0.58 − 0.007 · Bz ) · ( 1 + 0.024 · ln Dp )
```
θ = angle from the Sun–Earth line (0 at the subsolar point), Bz in nT (GSM), Dp in nPa.
Dynamic pressure from the wind feed:
```
Dp [nPa] = m_p · n · v² · 1e9        (n in cm⁻³ → ×1e6 for m⁻³; v in km/s → ×1e3)
```
Optionally multiply by 1.16 to account for a ~4 % alpha-particle fraction; state which you
did in the provenance drawer.

**Reference values** (own implementation of the formula above; tolerance 0.01 R_E):

| Dp nPa | Bz nT | r₀ R_E | α | r(θ=90°) = r₀·2^α R_E |
|---|---|---|---|---|
| 2 | 0 | **10.252** | 0.5896 | 15.428 |
| 10 | −10 | **6.910** | 0.6859 | 11.117 |
| 1.5 | +2 | 10.767 | 0.5715 | 16.001 |
| 2.0 | −5 | 9.806 | 0.6252 | 15.126 |
| 5 | 0 | 8.923 | 0.6024 | 13.547 |

Dp helpers: n = 5 cm⁻³, v = 400 km/s → **1.338 nPa** (1.552 with the 1.16 factor);
n = 20, v = 800 → 21.409 nPa; the live SWFO-L1 record in `sources.md` §1 (n = 4.82,
v = 340.9) → 0.937 nPa. Guard: clamp Dp to [0.1, 50] nPa and Bz to [−50, 50] nT before
evaluating, and render "no data" if either input is null.

## 3. Farris & Russell 1994 — bow shock standoff

**Citation.** Farris, M. H., and C. T. Russell (1994), *Determining the standoff distance
of the bow shock: Mach number dependence and use of models*, J. Geophys. Res., 99(A9),
17681–17689, doi:10.1029/94JA01020.

```
r_bs = r_mp · ( 1 + 1.1 · ( (γ−1)·M² + 2 ) / ( (γ+1)·(M² − 1) ) )
```
r_mp = subsolar magnetopause distance (from §2), γ = 5/3, M = upstream **magnetosonic**
Mach number (use the sonic/Alfvénic-combined value if available; the platform may fall
back to a fixed M = 8 with the fallback stated). The bracket → 1 + 1.1·(γ−1)/(γ+1) = 1.275
as M → ∞.

**Reference values** (tolerance 0.01 R_E):

| r_mp R_E | M | r_bs R_E |
|---|---|---|
| 10.252 (Dp=2, Bz=0) | 4 | 13.823 |
| 10.252 | 6 | 13.393 |
| 10.252 | 8 | **13.250** |
| 10.252 | 10 | 13.185 |
| 10.0 | 8 | 12.925 |
| 8.0 | 6 | 10.451 |

Shape of the shock surface is not specified by this paper — the platform's flank shape is
an *ambient* choice unless it adopts a published shape model (e.g. Farris et al. 1991
conic); label accordingly.

## 4. Parker spiral — interplanetary field geometry

**Citation.** Parker, E. N. (1958), *Dynamics of the interplanetary gas and magnetic
fields*, Astrophys. J., 128, 664, doi:10.1086/146579.

```
tan ψ = Ω · (r − r₀) · cos λ / v_sw   ≈  Ω r / v_sw   at low heliolatitude λ, r ≫ r₀
Ω = 2π / 25.38 d = 2.865e−6 rad/s  (sidereal Carrington rotation)
```
ψ is the angle between the field and the radial direction. Use the **sidereal** period
(25.38 d) for field geometry; the synodic 27.27 d is what Earth *sees* repeat and gives
44.9° at 400 km/s — state which you used.

**Reference values at r = 1 AU** (tolerance 0.05°):

| v_sw km/s | ψ ° |
|---|---|
| 300 | 55.01 |
| **400** | **46.98** |
| 500 | 40.61 |
| **700** | **31.48** |
| 800 | 28.18 |

Streamline: `φ(r) = φ₀ − Ω (r − r₀)/v_sw` (field lines trail the Sun's rotation; sense
depends on the frame's handedness — check by asserting the 1 AU angle above, not by eye).

## 5. CME cone model and ETA — DONKI conventions

**Citation.** NASA CCMC DONKI (Database Of Notifications, Knowledge, Information),
`https://kauai.ccmc.gsfc.nasa.gov/DONKI/`; cone parameters from SWPC_CAT / StereoCAT
(measurementTechnique field); arrival estimates from WSA–ENLIL+Cone runs at CCMC.

Fields (`sources.md` §10): `time21_5` — the time the CME front reaches **21.5 R_☉**
(the ENLIL inner boundary); `latitude`, `longitude` — Stonyhurst heliographic, degrees,
**west-positive** (`-32` = E32; note SWPC `solar_regions` uses east-positive); `halfAngle`
— cone half-width, degrees; `speed` — km/s, radial; `type` — `S` < 500, `C` 500–999,
`O` 1000–1999, `R` 2000–2999, `ER` ≥ 3000 km/s.

**Earth-directed test**: angular distance between the cone axis (lat, lon) and the
Sun–Earth line (lat ≈ B₀ ≈ 0 to ±7.25°, lon = 0 in Stonyhurst) is < `halfAngle`. Treat
|lon| ≤ halfAngle as the practical test at MVP.

**ETA.** Prefer `enlilList[].estimatedShockArrivalTime` (from `/get/CME`, never from
`CMEAnalysis`) with `estimatedDuration` (h) as the window and label `[D·model · WSA-ENLIL]`.
Otherwise constant-speed from 21.5 R_☉:
```
t_arrival = time21_5 + (1 AU − 21.5 R_☉) / speed = time21_5 + 1.3464e8 km / speed
```
**Reference values** (tolerance 0.1 h): 500 km/s → **74.8 h**; 1085 km/s (the live
2026-09-06T13:58Z analysis) → **34.5 h** → 2026-09-08T00:28Z; 2000 km/s → 18.7 h.
Label the constant-speed result `[D·cone, ±12h]` per the contract — real CMEs decelerate,
so fast events arrive *later* than constant-speed predicts (ENLIL gave 2026-09-08T18:41Z for
the same event, 18 h later than constant speed). Window ±12 h is the contract's; the
observed ENLIL–ballistic gap suggests a wider asymmetric window (−6 h/+24 h) — see the
contract change requests.

## 6. GOES X-ray flare classes

**Citation.** NOAA SWPC, GOES XRS 0.1–0.8 nm ("long") channel; class definitions at
`https://www.spaceweather.gov/noaa-scales-explanation` (fetched 2026-09-06; the
`swpc.noaa.gov` URL 301s there).

| Class | Flux F (W m⁻²), 0.1–0.8 nm | Multiplier |
|---|---|---|
| A | 1e−8 ≤ F < 1e−7 | F / 1e−8 |
| B | 1e−7 ≤ F < 1e−6 | F / 1e−7 |
| C | 1e−6 ≤ F < 1e−5 | F / 1e−6 |
| M | 1e−5 ≤ F < 1e−4 | F / 1e−5 |
| X | F ≥ 1e−4 (open-ended: X10 = 1e−3, X20 = 2e−3) | F / 1e−4 |

Below 1e−8 report "A<1" (or "A0.x"). Format the multiplier to one decimal, truncated not
rounded in SWPC's own products (3.7229e−7 → **B3.7**, matching `xray-flares-latest.json`;
1.1360e−6 → **C1.1**). Tests: `9.99e−6 → C9.9`, `1e−5 → M1.0`, `1.25e−4 → X1.2`, `2.5e−3 → X25.0`.
Use the record with `energy == "0.1-0.8nm"` and the corrected `flux` (not `observed_flux`).

**R-scale (radio blackout) from flux:** R1 = M1 (1e−5), R2 = M5 (5e−5), R3 = X1 (1e−4),
R4 = X10 (1e−3), R5 = X20 (2e−3) — from the same NOAA page.

## 7. Kp ↔ NOAA G-scale

**Citation.** NOAA Space Weather Scales, `https://www.spaceweather.gov/noaa-scales-explanation`
(fetched 2026-09-06T17:35Z). Kp per GFZ Potsdam definition, 3-hourly, thirds.

| G | Kp | NOAA text | Approx. frequency (per 11-yr cycle, NOAA) |
|---|---|---|---|
| G0 | < 5 (0–4⅔) | none | — |
| G1 | 5 | Minor | 1700 (900 days) |
| G2 | 6 | Moderate | 600 (360 days) |
| G3 | 7 | Strong | 200 (130 days) |
| G4 | 8, including 9− | Severe | 100 (60 days) |
| G5 | 9 | Extreme | 4 (4 days) |

Implementation: `G = 0 if kp < 5 else min(5, floor(kp) − 4)` with the special case that Kp
9− (8.67) maps to **G4**, so use `kp >= 8.67 && kp < 9 → G4`, `kp >= 9 → G5`. Thirds
notation: `estimated_kp` 0.33 = "0+", 0.67 = "1−", 1.0 = "1"; SWPC strings `1M`/`0P`/`1Z`
= 1−/0+/0. Tests: 4.67 → G0; 5.0 → G1; 5.67 → G1; 6.33 → G2; 8.67 → G4; 9.0 → G5.
The live forecast file already carries `noaa_scale: "G1"` at `kp: 4.67` for 2026-09-08T06Z
— i.e. **NOAA rounds the forecast Kp up** (4.67 ≈ "5−" → G1) in that product; when
displaying NOAA's own forecast use their `noaa_scale`, and apply the table above only to
measured Kp.

**S-scale (≥10 MeV proton flux, pfu):** S1 10, S2 100, S3 1e3, S4 1e4, S5 1e5 — for the
particle feeds, not in MVP scope but on the same page.

## 8. Sub-solar point / terminator (for the day–night texture)

Use `astronomy-engine` (2.1.19) `SunPosition`/`Equator` → sub-solar latitude = solar
declination, sub-solar longitude = −(GMST − RA☉) mod 360. Reference: at 2026-09-06T17:25Z
the sub-solar latitude is ≈ +6.5° (a fortnight before the September equinox) and the
sub-solar longitude ≈ −81° (17:25 UT → local noon near 81°W; equation of time ≈ +2 min). Tolerance 1° — the point is
to catch sign and frame errors, not to test the library.

---

**Provenance display strings** (Accuracy Charter): `IGRF-14 (IAGA 2024)`, `Shue et al. 1998`,
`Farris & Russell 1994`, `Parker 1958`, `DONKI cone / WSA-ENLIL (CCMC)`, `NOAA SWPC scales`,
`astronomy-engine 2.1.19 (VSOP87)`.
