// 367. Valid Perfect Square solution in JavaScript
// https://leetcode.com/problems/valid-perfect-square/description/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 2) return true;

    let left = 2;
    let right = Math.floor(num / 2);
    let pivot;

    while (left <= right) {
        pivot = left + Math.floor((right - left) / 2);

        let pivot_square = pivot * pivot;

        if (num == pivot_square) {
            return true;
        } else if (pivot_square > num) {
            right = pivot - 1;
        } else if (pivot_square < num) {
            left = pivot + 1;
        }
    }

    return false;;
};