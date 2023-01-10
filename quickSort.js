let arr = [4, 5, 1, 3, 2];

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const leftArr = [];
  const rightArr = [];
  const pivot = arr[arr.length - 1];

  for (const el of arr.splice(0, arr.length - 1)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log(quickSort(arr));
