// 349. Intersection of Two Arrays solution in GoLang
// https://leetcode.com/problems/intersection-of-two-arrays/description/

func intersection(nums1 []int, nums2 []int) []int {
    nums1_set := make(map[int]bool)
    var result []int

    for _, num := range nums1 {
        nums1_set[num] = true;
    }
    
    for _, num := range nums2 {
        if nums1_set[num] == true {
            result = append(result, num)

            nums1_set[num] = false
        }
    }

    return result
}