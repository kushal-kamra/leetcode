// 367. Valid Perfect Square solution in Java
// https://leetcode.com/problems/valid-perfect-square/description/

class Solution {
    public boolean isPerfectSquare(int num) {
        if (num < 2) return true;

        int left = 2;
        int right = num / 2;
        int pivot;

        while (left <= right) {
            pivot = left + ((right - left) / 2);

            long pivot_square = (long)pivot * pivot;

            if (pivot_square == num) {
                return true;
            } else if (pivot_square > num) {
                right = pivot - 1;
            } else if (pivot_square < num) {
                left = pivot + 1;
            }
        }

        return false;
    }
}