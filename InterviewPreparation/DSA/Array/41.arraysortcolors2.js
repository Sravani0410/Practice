// 41. Array Sort Colors II:
// JavaScript Solution:
function sortColors(nums) {
  let low = 0;
  let high = nums.length - 1;

  const swap = (i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };

  for (let i = 0; i <= high;) {
    if (nums[i] === 0) {
      swap(i, low);
      i++;
      low++;
    } else if (nums[i] === 2) {
      swap(i, high);
      high--;
    } else {
      i++;
    }
  }
}

// Example usage:
const array = [2, 0, 2, 1, 1, 0];
sortColors(array);
console.log(array);