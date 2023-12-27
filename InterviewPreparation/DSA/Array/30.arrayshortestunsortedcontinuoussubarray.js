// 30. Array Shortest Unsorted Continuous Subarray:
// JavaScript Solution:
function findUnsortedSubarray(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);

  let start = nums.length;
  let end = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sortedNums[i]) {
      start = Math.min(start, i);
      end = Math.max(end, i);
    }
  }

  return end - start >= 0 ? end - start + 1 : 0;
}

// Example usage:
const array = [2, 6, 4, 8, 10, 9, 15];
const result = findUnsortedSubarray(array);
console.log(result);