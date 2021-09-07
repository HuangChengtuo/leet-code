/**
 * @param {string} arr
 * @return {number}
 */
const balancedStringSplit = function (arr) {
  let result = 0
  let l = 0
  let r = 0
  for (const s of arr) {
    s === 'L' ? l++ : r++
    if (l === r) {
      l = 0
      r = 0
      result++
    }
  }
  return result
};

module.exports = function () {
  console.log(balancedStringSplit('LLLLRRRR'))
}