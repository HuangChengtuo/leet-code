/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
const reverseLeftWords = function (s, n) {
  const arr = s.split('')
  for (let i = 0; i < n; i++) {
    arr.push(arr.shift())
  }
  return arr.join('')
};

module.exports = () => {
  const s = "lrloseumgh", k = 6
  console.log(reverseLeftWords(s, k))
}