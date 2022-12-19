// 202. Happy Number solution in GoLang
// https://leetcode.com/problems/happy-number/description/

func isHappy(n int) bool {
    seen_num_map := make(map[int]bool)

    for n != 1 && !seen_num_map[n] {
        seen_num_map[n] = true
        n = getNextNum(n)
    }

    return n == 1
}

func getNextNum(n int) int {
    squares := map[int]int {
        0:0,
        1:1,
        2:4,
        3:9,
        4:16,
        5:25,
        6:36,
        7:49,
        8:64,
        9:81,
    }

    total_sum := 0

    for n > 0 {
        d := n % 10
        n = n / 10
        total_sum += squares[d]
    }

    return total_sum
}