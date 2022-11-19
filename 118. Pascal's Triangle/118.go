// 118. Pascal's Triangle solution in GoLang
// https://leetcode.com/problems/pascals-triangle/description/

package leetcode

func generate(numRows int) [][]int {
    pascal := make([][]int, numRows)

    for i := 0; i <  numRows; i++ {
        pascal[i] = make([]int, i+1)
        pascal[i][0] = 1

        for j := 1; j < i; j++ {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
        }

        pascal[i][i] = 1
    }

    return pascal
}