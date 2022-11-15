/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1])
  let load = 0
  let result = 0
  for (const item of boxTypes) {
    while (load < truckSize && item[0]) {
      load++
      item[0]--
      result += item[1]
    }
  }
  return result
};

module.exports = () => {
  const boxTypes = [[5, 10], [2, 5], [4, 7], [3, 9]], truckSize = 10
  console.log(maximumUnits(boxTypes, truckSize))
}
