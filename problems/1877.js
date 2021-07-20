/**
 * @param {number[]} nums
 * @return {number}
 */
const minPairSum = function (nums) {
  let result = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length / 2; i++) {
    result = Math.max(result, nums[i] + nums[nums.length - 1 - i])
  }
  return result
};

export default function () {
  console.log(minPairSum([]))
}
