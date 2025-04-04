/**
 * Next greater element
 * Given an array of integers, find the next greater element for each element in the array.
 */

function nextGreaterElement(arr) {
    let n = arr.length;
    let output = Array(n);
    let st = []; 
    st.push(0); 
    for(let i=0; i<n; i++) {
        while(st.length > 0 && arr[i] > arr[st[st.length - 1]]) {
            output[st[st.length - 1]] = arr[i];
            st.pop();
        }
        st.push(i);
    }
    while(st.length > 0) {
        let topOfStack = st[st.length - 1];
        output[topOfStack] = -1;
        st.pop();
    }
    return output;
}

let arr = [2,5,6,3,9,12,13,7,1,8,16,19];
console.log(nextGreaterElement(arr)); 
