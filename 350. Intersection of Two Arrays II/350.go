// 350. Intersection of Two Arrays II solution in GoLang
// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

func intersect(nums1 []int, nums2 []int) []int {
    var result []int
    nums1_map := make(map[int]int)

    for _, num := range nums1 {
        if nums1_map[num] > 0 {
            nums1_map[num]++;
        } else {
            nums1_map[num] = 1;
        }
    }

    for _, num := range nums2 {
        if nums1_map[num] > 0 {
            result = append(result, num)
            nums1_map[num]--;
        }
    }

    return result
}