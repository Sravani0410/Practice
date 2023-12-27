// 34. Array Game of Life:
// JavaScript Solution:
function gameOfLife(board) {
  const m = board.length;
  const n = board[0].length;

  const getLiveNeighbors = (i, j) => {
    let count = 0;
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];

    for (let [dx, dy] of directions) {
      const ni = i + dx;
      const nj = j + dy;
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && (board[ni][nj] === 1 || board[ni][nj] === -1)) {
        count++;
      }
    }

    return count;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const liveNeighbors = getLiveNeighbors(i, j);

      if (board[i][j] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
        board[i][j] = -1; // Mark as dying
      }

      if (board[i][j] === 0 && liveNeighbors === 3) {
        board[i][j] = 2; // Mark as coming to life
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === -1) {
        board[i][j] = 0; // Die
      } else if (board[i][j] === 2) {
        board[i][j] = 1; // Live
      }
    }
  }
}

// Example usage:
const matrix = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
];
gameOfLife(matrix);
console.log(matrix);