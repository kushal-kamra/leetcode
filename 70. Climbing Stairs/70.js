// 70. Climbing Stairs solution in JavaScript
// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo = new Array(n + 1).fill(0);

    return climb_options(0, n, memo);
};

function climb_options(i, n, memo) {
    if (i > n) return 0;

    if (i == n) return 1;

    if (memo[i] > 0) {
        return memo[i];
    }

    memo[i] = climb_options(i + 1, n, memo) + climb_options(i + 2, n, memo);

    return memo[i];
}