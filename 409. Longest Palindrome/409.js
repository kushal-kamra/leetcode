// 409. Longest Palindrome solution in JavaScript
// https://leetcode.com/problems/longest-palindrome/description/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let set = new Set();
    let result = 0;
    
    for (let char of s) {
        if (set.has(char)) {
            result += 2;
            set.delete(char);
        } else {
            set.add(char);
        }
    }

    return result + (set.size > 0 ? 1 : 0);
};