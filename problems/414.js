/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  const arr = [...new Set(nums)]
  let big = -Infinity
  let bigger = -Infinity
  let biggest = -Infinity
  for (const num of arr) {
    if (num > biggest) {
      big = bigger
      bigger = biggest
      biggest = num
    } else if (num > bigger) {
      big = bigger
      bigger = num
    } else if (num > big) {
      big = num
    }
  }
  console.log(big, bigger, biggest)
  return big === -Infinity ? biggest : big
};

module.exports = function () {
  console.log(thirdMax([2, 3, 2, 1]))
}
