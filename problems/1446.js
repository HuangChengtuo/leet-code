/**
 * @param {string} s
 * @return {number}
 */
const maxPower = function (s) {
  if (!s) {
    return 0
  }
  let result = 0
  let temp = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      temp++
    } else {
      result = Math.max(result, temp)
      temp = 1
    }
  }
  return Math.max(result, temp)
}

module.exports = function () {
  console.log(maxPower('d'))
}