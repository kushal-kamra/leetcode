// 200. Number of Islands solution in Java
// https://leetcode.com/problems/number-of-islands/description/

class Solution {
    public int numIslands(char[][] grid) {
        int grid_lenr = grid.length;

        if (grid_lenr == 0) {
            return 0;
        }

        int grid_lenc = grid[0].length;
        int num_islands = 0;

        for (int row = 0; row < grid_lenr; row++) {
            for (int col = 0; col < grid_lenc; col++) {
                if (grid[row][col] == '1') {
                    num_islands++;

                    traverse_dfs(grid, row, col, grid_lenr, grid_lenc);
                }
            }
        }

        return num_islands;
    }

    private void traverse_dfs(char[][] grid, int row, int col, int grid_lenr, int grid_lenc) {
        if (row < 0 || col < 0 || row >= grid_lenr || col >= grid_lenc || grid[row][col] == '0')
            return;

        grid[row][col] = '0';
        traverse_dfs(grid, row + 1, col, grid_lenr, grid_lenc);
        traverse_dfs(grid, row - 1, col, grid_lenr, grid_lenc);
        traverse_dfs(grid, row, col + 1, grid_lenr, grid_lenc);
        traverse_dfs(grid, row, col - 1, grid_lenr, grid_lenc);
    }
}