/**
 * Date:29-01-2025
 * 684.Redundant Connection(https://leetcode.com/problems/redundant-connection/description/?envType=daily-question&envId=2025-01-29)
 */

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
class DSU {
    constructor(n) {
        this.parent = Array.from({ length: n + 1 }, (_, i) => i);
        this.rank = Array(n + 1).fill(1);
    }

    find(x) {
        if(this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX === rootY) return false; 

        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        return true;
    }    
} 
var findRedundantConnection = function(edges) {
    let dsu = new DSU(edges.length);

    for (let [u, v] of edges) {
        if (!dsu.union(u, v)) return [u, v]; 
    }
    return [];
};