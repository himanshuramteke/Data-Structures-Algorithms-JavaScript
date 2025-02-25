/**
 * Date: 25-02-2025
 * 1524.Number of Sub-arrays with Odd Sum(https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/description/?envType=daily-question&envId=2025-02-25)
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    const MOD = 1e9 + 7;
    let oddCount = 0, evenCount = 1, prefixSum = 0, result = 0;

    for (let num of arr) {
        prefixSum += num;

        if (prefixSum % 2 === 0) {
            result = (result + oddCount) % MOD;
            evenCount++;
        } else {
            result = (result + evenCount) % MOD;
            oddCount++;
        }
    }
    
    return result;
};