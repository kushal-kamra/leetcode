// 1863. Sum of All Subset XOR Totals solution in JavaScript
// https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
 let subsetXORSum = function(nums) {
    return helper(nums, 0, 0);
};

function helper(nums, index, currentXor) {
    if (index == nums.length) return currentXor;

    let withElement = helper(nums, index + 1, currentXor ^ nums[index]);

    let withoutElement = helper(nums, index + 1, currentXor);

    return withElement + withoutElement;
}