import * as math from './math.js';

export const doAdd      = (a, b) => math.add(a, b);
export const doSubtract = (a, b) => math.subtract(a, b);
export const doMultiply = (a, b) => math.multiply(a, b);
export const doDivide   = (a, b) => math.divide(a, b);

export const myCustomedForEach = (items, callback) => {
  for(let i = 0; i < items.length;  i += 1) {
    callback(items[i])
  }
}