// 344. Reverse String solution in JavaScript
// https://leetcode.com/problems/reverse-string/description/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let char = s[left];
        s[left] = s[right];
        s[right] = char;
        left++;
        right--;
    }
};