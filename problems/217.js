/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  let result = false
  const obj = {}
  for (const item of nums) {
    if (obj[item]) {
      result = true
      break
    } else {
      obj[item] = true
    }
  }
  return result
}

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))