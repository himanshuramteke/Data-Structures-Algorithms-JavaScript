/**
 * Date: 31-12-2024
 * 983: Minimum Cost For Tickets (https://leetcode.com/problems/minimum-cost-for-tickets/description/?envType=live)
 * 
 */

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const n = days.length;
    const maxDay = days[n - 1];
    const minDay = days[0];
    const dp = new Array(maxDay + 1).fill(0);

    const daySet = new Set(days); 

    for (let i = minDay; i <= maxDay; i++) {
        if (!daySet.has(i)) {
            dp[i] = dp[i - 1]; 
        } else {
            dp[i] = Math.min(
                dp[Math.max(0, i - 1)] + costs[0], // 1-day pass
                dp[Math.max(0, i - 7)] + costs[1], // 7-day pass
                dp[Math.max(0, i - 30)] + costs[2] // 30-day pass
            );
        }
    }

    return dp[maxDay];
};