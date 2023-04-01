// 387. First Unique Character in a String solution in JavaScript
// https://leetcode.com/problems/first-unique-character-in-a-string/description/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s.length == 0) return -1;
    
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.get(s.charAt(i))) map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
        else map.set(s.charAt(i), 1);
    }

    for (let i = 0; i < s.length; i++)
        if (map.get(s.charAt(i)) == 1) return i

    return -1;
};