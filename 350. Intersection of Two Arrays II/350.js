// 350. Intersection of Two Arrays II solution in JavaScript
// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    let map_nums1 = new Map();

    nums1.forEach((num) => {
        if (map_nums1.has(num)) {
            map_nums1.set(num, map_nums1.get(num) + 1);
        } else {
            map_nums1.set(num, 1);
        }
    });

    nums2.forEach((num) => {
        if (map_nums1.has(num) && map_nums1.get(num) > 0) {
            map_nums1.set(num, map_nums1.get(num) - 1);
            result.push(num);
        }
    });

    return result;
};