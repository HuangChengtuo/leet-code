/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
};

module.exports = function () {
  const nums = [-1,-100,3,99], k = 2
  rotate(nums, k)
  console.log(nums)
}