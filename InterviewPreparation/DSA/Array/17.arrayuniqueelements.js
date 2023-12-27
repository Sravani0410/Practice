// 17. Array Unique Elements:
// JavaScript Solution:
function removeDuplicates(nums) {
  return Array.from(new Set(nums));
}

// Example usage:
const array = [1, 1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(array);
console.log(result);