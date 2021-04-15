/**
 * @param {number[]} arr
 * @return {number}
 */
const dp = function (arr) {
  const result = [arr[0], Math.max(arr[0], arr[1])]
  for (let i = 2; i < arr.length; i++) {
    result[i] = Math.max(result[i - 2] + arr[i], result[i - 1])
  }
  return result.pop()
}

/**
 * @param {number[]} arr
 * @return {number}
 */
const rob = function (arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  if (arr.length === 2) {
    return Math.max(arr[0], arr[1])
  }
  const arr1 = [...arr]
  arr1.pop()
  const arr2 = [...arr]
  arr2.shift()
  return Math.max(dp(arr1), dp(arr2))
};

console.log(rob([0]))