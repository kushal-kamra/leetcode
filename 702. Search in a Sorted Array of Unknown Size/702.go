// 702. Search in a Sorted Array of Unknown Size solution in GoLang
// https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/description/

/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * type ArrayReader struct {
 * }
 *
 * func (this *ArrayReader) get(index int) int {}
 */

 package leetcode

 func search(reader ArrayReader, target int) int {
    if reader.get(0) == target {
        return 0
    }

    left := 0
    right := 1

    for reader.get(right) < target {
        left = right
        right = right * 2
    }

    for left <= right {
        mid := left + (right - left) / 2
        mid_res := reader.get(mid)

        if mid_res == target {
            return mid
        } else if target < mid_res {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1
}