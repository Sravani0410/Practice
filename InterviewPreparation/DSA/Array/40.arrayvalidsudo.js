// 40. Array Valid Sudoku:
// JavaScript Solution:
function isValidSudoku(board) {
  const rows = new Array(9).fill(0).map(() => new Set());
  const cols = new Array(9).fill(0).map(() => new Set());
  const boxes = new Array(9).fill(0).map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];

      if (num === '.') continue;

      if (rows[i].has(num) || cols[j].has(num) || boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(num)) {
        return false;
      }

      rows[i].add(num);
      cols[j].add(num);
      boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(num);
    }
  }

  return true;
}

// Example usage:
const sudokuBoard = [
  ['5','3','.','.','7','.','.','.','.'],
  ['6','.','.','1','9','5','.','.','.'],
  ['.','9','8','.','.','.','.','6','.'],
  ['8','.','.','.','6','.','.','.','3'],
  ['4','.','.','8','.','3','.','.','1'],
  ['7','.','.','.','2','.','.','.','6'],
  ['.','6','.','.','.','.','2','8','.'],
  ['.','.','.','4','1','9','.','.','5'],
  ['.','.','.','.','8','.','.','7','9']
];
const result = isValidSudoku(sudokuBoard);
console.log(result);