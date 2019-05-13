/*
 * @lc app=leetcode id=807 lang=javascript
 *
 * [807] Max Increase to Keep City Skyline
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  var total = 0;
  for (let row = 0; row < grid.length; row++) {
    let rowElements = grid[row];
    for (let col = 0; col < rowElements.length; col++) {
      let maxHeighInRow = rowElements[col];
      let maxHeighInCol = rowElements[col];

      for (let index = 0; index < grid.length; index++) {
        let rowEl = rowElements[index]
        if (rowEl > maxHeighInRow) {
          maxHeighInRow = rowEl;
        }

        const buildingHeightInCol = grid[index][col];
        if (buildingHeightInCol > maxHeighInCol) {
          maxHeighInCol = buildingHeightInCol;
        }
      }
      total += (maxHeighInRow < maxHeighInCol ? maxHeighInRow : maxHeighInCol) - rowElements[col];
    }
  }

  // console.log(grid);
  return total;
};

// var grid = [ [3, 0, 8, 4],
//   [2, 4, 5, 7],
//   [9, 2, 6, 3],
//   [0, 3, 1, 0] ];
// maxIncreaseKeepingSkyline(grid);
