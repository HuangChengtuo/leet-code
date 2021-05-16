/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumXOR = function (nums) {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      max = Math.max(max, nums[i] ^ nums[j])
    }
  }
  return max
}

console.log(findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]))