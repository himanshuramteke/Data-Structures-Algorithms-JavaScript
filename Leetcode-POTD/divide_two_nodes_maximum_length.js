/**
 * Date:30-01-2025
 * 2493.Divide Two Nodes Into the maximum number of groups(https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/description/?envType=daily-question&envId=2025-01-30)
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function(n, edges) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    const colors = new Array(n + 1).fill(0);
    let maxGroups = 0;
    
    const bfsCheckBipartite = (start) => {
        let queue = [[start, 1]];
        colors[start] = 1;
        let nodes = [];
        let maxDepth = 0;
        
        while (queue.length) {
            const newQueue = [];
            maxDepth++;
            for (const [node, depth] of queue) {
                nodes.push(node);
                for (const neighbor of graph[node]) {
                    if (colors[neighbor] === 0) {
                        colors[neighbor] = 3 - colors[node]; 
                        newQueue.push([neighbor, depth + 1]);
                    } else if (colors[neighbor] === colors[node]) {
                        return -1; 
                    }
                }
            }
            queue = newQueue;
        }

        const getMaxDepth = (start) => {
            const visited = new Array(n + 1).fill(false);
            let queue = [start];
            visited[start] = true;
            let level = 0;
            
            while (queue.length) {
                const newQueue = [];
                for (const node of queue) {
                    for (const neighbor of graph[node]) {
                        if (!visited[neighbor]) {
                            visited[neighbor] = true;
                            newQueue.push(neighbor);
                        }
                    }
                }
                queue = newQueue;
                level++;
            }
            return level;
        };

        let localMax = 0;
        for (const node of nodes) {
            localMax = Math.max(localMax, getMaxDepth(node));
        }
        return localMax;
    };

    for (let i = 1; i <= n; i++) {
        if (colors[i] === 0) {
            const res = bfsCheckBipartite(i);
            if (res === -1) return -1; 
            maxGroups += res;
        }
    }

    return maxGroups;
};