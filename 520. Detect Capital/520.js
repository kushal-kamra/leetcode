// 520. Detect Capital solution in JavaScript
// https://leetcode.com/problems/detect-capital/description/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return word == word.toUpperCase() || word == word[0] + word.substr(1).toLowerCase();
};