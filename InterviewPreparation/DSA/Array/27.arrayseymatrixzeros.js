// 27. Array Set Matrix Zeroes:
// JavaScript Solution:
function setZeroes(matrix) {
  const rows = new Set();
  const cols = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (let row of rows) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[row][j] = 0;
    }
  }

  for (let col of cols) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }
}

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9]
];
setZeroes(matrix);
console.log(matrix);