/**
 * Produces an array with N items, the value of each item is n
 *
 * @param i: Length of the array to be generated
 */
export declare function range(i: number): Array<number>;
/**
 * Checks whether a string provided is a data URI.
 *
 * @param {String} str String to check
 */
export declare const isDataURI: (str: string) => boolean;
export declare const dataURItoUint8Array: (dataURI: string) => Uint8Array;
/**
 * Throttles a function call
 *
 * @param func
 * @param limit
 */
export declare function throttle(func: (...arg: Array<any>) => void, limit?: number): (...args: Array<any>) => void;
/**
 * Converts SnakeCase to Camelcase
 * @param s
 */
export declare function toCamel(s: string): string;
