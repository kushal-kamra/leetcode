// 589. N-ary Tree Preorder Traversal solution in JavaScript
// https://leetcode.com/problems/n-ary-tree-preorder-traversal/description/

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];

    let stack = [];
    let output = [];

    stack.push(root);

    while (stack.length) {
        let node = stack.pop();

        output.push(node.val);

        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }

    return output;
};