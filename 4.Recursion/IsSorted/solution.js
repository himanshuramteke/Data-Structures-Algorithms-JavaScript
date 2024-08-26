/*
Given an array of n integers, check if the array of elements are arranged in ascending order or not??
ex:-[2,3,4,6,10]
ans=true;
ex:-[2,-3,-9,10,16]
ans=false;
*/

function f(arr, i) {
    // Base case: If we've reached the last element, the array is sorted
    if (i == arr.length - 1) return true;

    // Check if the current element is greater than the next element
    if (arr[i] > arr[i + 1]) return false;

    // Recur for the next element
    return f(arr, i + 1);
}

console.log(f([1, 2, 3, 4], 0));  // Output: true
console.log(f([1, 3, 2, 4], 0));  // Output: false
