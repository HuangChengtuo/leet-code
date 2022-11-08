/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = function (allowed, words) {
  let result = 0
  for (const word of words) {
    let allAllowed = true
    for (const s of word) {
      if (!allowed.includes(s)) {
        allAllowed = false
      }
    }
    if (allAllowed) {
      result++
    }
  }
  return result
};

module.exports = () => {
  const allowed = "cad"
  const words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]
  console.log(countConsistentStrings(allowed, words))
}
