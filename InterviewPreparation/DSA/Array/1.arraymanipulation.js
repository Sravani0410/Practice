class ArrayManipulation {
    constructor() {
      this.array = [];
    }
  
    insertElement(index, value) {
      this.array.splice(index, 0, value);
    }
  
    deleteElement(index) {
      this.array.splice(index, 1);
    }
  
    updateElement(index, value) {
      if (index >= 0 && index < this.array.length) {
        this.array[index] = value;
      } else {
        console.log("Index out of bounds.");
      }
    }
  }
  
  // Example usage:
  const arrayManipulator = new ArrayManipulation();
  arrayManipulator.insertElement(0, 1);
  arrayManipulator.insertElement(1, 2);
  arrayManipulator.updateElement(1, 3);
  arrayManipulator.deleteElement(0);
  console.log(arrayManipulator.array);
  