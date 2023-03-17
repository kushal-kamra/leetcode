// 70. Climbing Stairs solution in Golang
// https://leetcode.com/problems/climbing-stairs/description/

func climbStairs(n int) int {
    if n == 1 {
        return 1;
    }

    var dp = make([]int, n + 1)

    dp[1] = 1
    dp[2] = 2

    for i := 3; i <= n; i++ {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}