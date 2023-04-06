// 657. Robot Return to Origin solution in JavaScript
// https://leetcode.com/problems/robot-return-to-origin/description/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let moves_array = moves.split("");

    let pos_x = 0;
    let pos_y = 0;

    moves_array.forEach((move) => {
        switch (move) {
            case 'L':
                pos_x--;
                break;
            case 'R':
                pos_x++;
                break;
            case 'U':
                pos_y++;
                break;
            case 'D':
                pos_y--;
                break;
        }
    });

    return pos_x == 0 && pos_y == 0;
};