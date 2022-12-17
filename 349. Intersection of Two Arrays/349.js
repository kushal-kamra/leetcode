// 349. Intersection of Two Arrays solution in JavaScript
// https://leetcode.com/problems/intersection-of-two-arrays/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = [];
    let set_nums1 = new Set(nums1);
    let set_nums2 = new Set(nums2);
    let [small_set, big_set] = set_nums1.length < set_nums2.length ? [set_nums1, set_nums2] : [set_nums2, set_nums1];

    small_set.forEach(num => {
        if (big_set.has(num)) result.push(num);
    });

    return result;
};