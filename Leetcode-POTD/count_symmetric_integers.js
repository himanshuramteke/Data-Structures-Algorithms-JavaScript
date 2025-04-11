/**
 * Date: 11-04-2025
 * 2843.Count Symmetric Integers(https://leetcode.com/problems/count-symmetric-integers/?envType=daily-question&envId=2025-04-11)
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0;

    for(let num = low; num <= high; num++) {
        const str = num.toString();

        if(str.length % 2 !== 0) continue;
        const half = str.length/2;
        let sum1 = 0;
        let sum2 = 0;

        for (let i = 0; i < half; i++) {
            sum1 += parseInt(str[i]);
            sum2 += parseInt(str[i + half]);
        }

        if (sum1 === sum2) {
            count++;
        }
    }
    return count;
};