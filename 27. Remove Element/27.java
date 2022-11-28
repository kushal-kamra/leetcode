// 27. Remove Element solution in Java
// https://leetcode.com/problems/remove-element/description/

class Solution {
    public int removeElement(int[] nums, int val) {
        int len = nums.length;
        int i = 0;
        
        for (int j = 0; j < len; j++) {
            if (nums[j] != val) {
                nums[i] = nums[j];
                i++;
            }
        }
        
        return i;
    }
}