// 48. Array Diagonal Traverse:
// JavaScript Solution:
function findDiagonalOrder(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const m = matrix.length;
  const n = matrix[0].length;
  const result = new Array(m * n);
  let row = 0;
  let col = 0;

  for (let i = 0; i < m * n; i++) {
    result[i] = matrix[row][col];

    if ((row + col) % 2 === 0) {
      // Moving up
      if (col === n - 1) {
        row++;
      } else if (row === 0) {
        col++;
      } else {
        row--;
        col++;
      }
    } else {
      // Moving down
      if (row === m - 1) {
        col++;
      } else if (col === 0) {
        row++;
      } else {
        row++;
        col--;
      }
    }
  }

  return result;
}

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const result = findDiagonalOrder(matrix);
console.log(result);