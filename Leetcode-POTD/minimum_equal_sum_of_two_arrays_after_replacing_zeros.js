/*
 * Date: 10-05-2025
 * 2918.Minimum Equal sum of two arrays after replacing zeros(https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/?envType=daily-question&envId=2025-05-10)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    let sum1 = 0;
    let zeroCount1 = 0;
    for (let num of nums1) {
        if (num === 0) {
            zeroCount1++;
        } else {
            sum1 += num;
        }
    }
    
    let sum2 = 0;
    let zeroCount2 = 0;
    for (let num of nums2) {
        if (num === 0) {
            zeroCount2++;
        } else {
            sum2 += num;
        }
    }
    
    // Calculate the minimal possible sums for each array
    const minSum1 = sum1 + zeroCount1;
    const minSum2 = sum2 + zeroCount2;
    
    if (zeroCount1 === 0 && zeroCount2 === 0) {
        return sum1 === sum2 ? sum1 : -1;
    } else if (zeroCount1 === 0) {
        // Only nums2 has zeros. sum1 must be >= minSum2's sum without zeros plus at least 1 per zero.
        // The minimal possible sum for nums2 is sum2 + zeroCount2.
        // So sum1 must be >= that. But since nums1 has no zeros, its sum is fixed.
        if (sum1 >= minSum2) {
            return sum1;
        } else {
            return -1;
        }
    } else if (zeroCount2 === 0) {
        // Only nums1 has zeros. Similar logic as above.
        if (sum2 >= minSum1) {
            return sum2;
        } else {
            return -1;
        }
    } else {
        // Both have zeros. The minimal possible sum is the maximum of minSum1 and minSum2.
        return Math.max(minSum1, minSum2);
    }
};