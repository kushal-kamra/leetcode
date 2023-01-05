// 1863. Sum of All Subset XOR Totals solution in GoLang
// https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/

package main

func subsetXORSum(nums []int) int {
	return helper(nums, 0, 0)
}

func helper(nums []int, index, current_xor int) int {
	if index == len(nums) {
		return current_xor
	}

	with_element := helper(nums, index+1, current_xor^nums[index])
	without_element := helper(nums, index+1, current_xor)

	return with_element + without_element
}
