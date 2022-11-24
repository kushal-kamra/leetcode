// 28. Find the Index of the First Occurrence in a String solution in Java
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

class Solution {
    public int strStr(String haystack, String needle) {
        if (needle.length() == 0 || needle == haystack) return 0;

        if (haystack.length() == 0) return -1;

        for (int i = 0; i <= haystack.length() - needle.length(); i++) {
            if (haystack.length() - i < needle.length()) return -1;

            if (haystack.charAt(i) == needle.charAt(0)) {
                for (int j = 0; j < needle.length(); j++) {
                    if (haystack.charAt(i + j) != needle.charAt(j)) {
                        break;
                    } else if (j == needle.length() - 1) {
                        return i;
                    }
                }
            }
        }

        return -1;
    }
}