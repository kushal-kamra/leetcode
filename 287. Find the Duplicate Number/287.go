// 287. Find the Duplicate Number solution in GoLang
// https://leetcode.com/problems/find-the-duplicate-number/description/

func findDuplicate(nums []int) int {
    len := len(nums)
    low := 0
    high := len - 1

    for low < high {
        mid := low + ((high - low) / 2)

        count := 0
        for _, num := range nums {
            if num <= mid {
                count++
            }
        }

        if count <= mid {
            low = mid + 1
        } else {
            high = mid
        }
    }

    return low
}