// 151. Reverse Words in a String solution in Java
// https://leetcode.com/problems/reverse-words-in-a-string/description/

class Solution {
    public String reverseWords(String s) {
        s = s.trim();

        List<String> wordList = Arrays.asList(s.split("\\s+"));
        Collections.reverse(wordList);

        return String.join(" ", wordList);
    }
}