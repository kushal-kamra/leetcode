// 1502. Can Make Arithmetic Progression From Sequence solution in JavaScript
// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/description/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort(order);
    
    let diff = arr[1] - arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] != diff) return false;
    }

    return true;
};

function order(a, b) {
    return a < b ? -1 : 1;
}