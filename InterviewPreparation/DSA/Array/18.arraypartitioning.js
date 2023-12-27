// 18. Array Partitioning:
// JavaScript Solution:
function partitionArray(arr, pivot) {
  const lessThanPivot = arr.filter((num) => num < pivot);
  const equalToPivot = arr.filter((num) => num === pivot);
  const greaterThanPivot = arr.filter((num) => num > pivot);

  return lessThanPivot.concat(equalToPivot, greaterThanPivot);
}

// Example usage:
const array = [5, 2, 8, 1, 6];
const pivot = 5;
const result = partitionArray(array, pivot);
console.log(result);