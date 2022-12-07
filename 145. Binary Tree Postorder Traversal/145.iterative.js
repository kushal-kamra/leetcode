// 145. Binary Tree Postorder Traversal iterative solution in JavaScript
// https://leetcode.com/problems/binary-tree-postorder-traversal/description/

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
 var postorderTraversal = function(root) {
    let stack1 = [];
    let stack2 = [];
    let output = [];
    
    if (root == null) return output;

    stack1.push(root);

    while (stack1.length != 0) {
        let curr = stack1.pop();

        stack2.push(curr.val);

        if (curr.left != null) stack1.push(curr.left);
        if (curr.right != null) stack1.push(curr.right);
    }

    while (stack2.length != 0) {
        output.push(stack2.pop());
    }

    return output;
};