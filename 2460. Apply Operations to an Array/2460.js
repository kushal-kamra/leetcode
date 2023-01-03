// 2460. Apply Operations to an Array solution in JavaScript
// https://leetcode.com/problems/apply-operations-to-an-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    let len = nums.length;

    for (let i = 0; i < len; i++) {
        if (nums[i] == nums[i + 1]) {
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        }
    }

    return nums.sort((a, b) => !a - !b);
};