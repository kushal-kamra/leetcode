// 500. Keyboard Row solution in JavaScript
// https://leetcode.com/problems/keyboard-row/description/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let first_row_set = new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]);
    let second_row_set = new Set(["a","s","d","f","g","h","j","k","l"]);
    let third_row_set = new Set(["z","x","c","v","b","n","m"]);

    let result_words = [];

    words.forEach((word) => {
        if (canBeTyped(first_row_set, word) || canBeTyped(second_row_set, word) || canBeTyped(third_row_set, word))
            result_words.push(word);
    });

    return result_words;
};

function canBeTyped(row, word) {
    for (const char of word) {
        // console.log('row', row);
        // console.log('char.toLowerCase()', char.toLowerCase());
        // console.log('row.has(char.toLowerCase())', row.has(char.toLowerCase()));
        if (!row.has(char.toLowerCase())) return false;
    }

    return true;
}