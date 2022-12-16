// 744. Find Smallest Letter Greater Than Target solution in Java
// https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

class Solution {
    public char nextGreatestLetter(char[] letters, char target) {
        int letters_len = letters.length;

        if (letters[letters_len - 1] < target || letters_len == 1) {
            return letters[0];
        }

        int left = 0;
        int right = letters_len - 1;

        while (left <= right) {
            int mid = left + ((right - left) / 2);

            if (letters[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (left == letters_len) {
            return letters[0];
        } else {
            return letters[left];
        }
    }
}