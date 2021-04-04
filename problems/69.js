/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let l = 0
  let r = x
  let result = 0
  while (l <= r) {
    const c = Math.floor((r - l) / 2 + l)
    if (c * c <= x) {
      result = c
      l = c + 1
    } else {
      r = c - 1
    }
  }
  return result
}

console.log(mySqrt(4))
