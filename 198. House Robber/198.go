// 198. House Robber solution in GoLang
// https://leetcode.com/problems/house-robber/description/

package leetcode

func max(x, y int) int {
	if x < y {
		return y
	}
	return x
}


func rob(nums []int) int {
    length := len(nums);

    if length == 0 {
        return 0
    }

    if length == 1 {
        return nums[0]
    }

    if length == 2 {
        return max(nums[0], nums[1])
    }

    max_two_less := nums[0]
    max_one_less := max(nums[0], nums[1])

    for i := 2; i < length; i++ {
        max_current := max(nums[i] + max_two_less, max_one_less)

        max_two_less = max_one_less
        max_one_less = max_current
    }

    return max_one_less
} 