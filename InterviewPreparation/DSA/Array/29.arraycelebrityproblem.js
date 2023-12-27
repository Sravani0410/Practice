// 29. Array Celebrity Problem:
// JavaScript Solution:
// function findCelebrity(n) {
//   let candidate = 0;

//   for (let i = 1; i < n; i++) {
//     if (knows(candidate, i)) {
//       candidate = i;
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     if (i !== candidate && (knows(candidate, i) || !knows(i, candidate))) {
//       return -1; // No celebrity found
//     }
//   }

//   return candidate;
// }

// // Example usage:
// // You need to provide the implementation of the knows function.
// // The knows(a, b) function returns whether a knows b.
// const knows = (a, b) => /* Implementation needed */;

// const n = 4;
// const result = findCelebrity(n);
// console.log(result);