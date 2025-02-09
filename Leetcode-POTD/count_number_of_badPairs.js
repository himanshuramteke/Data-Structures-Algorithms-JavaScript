/**
 * Date:09-02-2025
 * 2364.Count Number of Bad Pairs(https://leetcode.com/problems/count-number-of-bad-pairs/description/?envType=daily-question&envId=2025-02-09)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    let countMap = new Map();
    let goodPairs = 0;
    let n = nums.length;

    for(let i=0; i<n; i++) {
        let diff = i - nums[i];
        if(countMap.has(diff)) {
            goodPairs += countMap.get(diff);
            countMap.set(diff, countMap.get(diff) + 1);
        } else {
            countMap.set(diff, 1)
        }
    }
    let totalPairs = (n * (n - 1)) / 2;
    return totalPairs - goodPairs;
};