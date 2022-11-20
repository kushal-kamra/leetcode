// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (needle.length == 0 || needle == haystack) return 0;

    if (haystack.length == 0) return -1;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.length - i < needle.length) return -2;

        if (haystack[i] == needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (haystack[i + j] != needle[j]) {
                    break;
                } else if (j == needle.length - 1) {
                    return i;
                }
            }
        }
    }

    return -1;
};