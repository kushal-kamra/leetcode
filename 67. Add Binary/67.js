// 67. Add Binary solution in JavaScript
// https://leetcode.com/problems/add-binary/description/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let result = '';

    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;

    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = (+a[i] || 0) + (+b[j] || 0) + carry;

        if (sum > 1) {
            sum = sum % 2;
            carry = 1
        } else {
            carry = 0;
        }

        result = `${sum}${result}`;
        i--;
        j--;
    }

    return result;
};