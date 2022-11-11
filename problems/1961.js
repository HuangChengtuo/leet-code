/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const isPrefixString = function (s, words) {
  let prefix = ''
  for (const word of words) {
    prefix += word
    if (prefix === s) {
      return true
    }
    if (prefix.length >= s.length) {
      return false
    }
  }
  return false
};

module.exports = () => {
  const s = "ccccccccc", words = ["cc", "c"]
  console.log(isPrefixString(s, words))
}
