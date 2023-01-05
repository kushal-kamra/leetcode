// 167. Two Sum II - Input Array Is Sorted solution in GoLang
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

package main

func twoSum(numbers []int, target int) []int {
	low := 0
	high := len(numbers) - 1

	for low < high {
		sum := numbers[low] + numbers[high]

		if sum == target {
			return []int{low + 1, high + 1}
		} else if sum < target {
			low++
		} else {
			high--
		}
	}

	return []int{-1, -1}
}
