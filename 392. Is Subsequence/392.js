// 392. Is Subsequence solution in JavaScript
// https://leetcode.com/problems/is-subsequence/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let s_len = s.length;
    let t_len = t.length;

    let i = 0;
    let j = 0;

    while (i < s_len && j < t_len) {
        if (s[i] == t[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }

    if (i == s_len) return true;

    return false;
};