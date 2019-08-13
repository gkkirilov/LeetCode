/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  for (let i = 0, dis = 0; i <= dis; i++) {
    dis = Math.max(dis, i + nums[i]);
    if (dis >= nums.length - 1) {
      return true;
    }
  }

  return false;
};

canJump([3, 2, 1, 0, 4])
