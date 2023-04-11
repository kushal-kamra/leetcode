// 1051. Height Checker solution in JavaScript
// https://leetcode.com/problems/height-checker/description/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let height_count = new Array(101).fill(0);

    for (let i = 0; i < heights.length; i++) {
        height_count[heights[i]]++;
    }

    let current_height = 0;
    let result = 0;

    for (let i = 0; i < heights.length; i++) {
        while (height_count[current_height] == 0) {
            current_height++;
        }

        if (current_height != heights[i]) {
            result++;
        }

        height_count[current_height]--;
    }

    return result;
};