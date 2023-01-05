// 27. Remove Element solution in GoLang
// https://leetcode.com/problems/remove-element/description/

package main

func removeElement(nums []int, val int) int {
	length := len(nums)
	i := 0

	for j := 0; j < length; j++ {
		if nums[j] != val {
			nums[i] = nums[j]
			i++
		}
	}

	return i
}
