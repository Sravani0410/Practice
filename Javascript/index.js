// 1.
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}
sayHi();
// output: name:undefined ,age: reference Error
// Explanation : Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory
//     space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the
//     variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of
//     undefined.
//     Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line
//     we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared,
//     JavaScript throws a ReferenceError.

// 2. What's the output?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
// A: 0 1 2 and 0 1 2
// B: 0 1 2 and 3 3 3
// C: 3 3 3 and 0 1 2
// Answer: C
// Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the
// variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of
// i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the
// first example.
