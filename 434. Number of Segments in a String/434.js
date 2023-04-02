// 434. Number of Segments in a String solution in JavaScript
// https://leetcode.com/problems/number-of-segments-in-a-string/description/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if (s.trim().length == 0) return 0;

    console.log('s.trim().split(" ")', s.trim().split(" "));

    return s.trim().split(" ").filter(word => word !== "").length;
};