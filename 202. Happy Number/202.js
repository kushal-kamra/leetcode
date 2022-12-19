// 202. Happy Number solution in JavaScript
// https://leetcode.com/problems/happy-number/description/

/**
 * @param {number} n
 * @return {boolean}
 */

let squares = {
    0:0,
    1:1,
    2:4,
    3:9,
    4:16,
    5:25,
    6:36,
    7:49,
    8:64,
    9:81
}

var isHappy = function(n) {
    let seen_num = new Set();

    while (n != 1 && !seen_num.has(n)) {
        seen_num.add(n);
        n = getNextNum(n);
    }

    return n == 1;
};

function getNextNum(n) {
    let total_sum = 0;

    while (n > 0) {
        let d = n % 10;
        n = Math.floor(n / 10);
        total_sum += squares[d];
    }

    return total_sum;
}