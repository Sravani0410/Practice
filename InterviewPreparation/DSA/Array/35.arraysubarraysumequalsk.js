// 35. Array Subarray Sum Equals K:
// JavaScript Solution:
function subarraySum(nums, k) {
  const sumCountMap = new Map();
  sumCountMap.set(0, 1);

  let count = 0;
  let sum = 0;

  for (let num of nums) {
    sum += num;
    if (sumCountMap.has(sum - k)) {
      count += sumCountMap.get(sum - k);
    }

    sumCountMap.set(sum, (sumCountMap.get(sum) || 0) + 1);
  }

  return count;
}

// Example usage:
const array = [1, 2, 3];
const target =  3;
const result = subarraySum(array, target);
console.log(result);