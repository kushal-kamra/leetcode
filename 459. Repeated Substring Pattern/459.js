// 459. Repeated Substring Pattern solution in JavaScript
// https://leetcode.com/problems/repeated-substring-pattern/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let len = s.length;

    let new_string = s.substr(1, len) + s.substr(0, len - 1);

    return new_string.indexOf(s) != -1;
};