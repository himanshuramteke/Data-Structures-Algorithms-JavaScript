/**
 * Date:12-1-2025
 * 2116.Check if a Parenthesis String Can be Valid(https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/description/?envType=daily-question&envId=2025-01-12)
 */

/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function(s, locked) {
    const n = s.length;
    if(n % 2 !== 0) return false;

    let openCount = 0;
    let flexibleCount = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === '(' || locked[i] === '0') {
            openCount++;
        } else {
            openCount--;
        }

        if (openCount < 0) {
            return false; 
        }
    }

    let closeCount = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === ')' || locked[i] === '0') {
            closeCount++;
        } else {
            closeCount--;
        }

        if (closeCount < 0) {
            return false; 
        }
    }

    return true;
};