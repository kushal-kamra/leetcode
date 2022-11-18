// 54. Spiral Matrix solution in JavaScript
// https://leetcode.com/problems/spiral-matrix/description/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let result = [];

    let row = matrix.length;
    let column = matrix[0].length;
    let up = 0;
    let left = 0;
    let right = column - 1;
    let down = row - 1;

    while (result.length < row * column) {
        //To right
        for (let col = left; col <= right; col++) {
            result.push(matrix[up][col]);
        }
        //To down
        for (let row = up + 1; row <= down; row++) {
            result.push(matrix[row][right]);
        }
        //To left
        if (up != down) {
            for (let col = right - 1; col >= left; col--) {
                result.push(matrix[down][col]);
            }
        }
        //To top
        if (left != right) {
            for (let row = down -1; row > up; row--) {
                result.push(matrix[row][left]);
            }
        }

        left++;
        up++;
        right--;
        down--;
    }
    return result;
};