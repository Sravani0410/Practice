// 13. Array Rain Water Trapping:
// JavaScript Solution:
function trap(height) {
  const n = height.length;
  const leftMax = new Array(n).fill(0);
  const rightMax = new Array(n).fill(0);

  let max = 0;
  for (let i = 0; i < n; i++) {
    leftMax[i] = max;
    max = Math.max(max, height[i]);
  }

  max = 0;
  for (let i = n - 1; i >= 0; i--) {
    rightMax[i] = max;
    max = Math.max(max, height[i]);
  }

  let totalWater = 0;
  for (let i = 0; i < n; i++) {
    const minHeight = Math.min(leftMax[i], rightMax[i]);
    if (minHeight > height[i]) {
      totalWater += minHeight - height[i];
    }
  }

  return totalWater;
}

// Example usage:
const array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const result = trap(array);
console.log(result);