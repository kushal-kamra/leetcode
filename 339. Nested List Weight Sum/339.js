// 339. Nested List Weight Sum solution in JavaScript
// https://leetcode.com/problems/nested-list-weight-sum/description/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {
    // console.log(nestedList);

    // console.log(nestedList[0].isInteger());

    return calculateTotal(nestedList, 1)
    
};

function calculateTotal(nestedList, depth) {
    let length = nestedList.length;

    if (length == 0) return 0;

    let total = 0;

    for (let i = 0; i < length; i++) {
        if (nestedList[i].isInteger()) {
            total += nestedList[i].getInteger() * depth;
        } else {
            total += calculateTotal(nestedList[i].getList(), depth + 1);
        }
    }

    return total;
}
