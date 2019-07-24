/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  var first = s.split('').sort().join('');
  var second = t.split('').sort().join('');

  return first === second;
};
