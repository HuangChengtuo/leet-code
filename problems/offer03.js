/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = function (nums) {
  const map = new Map()
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  for (const [key, value] of map) {
    if (value > 1) { return key }
  }
};

module.exports = () => {
  console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))
}