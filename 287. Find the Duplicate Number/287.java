// 287. Find the Duplicate Number solution in Java
// https://leetcode.com/problems/find-the-duplicate-number/description/

class Solution {
    public int findDuplicate(int[] nums) {
        int len = nums.length;
        int low = 0;
        int high = len - 1;

        while (low < high) {
            int mid = low + ((high - low) / 2);

            int count = 0;
            for (int num : nums) {
                if (num <= mid) count++;
            }

            if (count <= mid) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
    }
}