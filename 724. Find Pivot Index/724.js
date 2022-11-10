//724. Find Pivot Index solution in JavaScript
//https://leetcode.com/problems/find-pivot-index/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let sum = 0;
    let left_sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        if (left_sum == sum - left_sum - nums[i]) return i;

        left_sum += nums[i];
    }

    return -1;
};