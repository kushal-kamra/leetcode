//747. Largest Number At Least Twice of Others solution in JavaScript
//https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/

class Solution {
    public int dominantIndex(int[] nums) {
        int max_index = -1;
        int max_num = -1;
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > max_num) {
                max_num = nums[i];
                max_index = i;
            }
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] * 2 > max_num && i != max_index) return -1;
        }
        
        return max_index;
    }
}