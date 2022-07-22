/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2]
  arr = arr.sort((a, b) => a - b)
  let result = NaN
  if (arr.length % 2 === 0) {
    result = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
  } else {
    result = arr[Math.floor(arr.length / 2)]
  }
  return result
};

module.exports = function () {
  const nums1 = [1,2], nums2 = [3,4]
  console.log(findMedianSortedArrays(nums1, nums2))
}