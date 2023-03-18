// 695. Max Area of Island solution in JavaScript
// https://leetcode.com/problems/max-area-of-island/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let len = grid.length;

    if (len == 0) return 0;

    let col = grid[0].length;
    let max_area = 0;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 1)
                max_area = Math.max(max_area, dfs(grid, i, j));
        }
    }

    return max_area;
};

function dfs(grid, row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == 0)
        return 0;

    let area = 1;
    grid[row][col] = 0;
    area += dfs(grid, row + 1, col) + dfs(grid, row - 1, col) + dfs(grid, row, col + 1) + dfs(grid, row, col - 1);

    return area;
}