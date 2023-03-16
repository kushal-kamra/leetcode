 // 1491. Average Salary Excluding the Minimum and Maximum Salary solution in JavaScript
 // https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/description/

 /**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = Math.max(...salary);
    let min = Math.min(...salary);

    let total = salary.reduce((sum, value) => sum + value);

    total = total - max - min;

    return total/(salary.length - 2);
};