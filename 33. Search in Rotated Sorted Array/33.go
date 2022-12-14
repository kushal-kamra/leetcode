// 33. Search in Rotated Sorted Array solution in GoLang
// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

package leetcode

func search(nums []int, target int) int {
    start, end := 0, len(nums) - 1

    for start <= end {
        mid := start + ((end - start) / 2)

        if nums[mid] == target {
            return mid
        } else if nums[mid] >= nums[start] {
            if target >= nums[start] && target < nums[mid] {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if target <= nums[end] && target > nums[mid] {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return -1
}