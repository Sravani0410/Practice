// 49. Array Find Duplicate Number:
// JavaScript Solution:
function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  fast = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

// Example usage:
const array = [1, 3, 4, 2, 2];
const result = findDuplicate(array);
console.log(result);