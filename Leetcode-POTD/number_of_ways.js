/**
 * 1639. Number of Ways to Form a Target String Given a Dictionary (https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/)
 */

/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
    const MOD = 1e9 + 7;
    const m = words[0].length; // Length of each word
    const n = target.length; // Length of target
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    dp[0][0] = 1;

    const charCount = Array.from({ length: m }, () => Array(26).fill(0));
    for (const word of words) {
        for (let i = 0; i < m; i++) {
            charCount[i][word.charCodeAt(i) - 97]++;
        }
    }

    for (let j = 1; j <= m; j++) {
        for (let i = 0; i <= n; i++) {
            // Carry forward the previous result
            dp[i][j] = dp[i][j - 1];

            if (i > 0) {
                const charIndex = target.charCodeAt(i - 1) - 97;
                dp[i][j] += dp[i - 1][j - 1] * charCount[j - 1][charIndex];
                dp[i][j] %= MOD;
            }
        }
    }

    return dp[n][m];
};