/**
 * Date: 03-05-2025
 * 1007.Minimum Domino Rotations for equal row(https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/?envType=daily-question&envId=2025-05-03)
 */

/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    const n = tops.length;
    function check(x) {
        let rotationsTop = 0;
        let rotationsBottom = 0;

        for (let i = 0; i < n; i++) {
            // If neither top nor bottom has x, it's impossible
            if (tops[i] !== x && bottoms[i] !== x) {
                return -1;
            } else if (tops[i] !== x) {
                rotationsTop++;
            } else if (bottoms[i] !== x) {
                rotationsBottom++;
            }
        }

        return Math.min(rotationsTop, rotationsBottom);
    }

    // Try to make all values equal to tops[0] or bottoms[0]
    let rotations = check(tops[0]);
    if (rotations !== -1 || tops[0] === bottoms[0]) {
        return rotations;
    } else {
        return check(bottoms[0]);
    }
};