// 26. Remove Duplicates from Sorted Array solution in GoLang
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

package leetcode

func removeDuplicates(nums []int) int {
    len := len(nums)
    i := 0

    for j := 0; j < len; j++ {
        if nums[j] != nums[i] {
            i++
            nums[i] = nums[j]
        }
    }

    return i + 1
}