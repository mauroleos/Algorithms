let nums = [1, 2, 7, 7, 4, 4]; // 1, 2, 7, 4, 4

const removeDupes = (nums) => {
  const seenSet = new Set();
  nums.forEach((num) => seenSet.add(num));
  return seenSet;
};

console.log(removeDupes(nums)); // 1, 2, 7, 4
