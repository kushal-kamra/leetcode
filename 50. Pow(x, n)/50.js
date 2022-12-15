// 50. Pow(x, n) solution in JavaScript
// https://leetcode.com/problems/powx-n/description/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let ans = 1;
    let current_product = x;

    for (let i = n; i > 0; i = Math.floor(i / 2)) {
        if ((i % 2) == 1) {
            ans = ans * current_product;
        }

        current_product = current_product * current_product;
    }

    return ans;
};