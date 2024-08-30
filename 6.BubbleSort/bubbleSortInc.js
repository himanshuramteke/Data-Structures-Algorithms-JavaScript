//Bubble sort in increasing order;

function bubbleSort(arr) {
  
    let n = arr.length;
    for(let i = 0; i < n-1; i++) {
        let isSwapped = false;
        for(let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(isSwapped == false) break;
    }
}

let arr = [5,4,3,2,10,11,1];
bubbleSort(arr);
console.log(arr);