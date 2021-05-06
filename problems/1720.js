/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function (encoded, first) {
  const arr = []
  arr[0] = first;
  for (let i = 1; i < encoded.length + 1; i++) {
    arr[i] = arr[i - 1] ^ encoded[i - 1];
  }
  return arr
};

console.log(decode([6, 2, 7, 3], 4))