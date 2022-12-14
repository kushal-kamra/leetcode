// 34. Find First and Last Position of Element in Sorted Array solution in JavaScript
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    first_occurence = findOccurence(nums, target, true);

    if (first_occurence == -1) {
        return [-1, -1];
    }

    second_occurence = findOccurence(nums, target, false);

    return [first_occurence, second_occurence];
};

function findOccurence(nums, target, is_first) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] == target) {
            if (is_first) {
                if (mid == left || nums[mid - 1] != target) {
                    return mid;
                }

                right = mid - 1;
            } else {
                if (mid == right || nums[mid + 1] != target) {
                    return mid;
                }

                left = mid + 1;
            }
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}