/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
  const result = []
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[n + i])
  }
  return result
};

module.exports = () => {
  const nums = [2,3], n = 1
  console.log(shuffle(nums, n))
}
