// 704. Binary Search solution in JavaScript
// https://leetcode.com/problems/binary-search/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0, high = nums.length - 1;

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);

        if (target == nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return nums[low] == target ? low : -1;
};