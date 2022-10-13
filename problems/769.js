/**
 * @param {number[]} arr
 * @return {number}
 */
const maxChunksToSorted = function (arr) {
  let result = 0
  let iSum = 0
  let vSum = 0
  for (let i = 0; i < arr.length; i++) {
    iSum += i
    vSum += arr[i]
    if (iSum === vSum) {
      result++
    }
  }
  return result
}

module.exports = function () {
  const arr = [1, 0, 2, 3, 4]
  console.log(maxChunksToSorted(arr))
}
