/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  var threeSmallest = [];
  var biggest = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
  var smallest = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY];
  for (let k = 0; k < nums.length; k++) {
    const element = nums[k];
    if (element >= 0) {
      let added = false;
      if (element > biggest[0]) {
        biggest[2] = biggest[1];
        biggest[1] = biggest[0];
        biggest[0] = element;
        added = true;
      } else if (element > biggest[1]) {
        biggest[2] = biggest[1];
        biggest[1] = element;
        added = true;
      } else if (element > biggest[2]) {
        biggest[2] = element;
        added = true;
      }

      if (added) {
        continue;
      }
    }

    if (element < smallest[0]) {
      smallest[2] = smallest[1];
      smallest[1] = smallest[0];
      smallest[0] = element;
      added = true;
    } else if (element < smallest[1]) {
      smallest[2] = smallest[1];
      smallest[1] = element;
      added = true;
    } else if (element < smallest[2]) {
      smallest[2] = element;
      added = true;
    }
  }

  // console.log(smallest);
  // console.log(biggest);
  productOne = smallest[0] * smallest[1] * biggest[0];
  productTwo = biggest[0] * biggest[1] * biggest[2];
  // console.log(productOne, productTwo);
  if (biggest[0] == -Infinity) {
    return smallest[0]*smallest[1]*smallest[2]
  }
  if (productOne == Infinity || isNaN(productOne)) {
    return productTwo;
  } else if (productTwo == Infinity || isNaN(productTwo)) {
    return productOne;
  }

  return Math.max(productOne, productTwo);
};

console.log(maximumProduct([0,0,0]));
