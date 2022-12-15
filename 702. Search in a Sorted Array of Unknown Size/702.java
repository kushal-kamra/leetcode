// 702. Search in a Sorted Array of Unknown Size solution in Java
// https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/description/

/**
 * // This is ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface ArrayReader {
 *     public int get(int index) {}
 * }
 */

 class Solution {
    public int search(ArrayReader reader, int target) {
        if (reader.get(0) == target) return 0;

        int left = 0;
        int right = 1;

        while (reader.get(right) < target) {
            left = right;
            right = right * 2;
        }

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int mid_res = reader.get(mid);

            if (mid_res == target) {
                return mid;
            } else if (target < mid_res) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return -1;
    }
}