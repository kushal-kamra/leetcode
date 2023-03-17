// 205. Isomorphic Strings solution in JavaScript
// https://leetcode.com/problems/isomorphic-strings/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length != t.length) return false;

    let char_map = new Map();
    let char_set = new Set();

    for (let i = 0; i < s.length; i++) {
        let char_s = s[i];
        let char_t = t[i];

        if (!char_map.get(char_s)) {
            if (char_set.has(char_t)) return false;

            char_map.set(char_s, char_t);
            char_set.add(char_t);
        } else if (char_map.get(char_s)) {
            if (char_map.get(char_s) != char_t) return false;
        }
    }

    return true;
};