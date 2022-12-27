// 151. Reverse Words in a String solution in JavaScript
// https://leetcode.com/problems/reverse-words-in-a-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = [];
    let word = [];

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == ' ') {
            if (word.length > 0) result.unshift(word.join(''));
            word = [];
        } else {
            word.push(s.charAt(i));
        }
    }

    if (word.length > 0)  result.unshift(word.join(''));

    return result.join(' ');
};