/**
 * Every *thing* the Viewer shows, in one registry.
 *
 * A measurement, a model, a drawn layer, a body, an idea — each is a `Subject`
 * with the same shape, and the tile detail, the scene card, the Situation
 * Report, the Sources list and the Checks rows are all views of it.
 *
 * Before this, the same fact lived in three or four places. The Shue
 * magnetopause was described in a tile's prose, in a Situation Report
 * paragraph, in the Sources model list and in a Checks row, and those copies
 * drifted: the report went on calling the field lines "clamped" for a whole
 * session after the clamp was deleted. That is an accuracy-charter failure,
 * not untidiness, and one registry is the fix.
 *
 * ## On `limits`, and why it is required
 *
 * The charter's tiers say what a thing *is*. `limits` says what it is **not** —
 * the sentence a reader needs and that nothing in the app used to carry. It is
 * required on every subject. That sounds punitive for ambient artwork until
 * you notice that `[M]` is already two different things, which
 * `VIEWER_PLATFORM_PLAN.md` §2 states in prose: *"their rate and speed come
 * from real density and velocity."*
 *
 *  · **keyed** ambience — invented form, real number. `keyedTo` names the
 *    quantity. The limit then writes itself, always the same shape: this
 *    dimension is real, that one is invented.
 *  · **unkeyed** ambience — the starfield, the glow. Carries nothing, says so.
 *
 * So `keyedTo` is `string | null` with no default: the author must decide which
 * kind of artwork they just drew.
 *
 * ## On `toPromote`
 *
 * The ambition is a full model of solar-system energetics; the build is
 * incremental and must stay predictable. `toPromote` is where the gap gets
 * recorded — one sentence saying what would raise a subject's tier or sharpen
 * it — so the ambition is written down next to the stand-in without being
 * built. The registry doubles as the honest ledger of what is real, what is
 * standing in, and what the next increment would be.
 */

export type Tier = 'E' | 'D' | 'M';

export type SubjectKind =
  /** A value read from an instrument. */
  | 'measurement'
  /** A named, cited model computed from measured inputs. */
  | 'model'
  /** Something drawn in the 3D scene. */
  | 'layer'
  /** A body in the scene: the Sun, a planet, the Moon. */
  | 'body'
  /** An idea the others refer to, so the graph can be walked. */
  | 'concept';

export interface SourceRef {
  name: string;
  url?: string;
  /** DOI or citation, when the source is a paper rather than a feed. */
  ref?: string;
}

export interface Subject {
  id: string;
  kind: SubjectKind;
  tier: Tier;
  label: string;
  /** What it is, in a breath. The hover label and the index line. */
  oneLine: string;
  /** Why it is on a space-weather instrument. */
  meaning: string;
  /** Where the number, or the shape, comes from. */
  howMade: string;
  /** What it does NOT say. Required; see the header. */
  limits: string;
  /**
   * `[M]` only: the real quantity the artwork carries, or null when it carries
   * none. Required on every ambient subject, absent on every other kind — an
   * `[E]` or `[D]` subject is not artwork keyed to something, it is the thing.
   */
  keyedTo?: string | null;
  sources: SourceRef[];
  /** Other subject ids. This is what makes the physics navigable. */
  related: string[];
  /** What would raise the tier, or sharpen it within one. */
  toPromote?: string;
  /**
   * `layer` only: the `Object3D.name`s this subject accounts for. The drift
   * test asserts these against the scene source, both ways — a layer drawn
   * without an explanation fails, and so does an explanation left behind after
   * its layer is deleted.
   */
  scene?: string[];
}

/* ------------------------------------------------------------------ *
 * Concepts — small, and only where the graph needs a waypoint
 * ------------------------------------------------------------------ */

const CONCEPTS: Subject[] = [
  {
    id: 'concept.reconnection',
    kind: 'concept', tier: 'D', label: 'Magnetic reconnection',
    oneLine: 'Where the Sun’s field and Earth’s splice together, and energy crosses in.',
    meaning: 'The interplanetary magnetic field is the Sun’s own field, dragged out by the '
      + 'wind. When it arrives pointing south it opposes Earth’s northward field at the '
      + 'dayside boundary, the two break and rejoin, and a field line that had both feet on '
      + 'Earth ends up with one foot on Earth and the other threading back to the corona. '
      + 'That is a literal magnetic circuit from the Sun’s surface to the polar cap, and '
      + 'it is how the solar wind’s energy gets inside a cavity that is otherwise closed '
      + 'to it. Everything a geomagnetic storm does begins here.',
    howMade: 'Not drawn. It is the mechanism behind three things that are: southward Bz on '
      + 'the panel, the open field lines in violet, and the aurora.',
    limits: 'Nothing in the Viewer models reconnection. The violet lines are open because '
      + 'IGRF + T89 does not close them, not because reconnection opened them — T89 has no '
      + 'IMF term at all, so a southward Bz changes the drawn shape by exactly nothing. The '
      + 'panel can tell you the conditions for reconnection are present; the scene cannot '
      + 'yet show it happening.',
    sources: [{ name: 'Dungey 1961, Interplanetary magnetic field and the auroral zones',
      ref: 'doi:10.1103/PhysRevLett.6.47' }],
    related: ['inst.bz', 'layer.field-lines', 'model.t89', 'layer.aurora', 'inst.protons'],
    toPromote: 'T96 carries IMF By/Bz and dynamic pressure, and every input it needs is '
      + 'already fetched. Dayside opening under southward Bz would then be in the geometry '
      + 'rather than only in the prose.',
  },
  {
    id: 'concept.gsm',
    kind: 'concept', tier: 'D', label: 'GSM coordinates and the dipole tilt',
    oneLine: 'The frame every external-field model is written in: +X to the Sun, dipole in the X–Z plane.',
    meaning: 'A magnetosphere is organised by two directions and nothing else — where the '
      + 'Sun is, and which way the dipole leans. GSM is the frame built from exactly those '
      + 'two. The angle between the dipole and the frame’s vertical is the dipole tilt, '
      + 'which swings ±32.6° over a year and about ±9° again over each day as the offset '
      + 'pole turns. It decides whether the tail current sheet warps north or south, and it '
      + 'is why the same solar wind produces a different magnetosphere in June and December.',
    howMade: 'Built from the sub-solar point (astronomy-engine) and the IGRF-14 dipole axis. '
      + 'Checked against the Python geopack package at sixteen epochs across the annual and '
      + 'diurnal cycles: 0.0044° of tilt, 0.0070° of axis, and that residual is the solar '
      + 'ephemeris rather than the frame.',
    limits: 'The sunward axis uses the apparent Sun rather than the geometric one, which '
      + 'differs by aberration — 20.5 arcseconds, four orders below anything that matters '
      + 'here, and it keeps one definition of where the Sun is across the whole app.',
    sources: [{ name: 'Hapgood 1992, Space physics coordinate transformations',
      ref: 'doi:10.1016/0032-0633(92)90012-D' }],
    related: ['model.t89', 'model.igrf14', 'layer.field-lines'],
  },
  {
    id: 'concept.tiers',
    kind: 'concept', tier: 'M', label: 'Measured, Modelled, Ambient',
    oneLine: 'Three tiers, on everything: what was read from an instrument, what was computed, and what was drawn.',
    meaning: 'Every element here belongs to exactly one tier and says which. '
      + '[E] Measured is a value read from an instrument, with its timestamp and latency. '
      + '[D] Modelled is computed from measured inputs by a named, cited model. '
      + '[M] Ambient is artwork — and splits again, because artwork can still carry a real '
      + 'number: the wind particles’ rate and speed come from the measured density and '
      + 'speed, while the starfield carries nothing at all. Where a layer is keyed to a '
      + 'real quantity, its card says which dimension is real and which is invented.',
    howMade: 'Asserted in code and enforced by tests: no subject may ship without saying '
      + 'what it does not say, and no ambient subject may ship without declaring whether it '
      + 'carries a measurement.',
    limits: 'A tier is a claim about provenance, not about accuracy. A [D] model can be '
      + 'cited, current, correctly implemented and still wrong about the sky — which is why '
      + 'the Checks tab holds independent models against each other rather than trusting the '
      + 'badges.',
    keyedTo: null,
    sources: [{ name: 'Earth Star viewer platform plan, §2' }],
    related: ['concept.reconnection'],
  },
];

