/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  console.log(Math.log2(n));
  while (n % 2 == 0 && n !== 0) {
    n = n / 2;
  }

  return n === 1 ? true : false;
};