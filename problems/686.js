/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const repeatedStringMatch = function (a, b) {
  let result = 1
  let s = a
  while (s.length < 2 * (b.length + a.length)) {
    if (s.includes(b)) {
      return result
    }
    result++
    s += a
  }
  return -1
};

module.exports = function () {
  console.log(repeatedStringMatch('aa', 'a'))
}
