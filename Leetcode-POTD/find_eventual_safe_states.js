/**
 * Date:24-1-2025
 * 802.Find Eventual Safe states(https://leetcode.com/problems/find-eventual-safe-states/description/?envType=daily-question&envId=2025-01-24)
 *  *  */

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const n = graph.length;
    const reversedGraph = Array.from({ length: n }, () => []);
    const indegree = Array(n).fill(0);

    for(let i=0; i<n; i++) {
        for (const neighbour of graph[i]) {
            reversedGraph[neighbour].push(i);
            indegree[i]++;
        }
    }

    const queue = [];
    const safeNodes = [];

    for(let i=0; i<n; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length > 0) {
        const node = queue.shift();
        safeNodes.push(node);
        
        for (const neighbour of reversedGraph[node]) {
            indegree[neighbour]--;
            if (indegree[neighbour] === 0) {
                queue.push(neighbour);
            }
        }
    }

    return safeNodes.sort((a, b) => a - b);
};