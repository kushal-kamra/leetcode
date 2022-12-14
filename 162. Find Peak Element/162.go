// 162. Find Peak Element solution in GoLang
// https://leetcode.com/problems/find-peak-element/description/

package leetcode

func findPeakElement(nums []int) int {
    low := 0
    high := len(nums) - 1

    for low < high {
        mid := low + ((high - low) / 2)

        if nums[mid] < nums[mid + 1] {
            low = mid + 1
        } else {
            high = mid
        }
    }

    return low
}