/**
 * Date:24-02-2025
 * 2467.Most Profitable Path in a Tree(https://leetcode.com/problems/most-profitable-path-in-a-tree/description/?envType=daily-question&envId=2025-02-24)
 */

/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function(edges, bob, amount) {
    const n = amount.length;
    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    let bobTime = Array(n).fill(Infinity);
    let aliceIncome = -Infinity;
    let path = [];

    const findBobPath = (node, parent, time) => {
        if (node === 0) {
            bobTime[node] = time;
            path.push(node);
            return true;
        }
        for (const neighbor of graph[node]) {
            if (neighbor !== parent) {
                if (findBobPath(neighbor, node, time + 1)) {
                    bobTime[node] = time;
                    path.push(node);
                    return true;
                }
            }
        }
        return false;
    };
    findBobPath(bob, -1, 0);
     const dfsAlice = (node, parent, time, income) => {
        if (time < bobTime[node]) {
            income += amount[node];
        } else if (time === bobTime[node]) {
            income += amount[node] / 2;
        }
        
        let isLeaf = true;
        for (const neighbor of graph[node]) {
            if (neighbor !== parent) {
                isLeaf = false;
                dfsAlice(neighbor, node, time + 1, income);
            }
        }
        
        if (isLeaf) {
            aliceIncome = Math.max(aliceIncome, income);
        }
    };
    
    dfsAlice(0, -1, 0, 0);
    return aliceIncome;
};