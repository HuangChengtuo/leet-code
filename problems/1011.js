/**
 * @param {number[]} weights
 * @param {number} limit
 * @return {number}
 */
const shipWithinDays = function (weights, limit) {
  let l = Math.max(...weights)
  let r = weights.reduce((sum, ele) => sum + ele)
  while (l < r) {
    const c = Math.floor((l + r) / 2)
    let day = 1
    let load = 0
    for (const weight of weights) {
      if (load + weight <= c) {
        load += weight
      } else {
        day++
        load = weight
      }
    }
    if (day > limit) {
      l = c + 1
    } else {
      r = c
    }
  }
  return l
};

console.log(shipWithinDays([1, 2, 3, 1, 1], 4))
