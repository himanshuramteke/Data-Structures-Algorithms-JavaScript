/**
 * Date:19-04-2025
 * 2563.Count the Number of fair pairs(https://leetcode.com/problems/count-the-number-of-fair-pairs/?envType=daily-question&envId=2025-04-19)
 */

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    nums.sort((a, b) => a - b);
    let count = 0;
    const n = nums.length;
    
    for (let i = 0; i < n; i++) {
        const targetLower = lower - nums[i];
        const targetUpper = upper - nums[i];
        
        // The left and right for j should be i+1 to n-1
        const left = i + 1;
        const right = n - 1;
        
        if (left > right) continue;
        
        // Find the first j >= left where nums[j] >= targetLower
        let lowerBound = findLowerBound(nums, left, right, targetLower);
        // Find the last j <= right where nums[j] <= targetUpper
        let upperBound = findUpperBound(nums, left, right, targetUpper);
        
        if (lowerBound <= upperBound) {
            count += upperBound - lowerBound + 1;
        }
    }
    
    return count;
};

function findLowerBound(nums, left, right, target) {
    let low = left;
    let high = right;
    let result = right + 1; // Initialize to out of bounds
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] >= target) {
            result = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}

function findUpperBound(nums, left, right, target) {
    let low = left;
    let high = right;
    let result = left - 1; // Initialize to out of bounds
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] <= target) {
            result = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}