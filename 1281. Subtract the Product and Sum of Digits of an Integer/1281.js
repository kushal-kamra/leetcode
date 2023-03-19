// 1281. Subtract the Product and Sum of Digits of an Integer solution in JavaScript
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let n_string = n.toString().split('').map(digit => parseInt(digit));

    let sum = 0;
    let product = 1;

    n_string.forEach((num) => {
        sum += num;
        product *= num;
    })

    return product - sum;
};