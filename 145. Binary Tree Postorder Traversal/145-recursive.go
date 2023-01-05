// 145. Binary Tree Postorder Traversal recursive solution in GoLang
// https://leetcode.com/problems/binary-tree-postorder-traversal/description/

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

package main

func postorderTraversal(root *TreeNode) []int {
	if root == nil {
		return nil
	}

	var output []int
	traverse(root, &output)

	return output
}

func traverse(root *TreeNode, output *[]int) {
	if root == nil {
		return
	}

	traverse(root.Left, output)
	traverse(root.Right, output)
	*output = append(*output, root.Val)
}
