// 43. Array Minimum Path Sum:
// JavaScript Solution:
function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0 && j > 0) {
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      } else if (i > 0) {
        grid[i][j] += grid[i - 1][j];
      } else if (j > 0) {
        grid[i][j] += grid[i][j - 1];
      }
    }
  }

  return grid[m - 1][n - 1];
}

// Example usage:
const matrix = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];
const result = minPathSum(matrix);
console.log(result);