/**
[7, 3, 19, 4, 28, 33]
                   *

temp = 54
current = 59
prev = 54

**/

function maxSubsetSumNoAdjacent(array) {
  let prev = 0;
  let current = 0;

  for (let i = 0; i < array.length; i++) {
    let temp = current;
    if (array[i] + prev > current) {
      current = array[i] + prev;
    }
    prev = temp;
  }
  return current;
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
