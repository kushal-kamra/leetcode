// 1. Two Sum solution in GoLang
// https://leetcode.com/problems/two-sum/description/

package leetcode

func twoSum(nums []int, target int) []int {
    index_map := make(map[int]int)

    for i := 0; i < len(nums); i++ {
        value, is_present := index_map[nums[i]]
        if  is_present == false {
            index_map[target - nums[i]] = i
        } else {
            return []int{value, i}
        }
    }

    return []int{}
}