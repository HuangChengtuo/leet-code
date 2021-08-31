/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
const corpFlightBookings = function (bookings, n) {
  const result = new Array(n).fill(0)
  for (const [first, last, seats] of bookings) {
    result[first - 1] += seats
    if (last <= n - 1) {
      result[last] -= seats
    }
  }
  for (let i = 1; i <= n - 1; i++) {
    result[i] += result[i - 1]
  }
  return result
};

module.exports = function () {
  console.log(corpFlightBookings([[1, 2, 10], [2, 2, 15]], 2))
}
