// 815. Bus Routes solution in Java
// https://leetcode.com/problems/bus-routes/description/
// https://leetcode.com/problems/bus-routes/solutions/122771/c-java-python-bfs-solution/?orderBy=most_votes

class Solution {
    public int numBusesToDestination(int[][] routes, int source, int target) {
        int no_routes = routes.length;

        HashMap<Integer, HashSet<Integer>> stop_routes_map = new HashMap<>();

        for (int i = 0; i < routes.length; i++) {
            for (int j : routes[i]) {
                if (!stop_routes_map.containsKey(j))
                    stop_routes_map.put(j, new HashSet<Integer>());

                stop_routes_map.get(j).add(i);
            }
        }

        Queue<int[]> bfs_queue = new ArrayDeque();
        bfs_queue.offer(new int[] {source, 0});

        HashSet<Integer> seen_stop = new HashSet<>();
        seen_stop.add(source);

        boolean[] seen_routes = new boolean[no_routes];

        while (!bfs_queue.isEmpty()) {
            int stop = bfs_queue.peek()[0];
            int route = bfs_queue.peek()[1];

            bfs_queue.poll();

            if (stop == target) {
                return route;
            }

            for (int routes_for_stop : stop_routes_map.get(stop)) {
                if (seen_routes[routes_for_stop]) continue;
                for (int stop_for_route : routes[routes_for_stop]) {
                    if (!seen_stop.contains(stop_for_route)) {
                        seen_stop.add(stop_for_route);
                        bfs_queue.offer(new int[] {stop_for_route, route + 1});
                    }
                }
                seen_routes[routes_for_stop] = true;
            }
        }

        return -1;
    }
}