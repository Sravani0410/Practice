

// Example 1: Implement Bubble Sort
// Question:Implement the Bubble Sort algorithm to sort an array of integers.

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Example usage:
let numbers = [4, 2, 7, 1, 9];
console.log(bubbleSort(numbers)); // Output: [1, 2, 4, 7, 9]