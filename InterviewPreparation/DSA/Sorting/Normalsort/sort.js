
// Example 1: In-built sort
let number = [4, 2, 7, 1, 9];
number.sort((a, b) => a - b);
console.log(number); // Output: [1, 2, 4, 7, 9]

// ==================================================================================

// Example 2:Additionally, you can use the spread operator ([...array]) to create a new sorted array without modifying the original array:

let number1 = [4, 2, 7, 1, 9];
let sortedNumbers = [...number1].sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 2, 4, 7, 9]
console.log(number1); // Output: [4, 2, 7, 1, 9] (original array remains unchanged)

// ==================================================================================

// Example 3: Find Kth Largest Element in an Array.
// Question:Given an unsorted array, find the kth largest element.
function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

// Example usage:
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
let k = 3;
console.log(findKthLargest(numbers, k)); // Output: 5

// ===================================================================================
// Custom Sorting: You can implement your own sorting logic using a custom comparator function with sort().

let fruits = ['apple', 'banana', 'kiwi', 'orange'];
fruits.sort((a, b) => a.length - b.length);
console.log(fruits); // Output: ['kiwi', 'apple', 'banana', 'orange']

// ==================================================================================

// Example 4: reverse(): Reverses the elements of an array in place.
let number4 = [4, 2, 7, 1, 9];
numbers.reverse();
console.log(numbers4); // Output: [9, 1, 7, 2, 4]

// ==================================================================================

//Example : Given an array, find the k most frequent elements.

// question:// Input
// nums = [1,1,1,2,2,3];
// k = 2;

// Output
// [1,2]
function topKFrequent(nums, k) {
    let frequencyMap = {};
  
    nums.forEach(num => {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });
  
    let sortedNums = Object.keys(frequencyMap).sort((a, b) => frequencyMap[b] - frequencyMap[a]);
  
    return sortedNums.slice(0, k).map(Number);
  }
  
  // Example usage:
  let nums = [1,1,1,2,2,3];
  let m = 2;
  console.log(topKFrequent(nums, m));

//   ===================================================================
// Question 3: Two Sum II - Input array is sorted
// Question:Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// Input
// numbers = [2, 7, 11, 15];
// target = 9;

// Output
// [2, 7]
// Solution:

function twoSum(numbers, target) {
  let left = 0, right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [numbers[left], numbers[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return []; // No solution found
}

// Example usage:
let num = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(num, target));

