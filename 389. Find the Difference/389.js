// 389. Find the Difference solution in JavaScript
// https://leetcode.com/problems/find-the-difference/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.get(s.charAt(i))) {
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
        } else {
            map.set(s.charAt(i), 1);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!map.get(t.charAt(i))) return t.charAt(i);
        else map.set(t.charAt(i), map.get(t.charAt(i)) - 1);
    }

    return t.charAt(t.length - 1);
};