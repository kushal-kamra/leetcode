//724. Find Pivot Index solution in Java
//https://leetcode.com/problems/find-pivot-index/description/

class Solution {
    public int pivotIndex(int[] nums) {
        int length = nums.length;
        
        for (int i = 1; i < length; i++) {
            nums[i] = nums[i] + nums[i-1];
        }
        
        if (nums[length-1] - nums[0] == 0) return 0;
        
        for (int i = 1; i < length; i++) {
            if (nums[i-1] == nums[length-1] - nums[i]) {
                return i;
            }
        }
        
        return -1;
    }
}