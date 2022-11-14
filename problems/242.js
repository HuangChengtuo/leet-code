/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  const arr1 = s.split('')
  const arr2 = t.split('')
  arr1.sort()
  arr2.sort()
  return arr1.join('') === arr2.join('')
};

module.exports = () => {
  const s = "rat", t = "car"
  console.log(isAnagram(s, t))
}