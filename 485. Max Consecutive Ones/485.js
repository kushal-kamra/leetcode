// 485. Max Consecutive Ones solution in JavaScript
// https://leetcode.com/problems/max-consecutive-ones/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let len = 0;
    let max_len = 0;

    for (let num of nums) {
        if (num == 1) len++;

        if (len > max_len) max_len = len;

        if (num == 0) len = 0;
    }

    return max_len;
};