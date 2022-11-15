/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = function (num) {
  const s = '' + num
  const arr = s.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '6') {
      arr[i] = '9'
      return +arr.join('')
    }
  }
  return +arr.join('')
};

module.exports = () => {
  console.log(maximum69Number(9999))
}