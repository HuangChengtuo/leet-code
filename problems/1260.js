/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = function (grid, k) {
  const x = grid[0].length
  const arr = []
  for (const item of grid) {
    arr.push(...item)
  }
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop())
  }
  const result = []
  let temp = []
  for (let i = 0; i < arr.length; i++) {
    if (i % x === 0) {
      temp.length && result.push(temp)
      temp = []
    }
    temp.push(arr[i])
  }
  result.push(temp)
  return result
};

module.exports = function () {
  const grid = [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], k = 4
  console.log(shiftGrid(grid, k))
}