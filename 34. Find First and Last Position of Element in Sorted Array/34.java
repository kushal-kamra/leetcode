// 34. Find First and Last Position of Element in Sorted Array solution in Java
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

class Solution {
    public int[] searchRange(int[] nums, int target) {
        int first_occurence = findOccurence(nums, target, true);

        if (first_occurence == -1) {
            return new int[]{-1, -1};
        }

        int second_occurence = findOccurence(nums, target, false);

        return new int[]{first_occurence, second_occurence};
    }

    private int findOccurence(int[] nums, int target, boolean is_first) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = left + ((right - left) / 2);

            if (nums[mid] == target) {
                if (is_first) {
                    if (mid == left || nums[mid - 1] != target) {
                        return mid;
                    }

                    right = mid - 1;
                } else {
                    if (mid == right || nums[mid + 1] != target) {
                        return mid;
                    }

                    left = mid + 1;
                }
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return -1;
    }
}