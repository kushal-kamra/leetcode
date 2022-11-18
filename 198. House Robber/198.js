// 198. House Robber solution in JavaScript
// https://leetcode.com/problems/house-robber/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let length = nums.length;

    if (length == 0) return 0;
    if (length == 1) return nums[0];
    if (length == 2) return Math.max(nums[0], nums[1]);

    let max_two_less = nums[0];
    let max_one_less = Math.max(nums[0], nums[1]);

    for (let i = 2; i < length; i++) {
        const max_current = Math.max(nums[i] + max_two_less, max_one_less);

        max_two_less = max_one_less;
        max_one_less = max_current;
    }

    return max_one_less;
};