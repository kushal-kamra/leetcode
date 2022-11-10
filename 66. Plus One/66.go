//66. Plus One solution in Golang
//https://leetcode.com/problems/plus-one/description/

package leetcode

func plusOne(digits []int) []int {
    len := len(digits)

    for i := len-1; i >= 0; i-- {
        if digits[i] == 9 {
            digits[i] = 0
        } else {
            digits[i]++;
            return digits
        }
    }

    var new_digits = make([]int, len+1)
    new_digits[0] = 1

    return new_digits
}