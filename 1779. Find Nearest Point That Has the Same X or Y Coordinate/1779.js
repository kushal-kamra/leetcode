// 1779. Find Nearest Point That Has the Same X or Y Coordinate solution in JavaScript
// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/description/

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let min_index = -1;
    let min_distance = Number.POSITIVE_INFINITY;

    for (let i = 0; i < points.length; i++) {
        if (points[i][0] == x || points[i][1] == y) {
            if (min_distance > (Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y))) {
                min_distance = (Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y));
                min_index = i;
            }
        }
    }

    return min_index;
};