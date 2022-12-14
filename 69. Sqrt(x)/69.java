// 69. Sqrt(x) solution in Java
// https://leetcode.com/problems/sqrtx/description/

class Solution {
    public int mySqrt(int x) {
        if (x < 2) return x;

        int left = 2;
        int right = x / 2;

        int pivot;

        while (left <= right) {
            pivot = left + ((right - left) / 2);

            long num = (long)pivot * pivot;

            if (num == x) {
                return pivot;
            } else if (num > x) {
                right = pivot - 1;
            } else if (num < x) {
                left = pivot + 1;
            }
        }

        return right;
    }
}