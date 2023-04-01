// 383. Ransom Note solution in JavaScript
// https://leetcode.com/problems/ransom-note/description/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (magazine.length == 0) return false;

    if (ransomNote.length == 0) return true;

    let magazine_map = new Map();

    for (let i = 0; i < magazine.length; i++) {
        magazine_map.set(magazine.charAt(i), magazine_map.get(magazine.charAt(i)) + 1 || 1);
    }

    console.log(magazine_map);

    for (let i = 0; i < ransomNote.length; i++) {
        if (!magazine_map.get(ransomNote.charAt(i))) return false;
        else magazine_map.set(ransomNote.charAt(i), magazine_map.get(ransomNote.charAt(i)) - 1);
    }

    return true
};