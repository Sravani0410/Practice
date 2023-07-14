function findTheMissingNumbers(numbers) {
    console.log(numbers.length)
  const missingNumbers = [];

  if (numbers.length === 0) {
    console.log("missingNumbers",missingNumbers)
    return missingNumbers;
  }

  const start = Math.min(...numbers);
  const end = Math.max(...numbers);

  for (let i = start; i <= end; i++) {
    let flag = false;

    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] === i) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

// const start=11;
// const end=20;
const givenNumbers = [11,13,15,16];
const missingNumbers = findTheMissingNumbers(givenNumbers);
console.log(missingNumbers);
