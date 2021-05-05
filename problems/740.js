/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
  const arr = new Array(Math.max(...nums) + 1).fill(0)
  for (const item of nums) {
    arr[item]++
  }
  const dp = [0, arr[1], arr[2] * 2]
  for (let i = 2; i < arr.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i] * i)
  }
  return dp[arr.length - 1]
};
console.log(deleteAndEarn([1]))