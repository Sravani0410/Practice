// 14. Array Stock Buy/Sell:
// JavaScript Solution:
function maxProfit(prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
}

// Example usage:
const array = [7, 1, 5, 3, 6, 4];
const result = maxProfit(array);
console.log(result);