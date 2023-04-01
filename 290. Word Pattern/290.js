// 290. Word Pattern solution in JavaScript
// https://leetcode.com/problems/word-pattern/description/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let s_array = s.split(" ");

    if (pattern.length != s_array.length) return false;

    let pattern_map = new Map();
    let pattern_set = new Set();

    for (let i = 0; i < pattern.length; i++) {
        if (!pattern_map.get(pattern.charAt(i))) {
            if (pattern_set.has(s_array[i])) return false;
            
            pattern_map.set(pattern.charAt(i), s_array[i]);
            pattern_set.add(s_array[i]);
        } else if (pattern_map.get(pattern.charAt(i)) != s_array[i]) {
            return false;
        }
    }

    return true;
};