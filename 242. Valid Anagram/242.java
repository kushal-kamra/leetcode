// 242. Valid Anagram solution in Java
// https://leetcode.com/problems/valid-anagram/description/
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;

        int[] letters = new int[26];

        for (int i = 0; i < s.length(); i++) {
            letters[s.charAt(i) - 'a']++;
        }

        for (int i = 0; i < t.length(); i++) {
            letters[t.charAt(i) - 'a']--;
        }

        for (int i = 0; i < 26; i++) {
            if (letters[i] != 0) return false;
        }

        return true;
    }
}