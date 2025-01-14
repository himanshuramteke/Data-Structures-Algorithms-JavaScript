/**
 * Date:14-1-2025
 * 2657.Find the prefix common array of two arrays(https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/description/?envType=daily-question&envId=2025-01-14)
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const n = A.length;
    const count = new Array(n + 1).fill(0);
    const prefixCommon = new Array(n).fill(0);

    let commonCount = 0;
    for(let i=0; i<n; i++) {
        count[A[i]]++;
        count[B[i]]++;

        if (count[A[i]] === 2) commonCount++;
        if (count[B[i]] === 2 && A[i] !== B[i]) commonCount++;

        prefixCommon[i] = commonCount;
    }
    return prefixCommon;
};