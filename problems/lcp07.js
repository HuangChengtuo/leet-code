/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
const numWays = function (n, relation, k) {
  const member = new Map()
  for (const item of relation) {
    member.has(item[0]) ? member.get(item[0]).push(item[1]) : member.set(item[0], [item[1]])
  }
  let result = 0

  function next(index, turns) {
    const man = member.get(index) || []
    if (turns === k) {
      if (man.includes(n - 1)) {
        result++
      }
      return
    }
    for (const item of man) {
      next(item, turns + 1)
    }
  }

  next(0, 1)
  return result
};

console.log(numWays(3, [[0, 2], [2, 1]], 2))
