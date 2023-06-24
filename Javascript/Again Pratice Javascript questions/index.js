window.onload = function () {
  document
    .getElementById("generateNumber")
    .addEventListener("click", generateNumber);
};
function generateNumber() {
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("number").textContent = randomNumber;
  oddEvenFunction(randomNumber);
}
function oddEvenFunction(num) {
  if (num % 2 == 0) {
    document.getElementById("even-odd").textContent = "Number is Even";
  } else {
    document.getElementById("even-odd").textContent = "Number is Odd";
  }
}
