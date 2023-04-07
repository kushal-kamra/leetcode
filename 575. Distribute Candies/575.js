// 575. Distribute Candies solution in JavaScript
// https://leetcode.com/problems/distribute-candies/description/

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let set = new Set();

    candyType.forEach((candy) => {
        set.add(candy);
    });

    let unique_candy = set.size;

    return Math.min(unique_candy, candyType.length/2);
};