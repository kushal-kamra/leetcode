// 217. Contains Duplicate solution in GoLang
// https://leetcode.com/problems/contains-duplicate/description/

func containsDuplicate(nums []int) bool {
    num_set := make(map[int]bool)

    for _, num := range nums {
        if num_set[num] == true {
            return true
        }

        num_set[num] = true
    }

    return false
}