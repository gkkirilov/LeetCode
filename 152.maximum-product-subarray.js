/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var maxTotal = imax = imin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const element = nums[i];

    if (element < 0) {
      let temp = imin;
      imin = imax;
      imax = temp;
    }

    imax = Math.max(element, imax * element)
    imin = Math.min(element, imin * element)

    maxTotal = Math.max(maxTotal, imax)
  }

  return maxTotal;
};
console.log(maxProduct([-2,3,-4]));
