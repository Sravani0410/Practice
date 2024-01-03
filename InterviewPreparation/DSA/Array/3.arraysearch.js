// 3. Array Search:
// JavaScript Solution:
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // Not found
}

// Example usage:
const array = [1, 2, 3, 4, 5,6];
const target = 6;
const result = findIndex(array, target);
console.log(result);


