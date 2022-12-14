// 34. Find First and Last Position of Element in Sorted Array solution in GoLang
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

package leetcode

func searchRange(nums []int, target int) []int {
    firstOccurence := findBound(nums, target, true)

    if firstOccurence == -1 {
        return []int{-1, -1}
    }

    lastOccurence := findBound(nums, target, false)

    return []int{firstOccurence, lastOccurence}
}

func findBound(nums []int, target int, isFirst bool) int {
    N := len(nums)
    begin, end := 0, N - 1

    for begin <= end {
        mid := (begin + end) / 2

        if nums[mid] == target {
            if isFirst {
                if mid == begin || nums[mid - 1] != target {
                    return mid
                }

                end = mid - 1
            } else {
                if mid == end || nums[mid + 1] != target {
                    return mid
                }

                begin = mid + 1
            }
        } else if nums[mid] > target {
            end = mid - 1
        } else {
            begin = mid + 1
        }
    }

    return -1
}