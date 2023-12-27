// 9. Array Rotation Check:
// JavaScript Solution:
function isRotation(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const doubleArr1 = [...arr1, ...arr1];

  for (let i = 0; i < arr2.length; i++) {
    const subarray = doubleArr1.slice(i, i + arr2.length);
    if (arraysEqual(subarray, arr2)) {
      return true;
    }
  }

  return false;
}

function arraysEqual(arr1, arr2) {
  return arr1.every((element, index) => element === arr2[index]);
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 1, 2];
const result = isRotation(array1, array2);
console.log(result);