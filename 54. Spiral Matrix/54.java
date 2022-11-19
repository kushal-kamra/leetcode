// 54. Spiral Matrix solution in Java
// https://leetcode.com/problems/spiral-matrix/description/

class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int rows = matrix.length;
        int columns = matrix[0].length;
        
        List<Integer> result = new ArrayList<>();

        int up = 0;
        int left = 0;
        int right = columns - 1;
        int down = rows - 1;

        while (result.size() < rows * columns) {
            //To right
            for (int col = left; col <= right; col++) {
                result.add(matrix[up][col]);
            }
            //To down
            for (int row = up + 1; row <= down; row++) {
                result.add(matrix[row][right]);
            }
            //To left
            if (up != down) {
                for (int col = right - 1; col >= left; col--) {
                    result.add(matrix[down][col]);
                }
            }
            //To up
            if (left != right) {
                for (int row = down - 1; row > up; row--) {
                    result.add(matrix[row][left]);
                }
            }

            left++;
            up++;
            right--;
            down--;
        }

        return result;
    }
}