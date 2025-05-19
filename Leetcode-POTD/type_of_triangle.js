/**
 * Date: 19-05-2025
 * 3024. Type of Triangle(https://leetcode.com/problems/type-of-triangle/?envType=daily-question&envId=2025-05-19)
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    const [a, b, c] = nums;

    // Check triangle inequality: sum of any two sides must be greater than the third
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "none";
    }

    // Check for triangle type
    if (a === b && b === c) {
        return "equilateral";
    } else if (a === b || b === c || a === c) {
        return "isosceles";
    } else {
        return "scalene";
    }
};