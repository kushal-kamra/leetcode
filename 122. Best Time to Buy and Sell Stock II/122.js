// 122. Best Time to Buy and Sell Stock II solution in JavaScript
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max_profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            max_profit = max_profit + prices[i] - prices[i - 1];
        }
    }

    return max_profit;
};