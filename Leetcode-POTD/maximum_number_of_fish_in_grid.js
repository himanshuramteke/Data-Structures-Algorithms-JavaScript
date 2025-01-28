/**
 * Date:28-01-2025
 * 2658.Maximun number of fish in grid(https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/description/?envType=daily-question&envId=2025-01-28)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    const rows = grid.length;
   const cols = grid[0].length;

   // Directions for moving up, down, left, and right
   const directions = [
       [0, 1],  // right
       [0, -1], // left
       [1, 0],  // down
       [-1, 0]  // up
   ];

   // Helper function to perform DFS and calculate the fish count
   function dfs(r, c) {
       // If the current cell is out of bounds or not a water cell, return 0
       if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
           return 0;
       }

       // Collect the fish in the current cell and mark it as visited (set to 0)
       let fish = grid[r][c];
       grid[r][c] = 0;

       // Explore all adjacent cells
       for (const [dr, dc] of directions) {
           fish += dfs(r + dr, c + dc);
       }

       return fish;
   }

   let maxFish = 0;

   // Iterate over every cell in the grid
   for (let r = 0; r < rows; r++) {
       for (let c = 0; c < cols; c++) {
           // If the current cell is a water cell, perform DFS to calculate the fish count
           if (grid[r][c] > 0) {
               maxFish = Math.max(maxFish, dfs(r, c));
           }
       }
   }

   return maxFish;

};