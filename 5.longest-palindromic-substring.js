/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let startIndex = 0;
  let maxLength = 1;

  function expandAroundMiddle(left, right) {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      const currentPalLenght = right - left + 1;
      if (currentPalLenght > maxLength) {
        maxLength = currentPalLenght;
        startIndex = left;
      }
      left -= 1;
      right += 1;
    }
  }

  // abbac
  for (let i = 0; i < s.length; i++) {
    expandAroundMiddle(i, i + 1)
    expandAroundMiddle(i - 1, i + 1)
  }

  return s.slice(startIndex, startIndex + maxLength);
};
