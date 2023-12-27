// 31. Array Top K Frequent Elements:
// JavaScript Solution:
function topKFrequent(nums, k) {
  const frequencyMap = new Map();

  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const sortedNums = Array.from(frequencyMap.keys()).sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a));

  return sortedNums.slice(0, k);
}

// Example usage:
const array = [1, 1, 1, 2, 2, 3];
const k = 2;
const result = topKFrequent(array, k);
console.log(result);