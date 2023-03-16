// 1523. Count Odd Numbers in an Interval Range solution in JavaScript
// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/description/

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let result = Math.floor((high - low) / 2);

    if (low % 2 == 1 || high % 2 == 1) result++;

    return result;
};