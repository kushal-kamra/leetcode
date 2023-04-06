// 414. Third Maximum Number solution in Java
// https://leetcode.com/problems/third-maximum-number/description/

class Solution {
    public int thirdMax(int[] nums) {
        Set<Integer> maximums = new HashSet<Integer>();
        
        for (int num : nums) {
            maximums.add(num);
            if (maximums.size() > 3) {
                maximums.remove(Collections.min(maximums));
            }
        }
        
        if (maximums.size() == 3) {
            return Collections.min(maximums);
        }
        
        return Collections.max(maximums);
    }
}