/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var diffArr = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const indexOfDiff = diffArr.indexOf(element);
    if (indexOfDiff !== -1) {
      return [indexOfDiff, i];
    }
    diffArr.push(target - element);
  }
  return false;
};

