// 50. Array Shortest Distance to a Character:
// JavaScript Solution:
function shortestToChar(s, c) {
  const n = s.length;
  const result = new Array(n).fill(0);

  let prev = -Infinity;
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      prev = i;
    }
    result[i] = i - prev;
  }

  prev = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) {
      prev = i;
    }
    result[i] = Math.min(result[i], prev - i);
  }

  return result;
}

// Example usage:
const string = "loveleetcode";
const char = "e";
const result = shortestToChar(string, char);
console.log(result);