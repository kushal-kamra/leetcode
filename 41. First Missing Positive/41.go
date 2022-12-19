// 41. First Missing Positive solution in GoLang
// https://leetcode.com/problems/first-missing-positive/description/

package leetcode

func firstMissingPositive(nums []int) int {
    len := len(nums)

    contains_1 := 0
    
    for i := 0; i < len; i++ {
        if nums[i] == 1 {
            contains_1 = 1
            break
        }
    }

    if contains_1 == 0 {
        return 1
    }

    for i := 0; i < len; i++ {
        if nums[i] <= 0 || nums[i] > len {
            nums[i] = 1
        }
    }

    for i := 0; i < len; i++ {
        num_i := Abs(nums[i])

        if num_i == len {
            nums[0] = -Abs(nums[0])
        } else {
            nums[num_i] = -Abs(nums[num_i])
        }
    }

    for i := 1; i < len; i++ {
        if nums[i] > 0 {
            return i
        }
    }

    if nums[0] > 0 {
        return len
    }

    return len + 1
}

func Abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}