// 26. Remove Duplicates from Sorted Array solution in JavaScript
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let len = nums.length;
    let i = 0;

    for (let j = 0; j < len; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
};