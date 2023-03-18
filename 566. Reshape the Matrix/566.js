// 566. Reshape the Matrix solution in JavaScript
// https://leetcode.com/problems/reshape-the-matrix/description/

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let mat_row = mat.length;
    let mat_col = mat[0].length;
    let row = 0;
    let col = 0;
    let result = new Array(r).fill().map(() => new Array(c));

    if (mat_row * mat_col != r * c) return mat;

    for (let i = 0; i < mat_row; i++) {
        for (let j = 0; j < mat_col; j++) {
            result[row][col] = mat[i][j];
            col++;

            if (col == c) {
                row++;
                col = 0;
            }
        }
    }

    return result;
};