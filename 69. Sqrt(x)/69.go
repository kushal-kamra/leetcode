// 69. Sqrt(x) solution in GoLang
// https://leetcode.com/problems/sqrtx/description/

package leetcode

func mySqrt(x int) int {
    if x < 2 {
        return x
    }

    left := 2
    right := x / 2

    var pivot int

    for ;left <= right; {
        pivot = left + ((right - left) / 2)

        num := pivot * pivot

        if num == x {
            return pivot
        } else if num > x {
            right = pivot - 1
        } else if num < x {
            left = pivot + 1
        }
    }

    return right
}