/* ------------------------------------------------------------------ *
 * Models
 * ------------------------------------------------------------------ */

const MODELS: Subject[] = [
  {
    id: 'model.igrf14',
    kind: 'model', tier: 'D', label: 'IGRF-14',
    oneLine: 'The Earth’s own field, from the inside: a spherical-harmonic model to degree 13.',
    meaning: 'The internal field, generated by the moving iron of the outer core. It is a '
      + 'tilted, offset dipole plus higher-degree structure, and the higher-degree terms are '
      + 'why the South Atlantic Anomaly exists — a real weak spot where trapped radiation '
      + 'reaches lower altitude and satellites take more dose. The model is the reason the '
      + 'drawn field lines have the shape they do rather than a shape we chose.',
    howMade: 'IAGA’s published coefficients, vendored and generated into the bundle rather '
      + 'than fetched. Epoch 2025.0 with secular variation extrapolated to now. Checked '
      + 'against the BGS calculator at six points: worst residual 0.509 nT, which is BGS’s '
      + 'own integer rounding.',
    limits: 'It contains no external currents whatsoever. On its own it would extend '
      + 'forever, with no compressed dayside, no tail and no ring current — everything that '
      + 'makes a magnetosphere a magnetosphere comes from T89 beside it. The secular '
      + 'variation is a linear extrapolation and expires in 2030.',
    sources: [{ name: 'IGRF-14 (IAGA, Nov 2024)',
      url: 'https://www.ngdc.noaa.gov/IAGA/vmod/coeffs/igrf14coeffs.txt' }],
    related: ['model.t89', 'layer.field-lines', 'concept.gsm', 'inst.geosync'],
    toPromote: 'IGRF-15 is due in 2030 and drops in through scripts/gen-igrf.mjs.',
  },
  {
    id: 'model.t89',
    kind: 'model', tier: 'D', label: 'Tsyganenko T89c',
    oneLine: 'The external field of the magnetospheric currents — what makes the shape a magnetosphere.',
    meaning: 'Four current systems deform the Earth’s field into the shape it actually has: '
      + 'the Chapman–Ferraro currents that compress the dayside, the cross-tail sheet that '
      + 'stretches the nightside into lobes, the ring current that inflates the inner region '
      + '— the one Dst measures — and their closure. T89 is an empirical fit to all of them, '
      + 'built from IMP, HEOS and ISEE spacecraft data, and it is what turned the drawn '
      + 'field from a dipole into a magnetosphere.',
    howMade: 'A line-by-line port of Tsyganenko’s own Fortran, with the 210 coefficients '
      + 'generated from the vendored source rather than retyped. Verified against the Python '
      + 'geopack package over 1540 points spanning the inner region, dayside, cusps, tail, '
      + 'lobes and flanks: worst deviation 4.3×10⁻¹⁴ nT, which is floating-point round-off '
      + 'and nothing else. No JavaScript port existed before this one.',
    limits: 'It knows a Kp band and the dipole tilt, and nothing else. There is no IMF term at '
      + 'all: a '
      + 'southward Bz opens the real dayside and changes this model by nothing. No solar-wind '
      + 'pressure either. And Kp enters as one of seven discrete fits, so the field steps '
      + 'between bands rather than gliding: Kp 3.0 and Kp 3.9 draw exactly the same shape. '
      + 'It is fitted inside 70 Rₑ and has no magnetopause in it, so the trace stops at the '
      + 'edge of what it describes rather than following it into nonsense.',
    sources: [{ name: 'Tsyganenko 1989, A magnetospheric magnetic field model with a warped '
      + 'tail current sheet', ref: 'Planet. Space Sci. 37(1) 5–20' }],
    related: ['model.igrf14', 'layer.field-lines', 'concept.gsm', 'concept.reconnection',
      'model.shue1998', 'inst.kp', 'inst.dst'],
    toPromote: 'T96 adds IMF By/Bz and dynamic pressure, and the Viewer already fetches '
      + 'every one of its inputs. TS05 adds storm-time ring-current dynamics after that.',
  },
  {
    id: 'model.shue1998',
    kind: 'model', tier: 'D', label: 'Shue et al. 1998 magnetopause',
    oneLine: 'Where the solar wind’s pressure balances the Earth’s field — the edge of the cavity.',
    meaning: 'The magnetopause is not a wall; it is the surface where two pressures balance. '
      + 'Shue’s fit gives its distance as a function of the wind’s dynamic pressure and the '
      + 'IMF Bz, which is why the drawn boundary moves in when the wind hits harder and when '
      + 'the field turns south. Its nose distance is the single number that says how much '
      + 'room the magnetosphere has — and whether geostationary orbit is still inside it.',
    howMade: 'r = r₀(2/(1+cosθ))^α, with r₀ and α from the propagated solar wind every '
      + 'minute. Drawn as a wireframe rather than a shell, because a translucent closed '
      + 'surface hides the field lines inside it and the field lines are the subject.',
    limits: 'Truncated at 100° from the sunward axis: the surface flares without bound and '
      + 'the real magnetotail runs for hundreds of Earth radii, so what is drawn is cut, not '
      + 'ended. It is also an average fit — the real boundary ripples, and surface waves '
      + 'travel along it. And it is a boundary drawn *around* the field rather than one the '
      + 'field produces, which is why the Checks tab holds it against T89’s own standoff.',
    sources: [{ name: 'Shue et al. 1998', ref: 'doi:10.1029/98JA01103' }],
    related: ['layer.magnetopause', 'model.farris-russell', 'inst.mpause', 'inst.geosync',
      'model.t89'],
  },
  {
    id: 'model.farris-russell',
    kind: 'model', tier: 'D', label: 'Farris & Russell 1994 bow shock',
    oneLine: 'Where the supersonic solar wind is forced to slow down, upstream of the magnetopause.',
    meaning: 'The solar wind arrives faster than the speed at which the plasma can carry a '
      + 'signal, so it cannot flow around the magnetosphere smoothly — it shocks. The bow '
      + 'shock is where that happens, a few Earth radii ahead of the magnetopause, and the '
      + 'heated, slowed, turbulent plasma between the two is the magnetosheath.',
    howMade: 'The standoff distance is Farris & Russell’s relation to the magnetopause '
      + 'standoff and the magnetosonic Mach number. The flaring away from the nose is drawn '
      + 'with the Shue law scaled to it.',
    limits: 'Farris & Russell pin the nose; the rest of the drawn surface is the Shue shape '
      + 'borrowed and scaled, which is a rendering choice rather than a fitted result. More '
      + 'importantly, the shock is not really what deflects the wind — the deflection is the '
      + 'IMF *draping* through the sheath between the two surfaces, and two wireframe domes '
      + 'cannot say that.',
    sources: [{ name: 'Farris & Russell 1994', ref: 'doi:10.1029/94JA00170' }],
    related: ['layer.bow-shock', 'model.shue1998', 'layer.solar-wind'],
    toPromote: 'Draped sheath field lines between the two surfaces would show the '
      + 'deflection itself. That is its own brief.',
  },
  {
    id: 'model.ovation',
    kind: 'model', tier: 'D', label: 'OVATION Prime',
    oneLine: 'NOAA’s short-range forecast of where the aurora will be bright.',
    meaning: 'A statistical model relating the solar wind at L1 to the energy flux poured '
      + 'into the upper atmosphere at auroral latitudes, 30 to 90 minutes ahead. It is the '
      + 'only genuinely predictive product on the panel: everything else says what is, this '
      + 'says what is about to be.',
    howMade: 'Fetched from NOAA SWPC as a 1° global grid of aurora probability and drawn as '
      + 'a texture on the globe.',
    limits: 'A probability of visible aurora, not a brightness and not a guarantee. It is '
      + 'organised around the geomagnetic pole rather than the geographic one and brightens '
      + 'toward magnetic midnight, so the oval is never centred on either pole. Cloud, '
      + 'moonlight and daylight decide what anyone actually sees, and none of the three are '
      + 'in it.',
    sources: [{ name: 'OVATION Prime (NOAA SWPC)',
      url: 'https://services.swpc.noaa.gov/json/ovation_aurora_latest.json' }],
    related: ['layer.aurora', 'inst.kp', 'concept.reconnection'],
  },
  {
    id: 'model.geospace-dst',
    kind: 'model', tier: 'D', label: 'NOAA Geospace (Dst)',
    oneLine: 'A magnetohydrodynamic run at NOAA, driven by the L1 wind, producing the ring-current index.',
    meaning: 'Dst is the closest thing space weather has to a single number for the size of '
      + 'a storm, because it tracks the energy actually stored in the inner magnetosphere '
      + 'rather than the disturbance at any one ground station.',
    howMade: 'The University of Michigan BATS-R-US/RCM coupled model, run operationally by '
      + 'NOAA and consumed here as a product.',
    limits: 'This is a *modelled* Dst, not Kyoto’s measured index — which has no route into '
      + 'a browser. Because the model propagates the wind to Earth it runs ahead of the '
      + 'clock, so the value shown is the newest one that has actually arrived and the panel '
      + 'says how far its forecast reaches beyond that.',
    sources: [{ name: 'NOAA Geospace / Univ. Michigan BATS-R-US + RCM',
      url: 'https://services.swpc.noaa.gov/json/geospace/geospace_dst_1_hour.json' }],
    related: ['inst.dst', 'model.t89', 'inst.kp'],
  },
  {
    id: 'model.enlil',
    kind: 'model', tier: 'D', label: 'WSA-Enlil',
    oneLine: 'NOAA’s heliospheric wind forecast, from the Sun’s surface field out past Earth.',
    meaning: 'A three-dimensional magnetohydrodynamic simulation of the solar wind filling '
      + 'the inner heliosphere, driven by solar magnetograms with CMEs inserted as cones. It '
      + 'is where CME arrival times come from, and it is the reason a forecast can say '
      + 'anything at all about tomorrow.',
    howMade: 'Consumed as a published time series at Earth. Not run here.',
    limits: 'A forecast, with a forecast’s error — CME arrival times are routinely wrong by '
      + 'several hours. The Checks tab holds its wind speed against the measured one at the '
      + 'same moment, with a deliberately wide tolerance, because that row is there to catch '
      + 'a misread column rather than to grade the forecast.',
    sources: [{ name: 'WSA-Enlil (NOAA SWPC)',
      url: 'https://services.swpc.noaa.gov/json/enlil_time_series.json' }],
    related: ['layer.cme-cones', 'model.cme-cone', 'inst.speed'],
  },
  {
    id: 'model.cme-cone',
    kind: 'model', tier: 'D', label: 'CME cone model',
    oneLine: 'A coronal mass ejection as a cone of plasma expanding radially from the Sun.',
    meaning: 'A CME is a billion tonnes of magnetised plasma thrown off the Sun. The cone '
      + 'model is the working approximation used to say where one is heading and when it '
      + 'arrives: a direction, a half-width and a speed, fitted to coronagraph images.',
    howMade: 'Cone parameters from NASA DONKI’s analysed CMEs — latitude, longitude, half '
      + 'angle, speed at 21.5 solar radii — propagated radially at constant speed.',
    limits: 'A real CME is a magnetic flux rope, not a cone of uniform plasma, and its '
      + 'internal field — which decides whether it causes a storm at all — is not in the '
      + 'cone parameters. It also decelerates or accelerates toward the ambient wind speed, '
      + 'which constant-speed propagation does not do. Arrival times carry a stated window.',
    sources: [{ name: 'NASA DONKI', url: 'https://kauai.ccmc.gsfc.nasa.gov/DONKI/' }],
    related: ['layer.cme-cones', 'model.enlil', 'inst.xray'],
  },
  {
    id: 'model.astronomy-engine',
    kind: 'model', tier: 'D', label: 'astronomy-engine',
    oneLine: 'Every position in the scene: planets, Moon, the sub-solar point, the solar rotation axis.',
    meaning: 'The scene is not a diagram — the planets are where they actually are, the '
      + 'terminator falls where the Sun actually is, and Saturn’s rings lie in Saturn’s own '
      + 'equatorial plane. All of that comes from one ephemeris, computed in the browser.',
    howMade: 'A VSOP87/Meeus-derived ephemeris library. Positions are produced in the '
      + 'true-equator-of-date frame and mapped to the scene by a pure rotation, so obliquity '
      + 'and sidereal spin fall out of the geometry rather than being applied by hand.',
    limits: 'Positions only. Nothing here models how the planets influence each other or '
      + 'the wind — Jupiter’s magnetosphere is described in its card and drawn nowhere.',
    sources: [{ name: 'astronomy-engine (VSOP87/Meeus)',
      url: 'https://github.com/cosinekitty/astronomy' }],
    related: ['body.earth', 'layer.terminator', 'concept.gsm'],
    toPromote: 'Checked against JPL Horizons at recorded epochs; tightening that comparison '
      + 'is cheap, and is the prerequisite for anything that models interactions rather '
      + 'than positions.',
  },
];

