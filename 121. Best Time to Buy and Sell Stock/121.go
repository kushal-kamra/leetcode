// 121. Best Time to Buy and Sell Stock solution in GoLang
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

package main

func maxProfit(prices []int) int {
	max_profit := 0
	min_price := prices[0]

	for i := 1; i < len(prices); i++ {
		if prices[i] < min_price {
			min_price = prices[i]
		} else if prices[i]-min_price > max_profit {
			max_profit = prices[i] - min_price
		}
	}

	return max_profit
}
