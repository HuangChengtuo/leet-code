/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  const arr = [0, 1]
  let i = 2
  while (i < n + 2) {
    arr[i] = arr[i - 1] + arr[i - 2]
    i++
  }
  return arr[n + 1]
};

module.exports = () => {
  console.log(fib(3))
}