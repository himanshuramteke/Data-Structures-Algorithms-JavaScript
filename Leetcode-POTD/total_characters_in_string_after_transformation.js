/**
 * Date: 13-05-2025
 * 3335.Total characters in string after transformation(https://leetcode.com/problems/total-characters-in-string-after-transformations-i/?envType=daily-question&envId=2025-05-13)
 */

/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    const MOD = 1e9 + 7;
    const freq = new Array(26).fill(0);

    // Initialize frequency array
    for (const char of s) {
        freq[char.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < t; i++) {
        const nextFreq = new Array(26).fill(0);
        for (let j = 0; j < 26; j++) {
            const count = freq[j];
            if (count === 0) continue;
            if (j === 25) {
                // 'z' -> 'a' + 'b'
                nextFreq[0] = (nextFreq[0] + count) % MOD;
                nextFreq[1] = (nextFreq[1] + count) % MOD;
            } else {
                nextFreq[j + 1] = (nextFreq[j + 1] + count) % MOD;
            }
        }
        freq.splice(0, 26, ...nextFreq); // Update frequency array
    }

    // Sum all character frequencies
    return freq.reduce((sum, val) => (sum + val) % MOD, 0);
};