/* ------------------------------------------------------------------ *
 * Layers — what is actually drawn
 * ------------------------------------------------------------------ */

const LAYERS: Subject[] = [
  {
    id: 'layer.field-lines',
    kind: 'layer', tier: 'D', label: 'Magnetic field lines',
    oneLine: 'The Earth’s field, traced through IGRF-14 + T89c. Blue closes, violet stays open.',
    meaning: 'These are the paths a charged particle is bound to follow, and they are the '
      + 'shield: a blue line has both feet on Earth and traps what is on it, a violet line '
      + 'has one foot on Earth and leads out toward the solar wind. The boundary between the '
      + 'two is the edge of the polar cap, and it moves equatorward as a storm grows.',
    howMade: 'Runge–Kutta integration along the total field from seed points at 120 km '
      + 'altitude, in both directions, until each end reaches the surface or leaves the '
      + 'model. Retraced when the Kp band changes or the Earth has turned 3° under the '
      + 'Sun-fixed external field, spread across frames so no single one stalls.',
    limits: 'Open does not mean reconnected — these lines are open because the model does '
      + 'not close them, and T89 has no IMF term, so a southward Bz changes nothing here. '
      + 'Lines that leave the model are cut and labelled, not ended: the tail continues far '
      + 'past 70 Rₑ. Brightness is uniform and carries no flux information. The eighty drawn '
      + 'lines are a legible sample of a continuum, not a count of anything.',
    sources: [{ name: 'IGRF-14 (IAGA)' }, { name: 'Tsyganenko 1989 (T89c)' }],
    related: ['model.igrf14', 'model.t89', 'concept.reconnection', 'layer.magnetopause',
      'concept.gsm'],
    toPromote: 'Line brightness keyed to flux-tube volume, which the trace already computes '
      + 'and discards, would make the shield show where the field is strong rather than '
      + 'only where it goes.',
    scene: ['field-lines-igrf14-t89', 'field-line-closed', 'field-line-open'],
  },
  {
    id: 'layer.magnetopause',
    kind: 'layer', tier: 'D', label: 'Magnetopause',
    oneLine: 'The teal wireframe: the modelled edge of the magnetosphere, moving with the wind.',
    meaning: 'The outer wall of the cavity the Earth’s field holds open in the solar wind. '
      + 'Watch it compress when the dynamic pressure rises — that is the shield being '
      + 'pushed in, and when it goes inside 6.6 Rₑ the geostationary satellites are outside '
      + 'it.',
    howMade: 'The Shue et al. 1998 surface, rebuilt from the propagated solar wind, oriented '
      + 'to the Sun rather than to the Earth’s spin.',
    limits: 'Drawn sparsely on purpose: a dense surface reads as a glass dome, and a '
      + 'magnetopause is a pressure balance, not a wall. Truncated at 100° from the nose. '
      + 'With no measured wind there is nothing to compute and nothing is drawn.',
    sources: [{ name: 'Shue et al. 1998', ref: 'doi:10.1029/98JA01103' }],
    related: ['model.shue1998', 'layer.bow-shock', 'inst.mpause', 'layer.field-lines'],
    scene: ['magnetopause-shue1998', 'magnetosphere'],
  },
  {
    id: 'layer.bow-shock',
    kind: 'layer', tier: 'D', label: 'Bow shock',
    oneLine: 'The orange wireframe: where the supersonic wind is forced to slow, ahead of the magnetopause.',
    meaning: 'The outermost surface in the scene, and the first thing the solar wind meets. '
      + 'Between it and the magnetopause is the magnetosheath — slowed, heated, turbulent '
      + 'plasma flowing around the cavity.',
    howMade: 'Farris & Russell 1994 standoff from the Shue nose and the Mach number, flared '
      + 'with the Shue law scaled to it.',
    limits: 'Only the nose distance is fitted; the rest of the shape is borrowed. The '
      + 'sheath between the two surfaces is drawn as empty when it is the most physically '
      + 'active region in the picture.',
    sources: [{ name: 'Farris & Russell 1994', ref: 'doi:10.1029/94JA00170' }],
    related: ['model.farris-russell', 'layer.magnetopause', 'layer.solar-wind'],
    scene: ['bow-shock-farris-russell'],
  },
  {
    id: 'layer.aurora',
    kind: 'layer', tier: 'D', label: 'Aurora oval',
    oneLine: 'OVATION Prime’s forecast probability, painted on the globe.',
    meaning: 'Where the energy coming in down the open field lines is being deposited in the '
      + 'atmosphere. The oval encircles the geomagnetic pole rather than the geographic one, '
      + 'and it is displaced toward magnetic midnight — both of those are visible in the '
      + 'shape, and both are checked.',
    howMade: 'NOAA’s 1° probability grid, sampled onto the globe’s surface.',
    limits: 'A probability of visible aurora over the next half hour, not brightness and '
      + 'not certainty. Nothing here knows about cloud, moonlight or daylight. When the grid '
      + 'fails to arrive no oval is drawn, and the report says so rather than showing a '
      + 'quiet one.',
    sources: [{ name: 'OVATION Prime (NOAA SWPC)' }],
    related: ['model.ovation', 'layer.field-lines', 'concept.reconnection', 'inst.kp'],
    scene: ['earth-globe'],
  },
  {
    id: 'layer.solar-wind',
    kind: 'layer', tier: 'M', label: 'Solar wind stream',
    oneLine: 'Ambient particles — their rate and speed are the measured wind, the look is invented.',
    meaning: 'The wind is a real, continuous flow of plasma at a few hundred kilometres per '
      + 'second, and it is invisible. These particles are a way of feeling its speed and '
      + 'density change, and of seeing it part around the magnetosphere.',
    howMade: 'A GPU particle stream whose emission rate follows the measured proton density '
      + 'and whose travel speed follows the measured bulk speed, parting at the modelled '
      + 'magnetopause.',
    limits: 'The real wind is not made of visible grains and does not look like this. Two '
      + 'dimensions carry information — rate and speed — and everything else about the '
      + 'appearance is invented: size, colour, spacing, the individual tracks. Nothing here '
      + 'is a particle trajectory.',
    keyedTo: 'Proton density (rate) and bulk speed (velocity), both measured at L1',
    sources: [{ name: 'NOAA SWPC real-time solar wind' }],
    related: ['inst.speed', 'inst.density', 'layer.bow-shock', 'concept.tiers'],
    scene: ['solar-wind-stream'],
  },
  {
    id: 'layer.cme-cones',
    kind: 'layer', tier: 'D', label: 'CME cones',
    oneLine: 'Analysed coronal mass ejections, expanding from the Sun at their measured speed.',
    meaning: 'Where the big storms come from. The cone shows the direction and angular '
      + 'width fitted to coronagraph images, and its leading edge is where the model puts '
      + 'the front now — so a cone that has grown wide enough to contain the Earth is one '
      + 'worth reading the arrival time for.',
    howMade: 'DONKI cone parameters propagated radially at their fitted speed, with arrival '
      + 'times from Enlil where they exist.',
    limits: 'A cone is a working approximation of a magnetic flux rope. The thing that '
      + 'decides whether a CME causes a storm — the direction of the field inside it — is '
      + 'not in the cone parameters and cannot be known until it arrives at L1.',
    sources: [{ name: 'NASA DONKI' }],
    related: ['model.cme-cone', 'model.enlil', 'inst.bz', 'inst.xray'],
    scene: ['cme-cones', 'cme-'],
  },
  {
    id: 'layer.sun-disc',
    kind: 'layer', tier: 'E', label: 'Solar imagery',
    oneLine: 'Real telescope frames of the Sun, projected back onto a sphere.',
    meaning: 'Each wavelength shows a different height and temperature in the solar '
      + 'atmosphere — the photosphere in visible light, the million-degree corona in extreme '
      + 'ultraviolet. Active regions bright in EUV are where flares come from, and coronal '
      + 'holes, the dark patches, are where the fast wind escapes.',
    howMade: 'GOES SUVI and SDO frames, re-projected onto the sphere about the true solar '
      + 'rotation axis for the moment of the exposure, so features land where they were.',
    limits: 'A projection of a flat image onto a sphere is only correct near disc centre; '
      + 'toward the limb it stretches, and the far hemisphere is not observed at all. The '
      + 'part of each frame beyond the limb is corona, not surface, and is shown on a '
      + 'separate card rather than smeared onto the sphere.',
    sources: [{ name: 'GOES SUVI / SDO (NOAA SWPC)' }],
    related: ['layer.coronagraph', 'layer.active-regions', 'inst.xray', 'body.sun'],
    scene: ['sun-disc'],
  },
  {
    id: 'layer.coronagraph',
    kind: 'layer', tier: 'E', label: 'Coronagraphs (LASCO C2, C3)',
    oneLine: 'The corona with the Sun occulted, shown at the distance it actually covers.',
    meaning: 'A coronagraph blocks the disc so the faint corona around it can be seen — '
      + 'which is where a CME is first visible, before anything at Earth has changed. C2 '
      + 'covers roughly 2 to 6 solar radii, C3 out to 30.',
    howMade: 'SOHO LASCO frames on a plane through the Sun, scaled from each frame’s own '
      + 'occulting-disc calibration so the Sun sits inside its cutout at the true distance.',
    limits: 'A coronagraph image is a plane, and the corona is not. The Viewer states its '
      + 'coverage as a ladder in solar radii because there is a real gap: nothing in this '
      + 'set observes between about 1.5 and 2.3 R☉. That gap is shown, not filled.',
    sources: [{ name: 'SOHO LASCO (NASA/ESA, via NOAA SWPC)' }],
    related: ['layer.sun-disc', 'layer.cme-cones', 'body.sun'],
    toPromote: 'MLSO K-Cor covers 1.05–3 R☉ and would close the gap exactly, but it sends '
      + 'no CORS header, is ground-based and weather-bound, and its recent coverage is '
      + 'intermittent. It is recorded as a mirror candidate.',
    scene: ['sun-disc'],
  },
  {
    id: 'layer.active-regions',
    kind: 'layer', tier: 'E', label: 'Active regions',
    oneLine: 'NOAA’s numbered sunspot groups, marked at their reported heliographic positions.',
    meaning: 'Active regions are where the Sun’s field is concentrated and tangled, and '
      + 'that is where flares and CMEs originate. A big, complex region rotating onto the '
      + 'Earth-facing side is the standard reason to expect a bad week.',
    howMade: 'Positions from NOAA’s solar region summary, placed on the sphere by the same '
      + 'projection as the imagery — which is why the Checks tab can hold one against the '
      + 'other and catch a mirrored image.',
    limits: 'A marker, not a measurement of the region’s size or complexity. The summary is '
      + 'issued daily, so positions lag the imagery by up to a day of solar rotation.',
    sources: [{ name: 'NOAA SWPC solar region summary' }],
    related: ['layer.sun-disc', 'inst.xray', 'body.sun'],
    scene: ['active-regions', 'region-'],
  },
  {
    id: 'layer.l1-monitors',
    kind: 'layer', tier: 'E', label: 'L1 monitors',
    oneLine: 'The spacecraft the wind readings come from, at their real positions.',
    meaning: 'Everything on the left-hand panel about the solar wind is measured *here*, a '
      + 'million and a half kilometres sunward, roughly an hour upstream. The markers are '
      + 'drawn because that hour is the warning, and because the spacecraft are not exactly '
      + 'on the Sun–Earth line — they orbit around L1, tens of Earth radii off-axis, so '
      + 'what they measure is not precisely what hits us.',
    howMade: 'Positions from NOAA’s published spacecraft ephemerides, in GSE, rotated into '
      + 'the scene.',
    limits: 'Markers, not models of the spacecraft. Which one is feeding the panel changes '
      + 'without notice — the feed interleaves several — so the panel names the source of '
      + 'each reading rather than assuming.',
    sources: [{ name: 'NOAA SWPC RTSW ephemerides' }],
    related: ['inst.speed', 'inst.bz', 'inst.density'],
    scene: ['l1-monitors', 'l1-', 'l1-marker-', 'l1-dropline-'],
  },
  {
    id: 'layer.terminator',
    kind: 'layer', tier: 'D', label: 'Terminator and surface',
    oneLine: 'Day and night on the globe, from the real sub-solar point.',
    meaning: 'The line between day and night is where the sunlit ionosphere ends, and that '
      + 'matters: radio blackouts from a flare affect the sunlit hemisphere only, and the '
      + 'aurora is only visible on the dark side.',
    howMade: 'The sub-solar latitude and longitude from the ephemeris, applied in the '
      + 'globe’s shader over NASA Blue Marble imagery.',
    limits: 'A hard shading boundary stands in for a soft one; real twilight is broad, and '
      + 'the atmosphere bends light past the geometric edge. The surface imagery is a fixed '
      + 'composite, not today’s cloud.',
    sources: [{ name: 'astronomy-engine' }, { name: 'NASA Blue Marble' }],
    related: ['model.astronomy-engine', 'layer.aurora', 'inst.xray', 'body.earth'],
    scene: ['earth-globe', 'earth-fixed-frame'],
  },
  {
    id: 'layer.orbits',
    kind: 'layer', tier: 'D', label: 'Orbits and the Sun–Earth line',
    oneLine: 'Planetary orbits, and the line the whole instrument is organised around.',
    meaning: 'The Sun–Earth line is the axis of everything here: the magnetosphere points '
      + 'down it, the wind arrives along it, and the L1 monitors sit on it. The orbits give '
      + 'the scene its scale.',
    howMade: 'Orbits sampled from the ephemeris; the Sun–Earth line drawn between the two '
      + 'computed positions.',
    limits: 'At Globe scale distances are logarithmically compressed and bodies are '
      + 'enlarged, so no distance in the picture is readable as a ratio. The True scale '
      + 'toggle removes the compression, and the label always says which is in force.',
    sources: [{ name: 'astronomy-engine' }],
    related: ['model.astronomy-engine', 'layer.l1-monitors'],
    scene: ['sun-earth-line', 'orbit-', 'saturn-rings'],
  },
  {
    id: 'layer.starfield',
    kind: 'layer', tier: 'M', label: 'Starfield',
    oneLine: 'Ambient backdrop. Carries no information at all.',
    meaning: 'Depth and orientation for the eye, and nothing more.',
    howMade: 'Generated points on a distant sphere.',
    limits: 'Not a star catalogue. These are not real stars, they are not in real positions, '
      + 'and no constellation in this scene is one. Nothing about them responds to anything '
      + 'measured.',
    keyedTo: null,
    sources: [],
    related: ['concept.tiers'],
    scene: ['starfield'],
  },
];

