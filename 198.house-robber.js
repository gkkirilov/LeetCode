/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let previousSum1 = 0;
  let previousSum2 = 0;

  for (let i = 0; i < nums.length; i++) {
    let tmp = previousSum1;
    previousSum1 = Math.max(previousSum2 + nums[i], previousSum1)
    previousSum2 = tmp;
  }

  return previousSum1;
}

// console.log(
//   rob([1, 2, 3, 10, 5, 2, 6])
// );

