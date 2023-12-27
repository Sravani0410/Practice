// Example of a callback function
// function fetchData(callback) {
//     // Simulating an asynchronous operation (e.g., fetching data from an API)
//     setTimeout(function () {
//       const data = 'This is the fetched data';
//       // Invoke the callback with the data
//       callback(data);
//     }, 1000);
//   }
  
//   // Callback function to handle the fetched data
//   function processData(data) {
//     console.log('Processing data:', data);
//   }
  
//   // Using the fetchData function with a callback
//   fetchData(processData);
  
  // function fetchData(url, callback) {
  //   // Simulating an asynchronous operation (e.g., AJAX request)
  //   setTimeout(function () {
  //       const data = { name: 'John', age: 30 };
  //       callback(data);
  //   }, 1000);
  //   }

  //   fetchData('https://api.example.com/data', function (result) {
  //   console.log(result); // Output: { name: 'John', age: 30 }
  //   });

const myObject = { name: 'John', age: 30, city: 'New York' };

// for (let key in myObject) {
//   if (myObject.hasOwnProperty(key)) {
//     console.log(`Key: ${key}, Value: ${myObject[key]}`);
//   }
// }

// Object.keys(myObject).forEach((key) => {
//   console.log(`Key: ${key}, Value: ${myObject[key]}`);
// });

// Object.entries(myObject).forEach(([key, value]) => {
//   console.log(`Key: ${key}, Value: ${value}`);
// });

// const keys = Object.keys(myObject);
// console.log(keys); // Output: ['name', 'age', 'city']

// const values = Object.values(myObject);
// console.log(values); // Output: ['John', 30, 'New York']

function outerFunction(){
  const outervariable="Iam from outer"
  function innerFunction(){
      console.log(outervariable) //inner function can access outervariable
  }
  return innerFunction;
 }
 const closure=outerFunction()
//  console.log("sdhgaj",closure())
 closure()