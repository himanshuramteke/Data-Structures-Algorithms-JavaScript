/**
 * Date: 15-04-2025
 * 2179.Count Good Triplets in an array(https://leetcode.com/problems/count-good-triplets-in-an-array/?envType=daily-question&envId=2025-04-15)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var goodTriplets = function(nums1, nums2) {
    const n = nums1.length;

     function createFenwickTree(size) {
        const tree = new Array(size + 1).fill(0);
        
        function update(index, delta = 1) {
            while (index <= size) {
                tree[index] += delta;
                index += index & -index;
            }
        }
        
        function query(index) {
            let res = 0;
            while (index > 0) {
                res += tree[index];
                index -= index & -index;
            }
            return res;
        }
        
        return { update, query };
    }    
    const posInNums2 = new Array(n);
    for (let i = 0; i < n; i++) {
        posInNums2[nums2[i]] = i;
    }
    
    // Create the transformed array: posInNums2[nums1[i]] + 1 (1-based indexing)
    const transformed = new Array(n);
    for (let i = 0; i < n; i++) {
        transformed[i] = posInNums2[nums1[i]] + 1;
    }
    
    const { update: updateBIT, query: queryBIT } = createFenwickTree(n);
    const leftCounts = new Array(n);
    
    // Calculate left counts: number of elements before current that are smaller in transformed array
    for (let i = 0; i < n; i++) {
        leftCounts[i] = queryBIT(transformed[i] - 1);
        updateBIT(transformed[i]);
    }
    
    // Reset Fenwick Tree for right counts
    const { update: updateBIT2, query: queryBIT2 } = createFenwickTree(n);
    const rightCounts = new Array(n);
    
    // Calculate right counts: number of elements after current that are larger in transformed array
    for (let i = n - 1; i >= 0; i--) {
        rightCounts[i] = queryBIT2(n) - queryBIT2(transformed[i]);
        updateBIT2(transformed[i]);
    }
    
    // Calculate total good triplets
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += leftCounts[i] * rightCounts[i];
    }
    
    return result;
};