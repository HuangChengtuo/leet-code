/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  const key = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const arr = s.split('')
  let l = 0
  let r = arr.length - 1
  while (l < r) {
    if (!key.includes(arr[l])) { l++ }
    if (!key.includes(arr[r])) { r-- }
    if (key.includes(arr[l]) && key.includes(arr[r])) {
      [arr[l], arr[r]] = [arr[r], arr[l]]
      l++
      r--
    }
  }
  return arr.join('')
};

console.log(reverseVowels('leetcode'))
