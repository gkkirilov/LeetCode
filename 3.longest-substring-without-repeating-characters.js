/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let windowStart = 0;
  let charMap = {};

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (charMap[currentChar] >= windowStart) {
      windowStart = charMap[currentChar] + 1
    }

    charMap[currentChar] = i;

    let currentWindowLength = i - windowStart + 1;
    maxLength = Math.max(maxLength, currentWindowLength);
  }

  return maxLength
}
console.log(
  lengthOfLongestSubstring('asdfasdfasdfasdf')
);




function lengthOfLongestSubstring2(s) {
  let windowCharsMap = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (windowCharsMap[currentChar] >= windowStart) {
      windowStart = windowCharsMap[currentChar] + 1
    }

    windowCharsMap[currentChar] = i;
    maxLength = Math.max(maxLength, i - windowStart + 1);
  }

  return maxLength
}
console.log(
  lengthOfLongestSubstring2('abdfeacadfadfadfa')
);