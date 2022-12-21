// 1428. Leftmost Column with at Least a One solution in GoLang
// https://leetcode.com/problems/leftmost-column-with-at-least-a-one/description/

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * type BinaryMatrix struct {
 *     Get func(int, int) int
 *     Dimensions func() []int
 * }
 */

 func leftMostColumnWithOne(binaryMatrix BinaryMatrix) int {
    dimensions := binaryMatrix.Dimensions()
    rows := dimensions[0]
    cols := dimensions[1]
    smallest_index := cols

    for row := 0; row < rows; row++ {
        left := 0
        right := smallest_index - 1

        if right < 0 {
            right = 0
        }

        if binaryMatrix.Get(row, right) == 0 {
            continue
        }

        for left < right {
            mid := left + (right - left) / 2

            if binaryMatrix.Get(row, mid) == 0 {
                left = mid + 1
            } else {
                right = mid
            }
        }

        if binaryMatrix.Get(row, left) == 1 {
            if smallest_index > left {
                smallest_index = left
            }
        }
    }

    if smallest_index != cols {
        return smallest_index
    }

    return -1
}