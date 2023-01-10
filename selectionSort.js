const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let lowestNumberIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
    if (lowestNumberIndex !== i) {
      const temp = array[i];
      array[i] = array[lowestNumberIndex];
      array[lowestNumberIndex] = temp;
    }
  }
  return array;
};

//        *
//           *
// [1, 2, 7, 4, 3]
// lowestNumberIndex =
//
//
console.log(selectionSort([4, 2, 7, 1, 3]));
