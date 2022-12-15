// 50. Pow(x, n) solution in GoLang
// https://leetcode.com/problems/powx-n/description/

package leetcode

func myPow(x float64, n int) float64 {
    if n < 0 {
        x = 1 / x
        n = -n
    }

    var ans float64 = 1
    var current_product float64 = x

    for i := n; i > 0; i = i / 2 {
        if i % 2 == 1 {
            ans = ans * current_product
        }

        current_product = current_product * current_product
    }

    return ans
}