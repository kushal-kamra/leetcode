// 392. Is Subsequence solution in Java
// https://leetcode.com/problems/is-subsequence/description/

class Solution {
    public boolean isSubsequence(String s, String t) {
        int len_s = s.length();
        int len_t = t.length();
        int pointer_s = 0;
        int pointer_t = 0;

        while (pointer_s < len_s && pointer_t < len_t) {
            if (s.charAt(pointer_s) == t.charAt(pointer_t)) {
                pointer_s++;
            }
            pointer_t++;
        }
        
        return len_s == pointer_s;
    }
}