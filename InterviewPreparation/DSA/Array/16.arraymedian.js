// 16. Array Median:
// JavaScript Solution:
function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  const n = mergedArray.length;

  if (n % 2 === 0) {
    const mid = n / 2;
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    const mid = Math.floor(n / 2);
    return mergedArray[mid];
  }
}

// Example usage:
const array1 = [1, 3];
const array2 = [2];
const result = findMedianSortedArrays(array1, array2);
console.log(result);