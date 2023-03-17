// 977. Squares of a Sorted Array solution in Java
// https://leetcode.com/problems/squares-of-a-sorted-array/description/

class Solution {
    public int[] sortedSquares(int[] nums) {
        int n = nums.length;
        
        int[] final_array = new int[n];
        
        
        
        int left = 0;
        int right = nums.length - 1;
        
        for (int i = n - 1; i >= 0; i--) {
            int square;
            
            if (Math.abs(nums[right]) > Math.abs(nums[left])) {
                square = nums[right] * nums[right];
                
                right--;
            } else {
                square = nums[left] * nums[left];
                left++;
            }
            
            final_array[i] = square;
        }
        
        return final_array;
    }
}