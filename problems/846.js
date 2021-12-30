/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
const isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize) {
    return false
  }
  hand.sort((a, b) => a - b)
  const count = {}
  for (const num of hand) {
    count[num] = (count[num] || 0) + 1
  }
  for (const start of hand) {
    if (!count[start]) { continue }
    for (let i = 0; i < groupSize; i++) {
      const num = start + i
      if (count[num]) {
        count[num]--
      } else {
        return false
      }
    }
  }
  return true
};

module.exports = function () {
  const hand = [2, 1]
  const groupSize = 2
  console.log(isNStraightHand(hand, groupSize))
}