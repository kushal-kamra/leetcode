// 1790. Check if One String Swap Can Make Strings Equal solution in JavaScript
// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/description/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let len = s1.length;
    let index_char1 = -1;
    let s2a = s2.split('');

    if (s1 == s2) return true;

    for (let i = 0; i < len; i++) {
        if ((s1[i] != s2[i]) && index_char1 < 0) {
            index_char1 = i;
        } else if (s1[i] != s2[i]) {
            let swap_char = s2a[index_char1];
            s2a[index_char1] = s2a[i];
            s2a[i] = swap_char;

            if (s1 == s2a.join('')) return true;
            else break;
        }
    }
    
    return false;
};