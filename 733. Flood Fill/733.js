// 733. Flood Fill solution in JavaScript
// https://leetcode.com/problems/flood-fill/description/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let old_color = image[sr][sc];
    
    if (old_color != color) dfs(image, sr, sc, old_color, color);

    return image;
};

function dfs(image, row, col, old_color, color) {
    if (image[row][col] == old_color) {
        image[row][col] = color;

        if (row >= 1) dfs(image, row - 1, col, old_color, color);
        if (col >= 1) dfs(image, row, col - 1, old_color, color);
        if (row + 1 < image.length) dfs(image, row + 1, col, old_color, color);
        if (col + 1 < image[0].length) dfs(image, row, col + 1, old_color, color);
    }
}