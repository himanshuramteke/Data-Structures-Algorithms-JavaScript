/**
 * Date:30-03-2025
 * 763.Partition Labels(https://leetcode.com/problems/partition-labels/description/?envType=daily-question&envId=2025-03-30)
 */

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let n = s.length;
    const lastOccurence = {};
    for(let i=0; i<n; i++) {
       lastOccurence[s[i]] = i;
    }
    const result = [];
    let start = 0;
    let end = 0;

    for(let i=0; i<n; i++) {
        end = Math.max(end, lastOccurence[s[i]]);
        if(i === end) {
            result.push(end - start + 1);
            start = end + 1;
        }
    }
    return result;
};