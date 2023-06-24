function generateNumber() {
  // generate a random integer(hint : Math.random)
  var randomNumber = Math.floor(Math.random() * 100) + 1;

  // Update the value of the div with id="number"
  document.getElementById("number").textContent = randomNumber;

  // Invoke the checkOddEven function with the generated number as the argument
  checkOddEven(randomNumber);
}

function checkOddEven(num) {
  // logic for even / odd
  // Check if the number is odd or even
  if (num % 2 === 0) {
    // Update the text content of the div with id="odd-even" for even numbers
    document.getElementById("odd-even").textContent = "The number is even";
  } else {
    // Update the text content of the div with id="odd-even" for odd numbers
    document.getElementById("odd-even").textContent = "The number is odd";
  }
}

window.onload = function () {
  // add event listeners to the button here

  // Add event listener to the button when the window loads
  document
    .getElementById("generate-number")
    .addEventListener("click", generateNumber);
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
