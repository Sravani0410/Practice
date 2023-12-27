// 37. Array Maximum Average Subarray I:
// JavaScript Solution:
function findMaxAverage(nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
}

// Example usage:
const array = [1, 12, -5, -6, 50, 3];
const k = 4;
const result = findMaxAverage(array, k);
console.log(result);