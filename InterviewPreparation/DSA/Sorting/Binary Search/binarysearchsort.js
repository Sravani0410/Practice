// Question 4: Kth Smallest Element in a Sorted Matrix(using binary search)
// Question:Given an n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

/*
// Input
matrix = [
  [ 1,  5,  9],
  [10, 11, 13],
  [12, 13, 15]
];
k = 8;

// Output
// 13

*/
function kthSmallest(matrix, k) {
    let n = matrix.length;
    let low = matrix[0][0];
    let high = matrix[n - 1][n - 1];
  
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      let count = 0;
      let j = n - 1;
  
      for (let i = 0; i < n; i++) {
        while (j >= 0 && matrix[i][j] > mid) {
          j--;
        }
        count += (j + 1);
      }
  
      if (count < k) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
  
    return low;
  }
  
  // Example usage:
  let matrix = [
    [ 1,  5,  9],
    [10, 11, 13],
    [12, 13, 15]
  ];
  let n = 8;
  console.log(kthSmallest(matrix, n)); // Output: 13
  




  
