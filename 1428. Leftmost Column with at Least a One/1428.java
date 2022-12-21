// 1428. Leftmost Column with at Least a One solution in Java
// https://leetcode.com/problems/leftmost-column-with-at-least-a-one/description/

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface BinaryMatrix {
 *     public int get(int row, int col) {}
 *     public List<Integer> dimensions {}
 * };
 */

class Solution {
    public int leftMostColumnWithOne(BinaryMatrix binaryMatrix) {
        int rows = binaryMatrix.dimensions().get(0);
        int cols = binaryMatrix.dimensions().get(1);
        int smallest_index = cols;

        for (int row = 0; row < rows; row++) {
            int left = 0;
            int right = smallest_index - 1;

            if (right < 0) {
                right = 0;
            }

            if (binaryMatrix.get(row, right) == 0) {
                continue;
            }

            while (left < right) {
                int mid = left + ((right - left) / 2);

                if (binaryMatrix.get(row, mid) == 0) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            if (binaryMatrix.get(row, left) == 1) {
                if (smallest_index > left) {
                    smallest_index = left;
                }
            }
        }

        if (smallest_index != cols) {
            return smallest_index;
        }

        return -1;
    }
}