// 200. Number of Islands solution in GoLang
// https://leetcode.com/problems/number-of-islands/description/

package main

func numIslands(grid [][]byte) int {
	grid_lenr := len(grid)

	if grid_lenr == 0 {
		return 0
	}

	grid_lenc := len(grid[0])
	num_islands := 0

	for row := 0; row < grid_lenr; row++ {
		for col := 0; col < grid_lenc; col++ {
			if grid[row][col] == '1' {
				num_islands++

				traverse(&grid, row, col, grid_lenr, grid_lenc)
			}
		}
	}

	return num_islands
}

func traverse(grid *[][]byte, row int, col int, grid_lenr int, grid_lenc int) {
	if row < 0 || col < 0 || row >= grid_lenr || col >= grid_lenc || (*grid)[row][col] == '0' {
		return
	}

	(*grid)[row][col] = '0'
	traverse(grid, row+1, col, grid_lenr, grid_lenc)
	traverse(grid, row-1, col, grid_lenr, grid_lenc)
	traverse(grid, row, col+1, grid_lenr, grid_lenc)
	traverse(grid, row, col-1, grid_lenr, grid_lenc)
}
