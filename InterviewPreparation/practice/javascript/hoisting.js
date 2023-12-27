// Hoisting:
// console.log(foo);
// var foo = 'foo';
// undefined
// explaination:This is because the JavaScript interpreter splits the declaration and assignment of functions and variables: it "hoists" your declarations to the top of their containing scope before execution.

// Variable hoisting in JavaScript:we declare a variable with the var, let, and const statements.
// Declaration
// var foo;
// let bar;

// Assignment
// foo = 'foo';
// bar = 'bar';

// console.log(foo); // undefined
// var foo = 'bar';
// console.log(foo); // "bar"

var foo;
console.log(foo); // undefined
foo = 'foo';
console.log(foo); // "foo"


