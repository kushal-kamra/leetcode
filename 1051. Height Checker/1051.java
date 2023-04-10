// 1051. Height Checker solution in Java
// https://leetcode.com/problems/height-checker/description/

class Solution {
    public int heightChecker(int[] heights) {
        int incorrect_students = 0;
        int sorted_array[] = heights.clone();
        
        Arrays.sort(sorted_array);
        
        for (int i = 0; i < heights.length; i++) {
            if (heights[i] != sorted_array[i]) {
                incorrect_students++;
            }
        }
        
        return incorrect_students;
    }
}