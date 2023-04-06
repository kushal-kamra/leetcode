// 414. Third Maximum Number solution in JavaScript
// https://leetcode.com/problems/third-maximum-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max_set = new Set();

    nums.forEach((num) => {
        max_set.add(num);

        if (max_set.size > 3) {
            max_set.delete(Math.min(...max_set));
        }
    });

    if (max_set.size == 3) {
        return Math.min(...max_set);
    }
    
    return Math.max(...max_set);
};