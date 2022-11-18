// 198. House Robber solution in Java
// https://leetcode.com/problems/house-robber/description/

class Solution {
    public int rob(int[] nums) {
        int length = nums.length;

        if (length == 0) return 0;
        if (length == 1) return nums[0];
        if (length == 2) return Math.max(nums[0], nums[1]);

        int max_two_less = nums[0];
        int max_one_less = Math.max(nums[0], nums[1]);

        for (int i = 2; i < length; i++) {
            int max_current = Math.max(max_two_less + nums[i], max_one_less);

            max_two_less = max_one_less;
            max_one_less = max_current;
        }

        return max_one_less;
    }
}