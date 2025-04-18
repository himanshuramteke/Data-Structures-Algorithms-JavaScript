/**
 * Date:18-04-2025
 * 38.Count and say(https://leetcode.com/problems/count-and-say/?envType=daily-question&envId=2025-04-18)
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n == 1) return "1";

    let result = "1";
    for (let i = 2; i <= n; i++) {
        let current = "";
        let count = 1;

        for (let j = 1; j < result.length; j++) {
            if (result[j] === result[j - 1]) {
                count++;
            } else {
                current += count.toString() + result[j - 1];
                count = 1;
            }
        }

        current += count.toString() + result[result.length - 1];

        result = current;
    }

    return result;
};