/* 
BINARY SEARCH
Given a sorted array of non-negative distinct integers, find the smallest missing non-negative element in it.
Input: nums[] = [0, 1, 2, 6, 9, 11, 15]
output: smallest number is 3
Input: nums[] = [1, 2, 3, 4, 5, 6, 9, 11, 15]
output: smallest number is 0
TC = O(log N);
SC = 0(1);
*/

function findMissing(arr) {
    let ans = 0;
    let low = 0, high = arr.length - 1;
    if (arr[0] != 0) return 0;
    while (low <= high) {
        mid = (low + high) / 2;
        if(arr[mid] == mid) {
            //discard left half
            low = mid + 1;
        } else {
            ans = mid;
            high = mid - 1;
        }
    }
    return ans;
}

console.log(findMissing([0, 1, 2, 6, 9, 11, 15]));
console.log(findMissing([1, 2, 3, 4, 5, 6, 9, 11, 15]));
