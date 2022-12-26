// 209. Minimum Size Subarray Sum solution in Java
// https://leetcode.com/problems/minimum-size-subarray-sum/description/

class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int len = nums.length;
        int ans = len + 1;
        int left = 0;
        int sum = 0;

        for (int i = 0; i < len; i++) {
            sum = sum + nums[i];

            while (sum >= target) {
                if (ans > i + 1 - left) {
                    ans = i + 1 - left;
                }

                sum = sum - nums[left];
                left++;
            }
        }

        if (ans != len + 1) {
            return ans;
        }

        return 0;
    }
}