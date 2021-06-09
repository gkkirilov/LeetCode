/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  x = x.toString();
  for (let i = 0; i < x.length / 2 + 1; i++) {
    const firstElement = x[i];
    // console.log(firstElement);
    const endElement = x[x.length - i - 1];
    // console.log(endElement);
    if (firstElement !== endElement) {
      return false
    }
  }

  return true
};

console.log(isPalindrome(1221));
