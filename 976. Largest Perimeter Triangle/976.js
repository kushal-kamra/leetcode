// 976. Largest Perimeter Triangle solution in JavaScript
// https://leetcode.com/problems/largest-perimeter-triangle/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    function compare(a, b) {
        return b - a;
    }
    
    nums.sort(compare);

    console.log(nums);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] < (nums[i + 1] + nums[i + 2]))
            return nums[i] + nums[i + 1] + nums[i + 2];
    }

    return 0;
};