/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  const set = new Set();
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (i > k) {
      set.delete(nums[i - k - 1]);
    }
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i])
  }
  return false;
};

module.exports = () => {
  const nums = [1, 2, 3, 1], k = 3
  return containsNearbyDuplicate(nums, k)
}