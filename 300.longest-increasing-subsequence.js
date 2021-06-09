/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;

  let dpSequence = new Array(nums.length).fill(1);
  let maxSoFar = 1

  for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[j] > nums[i]) {
        dpSequence[j] = Math.max(dpSequence[i] + 1, dpSequence[j])
      }
    }

    maxSoFar = Math.max(maxSoFar, dpSequence[j])
  }

  return maxSoFar;
};

// @lc code=end