// 1480. Running Sum of 1d Array solution in JavaScript
// https://leetcode.com/problems/running-sum-of-1d-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let len = nums.length;
    let running_sum_array = new Array(len);
    
    running_sum_array[0] = nums[0];
    
    for (let i = 1; i < len; i++) {
        running_sum_array[i] = running_sum_array[i-1] + nums[i];
    }
    
    return running_sum_array;
};