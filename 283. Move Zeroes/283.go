// 283. Move Zeroes solution in GoLang
// https://leetcode.com/problems/move-zeroes/description/

package main

func moveZeroes(nums []int) {
	last_non_zero := 0

	for i := 0; i < len(nums); i++ {
		if nums[i] != 0 {
			nums[last_non_zero] = nums[i]
			last_non_zero++
		}
	}

	for i := last_non_zero; i < len(nums); i++ {
		nums[i] = 0
	}
}
