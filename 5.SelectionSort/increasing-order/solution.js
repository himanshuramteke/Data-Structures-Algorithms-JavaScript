/*
Given n integers value, arrange them in increasing order.
ex:-[15, -1, 3, 8, 2, 6]
output:[-1, 2, 3, 6, 8, 15]
*/

function getMinIndex(arr, i) {
    //this function returns the index of the minimum element in the range[i, n-1];
    let minIndex = i;
    for(let j = i + 1; j < arr.length; j++) {
        //we go in the remaining array from [i+1, n-1]
        if(arr[j] < arr[minIndex]) {
            //if the current element at the index j is less than our current minimum candidate;
            minIndex = j;
        }
    }
    return minIndex;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        //[i, n-1] --> unsorted region;
        let minIndex = getMinIndex(arr, i);
        //swap the ith element with minIndex;
        if(i !== minIndex) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}

let arr = [10, 5, 6, 7, 5, 12];
selectionSort(arr);
console.log(arr);