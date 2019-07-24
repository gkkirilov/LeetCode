/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];
  const PAIRS_HASHMAP = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (let i = 0; i < s.length; i++) {
    const currentEl = s[i];
    if (PAIRS_HASHMAP[currentEl] !== undefined || stack.length === 0) {
      stack.push(currentEl);
    } else {
      let stackEl = stack.pop();
      let opositeOfCurrentEl = PAIRS_HASHMAP[stackEl];
      if (currentEl !== opositeOfCurrentEl) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
// console.log(
//   isValid('()')
// );
