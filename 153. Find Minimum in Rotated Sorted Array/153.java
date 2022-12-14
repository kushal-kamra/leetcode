// 153. Find Minimum in Rotated Sorted Array solution in Java
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

class Solution {
    public int findMin(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int mid = left + ((right - left) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return nums[left];
    }
}