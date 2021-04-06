/**
 * @param {number[]} arr
 * @return {number}
 */
const removeDuplicates = function (arr) {
  const length = arr.length
  if (length <= 2) {
    return length
  }
  let fast = 0
  let slow = 0
  while (fast < length) {
    if (arr[slow - 1] !== arr[fast] || arr[slow - 2] !== arr[fast]) {
      arr[slow] = arr[fast]
      slow++
    }
    fast++
  }
  console.log(arr)
  return slow 
}

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))