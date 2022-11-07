/**
 * @param {string} s
 * @return {string[]}
 */
const ambiguousCoordinates = function (s) {
  const arr = [...s]
  arr.pop()
  arr.shift()
  const result = []

  function addPoint (arr) {
    if (arr.length === 1) {
      return arr
    }
    if (arr[0] !== '0' && arr[arr.length - 1] === '0') {
      return [arr.join('')]
    }
    if (arr[0] === '0') {
      if (arr[0] === '0' && arr[arr.length - 1] === '0') {
        return null
      }
      return [arr[0] + '.' + arr.slice(1, arr.length).join('')]
    }
    const result = [arr.join('')]
    for (let i = 1; i < arr.length; i++) {
      result.push(arr.slice(0, i).join('') + '.' + arr.slice(i, arr.length).join(''))
    }
    return result
  }

  for (let i = 1; i < arr.length; i++) {
    const left = addPoint(arr.slice(0, i))
    const right = addPoint(arr.slice(i, arr.length))
    if (!left || !right) {
      continue
    }
    for (let l = 0; l < left.length; l++) {
      for (let r = 0; r < right.length; r++) {
        result.push(`(${left[l]}, ${right[r]})`)
      }
    }
  }
  return result
};

module.exports = () => {
  console.log(ambiguousCoordinates('(123)'))
}
