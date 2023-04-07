// 594. Longest Harmonious Subsequence solution in JavaScript
// https://leetcode.com/problems/longest-harmonious-subsequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = new Map();

    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)

        if (map.get(nums[i] + 1))
            result = Math.max(result, map.get(nums[i]) + map.get(nums[i] + 1));

        if (map.get(nums[i] - 1))
            result = Math.max(result, map.get(nums[i]) + map.get(nums[i] - 1));
    }

    return result;
};