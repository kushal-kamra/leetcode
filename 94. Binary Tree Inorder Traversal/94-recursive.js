// 94. Binary Tree Inorder Traversal recursive solution in JavaScript
// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }

    return [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right)
    ]
};