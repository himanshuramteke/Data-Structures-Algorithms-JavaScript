/*
Given a sorted array of length n having integers in the range [0, n-2].Every element is present once but only one element is present twice.Find the repeating element element.
Ex.[0, 1, 2, 2, 3, 4, 5, 6]
ans=2
Do something better than O(n);
*/

function repeating_element(arr) {
    let low = 0, high = arr.length - 1;

    while(low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == mid-1)  {
           if(arr[mid] == arr[mid - 1]) {
            return mid;
           }
           high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return arr;
}

console.log(repeating_element([0, 1, 2, 3, 4, 5, 6, 6]));

/*
TC=O(Logn)
SC=O(1)
*/