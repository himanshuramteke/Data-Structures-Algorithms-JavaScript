/**
 * Date: 05-05-2025
 * 790.Domino and Tromino Tiling(https://leetcode.com/problems/domino-and-tromino-tiling/?envType=daily-question&envId=2025-05-05)
 */

/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD = 1e9 + 7;
    const dp = new Array(n + 1).fill(0);
    const prefix = new Array(n + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;
    if (n >= 2) dp[2] = 2;

    prefix[0] = 1;
    prefix[1] = 2;
    if (n >= 2) prefix[2] = 4;

    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2] + 2 * prefix[i - 3]) % MOD;
        prefix[i] = (prefix[i - 1] + dp[i]) % MOD;
    }

    return dp[n];
};