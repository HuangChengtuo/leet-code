/**
 * @param {number[]} arr
 * @return {number}
 */
const maxChunksToSorted = function (arr) {
  const oldArr = [...arr]
  arr.sort((a, b) => a - b)
  let result = 0
  let oldSum = 0
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    oldSum += oldArr[i]
    sum += arr[i]
    if (sum === oldSum) {
      result++
    }
  }
  return result
}

module.exports = function () {
  const arr = [5,4,3,2,1]
  console.log(maxChunksToSorted(arr))
}
