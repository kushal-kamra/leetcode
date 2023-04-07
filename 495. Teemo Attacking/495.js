// 495. Teemo Attacking solution in JavaScript
// https://leetcode.com/problems/teemo-attacking/description/

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let len = timeSeries.length;

    if (len == 0) return 0;

    let total = duration;

    for (let i = 0; i < len - 1; i++) {
        total += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
    }

    return total;
};