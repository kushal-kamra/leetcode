// 1137. N-th Tribonacci Number solution in JavaScript
// https://leetcode.com/problems/n-th-tribonacci-number/description/

/**
 * @param {number} n
 * @return {number}
 */

let map = new Map();

let tribonacci = function(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 1;

    if (map.get(n)) return map.get(n);

    let value = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);

    map.set(n, value);

    return value;
};