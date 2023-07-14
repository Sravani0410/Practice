// uses of use strict:
// ====================
// Certainly! Enabling strict mode in JavaScript is a way to opt into a stricter set of rules and better error handling.
// It helps prevent common mistakes and enforces more rigorous code standards.
// Here are a few scenarios where using strict mode can be beneficial:

//1. Preventing accidental global variables: In non-strict mode, if you forget to declare a variable using the var, let, or const keywords, the variable is automatically assigned to the global object (e.g., window in browsers).
// This can lead to unexpected behavior and bugs.
// Strict mode throws an error in such cases, helping you catch and fix these issues. Example:

"use strict";
x = 10; // Throws an error: Uncaught ReferenceError: x is not defined

// 2.Disallowing duplicate parameter names: In non-strict mode, you can define multiple function parameters with the same name without any error.
// This can lead to confusion and unintended consequences.
// Strict mode detects and prevents duplicate parameter names. Example:

("use strict");
function myFunction(x, x) {
  // Throws an error: Uncaught SyntaxError: Duplicate parameter name not allowed in this context
  // Function body
}

// 3.Prohibiting octal literals: In non-strict mode, JavaScript treats numbers with a leading zero as octal literals (base 8), which can lead to confusion and unexpected results.
// Strict mode disables this behavior and requires explicit use of 0o or 0O prefix for octal literals. Example:
// "use strict";
// var number = 0123; // Throws an error: Uncaught SyntaxError: Octal literals are not allowed in strict mode.

// 4.Restricting the use of this in non-method functions: In non-strict mode, when a regular function is invoked without any context, this is implicitly bound to the global object. This can lead to subtle bugs and unintended behavior.
// Strict mode sets this to undefined in such cases, avoiding potential issues. Example:
("use strict");
function myFunction() {
  console.log(this); // Output: undefined
}
myFunction();

// These are just a few examples of scenarios where strict mode can be beneficial.
//  It's generally recommended to use strict mode at the top of your JavaScript files or within specific functions to improve code quality and catch potential errors early.

// not to uses of use strict:
// =========================

// Strict mode is generally beneficial and recommended for most JavaScript code.
// However, there may be rare cases where strict mode could potentially cause issues or conflicts with legacy code or specific libraries.
// Here are a few examples where you might want to avoid using strict mode:
// 1.Legacy code compatibility: If you have older JavaScript code that relies on non-standard behaviors or depends on certain assumptions that strict mode would break, you may choose not to enable strict mode for that specific code.
//  However, it's generally recommended to refactor and update the code to be compatible with strict mode instead.

// 2.Libraries or frameworks that rely on non-strict mode: Some third-party libraries or frameworks may not be compatible with strict mode.
//  If you're using such a library and it explicitly states that it should not be used with strict mode, you may need to disable strict mode for the relevant parts of your codebase.
//  However, it's often better to consider updating to a newer version of the library that supports strict mode.

// Here's an example where disabling strict mode may be necessary for compatibility reasons:
// Third-party library that requires non-strict mode
function myLegacyLibrary() {
  // Library code here
}
myLegacyLibrary(); // May not work as expected with strict mode enabled

// Disabling strict mode for compatibility
function myFunction() {
  "use strict";
  // Code that relies on strict mode here
}

// Other code that uses strict mode
("use strict");
// ...
//   In general, it's recommended to use strict mode in your JavaScript code whenever possible, as it helps catch errors and promotes better coding practices.
//   However, if you encounter specific situations where strict mode causes conflicts or compatibility issues, you may consider temporarily disabling it for those portions of your code.
