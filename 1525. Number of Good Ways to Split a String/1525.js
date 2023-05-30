// 1525. Number of Good Ways to Split a String solution in JavaScript
// https://leetcode.com/problems/number-of-good-ways-to-split-a-string/description/

/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    let leftSet = new Set();
    let rightSet = new Set();
    let arr = [];
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        leftSet.add(s[i]);
        arr[i] = leftSet.size;
    }

    for (let i = s.length - 1; i >= 0; i--) {
        rightSet.add(s[i]);
        if (arr[i - 1] == rightSet.size) result++;
    }

    return result;
};