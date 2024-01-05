function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // usage
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
//   console.log(curriedSum)
  
  console.log( curriedSum(1)(2) ); // 3

// ==============================================================
// var _ = require('lodash');
// // Load the core build.
// var _ = require('lodash/core');
// // Load the FP build for immutable auto-curried iteratee-first data-last methods.
// var fp = require('lodash/fp');

// // Load method categories.
// var array = require('lodash/array');
// var object = require('lodash/fp/object');

// // Cherry-pick methods for smaller browserify/rollup/webpack bundles.
// var at = require('lodash/at');
// var curryN = require('lodash/fp/curryN');
// function sum(a, b) {
//     return a + b;
//   }
  
//   let curriedSum = _.curry(sum); // using _.curry from lodash library
  
//   console.log( curriedSum(1, 2) ); // 3, still callable normally
//   console.log( curriedSum(1)(2) ); // 3, called partially