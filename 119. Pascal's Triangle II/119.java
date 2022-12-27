// 119. Pascal's Triangle II solution in Java
// https://leetcode.com/problems/pascals-triangle-ii/description/

class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> result = new ArrayList<>(rowIndex + 1);
        
        result.add(1);

        for (int i = 0; i < rowIndex; i++) {
            for (int j = i; j > 0; j--) {
                result.set(j, result.get(j) + result.get(j - 1));
            }
            result.add(1);
        }

        return result;
    }
}