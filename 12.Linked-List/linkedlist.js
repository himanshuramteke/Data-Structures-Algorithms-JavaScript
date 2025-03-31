function createNode(value) {
    return {
        data: value,
        next: null
    }
}

function addAtHead(head, data) {
    let newNode = createNode(data); //this will create a new node with data
    newNode.next = head; //this step attaches the new node to the head of list.
    head = newNode; //this step updates the head of the list.
    return head;
}

let head = null;
head = addAtHead(head, 10); //10 ->
head = addAtHead(head, 20); //20 -> 10 -> X;
console.log(head); 
//{ data: 20, next: { data: 10, next: null } }