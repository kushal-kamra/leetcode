// 123. Best Time to Buy and Sell Stock III solution in JavaScript
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    if (len <= 1) return 0;

    let left_min = prices[0];
    let right_max = prices[len - 1];

    let left_profits = new Array(len).fill(0);
    let right_profits = new Array(len + 1).fill(0);

    for (let i = 1; i < len; i++) {
        left_profits[i] = Math.max(left_profits[i - 1], prices[i] - left_min);
        left_min = Math.min(left_min, prices[i]);

        let right = len - 1 - i;
        right_profits[right] = Math.max(right_profits[right + 1], right_max - prices[right]);
        right_max = Math.max(right_max, prices[right]);
    }

    let max_profit = 0;

    for (let i = 0; i < len; i++) {
        max_profit = Math.max(max_profit, left_profits[i] + right_profits[i + 1]);
    }

    return max_profit;
};