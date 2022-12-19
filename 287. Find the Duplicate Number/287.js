// 287. Find the Duplicate Number solution in JavaScript
// https://leetcode.com/problems/find-the-duplicate-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let len = nums.length;
    let low = 0;
    let high = len - 1;

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);

        let count = 0;
        nums.forEach((num) => {
            if (num <= mid) count++;
        });

        if (count <= mid) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};