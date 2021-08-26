/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b)
  let left = 0
  let heavy = people.length - 1
  let result = 0
  while (left <= heavy) {
    if (people[left] + people[heavy] <= limit) {
      left++
    }
    heavy--
    result++
  }
  return result
};

console.log(numRescueBoats([3, 2, 1], 3))
