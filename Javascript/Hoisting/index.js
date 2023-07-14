// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
// var hoistedVariable;

// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs ReferenceError => cannot access "hoistedVariable"
// let hoistedVariable;

// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs SyntaxError => Missing initializer in const declaration
// const hoistedVariable;

// hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling
// function hoistedFunction(){
//   console.log(" Hello world! ");
// }

// Hoisting takes place in the local scope as well
// function doSomething(){
//     x = 33;
//     console.log(x);
//     var x;
// }
// doSomething(); // Outputs 33 since the local variable “x” is hoisted inside the local scope

// function doSomething(){
//     x = 33;
//     console.log(x);
//     let x;
// }
// doSomething(); // ReferenceError: Cannot access 'x' before initialization

// function doSomething(){
//     x = 33;
//     console.log(x);
//     const x;
// }
// doSomething(); // SyntaxError: Missing initializer in const declaration

// Note - Variable initializations are not hoisted, only variable declarations are hoisted:
var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;

// Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:
("use strict");
x = 23; // Gives an error since 'x' is not declared
var x;

// Note:Refer the strict mode folder
