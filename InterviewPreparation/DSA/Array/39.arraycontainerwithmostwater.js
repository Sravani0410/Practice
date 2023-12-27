// 39. Array Container With Most Water:
// JavaScript Solution:
function maxArea(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const w = right - left;
    const area = h * w;
    
    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

// Example usage:
const array = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = maxArea(array);
console.log(result);