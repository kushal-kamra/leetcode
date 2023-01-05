// 123. Best Time to Buy and Sell Stock III solution in Java
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/

class Solution {
    public int maxProfit(int[] prices) {
        int len = prices.length;

        if (len <= 1) return 0;

        int left_min = prices[0];
        int right_max = prices[len - 1];

        int[] left_profits = new int[len];
        int[] right_profits = new int[len + 1];

        for (int i = 1; i < len; i++) {
            left_profits[i] = Math.max(left_profits[i - 1], prices[i] - left_min);
            left_min = Math.min(left_min, prices[i]);

            int right_index = len - 1 - i;

            right_profits[right_index] = Math.max(right_profits[right_index + 1], right_max - prices[right_index]);
            right_max = Math.max(right_max, prices[right_index]);
        }

        int max_profit = 0;

        for (int i = 0; i < len; i++) {
            max_profit = Math.max(max_profit, left_profits[i] + right_profits[i + 1]);
        }
        
        return max_profit;
    }
}