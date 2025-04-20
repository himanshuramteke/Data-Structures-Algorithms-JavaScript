/**
 * Date: 20-04-2025
 * 781. Rabbits in Forest(https://leetcode.com/problems/rabbits-in-forest/?envType=daily-question&envId=2025-04-20)
 */

/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    const freq = new Map();
    let totalRabbits = 0;

    //count frequencies
    for(let ans of answers) {
        freq.set(ans, (freq.get(ans) || 0) + 1);
    }
    for (let [x, count] of freq.entries()) {
        let groupSize = x + 1;
        // Number of full groups needed
        let groups = Math.ceil(count / groupSize);
        totalRabbits += groups * groupSize;
    }

    return totalRabbits;
};