/***
 * Date: 28-02-2025
 * 1092.Shortest Common SuperSequence(https://leetcode.com/problems/shortest-common-supersequence/description/?envType=daily-question&envId=2025-02-28)
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    let i = m, j = n;
    let scs = '';
    
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            scs = str1[i - 1] + scs;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            scs = str1[i - 1] + scs;
            i--;
        } else {
            scs = str2[j - 1] + scs;
            j--;
        }
    }
    
    while (i > 0) {
        scs = str1[i - 1] + scs;
        i--;
    }
    
    while (j > 0) {
        scs = str2[j - 1] + scs;
        j--;
    }
    
    return scs;
};