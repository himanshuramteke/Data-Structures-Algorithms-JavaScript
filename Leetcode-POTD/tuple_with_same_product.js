/**
 * Date:06-02-2025
 * 1726.Tuple with same product(https://leetcode.com/problems/tuple-with-same-product/description/?envType=daily-question&envId=2025-02-06)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let productCount = {}; 
    let n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let product = nums[i] * nums[j];
            productCount[product] = (productCount[product] || 0) + 1;
        }
    }
    for (let freq of Object.values(productCount)) {
        if (freq > 1) {
            count += (freq * (freq - 1)) * 4; // Apply permutation formula
        }
    }
    
    return count;
};