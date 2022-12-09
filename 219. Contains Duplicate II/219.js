// 219. Contains Duplicate II solution in JavaScript
// https://leetcode.com/problems/contains-duplicate-ii/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();

    for (index in nums) {
        if (set.has(nums[index])) return true;

        set.add(nums[index]);

        if (set.size > k) {
            set.delete(nums[index - k])
        }
    }

    return false;
};