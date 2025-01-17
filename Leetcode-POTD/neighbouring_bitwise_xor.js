/**
 * Date:17-1-2025
 * 2683.Neighbouring Bitwise XOR(https://leetcode.com/problems/neighboring-bitwise-xor/description/?envType=daily-question&envId=2025-01-17)
 */

/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    const n = derived.length;

    function isValid(startValue) {
        const original = new Array(n);
        original[0] = startValue;

        for (let i = 1; i < n; i++) {
            original[i] = derived[i - 1] ^ original[i - 1];
        }
        return (original[n - 1] ^ original[0]) === derived[n - 1];
    }

    return isValid(0) || isValid(1);

};