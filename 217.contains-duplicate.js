/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var dupObj = {};
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (!dupObj[element]) {
      dupObj[element] = 1;
    } else {
      return true;
    }
  }

  return false;
};