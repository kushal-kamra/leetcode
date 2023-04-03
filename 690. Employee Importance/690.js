// 690. Employee Importance solution in JavaScript
// https://leetcode.com/problems/employee-importance/description/

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let map = new Map();

    employees.forEach(employee => {
        map.set(employee.id, {
            importance: employee.importance,
            subs: employee.subordinates,
        });
    });

    return total_importance(map, id);
};

function total_importance(map, id) {
    let total =  map.get(id)["importance"];

    map.get(id)["subs"].forEach((id => {
        total += total_importance(map, id);
    }))

    return total;
}