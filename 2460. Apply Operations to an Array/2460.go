// 2460. Apply Operations to an Array solution in GoLang
// https://leetcode.com/problems/apply-operations-to-an-array/description/

package leetcode

func applyOperations(nums []int) []int {
    for i := 0; i < len(nums) - 1; i++ {
        if nums[i] == nums[i + 1] {
            nums[i] *= 2
            nums[i + 1] = 0
        }
    }

    n := len(nums)

    for i := 0; i < len(nums); i++ {
        if nums[i] == 0 {
            nums = append(nums[:i], nums[i + 1:]...)
            i--
        }
    }

    for len(nums) < n {
        nums = append(nums, 0)
    }

    return nums
}