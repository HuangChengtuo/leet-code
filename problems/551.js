/**
 * @param {string} arr
 * @return {boolean}
 */
const checkRecord = function (arr) {
  let a = 0
  let l = 0
  for (const s of arr) {
    switch (s) {
      case 'A':
        a++
        l = 0
        break
      case 'L':
        l++
        break
      case 'P':
        l = 0
    }
    if (a >= 2 || l >= 3) {
      return false
    }
  }
  return true
};

console.log(checkRecord('PPALLP'))
