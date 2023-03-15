// 53. Maximum Subarray solution in JavaScript
// https://leetcode.com/problems/maximum-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let current_subarray = nums[0];
    let max_subarray = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        current_subarray = Math.max(num, current_subarray + num);
        max_subarray = Math.max(max_subarray, current_subarray);
    }

    return max_subarray;
};