// 557. Reverse Words in a String III solution in Java
// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

class Solution {
    public String reverseWords(String s) {
        List<String> words = Arrays.asList(s.split(" "));
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < words.size(); i++) {
            if (result.length() == 0) {
                result.append(reverse(words.get(i)));
            } else {
                result.append(" ");
                result.append(reverse(words.get(i)));
            }
        }

        return result.toString();
    }

    private String reverse(String word) {
        char[] word_array = word.toCharArray();

        int left = 0;
        int right = word_array.length - 1;
        while (left < right) {
            char temp = word_array[left];
            word_array[left] = word_array[right];
            word_array[right] = temp;
            left++;
            right--;
        }

        return new String(word_array);
    }
}