/* ------------------------------------------------------------------ *
 * Measurements — one per tile. `meaning` moved here verbatim from
 * instruments.ts, which now carries only how to render the value.
 * ------------------------------------------------------------------ */

/** The feed every [E] reading on the panel comes through. */
const SWPC: SourceRef = { name: 'NOAA SWPC', url: 'https://services.swpc.noaa.gov/' };

const MEASUREMENTS: Subject[] = [
  {
    id: 'inst.kp', kind: 'measurement', tier: 'E', label: 'Planetary K',
    oneLine: 'A 0–9 index of how disturbed the Earth’s field is, worldwide.',
    meaning: 'A 0–9 index of global geomagnetic disturbance, derived from ground '
      + 'magnetometers. Below 5 is quiet to unsettled; 5 and above is a geomagnetic '
      + 'storm, and the aurora moves toward the equator.',
    howMade: 'NOAA’s estimated Kp, updated every minute from a network of ground '
      + 'magnetometers, ahead of the definitive three-hourly index.',
    limits: 'A range over three hours, quantised to thirds, and a planetary average — it '
      + 'says nothing about where the disturbance is. It is also the *only* thing driving '
      + 'T89, so the drawn magnetosphere inherits its coarseness: seven bands, stepping.',
    sources: [SWPC],
    related: ['model.t89', 'layer.field-lines', 'inst.dst', 'model.ovation'],
  },
  {
    id: 'inst.bz', kind: 'measurement', tier: 'E', label: 'IMF Bz',
    oneLine: 'The north–south tilt of the Sun’s field as it arrives. Southward is the dangerous one.',
    meaning: 'The north–south component of the interplanetary magnetic field, in GSM '
      + 'coordinates. This is the single most useful predictor on the panel: when Bz '
      + 'turns southward it opposes Earth’s field, magnetic reconnection opens the '
      + 'magnetosphere, and energy pours in. Sustained Bz below about −10 nT is what '
      + 'storms are made of.',
    howMade: 'Measured by a magnetometer on whichever spacecraft is currently feeding '
      + 'NOAA’s real-time solar wind stream at L1, about an hour upstream.',
    limits: 'One point in a wind that is not uniform: the spacecraft sits tens of Earth '
      + 'radii off the Sun–Earth line, so what it measures is not exactly what arrives. '
      + 'And nothing in the rendered magnetosphere responds to it — T89 has no IMF term, '
      + 'so this number predicts a storm the drawn shape cannot show.',
    sources: [SWPC],
    related: ['concept.reconnection', 'model.t89', 'inst.bt', 'layer.solar-wind',
      'model.shue1998'],
  },
  {
    id: 'inst.bt', kind: 'measurement', tier: 'E', label: 'IMF total',
    oneLine: 'How much interplanetary field there is, whichever way it points.',
    meaning: 'Total strength of the interplanetary magnetic field. A high Bt means '
      + 'there is a lot of field available to turn southward.',
    howMade: 'The magnitude of the same L1 magnetometer vector Bz comes from.',
    limits: 'A magnitude says nothing about direction, and direction is what decides '
      + 'whether a storm happens. High Bt with steady northward Bz is quiet.',
    sources: [SWPC],
    related: ['inst.bz', 'concept.reconnection'],
  },
  {
    id: 'inst.speed', kind: 'measurement', tier: 'E', label: 'Wind speed',
    oneLine: 'How fast the solar wind is arriving — and how much warning L1 buys.',
    meaning: 'Bulk speed of the solar wind at L1, about a million miles sunward of Earth. '
      + 'Around 300–400 km/s is slow and quiet; above 600 km/s usually means a coronal '
      + 'hole stream. Speed sets how hard the wind presses on the magnetosphere, and how '
      + 'long the warning is: at 400 km/s, L1 buys roughly an hour.',
    howMade: 'Measured by the plasma instrument on the L1 monitor now feeding the stream.',
    limits: 'Bulk speed of the protons, not the speed of any disturbance travelling '
      + 'through the wind — a shock front moves faster than the plasma behind it.',
    sources: [SWPC],
    related: ['inst.density', 'layer.solar-wind', 'layer.l1-monitors', 'model.enlil'],
  },
  {
    id: 'inst.density', kind: 'measurement', tier: 'E', label: 'Proton density',
    oneLine: 'How thick the wind is. With speed, it sets the pressure on the shield.',
    meaning: 'Protons per cubic centimetre in the solar wind. With speed it sets the '
      + 'dynamic pressure that compresses the magnetopause.',
    howMade: 'Measured by the same L1 plasma instrument as the speed.',
    limits: 'Protons only. Alpha particles are roughly 4% by number and carry about 16% '
      + 'of the mass, so the true dynamic pressure is a little above what this implies.',
    sources: [SWPC],
    related: ['inst.speed', 'inst.mpause', 'model.shue1998', 'layer.solar-wind'],
  },
  {
    id: 'inst.xray', kind: 'measurement', tier: 'E', label: 'X-ray class',
    oneLine: 'Flare brightness in soft X-rays, on the A–B–C–M–X scale. Arrives at light speed.',
    meaning: 'Solar soft X-ray flux measured by GOES, expressed on the NOAA flare scale. '
      + 'Each letter is ten times the one before: A, B, C, M, X. M and X class flares '
      + 'cause radio blackouts on Earth’s sunlit side within minutes — X-rays arrive '
      + 'at the speed of light, so there is no warning.',
    howMade: 'The 0.1–0.8 nm channel of the X-ray sensor on a GOES spacecraft at '
      + 'geostationary orbit, converted to the NOAA letter class.',
    limits: 'A whole-Sun measurement: it cannot say where on the disc the flare was, and '
      + 'position is what decides whether its particles reach us. A flare is also not a '
      + 'CME — the two often come together and either can happen alone.',
    sources: [SWPC],
    related: ['layer.active-regions', 'inst.protons', 'model.cme-cone', 'layer.sun-disc'],
  },
  {
    id: 'inst.protons', kind: 'measurement', tier: 'E', label: 'Radiation (S)',
    oneLine: 'Solar protons at geostationary orbit — the hazard that endangers people, not equipment.',
    meaning: 'Integral proton flux above 10 MeV at geostationary orbit, and the NOAA S '
      + 'scale it defines. S1 begins at 10 particle flux units, and each step up is ten '
      + 'times the last. This is the one space-weather hazard that endangers people rather '
      + 'than equipment: at S3 and above, aviation crews on polar routes accumulate real '
      + 'dose and astronauts outside a hull are at risk. Protons from a flare can arrive '
      + 'within tens of minutes, far ahead of any CME.',
    howMade: 'Measured by the particle detectors on a GOES spacecraft.',
    limits: 'Measured at one point outside the atmosphere. Dose on the ground or in an '
      + 'aircraft depends on the atmosphere above you and on the geomagnetic cutoff at '
      + 'your latitude, and neither is modelled here.',
    sources: [SWPC],
    related: ['concept.reconnection', 'inst.xray', 'body.moon', 'inst.electrons'],
  },
  {
    id: 'inst.electrons', kind: 'measurement', tier: 'E', label: 'Electron flux',
    oneLine: 'High-energy electrons that bury themselves in satellite insulation over days.',
    meaning: 'Integral electron flux above 2 MeV at geostationary orbit. Sustained flux '
      + 'above 1000 particle flux units drives deep dielectric charging — electrons bury '
      + 'themselves inside insulating materials until the material discharges through the '
      + 'spacecraft. It is a leading cause of satellite anomalies, and it builds over days '
      + 'rather than minutes.',
    howMade: 'Measured by the particle detectors on a GOES spacecraft.',
    limits: 'The hazard is the accumulated dose over days, so an instantaneous number '
      + 'above the alert level is much less informative than a week spent there.',
    sources: [SWPC],
    related: ['inst.protons', 'inst.geosync'],
  },
  {
    id: 'inst.geosync', kind: 'measurement', tier: 'E', label: 'Field at 6.6 Rₑ',
    oneLine: 'The only in-situ magnetic measurement here — and the one real check on the drawn shield.',
    meaning: 'Total magnetic field measured by GOES at geostationary orbit, 6.6 Earth '
      + 'radii out. This is the only in-situ magnetic measurement on the panel, and it is '
      + 'the one check available on the modelled shield: when the magnetopause is pushed '
      + 'inside 6.6 Rₑ, the spacecraft finds itself in the solar wind and the field it '
      + 'measures collapses. The reading normally sits below the dipole value for that '
      + 'distance, because the ring current and magnetopause currents subtract from '
      + 'Earth’s own field — the size of that deficit is itself a storm indicator.',
    howMade: 'The magnetometer on a GOES spacecraft, compared here against the dipole '
      + 'value for that distance.',
    limits: 'One point on one orbit, and the spacecraft’s own thrusters disturb it — a '
      + 'reading during an arcjet firing is flagged rather than used.',
    sources: [SWPC],
    related: ['model.igrf14', 'model.shue1998', 'inst.mpause', 'inst.dst'],
  },
  {
    id: 'inst.dst', kind: 'measurement', tier: 'D', label: 'Ring current',
    oneLine: 'How much energy the storm has actually put into the inner magnetosphere.',
    meaning: 'Dst measures how much the ring current — a torus of trapped ions drifting '
      + 'westward around Earth at a few Earth radii — is subtracting from the surface '
      + 'magnetic field. It is the closest thing space weather has to a single number for '
      + 'the size of a storm, because it tracks the energy actually stored in the inner '
      + 'magnetosphere rather than the disturbance at any one station. Quiet is above '
      + '−30 nT; below −100 nT is an intense storm.',
    howMade: 'NOAA’s Geospace run — the Michigan BATS-R-US/RCM model driven by the L1 '
      + 'solar wind.',
    limits: 'MODELLED, not Kyoto’s measured index, which has no route into a browser. '
      + 'Because the model propagates the wind to Earth it runs ahead of the clock, so the '
      + 'value shown is the newest that has actually arrived and the panel says how far '
      + 'the forecast reaches beyond it. T89 does respond to the ring current, but through '
      + 'Kp rather than through this number.',
    sources: [SWPC],
    related: ['model.geospace-dst', 'model.t89', 'inst.kp', 'inst.geosync'],
  },
  {
    id: 'inst.mpause', kind: 'measurement', tier: 'D', label: 'Magnetopause',
    oneLine: 'How much room the magnetosphere has on the sunward side, right now.',
    meaning: 'Modelled distance from Earth’s centre to the sunward edge of the '
      + 'magnetosphere, in Earth radii, computed from the live solar wind. Typically '
      + '10–11 Rₑ. Under storm pressure it can be pushed inside 7 Rₑ — closer than '
      + 'geostationary orbit at 6.6 Rₑ, which then sits outside the magnetosphere and '
      + 'exposed to the solar wind directly.',
    howMade: 'The Shue et al. 1998 nose distance from the propagated wind’s dynamic '
      + 'pressure and Bz.',
    limits: 'A modelled average surface, not a measurement. The Checks tab holds it '
      + 'against T89’s own standoff, which is driven by Kp and shares none of its inputs; '
      + 'the two routinely differ by an Earth radius or two, and that gap is real rather '
      + 'than a fault in either.',
    sources: [{ name: 'Shue et al. 1998', ref: 'doi:10.1029/98JA01103' }],
    related: ['model.shue1998', 'layer.magnetopause', 'inst.geosync', 'model.t89'],
  },
];

