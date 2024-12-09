function countingSort(arr) {
    //only non negative numbers
    let maxEl = -Infinity;
    for(let i=0; i<arr.length; i++) {
        maxEl= Math.max(maxEl, arr[i]);
    }
    let freq = Array(maxEl + 1).fill(0);
    for(let i=0; i<arr.length; i++) {
        let currElement = arr[i];
        freq[currElement]++;
    }
    //prefix sum
    for(let i=1; i<freq.length; i++) {
        freq[i] = freq[i] + freq[i - 1];
    }    
    let output = Array(arr.length);
    for(let i=arr.length; i>= 0; i--) {
    output[freq[arr[i]] - 1] = arr[i];
    freq[arr[i]]--;
    }
    return output;
}

console.log(countingSort([9,1,2,3,2,1,5,5,4,1,2,3]));
