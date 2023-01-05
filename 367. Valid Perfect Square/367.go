// 367. Valid Perfect Square solution in GoLang
// https://leetcode.com/problems/valid-perfect-square/description/

package main

func isPerfectSquare(num int) bool {
	if num < 2 {
		return true
	}

	left := 2
	right := num / 2

	var pivot int

	for left <= right {
		pivot = left + ((right - left) / 2)

		pivot_square := pivot * pivot

		if pivot_square == num {
			return true
		} else if pivot_square > num {
			right = pivot - 1
		} else if pivot_square < num {
			left = pivot + 1
		}
	}

	return false
}
