/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  magazine = magazine.split('');
  for (let i = 0; i < ransomNote.length; i++) {
    const element = ransomNote[i];
    const isFoundIndex = magazine.indexOf(element);
    if (isFoundIndex > -1) {
      magazine.splice(isFoundIndex, 1);
    } else {
      return false;
    }
  }

  return true;
};
