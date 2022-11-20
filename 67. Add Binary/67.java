// 67. Add Binary solution in Java
// https://leetcode.com/problems/add-binary/description/

class Solution {
    public String addBinary(String a, String b) {
        StringBuilder result = new StringBuilder();

        int i = a.length() - 1;
        int j = b.length() - 1;
        int carry = 0;

        while (i >= 0 || j >= 0 || carry > 0) {
            char char_a;
            char char_b;

            if (i >= 0) {
                char_a = a.charAt(i);
            } else {
                char_a = '0';
            }

            if (j >= 0) {
                char_b = b.charAt(j);
            } else {
                char_b = '0';
            }

            int sum = Character.getNumericValue(char_a) + Character.getNumericValue(char_b) + carry;

            if (sum > 1) {
                sum = sum % 2;
                carry = 1;
            } else {
                carry = 0;
            }

            result.insert(0, sum);
            i--;
            j--;
        }

        return result.toString();
    }
}