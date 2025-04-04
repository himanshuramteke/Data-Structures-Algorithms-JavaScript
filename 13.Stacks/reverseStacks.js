/**
 * Reverse a stack;
 */

function insertAtBottom(st, x) {   //TC=O(n) SC=O(n);
    let temp = [];
    while(st.length != 0) {
        let el = st[st.length - 1];
        temp.push(el);
        st.pop();
    }
    st.push(x);
    while(temp.length != 0) {
        let el = temp[temp.length - 1];
        st.push(el);
        temp.pop();
    }
}

function reverseStack(st) {
    if(st.length == 0) return;
    let el = st[st.length - 1];
    st.pop();
    reverseStack(st);
    insertAtBottom(st, el);
    return;
}
let st = [1,2,3,4,5]; //top->5
reverseStack(st);
console.log(st);
