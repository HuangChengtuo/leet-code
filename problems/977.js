/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  const arr = []
  for (const num of nums) {
    arr.push(num * num)
  }
  arr.sort((a, b) => a - b)
  return arr
};

module.exports = () => {
  const nums = [-7, -3, 2, 3, 11]
  console.log(sortedSquares(nums))
}