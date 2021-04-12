/**
 * @param {number[]} arr
 * @return {string}
 */
var largestNumber = function (arr) {
  const result = arr.sort((a, b) => {
    let sa = String(a)
    let sb = String(b)
    if (sa + sb > sb + sa) {
      return -1
    } else {
      return 1
    }
  })
  return result[0] === 0 ? '0' : result.join('')
};

console.log(largestNumber([0,0]))