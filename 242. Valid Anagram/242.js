// 242. Valid Anagram solution in JavaScript
// https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;

    const count = {};

    for (let c of s) {
        count[c] = (count[c] || 0) + 1;
    }

    for (let c of t) {
        if (!count[c]) return false;

        count[c]--;
    }

    return true;
};