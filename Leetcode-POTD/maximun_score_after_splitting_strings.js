/**
 * Date: 01-01-2025
 * 1422. Maximum Score After Splitting a String(https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/?envType=daily-question&envId=2025-01-01)
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let totalOnes = 0;
    let leftZeros = 0;
    let rightOnes = 0;
    let maxScore = 0;

    for(let char of s) {
        if (char === '1') {
            totalOnes++;
        }
    }

    rightOnes = totalOnes;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            leftZeros++;
        } else {
            rightOnes--;
        }

     const score = leftZeros + rightOnes;
        maxScore = Math.max(maxScore, score);
    }

    return maxScore;   
};