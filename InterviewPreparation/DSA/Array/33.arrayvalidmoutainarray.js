// 33. Array Valid Mountain Array:
// JavaScript Solution:
function validMountainArray(nums) {
  const n = nums.length;
  let i = 0;

  // Check increasing sequence
  while (i < n - 1 && nums[i] < nums[i + 1]) {
    i++;
  }

  if (i === 0 || i === n - 1) {
    return false; // Mountain array should have both increasing and decreasing parts
  }

  // Check decreasing sequence
  while (i < n - 1 && nums[i] > nums[i + 1]) {
    i++;
  }

  return i === n - 1;
}

// Example usage:
const array = [0, 3, 2, 1];
const result = validMountainArray(array);
console.log(result);