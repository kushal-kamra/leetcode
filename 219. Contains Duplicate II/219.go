// 219. Contains Duplicate II solution in GoLang
// https://leetcode.com/problems/contains-duplicate-ii/description/

func containsNearbyDuplicate(nums []int, k int) bool {
    num_map := make(map[int]bool)

    for index, num := range nums {
        if num_map[num] == true {
            return true
        }

        num_map[num] = true

        if len(num_map) > k {
            delete(num_map, nums[index - k])
        }
    }

    return false
}