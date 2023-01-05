// 54. Spiral Matrix solution in GoLang
// https://leetcode.com/problems/spiral-matrix/description/

package main

func spiralOrder(matrix [][]int) []int {
	var result []int

	row := len(matrix)
	column := len(matrix[0])
	up := 0
	left := 0
	right := column - 1
	down := row - 1

	for len(result) < row*column {
		//To right
		for col := left; col <= right; col++ {
			result = append(result, matrix[up][col])
		}
		//To down
		for row := up + 1; row <= down; row++ {
			result = append(result, matrix[row][right])
		}
		//To left
		if up != down {
			for col := right - 1; col >= left; col-- {
				result = append(result, matrix[down][col])
			}
		}
		//To top
		if left != right {
			for row := down - 1; row > up; row-- {
				result = append(result, matrix[row][left])
			}
		}
		left++
		up++
		right--
		down--
	}

	return result
}
