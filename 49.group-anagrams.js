/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const dictionary = {}

  for (let i = 0; i < strs.length; i++) {
    const element = strs[i]
    var fixedEl = element.split('').sort().join('');

    if (!dictionary[fixedEl]) {
      dictionary[fixedEl] = []
    }

    dictionary[fixedEl].push(element);
  }

  return Object.values(dictionary).reverse();
};
