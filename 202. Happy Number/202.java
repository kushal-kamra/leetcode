// 202. Happy Number solution in Java
// https://leetcode.com/problems/happy-number/description/

class Solution {

    private int squares [] = {
        0, 1, 4, 9, 16, 25, 36, 49, 64, 81
    };

    public boolean isHappy(int n) {
        Set<Integer> seen_num = new HashSet<>();

        while (n != 1 && !seen_num.contains(n)) {
            seen_num.add(n);
            n = getNextNum(n);
        }

        return n == 1;
    }

    private int getNextNum(int n) {
        int total_sum = 0;

        while (n > 0) {
            int d = n % 10;
            n = n / 10;
            total_sum += squares[d];
        }

        return total_sum;
    }
}