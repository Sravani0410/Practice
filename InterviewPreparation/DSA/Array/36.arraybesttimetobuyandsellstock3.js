// 36. Array Best Time to Buy and Sell Stock III:
// JavaScript Solution:
function maxProfit3(prices) {
  if (prices.length === 0) {
    return 0;
  }

  let buy1 = Infinity;
  let sell1 = 0;
  let buy2 = Infinity;
  let sell2 = 0;

  for (let price of prices) {
    buy1 = Math.min(buy1, price);
    sell1 = Math.max(sell1, price - buy1);
    buy2 = Math.min(buy2, price - sell1);
    sell2 = Math.max(sell2, price - buy2);
  }

  return sell2;
}

// Example usage:
const array = [3, 3, 5, 0, 0, 3, 1, 4];
const result = maxProfit3(array);
console.log(result);