
// 26. Array Zigzag Conversion:
// JavaScript Solution:
function convert(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const rows = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = false;

  for (let char of s) {
    rows[currentRow] += char;
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }
    currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
}

// Example usage:
const string = "PAYPALISHIRING";
const numRows = 3;
const result = convert(string, numRows);
console.log(result);