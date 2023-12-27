// 2. Array Traversal:
// JavaScript Solution:
// function sumOfArrayElements(arr) {
//   let sum = 0;
//   for (let element of arr) {
//     sum += element;
//   }
//   return sum;
// }

// // Example usage:
// const array = [1, 2, 3, 4, 5];
// const result = sumOfArrayElements(array);
// console.log(result);


function arrayTraversal(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] * 2);
  }

  return result;
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7];
const result = arrayTraversal(array);
console.log(result);