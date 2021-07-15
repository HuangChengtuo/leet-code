/**
 * @param {number[]} arr
 * @return {number}
 */
const maximumElementAfterDecrementingAndRearranging = function (arr) {
  arr = arr.sort((a, b) => a - b)
  arr[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.min(arr[i], arr[i - 1] + 1);
  }
  return arr.pop()
}

export default function () {
  const arr = new Array(210).fill(209)
  arr[4] = 100000
  console.log(maximumElementAfterDecrementingAndRearranging(arr))
}
