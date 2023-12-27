//Example : Merge two sorted arrays into a single sorted array.
function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i <= arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from both arrays
  // console.log("merged",merged,arr1.slice(i),arr2.slice(j))
  // merged = merged.concat(arr1.slice(i), arr2.slice(j));
  // console.log("merged1",merged)
  return merged;
}

// Example usage:
let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];
mergeSortedArrays(array1, array2)
console.log(mergeSortedArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

//   ======================================================================================================

// Question:Given a collection of intervals, merge overlapping intervals.
// // Input
// intervals = [[1,3],[2,6],[8,10],[15,18]];

// Output
// [[1,6],[8,10],[15,18]]

// // solution:
// function mergeIntervals(intervals) {
//     if (intervals.length <= 1) {
//       return intervals;
//     }

//     intervals.sort((a, b) => a[0] - b[0]);

//     let merged = [intervals[0]];

//     for (let i = 1; i < intervals.length; i++) {
//       let currentInterval = intervals[i];
//       let lastMerged = merged[merged.length - 1];

//       if (currentInterval[0] <= lastMerged[1]) {
//         // Overlapping intervals, merge them
//         lastMerged[1] = Math.max(lastMerged[1], currentInterval[1]);
//       } else {
//         // Non-overlapping interval, add to the merged list
//         merged.push(currentInterval);
//       }
//     }

//     return merged;
//   }

//   // Example usage:
//   let intervals = [[1,3],[2,6],[8,10],[15,18]];
//   console.log(mergeIntervals(intervals));

// =================================================================================
// function merge(nums1, m, nums2, n) {
//   // Merge both arrays into a temporary array
//   for (let i = m, j = 0; i < m + n; i++, j++) {
//       nums1[i] = nums2[j];
//   }
//   //  console.log("nums1",nums1)
//   // Sort the merged array
//   nums1.sort((a, b) => a - b);
//   return nums1
// }

// // Example usage:
// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;

// merge(nums1, m, nums2, n);
// console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
