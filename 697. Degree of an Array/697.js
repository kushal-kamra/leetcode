// 697. Degree of an Array solution in JavaScript
// https://leetcode.com/problems/degree-of-an-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let count = new Map();
    let left_index = new Map();
    let right_index = new Map();

    for (let i = 0; i < nums.length; i++) {
        count.set(nums[i], (count.get(nums[i]) || 0) + 1);

        if (!left_index.has(nums[i]))
            left_index.set(nums[i], i);

        right_index.set(nums[i], i);
    }

    let result = nums.length;
    let max_num = Math.max(...count.values());

    for (const num of count) {
        if (max_num == num[1]) {
            result = Math.min(result, right_index.get(num[0]) - left_index.get(num[0]) + 1);
        }
    }

    return result;
};