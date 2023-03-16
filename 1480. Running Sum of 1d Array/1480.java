// 1480. Running Sum of 1d Array solution in Java
// https://leetcode.com/problems/running-sum-of-1d-array/description/

class Solution {
    public int[] runningSum(int[] nums) {
        int len = nums.length;
        int[] running_sum_array = new int[len];
        
        running_sum_array[0] = nums[0];
        
        for (int i = 1; i < len; i++) {
            running_sum_array[i] = running_sum_array[i-1] + nums[i];
        }
        
        return running_sum_array;
    }
}