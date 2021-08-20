/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function (s, k) {
  const arr = s.split('')
  if (arr.length < k) {
    return arr.reverse().join('')
  }

  function reverse(l, r) {
    while (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]]
      l++
      r--
    }
  }

  for (let i = 0; i < arr.length; i += 2 * k) {
    console.log(i, i + k - 1)
    reverse(i, i + k - 1)
  }
  return arr.join('')
};

console.log(reverseStr('abcd', 2))
