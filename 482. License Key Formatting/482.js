// 482. License Key Formatting solution in JavaScript
// https://leetcode.com/problems/license-key-formatting/description/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let array = s.toUpperCase().split("-").join("").split("");

    for (let i = array.length - 1 - k; i >= 0; i -= k) {
        array[i] = array[i] + "-";
    }

    return array.join("");
};