/* ------------------------------------------------------------------ *
 * Bodies — `meaning` moved verbatim from body-facts.ts
 * ------------------------------------------------------------------ */

const EPHEM: SourceRef = { name: 'astronomy-engine (VSOP87/Meeus)',
  url: 'https://github.com/cosinekitty/astronomy' };

/** Every body shares its provenance and its scale caveat; only the physics differs. */
function body(id: string, label: string, oneLine: string, meaning: string,
  limits: string, related: string[]): Subject {
  return {
    id: `body.${id}`, kind: 'body', tier: 'D', label, oneLine, meaning,
    howMade: 'Position, distance, light-time and apparent size computed from the '
      + 'ephemeris at the moment of the query, not tabulated.',
    limits: `${limits} At Globe scale the rendered size and the orbital distance are both `
      + 'compressed; the True scale toggle removes the compression and the label says '
      + 'which is in force.',
    sources: [EPHEM],
    related,
  };
}

const BODIES: Subject[] = [
  body('sun', 'Sun', 'The source of everything on this panel.',
    'Every quantity on this panel starts here. The photosphere is 5 800 K and the '
    + 'corona above it is two million — the unsolved problem that makes the solar wind '
    + 'possible at all.',
    'The disc you see is imagery projected onto a sphere, not a model of the Sun.',
    ['layer.sun-disc', 'layer.coronagraph', 'layer.active-regions', 'inst.xray']),
  body('mercury', 'Mercury', 'A magnetosphere so small the wind can crush it to the ground.',
    'No atmosphere and only a weak global field, about 1% of Earth’s, so the solar '
    + 'wind reaches the surface. MESSENGER found its magnetosphere can be crushed to the '
    + 'ground during a strong event.',
    'Nothing of Mercury’s own field or magnetosphere is drawn here.',
    ['body.earth', 'layer.solar-wind']),
  body('venus', 'Venus', 'No global field — the wind strips its atmosphere directly.',
    'No global magnetic field. The wind interacts directly with the ionosphere and '
    + 'strips the upper atmosphere, which is part of why Venus has almost no water left.',
    'The induced ionospheric interaction is not modelled or drawn.',
    ['body.earth', 'body.mars']),
  body('earth', 'Earth', 'The only planet here with a strong, stable dipole.',
    'The only planet here with a strong, stable dipole. Everything else in this '
    + 'instrument is about what that field is doing today.',
    'The globe’s surface imagery is a fixed composite, not today’s cloud.',
    ['model.igrf14', 'model.t89', 'layer.field-lines', 'layer.terminator']),
  body('mars', 'Mars', 'Lost its global field, and much of its atmosphere with it.',
    'Lost its global field roughly four billion years ago and kept only crustal '
    + 'patches. MAVEN measured the wind stripping the atmosphere at a rate that, over '
    + 'that span, accounts for much of what is missing.',
    'The crustal field patches are real and are not drawn.',
    ['body.earth', 'body.venus', 'layer.solar-wind']),
  body('jupiter', 'Jupiter', 'The largest magnetosphere in the solar system, powered from inside.',
    'The largest magnetosphere in the solar system — some twenty thousand times '
    + 'Earth’s magnetic moment, and if it glowed visibly it would be several times the '
    + 'size of the full Moon from here. Its aurorae are powered mostly by Io’s volcanoes '
    + 'rather than by the solar wind.',
    'None of it is drawn. Nothing here models Jupiter’s field, its aurorae, or its '
    + 'gravitational influence on anything else in the scene.',
    ['body.earth', 'model.astronomy-engine']),
  body('saturn', 'Saturn', 'A dynamo whose axis is aligned with its spin, which should be impossible.',
    'A magnetic axis aligned with its rotation axis to within a fraction of a '
    + 'degree, which is not supposed to be possible for a self-sustaining dynamo and is '
    + 'still not explained.',
    'The rings are laid in Saturn’s own equatorial plane from the IAU rotational '
    + 'elements; nothing else about the system is modelled.',
    ['body.jupiter', 'model.astronomy-engine']),
  body('uranus', 'Uranus', 'A magnetosphere that opens and closes once a day.',
    'Its magnetic axis is tilted 59° from its rotation axis and misses the centre '
    + 'of the planet, so its magnetosphere opens and closes once a day.',
    'Not drawn.', ['body.neptune', 'body.earth']),
  body('neptune', 'Neptune', 'A tilted, offset field like Uranus — both made in a thin shell.',
    'A magnetic field tilted 47° and offset from the centre, like Uranus. Both '
    + 'suggest a field generated in a thin shell rather than a deep core.',
    'Not drawn.', ['body.uranus', 'body.earth']),
  body('moon', 'Moon', 'No field, no atmosphere — the surface takes the wind directly.',
    'No field and no atmosphere, so the surface is exposed to the solar wind directly '
    + '— which is why a radiation storm is an operational problem for anyone there, and '
    + 'why the S scale on this panel is the one that measures risk to people.',
    'The Moon spends part of each month inside Earth’s magnetotail, which changes its '
    + 'radiation environment and is not represented here.',
    ['inst.protons', 'layer.field-lines', 'body.earth']),
];

/* ------------------------------------------------------------------ *
 * Registry
 * ------------------------------------------------------------------ */

export const SUBJECTS: Subject[] = [
  ...CONCEPTS, ...MODELS, ...LAYERS, ...MEASUREMENTS, ...BODIES,
];

const BY_ID = new Map(SUBJECTS.map((s) => [s.id, s]));

export function subject(id: string): Subject | null {
  return BY_ID.get(id) ?? null;
}

/** Subject id for a body name as the scene spells it: "Mars", "Moon". */
export function bodySubjectId(name: string): string {
  return `body.${name.toLowerCase()}`;
}

export function subjectsOfKind(kind: SubjectKind): Subject[] {
  return SUBJECTS.filter((s) => s.kind === kind);
}

/** Human label for a tier badge, shared by every surface that shows one. */
export const TIER_LABEL: Record<Tier, string> = {
  E: 'Measured',
  D: 'Modelled',
  M: 'Ambient',
};
