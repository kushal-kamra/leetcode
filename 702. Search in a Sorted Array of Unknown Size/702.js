// 702. Search in a Sorted Array of Unknown Size solution in JavaScript
// https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/description/

/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {

    if (reader.get(0) == target) return 0;

    let left = 0;
    let right = 1;

    while (reader.get(right) < target) {
        left = right;
        right = right * 2;
    }

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let mid_res = reader.get(mid);


        if (mid_res == target) {
            return mid;
        } else if (target < mid_res) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
};