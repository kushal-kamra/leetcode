// 2357. Make Array Zero by Subtracting Equal Amounts solution in GoLang
// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/

func minimumOperations(nums []int) int {
    nums_map := make(map[int]bool)

    for _, num := range nums {
        if num != 0 {
            nums_map[num] = true
        }
    }

    return len(nums_map)
}