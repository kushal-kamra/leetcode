// 485. Max Consecutive Ones solution in Java
// https://leetcode.com/problems/max-consecutive-ones/description/

class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int len = 0;
        int max_len = 0;
        for (int num : nums) {
            if (num == 1) {
                len++;
            }
            
            if (len > max_len) {
                max_len = len;
            }
            
            if (num == 0) {
                len = 0;
            }
        }
        return max_len;
    }
}