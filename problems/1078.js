/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = function (text, first, second) {
  let result = []
  const arr = text.split(' ')
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] === second && arr[i - 1] === first) {
      result.push(arr[i + 1])
    }
  }
  return result
};

module.exports = () => {
  const text = "we will we will rock you"
  const first = "we"
  const second = "will"
  console.log(findOcurrences(text, first, second))
}
