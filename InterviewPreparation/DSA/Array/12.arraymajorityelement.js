// 12. Array Majority Element:
// JavaScript Solution:
function majorityElement(nums) {
  let candidate, count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
}

// Example usage:
const array = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const result = majorityElement(array);
console.log(result);

// function majorityElement(nums) {
//     let candidate = null;
//     let count = 0;
  
//     for (let num of nums) {
//       if (count === 0) {
//         candidate = num;
//       }
  
//       count += num === candidate ? 1 : -1;
//     }
  
//     return candidate;
//   }
  
//   // Example usage:
//   const array = [3, 3, 4, 2, 4, 4, 2, 4, 4];
//   const result = majorityElement(array);
//   console.log(result);