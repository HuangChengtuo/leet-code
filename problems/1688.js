/**
 * @param {string} arr
 * @param {string} word
 * @return {number}
 */
const maxRepeating = function (arr, word) {
  let now = 0
  let max = 0
  let fast = 0
  let slow = 0
  while (slow <= arr.length) {
    const slice = arr.slice(fast - word.length + 1, fast + 1)
    if (slice === word) {
      now++
      fast += word.length
    } else {
      max = Math.max(now, max)
      now = 0
      slow++
      fast = slow
    }
  }
  max = Math.max(now, max)
  return max
};

module.exports = () => {
  const sequence = "ababc"
  const word = "ac"
  console.log(maxRepeating(sequence, word))
}
