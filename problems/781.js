/**
 * @param {number[]} answers
 * @return {number}
 */
const numRabbits = function (answers) {
  let result = 0
  const map = new Map()
  // 说key的兔子有val只
  for (const item of answers) {
    map.set(item, (map.get(item) || 0) + 1)
  }
  for (const [key, val] of map) {
    if (key === 0) {
      result += val
    } else {
      console.log(key, val)
      // 说 key 的兔子最少有几种颜色
      const color = Math.ceil(val / (key + 1))
      // key + 1 为每一种颜色最少有几只兔子
      const min = color * (key + 1)
      console.log(color, min)
      result += min
    }
  }
  return result
}

console.log('result:' + numRabbits([10, 10, 10]))
