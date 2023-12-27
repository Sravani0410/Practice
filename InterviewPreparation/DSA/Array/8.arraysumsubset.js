// 8. Array Sum/Subset Sum:
// JavaScript Solution:
function findSubsetWithSum(arr, targetSum) {
  const subsets = [];

  function backtrack(start, currentSubset, currentSum) {
    if (currentSum === targetSum) {
      subsets.push([...currentSubset]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      currentSubset.push(arr[i]);
      backtrack(i + 1, currentSubset, currentSum + arr[i]);
      currentSubset.pop();
    }
  }

  backtrack(0, [], 0);
  return subsets;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const targetSum = 6;
const result = findSubsetWithSum(array, targetSum);
console.log(result);