/**
 * Date: 28-12-2024
 * Problem: 689. Maximum Sum of 3 Non-Overlapping Subarrays (https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/)
 *
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
    const n = nums.length;
    const prefixSum = Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    const left = Array(n).fill(0);
    const right = Array(n).fill(0);

    let maxSum = prefixSum[k] - prefixSum[0];
    left[k - 1] = 0;
    for (let i = k; i < n; i++) {
        const sum = prefixSum[i + 1] - prefixSum[i + 1 - k];
        if (sum > maxSum) {
            maxSum = sum;
            left[i] = i + 1 - k;
        } else {
            left[i] = left[i - 1];
        }
    }

    maxSum = prefixSum[n] - prefixSum[n - k]; 
    right[n - k] = n - k;
    for (let i = n - k - 1; i >= 0; i--) {
        const sum = prefixSum[i + k] - prefixSum[i];
        if (sum >= maxSum) {
            maxSum = sum;
            right[i] = i;
        } else {
            right[i] = right[i + 1];
        }
    }

    let result = [];
    maxSum = 0;
    for (let i = k; i <= n - 2 * k; i++) {
        const leftIndex = left[i - 1];
        const rightIndex = right[i + k];
        const totalSum = (prefixSum[i + k] - prefixSum[i]) +
                         (prefixSum[leftIndex + k] - prefixSum[leftIndex]) +
                         (prefixSum[rightIndex + k] - prefixSum[rightIndex]);

        if (totalSum > maxSum) {
            maxSum = totalSum;
            result = [leftIndex, i, rightIndex];
        }
    }

    return result;
};