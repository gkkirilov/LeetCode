/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  var sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += i + 1 - nums[i];
  }

  return sum;
};