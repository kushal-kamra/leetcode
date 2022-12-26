// 209. Minimum Size Subarray Sum solution in JavaScript
// https://leetcode.com/problems/minimum-size-subarray-sum/description/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let len = nums.length;
    let ans = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let sum = 0;

    for (let i = 0; i < len; i++) {
        sum = sum + nums[i];

        while (sum >= target) {
            ans = Math.min(ans, i + 1 - left);
            sum = sum - nums[left];
            left++;
        }
    }

    return (ans != Number.MAX_SAFE_INTEGER) ? ans : 0;
};