// 561. Array Partition solution in GoLang
// https://leetcode.com/problems/array-partition/description/

package main

import "sort"

func arrayPairSum(nums []int) int {
	sort.Ints(nums)

	max_sum := 0

	for i := 0; i < len(nums); i += 2 {
		max_sum += nums[i]
	}

	return max_sum
}
