// 1428. Leftmost Column with at Least a One solution in JavaScript
// https://leetcode.com/problems/leftmost-column-with-at-least-a-one/description/

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    let [rows, cols] = binaryMatrix.dimensions();

    let smallest_index = cols;

    for (let row = 0; row < rows; row++) {
        let left = 0;
        let right = smallest_index - 1;

        if (binaryMatrix.get(row, right) == 0) continue;

        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);

            if (binaryMatrix.get(row, mid) == 0) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        if (binaryMatrix.get(row, left) == 1) {
            smallest_index = Math.min(smallest_index, left);
        }
    }

    return smallest_index == cols ? -1 : smallest_index;
};