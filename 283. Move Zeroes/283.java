// 283. Move Zeroes solution in Java
// https://leetcode.com/problems/move-zeroes/description/

class Solution {
    public void moveZeroes(int[] nums) {
        int last_non_zero = 0;
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[last_non_zero] = nums[i];
                last_non_zero++;
            }
        }
        
        for (int i = last_non_zero; i < nums.length; i++) {
            nums[i] = 0;
        }
    }
}