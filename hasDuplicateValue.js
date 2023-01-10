/** Linear solution */

const arr = [2, 5, 12, 9, 32, 6];

const start = performance.now();

const hasDuplicateValue = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
};

console.log(performance.now() - start);

console.log(hasDuplicateValue(arr));
