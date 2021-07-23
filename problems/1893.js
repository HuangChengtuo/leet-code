/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
const isCovered = function (ranges, left, right) {
  const arr = new Array(right + 1).fill(false)
  for (const [l, r] of ranges) {
    const rangeArr = new Array(r - l + 1).fill(true)
    arr.splice(l, r - l + 1, ...rangeArr)
    console.log(l, r, arr)
  }
  let result = true
  for (let i = left; i <= right; i++) {
    result = result && arr[i]
  }
  return result
};

export default function () {
  console.log(isCovered([[1, 10], [10, 20]], 21, 21))
}