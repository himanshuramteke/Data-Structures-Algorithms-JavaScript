/**
 * Date:15-1-2025
 * 2429.Minimize XOR(https://leetcode.com/problems/minimize-xor/description/?envType=daily-question&envId=2025-01-15)
 */

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function(num1, num2) {
    const countSetBits = (num) => num.toString(2).split('1').length - 1;

    let bitsToSet = countSetBits(num2);

    let x = 0;
    for (let i = 31; i >= 0 && bitsToSet > 0; i--) {
        if ((num1 & (1 << i)) !== 0) {
            x |= (1 << i); // Turn on the ith bit of x
            bitsToSet--;
        }
    }
    for (let i = 0; i < 32 && bitsToSet > 0; i++) {
        if ((x & (1 << i)) === 0) { // If the ith bit of x is not already set
            x |= (1 << i); // Turn on the ith bit of x
            bitsToSet--;
        }
    }

    return x;
};