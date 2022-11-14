/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
  const arr1 = []
  const arr2 = []
  for (const item of s) {
    if (item === '#') {
      arr1.pop()
    } else {
      arr1.push(item)
    }
  }
  for (const item of t) {
    if (item === '#') {
      arr2.pop()
    } else {
      arr2.push(item)
    }
  }
  return arr1.join('') === arr2.join('')
};

module.exports = () => {
  const s = "ab#c", t = "ad#c"
  console.log(backspaceCompare(s, t))
}