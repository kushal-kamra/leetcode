// 485. Max Consecutive Ones solution in GoLang
// https://leetcode.com/problems/max-consecutive-ones/description/

package leetcode

func findMaxConsecutiveOnes(nums []int) int {
    len := 0
    max_len := 0

    for _, value := range nums {
        if value == 1 {
            len++
        }

        if len > max_len {
            max_len = len
        }

        if value == 0 {
            len = 0
        }
    }

    return max_len
}