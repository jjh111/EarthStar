/** Types for the plain-Node generator, so tests can import its parser directly. */
export declare function statements(text: string): { routine: string; text: string }[];
/** Every `DATA` constant, keyed `ROUTINE_NAME`, one entry per Fortran name. */
export declare function parseT96(text: string): Map<string, number | number[]>;
/** The same, with numbered families collapsed into arrays named for the stem. */
export declare function groupFamilies(
  coeffs: Map<string, number | number[]>,
): Map<string, number | number[]>;
