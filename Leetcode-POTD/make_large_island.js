/**
 * Date:31-02-2025
 * 827.Make a large island(https://leetcode.com/problems/making-a-large-island/description/?envType=daily-question&envId=2025-01-31)
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const n = grid.length;
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let index = 2, maxArea = 0;
    const areaMap = new Map([[0, 0]]);

    const dfs = (i, j, index) => {
        let area = 1;
        grid[i][j] = index;
        for (const [dx, dy] of dirs) {
            const x = i + dx, y = j + dy;
            if (x >= 0 && y >= 0 && x < n && y < n && grid[x][y] === 1) {
                area += dfs(x, y, index);
            }
        }
        return area;
    };
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                areaMap.set(index, dfs(i, j, index));
                maxArea = Math.max(maxArea, areaMap.get(index));
                index++;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                let seen = new Set(), newArea = 1;
                for (const [dx, dy] of dirs) {
                    const x = i + dx, y = j + dy;
                    if (x >= 0 && y >= 0 && x < n && y < n && grid[x][y] > 1) {
                        seen.add(grid[x][y]);
                    }
                }
                for (const idx of seen) {
                    newArea += areaMap.get(idx);
                }
                maxArea = Math.max(maxArea, newArea);
            }
        }
    }

    return maxArea;
};


