/*
 * @lc app=leetcode id=657 lang=javascript
 *
 * [657] Robot Return to Origin
 */
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let formattedMoves = {};

  for (let i = 0; i < moves.length; i++) {
    const element = moves[i];
    if (!formattedMoves[element]) {
      formattedMoves[element] = 1;
    } else {
      formattedMoves[element] += 1;
    }
  }

  if (formattedMoves.U === formattedMoves.D &&
    formattedMoves.R === formattedMoves.L) {
    return true;
  }

  return false;
};

