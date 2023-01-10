const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]; // true

const isMonotonic = (array) => {
  let nonDecreasing = true;
  let nonIncreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      nonDecreasing = false;
    }
    if (array[i] < array[i - 1]) {
      nonIncreasing = false;
    }
  }
  return nonDecreasing || nonIncreasing;
};

console.log(isMonotonic(array));
