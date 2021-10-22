/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
  let e1 = NaN
  let e2 = NaN
  let vote1 = 0
  let vote2 = 0
  for (const n of nums) {
    if (e1 === n) {
      vote1++
    } else if (e2 === n) {
      vote2++
    } else if (vote1 === 0) {
      e1 = n
      vote1++
    } else if (vote2 === 0) {
      e2 = n
      vote2++

    } else {
      vote1--
      vote2--
    }
  }
  let count1 = 0
  let count2 = 0
  for (const n of nums) {
    if (vote1 > 0 && n === e1) {
      count1++;
    }
    if (vote2 > 0 && n === e2) {
      count2++
    }
  }
  const result = []
  if (count1 > Math.floor(nums.length / 3)) {
    result.push(e1)
  }
  if (count2 > Math.floor(nums.length / 3)) {
    result.push(e2)
  }
  return result
};

module.exports = function () {
  console.log(majorityElement([1,1,1,3,3,2,2,2]))
}
