// 167. Two Sum II - Input Array Is Sorted solution in Java
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int low = 0;
        int high = numbers.length - 1;
        int[] return_array = {-1, -1};

        while (low < high) {
            int sum = numbers[low] + numbers[high];

            if (sum == target) {
                return_array[0] = low + 1;
                return_array[1] = high + 1;

                return return_array;
            } else if (sum < target) {
                low++;
            } else {
                high--;
            }
        }

        return return_array;
    }
}