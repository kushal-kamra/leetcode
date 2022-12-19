// 41. First Missing Positive solution in Java
// https://leetcode.com/problems/first-missing-positive/description/

class Solution {
    public int firstMissingPositive(int[] nums) {
        int len = nums.length;

        //checking for existence of 1
        int contains_1 = 0;

        for (int i = 0; i < len; i++) {
            if (nums[i] == 1) {
                contains_1 = 1;
                break;
            }
        }

        if (contains_1 == 0) return 1;

        //marking all 0, -ve and greater than n as 1
        for (int i = 0; i < len; i++) {
            if (nums[i] <= 0 || nums[i] > len) nums[i] = 1;
        }

        for (int i = 0; i < len; i++) {
            int num_i = Math.abs(nums[i]);

            if (num_i == len) {
                nums[0] = -Math.abs(nums[0]);
            } else {
                nums[num_i] = -Math.abs(nums[num_i]);
            }
        }

        //checking array for positive number
        for (int i = 1; i < len; i++) {
            if (nums[i] > 0) return i;
        }

        if (nums[0] > 0) return len;

        return len + 1;
    }
}