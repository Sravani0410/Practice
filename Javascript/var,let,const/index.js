// Some differences are 
// 1.From the very beginning, the 'var' keyword was used in JavaScript programming whereas the keyword 'let' was just added in 2015.
// 2.The keyword 'Var' has a function scope.
//  Anywhere in the function, the variable specified using var is accessible but in ‘let’ the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared. 
// Let's start with a Block Scope.
// 3.In ECMAScript 2015, let and const are hoisted but not initialized. 
// Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

// Scope: Scope essentially means where these variables are available for use.
// ======
// There are two types of scopes in JS:
// ===================================
// Function Scope: Visibility is limited to the function.
 function myFn() {
     var x = 10; 
     console.log(x); //prints 10
 } 
 console.log(x); // ReferenceError: x is not defined

// Block Scope: Visibility is limited to the block of code.
 if (true) { 
     let x = 10; 
     console.log(x); //prints 10
 } 
 console.log(x); // ReferenceError: x is not defined
  
// Now, that we have idea of scope. We can discuss the scope of var, let and const.
// * var declarations are function scoped.
// * let declarations are block scoped.
// * const declarations are block scoped.
 
// Redefining and Redeclaring feature:
// ===================================
// A variable declared using ‘var’ can be redefined and even redeclared anywhere throughout its scope.

var x = 30;
console.log(x); //prints 30
x = "Hi"; //redefining or re-assigning (works without any error)
console.log(x); //prints "Hi"
 
var y = 10;
console.log(y); //prints 10
var y = "Hello"; //Redeclaring (works without any error)
console.log(y) //Prints "Hello"
 
// A variable declared using ‘let’ can be redefined within its scope but cannot be re-declared within its scope.

let x = 11;
console.log(x); //prints 11
x = "IB"; //works without any error
console.log(x); //prints "IB"

let y = 12;
console.log(y); //prints 12
let y = "Scaler"; // error: Identifier y has already been declared

let z = 13;
if(true){
   let z = "Fun"; //works without any error as scope is different.
   console.log(z) //prints "Fun"
}
console.log(z) //prints 13
 
// A variable declared using ‘const’ cannot be redefined or re-declared within its scope.

const x = 10;
console.log(x); //prints 10
x = 11; // error: Assignment to constant variable.

// const y;
// y = 2; //error

// const z = 12;
// console.log(z) //prints 12
// const z = 13; // error: Identifier 'z' has already been declared

// Every const declaration must be initialized at the time of declaration.

// Hoisting: Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution.
// =========
console.log(x); // prints undefined
var x = 100;
console.log(x); //prints 100

// Variables declared using var are hoisted to the top of their scope and initialized with a value of undefined(special type).
// Variables declared using let are hoisted to the top of their scope but are not initialized with any value.
// Variables declared using const are hoisted to the top of their scope but are not initialized with any value.
 
console.log(x); // prints undefined
var x = 100;
console.log(x); //prints 100

console.log(y); //Reference error
let y = 200;
console.log(y); //prints 200

console.log(z); //Reference error
// const z = 300;
// console.log(z); //prints 300
 
// Try the following example in the editor below.
// Predict the output of the following code:
var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}
console.log(b)

// output: -10
