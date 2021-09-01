/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
  const arr1 = version1.split('.')
  const arr2 = version2.split('.')
  let n = Math.max(arr1.length, arr2.length)
  for (let i = 0; i < n; i++) {
    const l = +arr1[i] || 0
    const r = +arr2[i] || 0
    if (l !== r) {
      return l > r ? 1 : -1
    }
  }
  return 0
};

module.exports = function () {
  console.log(compareVersion("7.5.2.4", "7.5.3"))
}
