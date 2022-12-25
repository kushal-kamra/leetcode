// 564. Find the Closest Palindrome solution in JavaScript
// https://leetcode.com/problems/find-the-closest-palindrome/description/

/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
    let number = parseInt(n);
    let len = n.length;

    if (number <=10 || (number % 10 == 0 && parseInt(n.charAt(0)) == 1))
        return (number - 1).toString();

    if (number == 11 || (number % 10 == 1 && n.charAt(0) == '1' && parseInt(n.substring(1, len - 1)) == 0))
        return (number - 2).toString();

    if (isAllDigitNine(n)) return (number + 2).toString();

    let is_even = (len % 2 == 0);

    let root_string = is_even ? n.substring(0, len / 2) : n.substring(0, len / 2 + 1);
    let root_num = parseInt(root_string);

    let equal_string = toPalindromeDigits(root_num, is_even);
    let diff_equal = Math.abs(number - parseInt(equal_string));

    let bigger_string = toPalindromeDigits(root_num + 1, is_even);
    let diff_bigger = Math.abs(number - parseInt(bigger_string));

    let smaller_string = toPalindromeDigits(root_num - 1, is_even);
    let diff_smaller = Math.abs(number - parseInt(smaller_string));

    let closest = diff_bigger < diff_smaller ? BigInt(bigger_string) : BigInt(smaller_string);
    let min_diff = Math.min(diff_bigger, diff_smaller);

    if (diff_equal != 0) {
        if (diff_equal == min_diff) {
            closest = equal_string < closest ? BigInt(equal_string) : BigInt(closest);
        } else if (diff_equal < min_diff) {
            closest = BigInt(equal_string);
        }
    }

    return closest.toString();
};

function isAllDigitNine(n) {
    for (let c of n) {
        if (c != '9') return false;
    }

    return true;
}

function toPalindromeDigits(n, is_even) {
    let reversed_n_string = n.toString().split("").reverse().join("");

    let palindrome_n = is_even ? n.toString() + reversed_n_string : n.toString() + reversed_n_string.substring(1, n.length);

    return palindrome_n;
}