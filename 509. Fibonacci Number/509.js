// 509. Fibonacci Number solution in JavaScript
// https://leetcode.com/problems/fibonacci-number/description/

/**
 * @param {number} n
 * @return {number}
 */

let map = new Map();

var fib = function(n) {

    if (n == 0) return 0;
    if (n == 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
};

function fibonacci(n) {

    if (n == 0) return 0;
    if (n == 1) return 1;

    if (map.get(n)) {
        return map.get(n);
    }

    let value = fibonacci(n - 1) + fibonacci(n - 2);
    map.set(n, value);

    return value;
}