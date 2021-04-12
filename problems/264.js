/**
 * @param {number} length
 * @return {number}
 */
const nthUglyNumber = function (length) {
  const result = new Array(length).fill(0)
  result[0] = 1
  let p2 = p3 = p5 = 0

  for (let i = 1; i < length; i++) {
    result[i] = Math.min(result[p2] * 2, result[p3] * 3, result[p5] * 5)
    if (result[i] === result[p2] * 2) {
      p2++
    }
    if (result[i] === result[p3] * 3) {
      p3++
    }
    if (result[i] === result[p5] * 5) {
      p5++
    }
  }
  return result.pop()
};

console.log(nthUglyNumber(10))