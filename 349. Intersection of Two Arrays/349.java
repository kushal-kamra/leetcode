// 349. Intersection of Two Arrays solution in Java
// https://leetcode.com/problems/intersection-of-two-arrays/description/

class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        HashSet<Integer> nums1_set = new HashSet<Integer>();
        
        for (Integer n : nums1) nums1_set.add(n);

        HashSet<Integer> nums2_set = new HashSet<Integer>();

        for (Integer n : nums2) nums2_set.add(n);

        nums1_set.retainAll(nums2_set);

        int[] output = new int[nums1_set.size()];
        int idx = 0;
        
        for (int num : nums1_set) output[idx++] = num;

        return output;
    }
}