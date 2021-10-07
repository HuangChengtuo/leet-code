/**
 * @param {string} s
 * @return {number}
 */
const countSegments = function (s) {
  if (!s) {
    return 0
  }
  let result = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ' && s[i + 1] === ' ') {
      result++
    }
  }
  if (s[s.length - 1] !== ' ') {
    result++
  }
  return result
};

module.exports = function () {
  console.log(countSegments('Hello, my name is John'))
}
