// 1822. Sign of the Product of an Array solution in JavaScript
// https://leetcode.com/problems/sign-of-the-product-of-an-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let negative_true = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) return 0;

        if (nums[i] < 0) negative_true *= -1;
    }

    return negative_true;
};