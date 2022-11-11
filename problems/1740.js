/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let l = 0
  let r = s.length - 1
  let result = 0
  while (l <= r) {
    console.log(s[l], s[r])
    if (vowels.includes(s[l])) {
      result++
    }
    if (vowels.includes(s[r])) {
      result--
    }
    l++
    r--
  }
  return !result
};

module.exports = () => {
  console.log(halvesAreAlike('book'))
}