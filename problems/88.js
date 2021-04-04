/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let i1 = m - 1
  let i2 = nums2.length - 1
  let i = nums1.length - 1
  while (i >= 0) {
    const n1 = isNaN(nums1[i1]) ? -Infinity : nums1[i1]
    const n2 = isNaN(nums2[i2]) ? -Infinity : nums2[i2]
    if (n1 > n2) {
      nums1[i] = nums1[i1]
      i1--
    } else {
      nums1[i] = nums2[i2]
      i2--
    }
    i--
  }
}

merge([-1, -1, 0, 0, 0, 0], 4, [-1, 0], 2)
