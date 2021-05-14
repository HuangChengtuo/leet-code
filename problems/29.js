/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
  if (dividend / divisor >= 2147483648) {
    return 2147483647
  }
  if (dividend * divisor >= 0) {
    return Math.floor(dividend / divisor)
  } else {
    return Math.ceil(dividend / divisor)
  }
};

console.log(divide(-2147483648,
  -1))