/**
 * Date: 01-06-2025
 *  2929. Distribute Candies Among Children II(https://leetcode.com/problems/distribute-candies-among-children-ii/?envType=daily-question&envId=2025-06-01)
 */

/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    function combinations(n, k) {
        if (k > n || k < 0) return 0;
        if (k === 0 || k === n) return 1;
        
        // Use the property C(n,k) = C(n,n-k) to minimize calculations
        if (k > n - k) k = n - k;
        
        let result = 1;
        for (let i = 0; i < k; i++) {
            result = result * (n - i) / (i + 1);
        }
        return Math.round(result);
    }
    let total = combinations(n + 2, 2);
    let subtract1 = 3 * combinations(n - limit - 1 + 2, 2);
    let add2 = 3 * combinations(n - 2 * limit - 2 + 2, 2);
    let subtract3 = combinations(n - 3 * limit - 3 + 2, 2);
    
    return total - subtract1 + add2 - subtract3;
};