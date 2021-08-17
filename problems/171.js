/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function (columnTitle) {
  let result = 0
  let multiple = 1
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const val = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1
    result += val * multiple
    multiple *= 26
  }
  return result
};

console.log(titleToNumber('FXSHRXW'))