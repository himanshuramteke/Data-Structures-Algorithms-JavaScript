/**
 * Date:27-1-2025
 * 1462.Course Schedule IV(https://leetcode.com/problems/course-schedule-iv/description/?envType=daily-question&envId=2025-01-27)
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    const graph = new Array(numCourses).fill().map(() => []);
    for (const [u, v] of prerequisites) {
        graph[u].push(v);
    }

    const reachable = new Array(numCourses).fill().map(() => new Array(numCourses).fill(false));
    for (let i = 0; i < numCourses; i++) {
        const queue = [i];
        while (queue.length > 0) {
            const current = queue.shift();
            for (const neighbor of graph[current]) {
                if (!reachable[i][neighbor]) {
                    reachable[i][neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }

    const result = [];
    for (const [u, v] of queries) {
        result.push(reachable[u][v]);
    }
    return result;
};