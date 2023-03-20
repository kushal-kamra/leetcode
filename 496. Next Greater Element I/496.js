// 496. Next Greater Element I solution in JavaScript
// https://leetcode.com/problems/next-greater-element-i/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = new Map();

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && nums2[i] > stack[stack.length - 1]) {
            map.set(stack.pop(), nums2[i]);
        }

        stack.push(nums2[i]);
    }

    while (stack.length) {
        map.set(stack.pop(), -1);
    }

    let result = [];

    for (let i = 0; i < nums1.length; i++) {
        result.push(map.get(nums1[i]));
    }

    return result;
};