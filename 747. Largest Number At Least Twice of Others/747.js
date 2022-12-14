//747. Largest Number At Least Twice of Others solution in JavaScript
//https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var dominantIndex = function(nums) {
    let max_index = -1;
    let max_number = -1;
    
    for (let i = 0; i < nums.length; i++) {
        if (max_number < nums[i]) {
            max_number = nums[i];
            max_index = i;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i != max_index && 2* nums[i] > max_number) return -1;
    }
    
    return max_index;
};