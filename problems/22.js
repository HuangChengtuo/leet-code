/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const result = []
  /**
   * 
   * @param {string} s - wdwd
   * @param {number} l 
   * @param {number} r 
   */
  const fn = (s, l, r) => {
    if (l === n && r === n) {
      result.push(s)
      return
    }
    if (l === r) {
      fn(s + '(', l + 1, r)
    } else {
      if (l < n) {
        fn(s + '(', l + 1, r)
      }
      fn(s + ')', l, r + 1)
    }
  }
  fn('', 0, 0)
  return result
};

console.log(generateParenthesis(2))