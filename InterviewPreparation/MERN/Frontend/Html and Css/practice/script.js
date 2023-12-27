let colors = ["green", "green", "green", "green", "green", "green"];
let currentIndex = -1;

function changeColor(index) {
  const boxes = document.querySelectorAll('.box');

//   if (currentIndex !== -1) {
//     // Reset the color of the previously clicked box
//     boxes[currentIndex].style.backgroundColor = "white";
//   }

  // Toggle the color of the clicked box
  if (currentIndex !== index) {
    boxes[index].style.backgroundColor = colors[index];
    currentIndex = index;
  } else {
    currentIndex = -1; // Reset if the same box is clicked again
  }
}
