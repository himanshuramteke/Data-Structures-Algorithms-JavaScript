/**
 * Date:21-1-2025
 * 2017.Grid Game(https://leetcode.com/problems/grid-game/description/?envType=daily-question&envId=2025-01-21)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
    const n = grid[0].length;

    // Calculate prefix sums for both rows
    const topSum = Array(n).fill(0);
    const bottomSum = Array(n).fill(0);

    topSum[0] = grid[0][0];
    bottomSum[0] = grid[1][0];

    for (let i = 1; i < n; i++) {
        topSum[i] = topSum[i - 1] + grid[0][i];
        bottomSum[i] = bottomSum[i - 1] + grid[1][i];
    }

    let minPoints = Infinity;
    for (let i = 0; i < n; i++) {
        const topRemaining = topSum[n - 1] - topSum[i]; // Points left in the top row
        const bottomRemaining = i > 0 ? bottomSum[i - 1] : 0; // Points in the bottom row to the left

        // The second robot collects the max of these two regions
        const secondRobotPoints = Math.max(topRemaining, bottomRemaining);
        minPoints = Math.min(minPoints, secondRobotPoints); // Minimize the max points for the second robot
    }

    return minPoints;
};