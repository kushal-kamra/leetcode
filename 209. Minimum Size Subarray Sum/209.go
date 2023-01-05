// 209. Minimum Size Subarray Sum solution in GoLang
// https://leetcode.com/problems/minimum-size-subarray-sum/description/

package main

func minSubArrayLen(target int, nums []int) int {
	len := len(nums)
	ans := len + 1
	left := 0
	sum := 0

	for i := 0; i < len; i++ {
		sum = sum + nums[i]

		for sum >= target {
			if ans > i+1-left {
				ans = i + 1 - left
			}
			sum = sum - nums[left]
			left++
		}
	}

	if ans != len+1 {
		return ans
	}

	return 0
}
