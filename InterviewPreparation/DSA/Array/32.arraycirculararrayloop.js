// 32. Array Circular Array Loop:
// JavaScript Solution:
function circularArrayLoop(nums) {
  const n = nums.length;

  const getIndex = (i) => ((i + nums[i]) % n + n) % n;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) continue;
    
    let slow = i;
    let fast = getIndex(i);

    while (nums[i] * nums[fast] > 0 && nums[i] * nums[getIndex(fast)] > 0) {
      if (slow === fast) {
        if (slow === getIndex(slow)) break; // Single element loop
        return true;
      }

      slow = getIndex(slow);
      fast = getIndex(getIndex(fast));
    }

    let j = i;
    let val = nums[i];
    while (nums[j] * val > 0) {
      let next = getIndex(j);
      nums[j] = 0;
      j = next;
    }
  }

  return false;
}

// Example usage:
const array = [2, -1, 1, 2, 2];
const result = circularArrayLoop(array);
console.log(result);