
// 21. Array Jump Game:
// JavaScript Solution:
function canJump(nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false; // Cannot reach the current position
    }

    maxReach = Math.max(maxReach, i + nums[i]);

    if (maxReach >= nums.length - 1) {
      return true; // Can reach the end
    }
  }

  return false;
}

// Example usage:
const array = [2, 3, 1, 1, 4];
const result = canJump(array);
console.log(result);