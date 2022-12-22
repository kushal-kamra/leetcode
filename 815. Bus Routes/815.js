// 815. Bus Routes solution in JavaScript
// https://leetcode.com/problems/bus-routes/description/
// https://leetcode.com/problems/bus-routes/solutions/2329031/fully-commented-javascript-version-of-the-most-popular-solution/

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    let stop_routes = new Map();

    for (let route = 0; route < routes.length; route++) {
        for (let stop of routes[route]) {
            if (!stop_routes.has(stop))
                stop_routes.set(stop, new Set());

            stop_routes.get(stop).add(route);
        }
    }

    let stops_to_visit = new Queue();

    stops_to_visit.enqueue([source, 0]);

    let visited_stops = new Set();
    visited_stops.add(source);

    let visited_routes = new Array(routes.length);

    while (!stops_to_visit.isEmpty()) {
        let stop = stops_to_visit.front()[0];
        let bus = stops_to_visit.front()[1];

        stops_to_visit.dequeue();

        if (stop == target) return bus;

        for (let route of stop_routes.get(stop)) {
            if (visited_routes[route])
                continue;

            for (let stop of routes[route]) {
                if (!visited_stops.has(stop)) {
                    visited_stops.add(stop);
                    stops_to_visit.enqueue([stop, bus + 1]);
                }
            }

            visited_routes[route] = true;
        }
    }

    return -1;
};