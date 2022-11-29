// 26. Remove Duplicates from Sorted Array solution in Java
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

class Solution {
    public int removeDuplicates(int[] nums) {
        int len = nums.length;
        int i = 0;
        
        for (int j = 1; j < len; j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        
        return i+1;
    }
}