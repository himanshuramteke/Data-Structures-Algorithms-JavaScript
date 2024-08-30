//Insertion Sort in Increasing order;

function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let currElement = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > currElement) {
            arr[j+1] = arr[j]; //shifting the element to the right index;
            j--;
        }
        arr[j+1] = currElement;
    }
}
let arr = [5, 4, 3, 13, -1, 9, 7, 22, 2, 1];
insertionSort(arr);
console.log(arr);