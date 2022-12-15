// 270. Closest Binary Search Tree Value solution in JavaScript
// https://leetcode.com/problems/closest-binary-search-tree-value/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let val = root.val;
    let closest = root.val;

    while (root != null) {
        val = root.val;

        closest = Math.abs(val - target) < Math.abs(closest - target) ? val : closest;

        root = target < root.val ? root.left : root.right;
    }

    return closest;
};