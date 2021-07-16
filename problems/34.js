/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  if (!nums.length) {
    return [-1, -1]
  }
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    if (nums[l] !== target) {
      l++
    }
    if (nums[r] !== target) {
      r--
    }
    if (nums[l] === target && target === nums[r]) {
      return [l, r]
    }
  }
  return (nums[l] === target && target === nums[r]) ? [l, r] : [-1, -1]
};

export default function () {
  console.log(searchRange([1], 1))
}
