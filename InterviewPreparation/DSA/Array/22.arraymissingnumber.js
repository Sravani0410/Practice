// 22. Array Missing Number:
// JavaScript Solution:
function missingNumber(nums) {
  const n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

// Example usage:
const array = [3, 0, 1];
const result = missingNumber(array);
console.log(result);