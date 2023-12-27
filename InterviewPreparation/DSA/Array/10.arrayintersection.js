// 10. Array Intersection/Union:
// JavaScript Solution:
function findIntersection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

function findUnion(arr1, arr2) {
  const set = new Set([...arr1, ...arr2]);
  return Array.from(set);
}

// Example usage:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const intersectionResult = findIntersection(array1, array2);
const unionResult = findUnion(array1, array2);
console.log("Intersection:", intersectionResult);
console.log("Union:", unionResult);