// 44. Array Majority Element II:
// JavaScript Solution:
function majorityElement(nums) {
  let candidate1 = null;
  let count1 = 0;
  let candidate2 = null;
  let count2 = 0;

  for (let num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  const result = [];
  const threshold = nums.length / 3;

  if (nums.filter(num => num === candidate1).length > threshold) {
    result.push(candidate1);
  }

  if (nums.filter(num => num === candidate2).length > threshold) {
    result.push(candidate2);
  }

  return result;
}

// Example usage:
const array = [3, 3, 3, 1, 2, 1, 1, 2, 2];
const result = majorityElement(array);
console.log(result);