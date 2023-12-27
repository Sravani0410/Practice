
// 19. Array Triplet Sum:
// JavaScript Solution:
function threeSum(nums, target) {
  const triplets = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        triplets.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicates
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    // Skip duplicates
    while (i < nums.length - 2 && nums[i] === nums[i + 1]) {
      i++;
    }
  }

  return triplets;
}

// Example usage:
const array = [-1, 0, 1, 2, -1, -4];
const target = 0;
const result = threeSum(array, target);
console.log(result);