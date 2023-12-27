// Reference video:https://www.youtube.com/watch?v=SHINoHxvTso

// function Statement:if we write key word with name is called function statement

// function app(){
//     console.log("function statement")
// }
// function expression: we have to give the value to function statement. and it is also known as function declaration.
// var a=function abc(){
//   console.log("function expression")
// }
// =======================================================================================================
// difference between function statement and function expression: the major different is hoisting

/* compare to 2function will doing call the function

app()
a()

  function app(){
    console.log("function statement")
}
// function expression: we have to give the value to function statement
var a=function abc(){
  console.log("function expression")
}

*/

// function app(){
//     console.log("function statement")
// }
// app()
// function expression: we have to give the value to function statement
// var a=function abc(){
//   console.log("function expression")
// }
// a()
// output: fucntion statement and function expression

// 2.example
// app()
// a()

// function app(){
//     console.log("function statement")
// }
// function expression: we have to give the value to function statement
// var a=function (){
//   console.log("function expression")
// }

// output: function statement and reference error
// explantion: during hoisting or memory creation phase a is creating a memory that will accen to app but abc function is it is stored in variable in hoisting will come into the picture. 
// in hoisting phase a is "undefined" in initial stage untill code hits the line.js code is excutes line by line untill code hits the function and this fucntion is acceind to variable a untill undefined.

// ================================================================================================
// function declaration: it also know as function expression

// Anonymous function: the function without name is called anonymous function.it will show syntax(type) error.
//  it does not have there own indentity.according to ecmascript specification.if doesnot have name that will show inbalance in name.

// function () {

// }

// ====================================================================================================
// named functional expression:
//  var a=function xyz(){
//     console.log("function expression")
//   }
//   a()
//   xyz() //reference error
//   explaination: when we created the function and assen to the variable.  then xyz is not created in outer scope and xyz is not a function inside the outer scope in this entire global scope
// but is created as local variable.for that if we are try to access this function xyz in this function. just console.log in inside xyz funxtion.
// ==========================================================================================================

// difference between paraments and aruguments
//  var a=function xyz(param1,param2){
//         console.log("function expression")
//       }
//       a(1,2)
// explanation : when we pass the value to parameter is called aruguments here a(1,2) 1 and 2 is arguments and param1,param2 is parameters.
// ===============================================================================================================

// first class function: we can pass function as function as arguments.it has ability to use function as values.
// and pass as values as argument and also return to another function.and functions are first class citiziens
// examples:
// var b=function(params){
//     console.log(params)
// }
// function xyz(){

// }
// b(xyz)
// output :xyz function
// arrow functions :

// **********************************************************Difference Between Functional and Class Components******************************************************************************

// https://stackforgeeks.com/blog/reactjs-what-is-the-difference-between-functional-component-and-class-component