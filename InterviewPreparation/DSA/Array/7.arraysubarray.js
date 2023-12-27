// 7. Array Subarrays:
// JavaScript Solution:
function generateSubarrays(arr) {
  const subarrays = [];
  const n = arr.length;

  for (let start = 0; start < n; start++) {
    for (let end = start; end < n; end++) {
      const subarray = arr.slice(start, end + 1);
      subarrays.push(subarray);
    }
  }

  return subarrays;
}

// Example usage:
const array = [1, 2, 3];
const result = generateSubarrays(array);
console.log(result);