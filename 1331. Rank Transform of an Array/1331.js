// 1331. Rank Transform of an Array solution in JavaScript
// https://leetcode.com/problems/rank-transform-of-an-array/description/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sorted_set_array = [...new Set(arr)].sort((a, b) => a - b);

    return arr.map((item) => sorted_set_array.indexOf(item) + 1);
};