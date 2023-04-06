// 824. Goat Latin solution in JavaScript
// https://leetcode.com/problems/goat-latin/description/

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);

    return sentence.split(" ").map((word, index) => {
        return vowels.has(word[0])
        ? word + 'ma' + 'a'.repeat(index + 1)
        : word.slice(1) + word[0] + 'ma' + 'a'.repeat(index + 1);
    }).join(" ");
};