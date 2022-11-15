/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
  const arr = s.split(' ')
  if (pattern.length !== arr.length) {
    return false
  }
  const p2s = {}
  const s2p = {}
  for (let i = 0; i < arr.length; i++) {
    if (!s2p[arr[i]] && !p2s[pattern[i]]) {
      s2p[arr[i]] = pattern[i]
      p2s[pattern[i]] = arr[i]
    } else {
      if (s2p[arr[i]] !== pattern[i] || p2s[pattern[i]] !== arr[i]) {
        return false
      }
    }
  }
  return true
};

module.exports = () => {
  const pattern = "jquery", s = "jquery"
  return wordPattern(pattern, s)
}
