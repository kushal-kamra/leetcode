// 2357. Make Array Zero by Subtracting Equal Amounts solution in Java
// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/

class Solution {
    public int minimumOperations(int[] nums) {
        Set<Integer> nums_set = new HashSet<>();

        for (int num : nums) {
            if (num > 0) nums_set.add(num);
        }

        return nums_set.size();
    }
}