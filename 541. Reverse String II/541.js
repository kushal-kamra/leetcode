// 541. Reverse String II solution in JavaScript
// https://leetcode.com/problems/reverse-string-ii/description/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (s.length < k) return s.split("").reverse().join("");

    let split_s = s.split("");

    for (let i = 0; i < s.length; i += 2*k) {
        let reverse = split_s.splice(i, k).reverse();
        split_s.splice(i,0, ...reverse);
    }

    return split_s.join("");
};