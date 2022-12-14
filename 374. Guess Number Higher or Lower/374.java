// 374. Guess Number Higher or Lower solution in Java
// https://leetcode.com/problems/guess-number-higher-or-lower/description/

/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

 public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int low = 1;
        int high = n;

        while (low <= high) {
            int mid = low + ((high - low) / 2);

            int guess_res = guess(mid);

            if (guess_res == 0) {
                return mid;
            } else if (guess_res == 1) {
                low = mid + 1;
            } else if (guess_res == -1) {
                high = mid - 1;
            }
        }

        return -1;
    }
}