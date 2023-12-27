// 15. Array Spiral Order:
// JavaScript Solution:
function spiralOrder(matrix) {
  const result = [];

  while (matrix.length > 0) {
    // Top row
    result.push(...matrix.shift());

    // Right column
    for (let row of matrix) {
      if (row.length > 0) {
        result.push(row.pop());
      }
    }

    // Bottom row
    if (matrix.length > 0) {
      result.push(...matrix.pop().reverse());
    }

    // Left column
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i].length > 0) {
        result.push(matrix[i].shift());
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
const result = spiralOrder(matrix);
console.log(result);

