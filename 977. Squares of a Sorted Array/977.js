// 977. Squares of a Sorted Array solution in JavaScript
// https://leetcode.com/problems/squares-of-a-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = new Array(nums.length);

    for (let i = nums.length - 1; i >= 0; i--) {
        let square = 0;

        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            square = nums[left] * nums[left];
            left++;
        } else {
            square = nums[right] * nums[right];
            right--;
        }

        result[i] = square;
    }

    return result;
};