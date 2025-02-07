/**
 * Date:07-02-2025
 * 3160.Find the Number of Distinct Colors Among the Balls.(https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/?envType=daily-question&envId=2025-02-07)
 */

/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    let ballColors = new Map();
    let colorCount = new Map();
    let result = [];

    for (let [ball, color] of queries) {
        if (ballColors.has(ball)) {
            let prevColor = ballColors.get(ball);
            // Reduce count of the previous color
            colorCount.set(prevColor, colorCount.get(prevColor) - 1);
            // Remove color from tracking if no ball uses it anymore
            if (colorCount.get(prevColor) === 0) {
                colorCount.delete(prevColor);
            }
        }

         // Update the ball's color
        ballColors.set(ball, color);
        // Increase count of the new color
        colorCount.set(color, (colorCount.get(color) || 0) + 1);
        
        // Store the distinct color count
        result.push(colorCount.size);
    }

    return result;
};