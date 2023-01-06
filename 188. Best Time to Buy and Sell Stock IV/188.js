// 188. Best Time to Buy and Sell Stock IV solution in JavaScript
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let prices_len = prices.length;

    if (prices_len <= 0 || k <= 0) return 0;

    if ((2 * k) > prices_len) {
        let result = 0;
        
        for (let i = 1; i < prices_len; i++) {
            result += Math.max(0, prices[i] - prices[i - 1]);
        }

        return result;
    }

    let dp = [];

    for (let i = 0; i < prices_len; i++) {
        dp[i] = [];

        for (let j = 0; j <= k; j++) {
            dp[i][j] = [];

            dp[i][j][0] = Number.MIN_SAFE_INTEGER;
            dp[i][j][1] = Number.MIN_SAFE_INTEGER;
        }
    }

    dp[0][0][0] = 0;
    dp[0][1][1] = -prices[0];

    for (let i = 1; i < prices_len; i++) {
        for (let j = 0; j <= k; j++) {
            dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);

            if (j > 0) {
                dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
            }
        }
    }

    let result = 0;

    for (let j = 0; j <= k; j++) {
        result = Math.max(result, dp[prices_len - 1][j][0]);
    }

    return result;
};