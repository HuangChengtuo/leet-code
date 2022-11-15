/**
 * @param {number[]} position
 * @return {number}
 */
const minCostToMoveChips = function (position) {
  let even = 0
  let odd = 0
  for (const item of position) {
    if (item % 2) {
      odd++
    } else {
      even++
    }
  }
  return Math.min(even, odd)
};

module.exports = () => {
  console.log(minCostToMoveChips([1, 2, 3]))
}