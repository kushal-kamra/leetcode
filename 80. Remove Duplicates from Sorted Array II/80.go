// 80. Remove Duplicates from Sorted Array II solution in GoLang
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/

package main

func removeDuplicates(nums []int) int {
	j := 1
	count := 1

	for i := 1; i < len(nums); i++ {
		if nums[i] == nums[i-1] {
			count++
		} else {
			count = 1
		}

		if count <= 2 {
			nums[j] = nums[i]
			j++
		}
	}

	return j
}
