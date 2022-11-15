/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const s2t = {}
  const t2s = {}
  for (let i = 0; i < s.length; i++) {
    if (!s2t[s[i]] && !t2s[t[i]]) {
      s2t[s[i]] = t[i]
      t2s[t[i]] = s[i]
    } else {
      if (s2t[s[i]] !== t[i] || t2s[t[i]] !== s[i]) {
        return false
      }
    }
  }
  return true
};

module.exports = () => {
  const s = "paper", t = "title"
  return isIsomorphic(s, t)
}