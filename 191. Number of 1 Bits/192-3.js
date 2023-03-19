// 191. Number of 1 Bits solution in JS
// https://leetcode.com/problems/number-of-1-bits/description/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;

    while (n) {
        console.log(n.toString(2));
        count++;
        n &= (n-1);
    }

    return count;
};