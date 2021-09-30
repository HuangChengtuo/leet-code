/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
const computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const areaA = (ax2 - ax1) * (ay2 - ay1)
  const areaB = (bx2 - bx1) * (by2 - by1)
  let x = Math.min(ax2, bx2) - Math.max(ax1, bx1)
  let y = Math.min(ay2, by2) - Math.max(ay1, by1)
  let overLap = x * y
  if (x < 0 || y < 0) {
    overLap = 0
  }
  return areaA + areaB - overLap
};

module.exports = () => {
  console.log(computeArea(-2,
    -2,
    2,
    2,
    3,
    3,
    4,
    4))
}
