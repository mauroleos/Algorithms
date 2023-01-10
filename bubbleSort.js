let numsArr = [5, 40, 2, 12, 45, 8, 25];

const bubbleSorrt = (numsArr) => {
  let sorted = false;
  let last = numsArr.length - 1;

  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < last; i++) {
      if (numsArr[i] > numsArr[i + 1]) {
        [numsArr[i], numsArr[i + 1]] = [numsArr[i + 1], numsArr[i]];
        sorted = false;
      }
    }
    last--;
  }
  return numsArr;
};

bubbleSorrt(numsArr);
