const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;

const moveElementToEnd = (array, toMove) => {
  let pointerOne = 0;
  let pointerTwo = array.length - 1;
  let temp;

  while (pointerTwo > pointerOne) {
    if (array[pointerOne] === toMove && array[pointerTwo] !== toMove) {
      temp = array[pointerOne];
      array[pointerOne] = array[pointerTwo];
      array[pointerTwo] = temp;
    }
    if (array[pointerOne] !== toMove) pointerOne++;
    if (array[pointerTwo] === toMove) pointerTwo--;
  }
  return array;
};

console.log(moveElementToEnd(array, toMove));
