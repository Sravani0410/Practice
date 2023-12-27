// 42. Array Shortest Path in Binary Matrix:
// JavaScript Solution:
function shortestPathBinaryMatrix(grid) {
  const n = grid.length;
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
    return -1; // No path if start or end is blocked
  }

  const queue = [[0, 0, 1]];

  while (queue.length > 0) {
    const [x, y, steps] = queue.shift();

    if (x === n - 1 && y === n - 1) {
      return steps; // Reached the end
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] === 0) {
        queue.push([nx, ny, steps + 1]);
        grid[nx][ny] = 1; // Mark as visited
      }
    }
  }

  return -1; // No valid path found
}

// Example usage:
const matrix = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0]
];
const result = shortestPathBinaryMatrix(matrix);
console.log(result);