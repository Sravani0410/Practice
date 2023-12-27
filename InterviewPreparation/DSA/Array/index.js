// const array=[1,2,3,4,5];
// const [x,,,y]=array;
// console.log(x,y)
// output:1,4

// 1.Find the maximum product of two integers in an array:

function maxProduct(nums) {s
    nums.sort((a, b) => a - b);
    return Math.max(nums[0] * nums[1], nums[nums.length - 2] * nums[nums.length - 1]);
}
let nums=[3,6,2,1,0,8]
maxProduct(nums)
console.log("gsh",nums)