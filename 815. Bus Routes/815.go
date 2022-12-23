// 815. Bus Routes solution in GoLang
// https://leetcode.com/problems/bus-routes/description/

package leetcode

func numBusesToDestination(routes [][]int, source int, target int) int {
    stop_routes := make(map[int]map[int]bool)

    for route := 0; route < len(routes); route++ {
        for _, stop := range routes[route] {
            _, is_present := stop_routes[stop]
            if !is_present {
                stop_routes[stop] = map[int]bool{}
            }

            stop_routes[stop][route] = true
        }
    }

    type Transfer struct {
        stop int
        bus int
    }
    var stops_to_visit []Transfer
    stops_to_visit = append(stops_to_visit, Transfer{source, 0})

    visited_stops := make(map[int]bool)
    visited_stops[source] = true

    visited_routes := make(map[int]bool)

    for len(stops_to_visit) > 0 {
        stop_visit := stops_to_visit[0]
        stops_to_visit = stops_to_visit[1:]

        if stop_visit.stop == target {
            return stop_visit.bus
        }

        for stop_route, _ := range stop_routes[stop_visit.stop] {
            if visited_routes[stop_route] == true {
                continue
            }

            for _, stop := range routes[stop_route] {
                _, found := visited_stops[stop]
                if !found {
                    visited_stops[stop] = true
                    stops_to_visit = append(stops_to_visit, Transfer{stop, stop_visit.bus + 1})
                }
            }

            visited_routes[stop_route] = true
        }
    }

    return -1
}