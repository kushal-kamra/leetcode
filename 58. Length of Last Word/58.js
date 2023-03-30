// 58. Length of Last Word solution in JavaScript
// https://leetcode.com/problems/length-of-last-word/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};