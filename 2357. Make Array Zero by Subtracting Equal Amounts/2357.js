// 2357. Make Array Zero by Subtracting Equal Amounts solution in JavaScript
// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let nums_set = new Set(nums);

    return nums_set.has(0) ? nums_set.size - 1 : nums_set.size;
};