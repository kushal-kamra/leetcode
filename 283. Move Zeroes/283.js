// 283. Move Zeroes solution in JavaScript
// https://leetcode.com/problems/move-zeroes/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let last_non_zero = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[last_non_zero] = nums[i];
            last_non_zero++;
        }
    }

    for (let i = last_non_zero; i < nums.length; i++) {
        nums[i] = 0;
    }
};