const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    const tempValue = array[i];
    position = i;
    while (position > 0 && array[position - 1] > tempValue) {
      array[position] = array[position - 1];
      position = position - 1;
    }
    array[position] = tempValue;
  }
  return array;
};
// position = 1
// tempValue = 3
//              *
// 2, 3, 4, 8, 12, 1
console.log(insertionSort([12, 8, 4, 2, 3, 1]));
