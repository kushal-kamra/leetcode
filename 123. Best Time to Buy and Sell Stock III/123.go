// 123. Best Time to Buy and Sell Stock III solution in GoLang
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/

package main

func maxProfit(prices []int) int {
	len := len(prices)
	if len <= 1 {
		return 0
	}

	left_min := prices[0]
	right_max := prices[len-1]

	left_profits := make([]int, len)
	right_profits := make([]int, len+1)

	for i := 1; i < len; i++ {
		left_profits[i] = Max(left_profits[i-1], prices[i]-left_min)
		left_min = Min(left_min, prices[i])

		right_index := len - 1 - i

		right_profits[right_index] = Max(right_profits[right_index+1], right_max-prices[right_index])
		right_max = Max(right_max, prices[right_index])
	}

	max_profit := 0

	for i := 0; i < len; i++ {
		max_profit = Max(max_profit, left_profits[i]+right_profits[i+1])
	}

	return max_profit
}

func Max(val1 int, val2 int) int {
	if val1 < val2 {
		return val2
	}

	return val1
}

func Min(val1 int, val2 int) int {
	if val1 < val2 {
		return val1
	}

	return val2
}
