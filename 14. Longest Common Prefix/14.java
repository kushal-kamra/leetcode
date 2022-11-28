// 14. Longest Common Prefix solution in Java
// https://leetcode.com/problems/longest-common-prefix/description/

class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";

        int min_len = Integer.MAX_VALUE;

        for (String str : strs) {
            min_len = Math.min(min_len, str.length());
        }

        int low = 1;
        int high = min_len;

        while (low <= high) {
            int middle = (low + high) / 2;

            if (isCommonPrefix(strs, middle))
                low = middle + 1;
            else
                high = middle - 1;
        }

        return strs[0].substring(0, (low + high) / 2);
    }

    private boolean isCommonPrefix(String[] strs, int len) {
        String str = strs[0].substring(0, len);

        for (int i = 1; i < strs.length; i++)
            if (!strs[i].startsWith(str))
                return false;

        return true;
    }
}