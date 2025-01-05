/**
 * Date:05-01-2025
 * 2381.Shifting Letters II(https://leetcode.com/problems/shifting-letters-ii/description/?envType=daily-question&envId=2025-01-05)
 */

/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    const n = s.length;
    const shiftArray = new Array(n + 1).fill(0);

    for (const [start, end, direction] of shifts) {
        const shiftValue = direction === 1 ? 1 : -1;
        shiftArray[start] += shiftValue;
        if (end + 1 < n) {
            shiftArray[end + 1] -= shiftValue;
        }
    }
    let currentShift = 0;
    const chars = s.split('');

    for (let i = 0; i < n; i++) {
        currentShift += shiftArray[i];
        // Apply the shift to the character
        const newCharCode = ((chars[i].charCodeAt(0) - 97 + currentShift) % 26 + 26) % 26 + 97;
        chars[i] = String.fromCharCode(newCharCode);
    }

    return chars.join('');
};