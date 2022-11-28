// 561. Array Partition solution in JavaScript
// https://leetcode.com/problems/array-partition/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);

    let max_sum = 0;

    for (let i = 0; i < nums.length; i += 2) {
        max_sum += nums[i];
    }

    return max_sum;
};