/**
 * @param {number[]} arr
 * @return {number}
 */
const maxArea = function (arr) {
  let l = 0
  let r = arr.length - 1
  let result = 0
  while (l <= r) {
    const area = Math.min(arr[l], arr[r]) * (r - l)
    result = Math.max(area, result)
    if (arr[l] <= arr[r]) {
      l++
    } else {
      r--
    }
  }
  return result
};

console.log(maxArea([1,2,1]))