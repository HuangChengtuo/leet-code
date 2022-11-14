/**
 * @param {number[]} nums
 * @return {number[]}
 */
const exchange = function (nums) {
  const result = []
  for (const num of nums) {
    if (num % 2) {
      result.unshift(num)
    } else {
      result.push(num)
    }
  }
  return result
};

module.exports = () => {
  console.log(exchange([1, 2, 3, 4]))
}