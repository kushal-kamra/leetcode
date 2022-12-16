// 744. Find Smallest Letter Greater Than Target solution in JavaScript
// https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if (letters[letters.length - 1] < target || letters.length == 1) return letters[0];

    let left = 0;
    let right = letters.length;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (left == letters.length) return letters[0];
    else return letters[left];
};