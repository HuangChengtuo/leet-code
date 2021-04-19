/**
 * @param {number[]} arr
 * @param {number} val
 * @return {number}
 */
 const removeElement = function (arr, val) {
  let slow = 0
  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== val) {
      arr[slow] = arr[fast]
      slow++
    }
  }
  return slow
};