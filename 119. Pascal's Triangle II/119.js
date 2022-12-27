// 119. Pascal's Triangle II solution in JavaScript
// https://leetcode.com/problems/pascals-triangle-ii/description/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1];

    for (let i = 0; i < rowIndex; i++) {
        for (let j = i; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }
        row.push(1);
    }

    return row;
};