// 125. Valid Palindrome solution in JavaScript
// https://leetcode.com/problems/valid-palindrome/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        while (!is_valid_char(s[i]) && i < j) i++;
        while (!is_valid_char(s[j]) && i < j) j--;

        if (s[i] != s[j]) return false;
    }
    
    return true;
};

function is_valid_char(ch) {
    if ((ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'z')) return true;
    else return false;
}