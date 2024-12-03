/*
You will be given a list of numbers (1 to N).Each number is considered as one stick.The ith stick will be having specific length.We need to play a game in this problem.We need to pick 3 stick randomly, and if our opponent is able to form a triangle using those 3 sticks, he will win.Out task is to find the number of ways to select 3 sticks such that it is not possible for our opponent to form a triangle using them.
Ex.[4, 2, 10]
ans=1;
Triplets-[4, 2, 10] -> 4+2 < 10(Triangle violating property)
*/

function upper_bound(arr, x) {
    let low = 0, high = arr.length;
    let ans = arr.length;
 
    while(low <= high) {
       let mid = low + Math.floor((high - low) / 2);
       if(arr[mid] <= x) {
         low = mid + 1;
       } else {
         ans = mid;
         high = mid - 1;
       }
    }
    return ans;
}

function notFormTriangle(arr) {
    arr.sort((a, b) => a - b); // Sort the array
    let n = arr.length;
    let ans = 0; // Initialize ans

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = arr[i] + arr[j];
            let k = upper_bound(arr, sum);
            ans += n - k; // Count invalid triangles
        }
    }
    return ans;
}


console.log(notFormTriangle([4, 2, 10]));
