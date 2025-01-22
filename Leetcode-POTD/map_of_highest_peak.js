/**
 * Date:22-1-2025
 * 1765.Map of the higest peak(https://leetcode.com/problems/map-of-highest-peak/description/?envType=daily-question&envId=2025-01-22)
 */

/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
    const m = isWater.length;
    const n = isWater[0].length;
    const height = Array.from({ length: m }, () => Array(n).fill(-1));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; 
    const queue = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }
   let index = 0; // Pointer for the queue
    while (index < queue.length) {
        const [x, y] = queue[index++];
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // If neighbor is valid and not yet processed
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && height[nx][ny] === -1) {
                height[nx][ny] = height[x][y] + 1; // Assign height
                queue.push([nx, ny]); // Enqueue
            }
        }
    }

    return height;
};