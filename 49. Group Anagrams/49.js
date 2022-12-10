// 49. Group Anagrams solution in JavaScript
// https://leetcode.com/problems/group-anagrams/description/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = {};

    for (let str  of strs) {
        let count = new Array(26).fill(0);

        for (let char of str) {
            count[char.charCodeAt() - 97]++;
        }

        let key = count.join("#");

        result[key] ? result[key].push(str) : result[key] = [str];
    }

    return Object.values(result);
};