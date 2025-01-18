/**
 * Date:18-1-2025
 * 1368.Minimum cost to make at least one valid path in a grid.(https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/description/?envType=daily-question&envId=2025-01-18)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

   const directions = [
       [0, 1],  // Right
       [0, -1], // Left
       [1, 0],  // Down
       [-1, 0], // Up
   ];

   const pq = new MinPriorityQueue({ priority: x => x[0] });
   const cost = Array.from({ length: m }, () => Array(n).fill(Infinity));

   pq.enqueue([0, 0, 0]); // Start with cost 0 at (0, 0)
   cost[0][0] = 0;

    while (!pq.isEmpty()) {
       const [currentCost, x, y] = pq.dequeue().element;

       // If we reached the bottom-right cell, return the cost
       if (x === m - 1 && y === n - 1) {
           return currentCost;
       }

       for (let dir = 0; dir < 4; dir++) {
           const [dx, dy] = directions[dir];
           const nx = x + dx;
           const ny = y + dy;

           // Check if the next cell is within bounds
           if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
               const newCost = currentCost + (grid[x][y] === dir + 1 ? 0 : 1);

               // Update the cost if we found a cheaper way
               if (newCost < cost[nx][ny]) {
                   cost[nx][ny] = newCost;
                   pq.enqueue([newCost, nx, ny]);
               }
           }
       }
   }

   return -1;
};