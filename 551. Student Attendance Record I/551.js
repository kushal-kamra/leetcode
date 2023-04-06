// 551. Student Attendance Record I solution in JavaScript
// https://leetcode.com/problems/student-attendance-record-i/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let a = 0;
    let l = 0;
    let l_3 = false;

    s.split("").forEach(day => {
        if (day == 'A') {
            a++;
            l = 0;
        }
        else if (day == 'L') l++;
        else l = 0;
        
        if (l > 2 ) {
            l = 0;
            l_3 = true;
        }
    });

    return a < 2 && l_3 == false;
};