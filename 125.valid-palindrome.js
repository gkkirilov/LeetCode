/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const strippedString = s.replace(/\W+/g, '').toLowerCase();

  let leftPointer = 0;
  let rightPointer = strippedString.length - 1;

  while (leftPointer < rightPointer) {
    if (strippedString[leftPointer] !== strippedString[rightPointer]) {
      return false
    }

    leftPointer++;
    rightPointer--;
  }

  return true;
};

// isPalindrome(".")
