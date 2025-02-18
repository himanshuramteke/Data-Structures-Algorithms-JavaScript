/**
 * Date:18-02-2025
 * 2375.Construct Smallest Number From DI string(https://leetcode.com/problems/construct-smallest-number-from-di-string/description/?envType=daily-question&envId=2025-02-18)
 */

/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    let stack = [], result = "";

    for(let i = 0; i <= pattern.length; i++) {
        stack.push(i + 1);
        
        if (i === pattern.length || pattern[i] === 'I') {
            while (stack.length) {
                result += stack.pop();
            }
        }
    }
    return result;
};