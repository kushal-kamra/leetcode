// 69. Sqrt(x) solution in JavaScript
// https://leetcode.com/problems/sqrtx/description/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;

    let left = 2;
    let right = Math.floor(x / 2);
    let pivot;

    while (left <= right) {
        pivot = left + Math.floor((right - left) / 2);

        let num = pivot * pivot;

        if (num == x) {
            return pivot
        } else if (num > x) {
            right = pivot - 1;
        } else if (num < x) {
            left = pivot + 1;
        }
    }

    return right;
};