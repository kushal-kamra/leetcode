// 122. Best Time to Buy and Sell Stock II solution in Java
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

class Solution {
    public int maxProfit(int[] prices) {
        int max_profit = 0;

        for (int i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                max_profit += prices[i] - prices[i - 1];
            }
        }

        return max_profit;
    }
}