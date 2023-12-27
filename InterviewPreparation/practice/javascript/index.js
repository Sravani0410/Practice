// scope:
// =====
// {
//     let a = 3;
//     console.log( a );   
// }

// output:3

// {
//     console.log( a );
//     console.log( b );
//     var a;
//     let b;
//   }
//   output: undefined and ReferenceError
// Explaination: Accessing a let-declared variable earlier than its let .. declaration/initialization causes an error,
//  whereas with var declarations the ordering doesn’t matter

// closure example:
// ===============

// let nums = []
// for (let i = 1; i < 6; i++) {
//   nums.push(function() {
//     console.log(i)
// });
// }
// nums.forEach(fn => fn());

// output: 1,2,3,4,5
// explaination:The let i in the for header declares an i not just for the for loop itself, but it redeclares a new i for each iteration of the loop.
//  That means that closures created inside the loop iteration close over those per-iteration variables the way you'd expect. 
// If you tried that same snippet but with var i in the for loop header, you'd get 6,6,6,6,6 instead.


// spread operator: When ... is used in front of an array, it acts to “spread” it out into its individual values.

// let a = [2,3,4];
// let b = [ 1, ...a, 5 ];
// console.log(b);
// output:[1,2,3,4,5]

// function foo(x, y, ...z) {
//     console.log( z );  
// }    
// foo( 1, 2, 3, 4, 5 );
// output: [3,4,5]

// In the following code, function foo (x=20) {...}, what does "x=20" accomplish?
// In ES6+, you can provide a default value for a function parameter.
//  The default value is used if the argument is undefined (including if no argument is passed).
//  It is not used for other falsy values (i.e. 0, NaN, an empty string, etc.).

// function foo(x=20){
//     console.log(x)
// }
// foo(40)

//   function foo(x = 11, y = 31) {
//     console.log( x + y );
//   }
//   foo(null, 6); 
//   foo(undefined, 6);
//   output: 6,17
//Explaination: null coerces to 0, so the default value is never used. 
// undefined is the same as a missing argument, so the default value is used in this case.


// ***************************************************************CLOSURE************************************************************
// function outer(){
//     var a=10;
//     return function inner(b){
//         return a+b
//     }
// }
// var fn=outer()
// console.log(fn(4));
// output:14
// console.log(outer()(10))
// output:20
// function outer(a){
//     return function inner(b){
//         return a+b
//     }
// }
// console.log(outer(10)(20))

// function calculator(initValue=0){
//   var value=initValue
//   function add(val){
//     value=value+val
//     return value
//   }
//   function sub(val){
//     value=value-val
//     return value
//   }
//   return {add,sub}
// }
// var calc=calculator()
// console.log(calc.add(10)) /*output 10 */
// console.log(calc.add(10)) /*output 20  ---> here its remember the previous value , sometimes it has memorization,isPrime number*/
// // console.log(calc.sub(10))

// function find_max(nums){
//     let max_num=Number.NEGATIVE_INFINITY;
//     for(let num of nums){
//         if(num>max_num){

//         }
//     }
//     return max_num;
// }
// the following options are a)num=max_num b)max_num+=1 c)max_num=num d)max_num +=num
// what is output following options Ans: c

// const nums=[1,2,3,4,5,6,7];
// nums.forEach((n)=>{
//     if(n%2===0)
//     break;
// console.log(n);
// })
// output : Error 

//===================================================== new concepts added in 2023 ============================================================

// let numbers = [3, 4, 1, 5, 2];

// const splicedNumbers = numbers.toSpliced(1, 1);
// console.log("splicedNumbers",splicedNumbers)

// const months = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
// const months2 = months.toSpliced(1, 0, "Feb");
// console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// const sortedNumbers = numbers.toSorted();
// const reversedNumbers = numbers.toReversed();

// ===============================Array methods======================================
// 1.Array Literal:
//  let arr1 = [1, 2, 3, 4, 5];
// // 2.Array Constructor: 
//  let arr2 = new Array(1, 2, 3, 4, 5);
// // 3.Using the Array.from method:
//  let arr3 = Array.from({ length: 10 }, (_, index) => index + 1);
// // 4.Using a loop for dynamic initialization: 
// let arr4 = [];
// for (let i = 1; i <= 10; i++) {
//     arr4.push(i);
// }
// // 5.Using the fill method:
// let arr5 = new Array(10).fill().map((_, index) => index + 1);

// console.log("arr4",arr4)

// ============================2D and 3D array==================================

// Initialize a 2D array with 3 rows and 4 columns
let twoDArray = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// Accessing elements in a 2D array
console.log(twoDArray[1][2]); // Output: 7
// Initialize a 3D array with 2 layers, each layer having 3 rows and 4 columns
let threeDArray = [
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ],
    [
        [13, 14, 15, 16],
        [17, 18, 19, 20],
        [21, 22, 23, 24]
    ]
];

// Accessing elements in a 3D array
console.log(threeDArray[1][2][3]); // Output: 24