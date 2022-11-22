const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];

const smallestDifference = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let pointerOne = 0;
  let pointerTwo = 0;
  let difference = Infinity;
  let results;

  while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
    let valueOne = arrayOne[pointerOne];
    let valueTwo = arrayTwo[pointerTwo];

    if (valueOne === valueTwo) return [valueOne, valueTwo];

    let currentDifference = Math.abs(valueOne - valueTwo);
    if (currentDifference < difference) {
      difference = currentDifference;
      results = [valueOne, valueTwo];
    }
    valueTwo > valueOne ? pointerOne++ : pointerTwo++;
  }
  return results;
};

console.log(smallestDifference(arrayOne, arrayTwo));
