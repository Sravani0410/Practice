// 20. Array Next Permutation:
// JavaScript Solution:
function nextPermutation(nums) {
  let i = nums.length - 2;

  // Find the first decreasing element
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    // Find the smallest element greater than nums[i]
    while (nums[j] <= nums[i]) {
      j--;
    }

    // Swap nums[i] and nums[j]
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Reverse the remaining elements
  reverse(nums, i + 1);

  function reverse(array, start) {
    let end = array.length - 1;
    while (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
      start++;
      end--;
    }
  }
}

// Example usage:
const array = [1, 2, 3];
nextPermutation(array);
console.log(array);