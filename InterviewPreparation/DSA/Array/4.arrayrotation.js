// 4. Array Rotation:
// JavaScript Solution:
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // Handle cases where k is greater than array length
  const rotatedArray = arr.slice(n - k).concat(arr.slice(0, n - k));
  return rotatedArray;
}

// Example usage:
const array = [1,2,3,4,5,6,7];
const k = 3;
const result = rotateArray(array, k);
console.log(result);   
