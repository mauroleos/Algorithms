// O(n^2) time | O(n) space

const array = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;

const threeNumberSum = (array, targetSum) => {
    array.sort((a, b) => a - b);
    const triplets = [];
    
    for (let i = 0; i < array.length; i++) {
        let current = i, leftPointer = i + 1, rightPointer = array.length - 1;
        while (leftPointer < rightPointer) {
            const currentSum = array[current] + array[leftPointer] + array[rightPointer];
            if (currentSum === targetSum) {
                triplets.push([array[current], array[leftPointer], array[rightPointer]]);
                leftPointer++;
                rightPointer--;
            }
            else if (currentSum > targetSum) rightPointer--;
            else if (currentSum < targetSum) leftPointer++;
        }
    };
    return triplets;
};

console.log(threeNumberSum(array, targetSum));