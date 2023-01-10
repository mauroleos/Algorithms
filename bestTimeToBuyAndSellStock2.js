/**
200 / 200 test cases passed.
Status: Accepted
Runtime: 61 ms
Memory Usage: 42.3 MB
Your runtime beats 93.15% of javascript submissions 
 */

const prices = [7, 1, 5, 3, 6, 4];

/** OPTIMIZED */

const bestTimeToSell = (prices) => {
  let profit = 0;
  for (let pointer = 1; pointer < prices.length; pointer++) {
    if (prices[pointer] > prices[pointer - 1]) {
      profit += prices[pointer] - prices[pointer - 1];
    }
  }
  return profit;
};

console.log(bestTimeToSell(prices));
