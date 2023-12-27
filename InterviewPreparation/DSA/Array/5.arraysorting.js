// 5. Array Sorting:
// JavaScript Solution:
function customComparator(a, b) {
  return a - b; // Ascending order
}

function sortArray(arr) {
  return arr.slice().sort(customComparator);
}

// Example usage:
const array = [5, 3, 8, 1, 2];
const result = sortArray(array);
console.log(result);