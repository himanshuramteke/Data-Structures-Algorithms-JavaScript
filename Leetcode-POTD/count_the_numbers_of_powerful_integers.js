/**
 * Date: 10-04-2025
 * 2999. Count the Number of Powerful Integers(https://leetcode.com/problems/count-the-number-of-powerful-integers/?envType=daily-question&envId=2025-04-10)
 */

/**
 * @param {number} start
 * @param {number} finish
 * @param {number} limit
 * @param {string} s
 * @return {number}
 */
var numberOfPowerfulInt = function(start, finish, limit, s) {
    const S = BigInt(s);
    const m = s.length;
    const tenPowM = BigInt(10) ** BigInt(m);
    const bigStart = BigInt(start);
    const bigFinish = BigInt(finish);
    
    if (S > bigFinish) {
        return 0;
    }
    
    let lowerY;
    if (bigStart <= S) {
        lowerY = 0n;
    } else {
        lowerY = (bigStart - S + tenPowM - 1n) / tenPowM;
    }
    
    const upperY = (bigFinish - S) / tenPowM;
    if (upperY < lowerY) {
        return 0;
    }
    
    function countValidNumbersUpTo(max) {
        const maxStr = max.toString();
        const n = maxStr.length;
        const memo = {};
        
        function dfs(pos, tight, isZero) {
            if (pos === n) {
                return 1;
            }
            const key = `${pos},${tight},${isZero}`;
            if (memo.hasOwnProperty(key)) {
                return memo[key];
            }
            
            let res = 0;
            const maxDigit = tight ? parseInt(maxStr[pos], 10) : 9;
            for (let d = 0; d <= maxDigit; d++) {
                if (d > limit) continue;
                const newTight = tight && (d === maxDigit);
                const newIsZero = isZero && (d === 0);
                res += dfs(pos + 1, newTight, newIsZero);
            }
            memo[key] = res;
            return res;
        }
        
        return dfs(0, true, true);
    }
    
    const countUpper = countValidNumbersUpTo(upperY.toString());
    const countLower = lowerY === 0n ? 0 : countValidNumbersUpTo((lowerY - 1n).toString());
    
    return countUpper - countLower;
};