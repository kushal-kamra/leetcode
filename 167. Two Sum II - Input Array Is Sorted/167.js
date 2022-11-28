// 167. Two Sum II - Input Array Is Sorted solution in JavaScript
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let low = 0;
    let high = numbers.length - 1;

    while (low < high) {
        let sum = numbers[low] + numbers[high];

        if (sum == target) {
            return [low + 1, high + 1]
        } else if (sum < target) {
            low++;
        } else {
            high--;
        }
    }

    return [-1, -1];
};