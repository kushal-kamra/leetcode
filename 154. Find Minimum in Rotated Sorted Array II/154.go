// 154. Find Minimum in Rotated Sorted Array II solution in GoLang
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/description/

package leetcode

func findMin(nums []int) int {
    left := 0
    right := len(nums) - 1

    for left < right {
        mid := left + ((right - left) / 2)

        if nums[mid] > nums[right] {
            left = mid + 1
        } else if nums[mid] < nums[right] {
            right = mid
        } else {
            right = right - 1;
        }
    }

    return nums[left]
}