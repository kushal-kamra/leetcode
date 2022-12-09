// 217. Contains Duplicate solution in JavaScript
// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let set = new Set();

    for (num of nums) {
        if (set.has(num)) return true;

        set.add(num);
    }

    return false;
};