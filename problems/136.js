/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let result = 0
  for (const n of nums) {
    result ^= n
  }
  return result
};

console.log(singleNumber([4, 1, 2, 1, 2]))