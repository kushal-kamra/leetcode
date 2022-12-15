// 270. Closest Binary Search Tree Value solution in GoLang
// https://leetcode.com/problems/closest-binary-search-tree-value/description/

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

package leetcode

func closestValue(root *TreeNode, target float64) int {

	closest := root.Val

	for root != nil {
		if math.Abs(float64(root.Val) - target) < math.Abs(float64(closest) - target) {
			closest = root.Val
		}

		if target < float64(root.Val) {
			root = root.Left
		} else {
			root = root.Right
		}
	}

	return closest
}