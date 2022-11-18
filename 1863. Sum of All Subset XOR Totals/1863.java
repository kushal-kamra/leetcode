// 1863. Sum of All Subset XOR Totals solution in Java
// https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/

class Solution {
    public int subsetXORSum(int[] nums) {
        return helper(nums, 0, 0);
    }

    private int helper(int[] nums, int index, int current_xor) {
        if (index == nums.length) return current_xor;

        int with_element = helper(nums, index + 1, current_xor ^ nums[index]);
        int without_element = helper(nums, index + 1, current_xor);

        return with_element + without_element;
    }
}