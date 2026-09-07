/** Types for the plain-Node generator, so tests can import its parser directly. */
export declare const MAX_DEGREE: number;
export declare const SIZE: number;
export declare function idx(n: number, m: number): number;
export declare function parseIgrf(text: string): {
  g: number[]; h: number[]; gsv: number[]; hsv: number[];
};
