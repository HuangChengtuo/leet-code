/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b)
  let count = 0
  for (const ice of costs) {
    if (ice <= coins) {
      count++
      coins -= ice
    } else {
      return count
    }
  }
  return count
};

console.log(maxIceCream([10, 2, 10, 10, 10, 10, 8, 2, 7, 8], 25))
