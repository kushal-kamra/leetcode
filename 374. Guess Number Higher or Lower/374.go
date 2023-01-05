// 374. Guess Number Higher or Lower solution in GoLang
// https://leetcode.com/problems/guess-number-higher-or-lower/description/

/**
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * func guess(num int) int;
 */

package main

func guessNumber(n int) int {
	low := 1
	high := n

	for low <= high {
		mid := low + ((high - low) / 2)

		guess_res := guess(mid)

		if guess_res == 0 {
			return mid
		} else if guess_res == 1 {
			low = mid + 1
		} else if guess_res == -1 {
			high = mid - 1
		}
	}

	return -1
}
