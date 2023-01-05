// 122. Best Time to Buy and Sell Stock II solution in GoLang
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

package main

func maxProfit(prices []int) int {
	max_profit := 0

	for i := 1; i < len(prices); i++ {
		if prices[i] > prices[i-1] {
			max_profit += prices[i] - prices[i-1]
		}
	}

	return max_profit
}
