// 350. Intersection of Two Arrays II solution in Java
// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        HashMap<Integer, Integer> nums1_map = new HashMap<Integer, Integer>();
        
        for (Integer num : nums1) {
            if (nums1_map.get(num) != null) {
                nums1_map.put(num, nums1_map.get(num) + 1);
            } else {
                nums1_map.put(num, 1);
            }
        }

        ArrayList<Integer> result_list = new ArrayList<>();

        for (Integer num : nums2) {
            if (nums1_map.get(num) != null && nums1_map.get(num) > 0) {
                nums1_map.put(num, nums1_map.get(num) - 1);
                result_list.add(num);
            }
        }

        int[] result = new int[result_list.size()];

        for (int i = 0; i < result_list.size(); i++) {
            result[i] = result_list.get(i);
        }

        return result;
    }
}