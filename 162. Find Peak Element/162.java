// 162. Find Peak Element solution in Java
// https://leetcode.com/problems/find-peak-element/description/

class Solution {
    public int findPeakElement(int[] nums) {
        int low = 0;
        int high = nums.length - 1;

        while (low < high) {
            int mid = low + ((high - low) / 2);

            if (nums[mid] < nums[mid + 1]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
    }
}