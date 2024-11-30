/*
Lower_Bound
Given an array of integers arranged in ascending order and a value x. Find the index of the first element which is greater than or equal to x.
Ex.[1,2,2,3,3,3,5,5] x=3 ans=3
TC= O(Logn)
SC= O(1)
*/

function lower_Bound(arr, x) {
    let low = 0, high = arr.length - 1;
    let ans = arr.length;

    while(low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if(arr[mid] < x) {
            low = mid + 1;
        } else {
            ans = mid;
            high = mid -1;
        }
    }
    return ans;
} 

console.log(lower_Bound([1,2,2,3,3,3,5,5], 5));
