// 189. Rotate Array solution in JavaScript
// https://leetcode.com/problems/rotate-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);

    function reverse(start, end) {
        while (start <  end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
};
