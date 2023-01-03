// 121. Best Time to Buy and Sell Stock solution in JavaScript
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max_profit = 0;
    let min_price = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min_price) {
            min_price = prices[i];
        } else if (prices[i] - min_price > max_profit) {
            max_profit = prices[i] - min_price;
        }
    }

    return max_profit;
};