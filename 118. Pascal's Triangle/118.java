// 118. Pascal's Triangle solution in Java
// https://leetcode.com/problems/pascals-triangle/description/

class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> pascal = new ArrayList<List<Integer>>();
        List<Integer> prev_row = new ArrayList<>();
        for (int i = 0; i < numRows; i++) {
            List<Integer> row = new ArrayList<>();
            row.add(1);

            for (int j = 1; j < i; j++) {
                row.add(prev_row.get(j-1) + prev_row.get(j));
            }
            
            if (i != 0) {
                row.add(1);
            }
            pascal.add(row);
            prev_row = row;
        }

        return pascal;
    }
}