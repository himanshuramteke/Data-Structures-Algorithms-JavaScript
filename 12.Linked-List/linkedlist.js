function createNode(value) {
    return {
        data: value,
        next: null
    }
}

function display(head) {
    let temp = head;
    let result = '';
    while (temp != null) {
        result = result + temp.data + ' -> ';
        temp = temp.next;
    }
    result = result + 'X';
    console.log(result);
}

function addAtHead(head, data) {
    let newNode = createNode(data); //this will create a new node with data
    newNode.next = head; //this step attaches the new node to the head of list.
    head = newNode; //this step updates the head of the list.
    return head;
}

function removeHead(head) {
    if(head == null) return null; //If linked list is empty no need for any operation
    let newHead = head.next; //store the access of the new head
    head.next = null; //remove the linking of old head;
    return newHead;
}

function addAtTail(head, data) {
    if(head == null) {
        //when linked list is empty
        return addAtHead(head, data)
    }
    //get access to tail node
    let temp = head;
    while(temp.next != null){
        temp = temp.next;
    }
    let newNode = createNode(data);
    temp.next = newNode;
    return head;
}

function removeTail(head) {
    if(head == null) return null;
    if(head.next == null) {
        //only present a single node which head and tail both
        return null;
    }
    let temp = head;
    while(temp.next.next != null) {
        temp = temp.next;
    }
    //temp variable has access to the second last node
    temp.next = null;
    return head;
}

function addAt(head, i, data) {
    if(head == null) {
        return addAtHead(head, data);
    }
    let temp = head;
    let count = 0;
    while(count < i-1) {
        temp = temp.next;
        count += 1;
        //temp points at the i-1th node
        let prevI = temp.next;
        let newNode = createNode(data);
        temp.next = newNode;
        newNode.next = prevI;
        return head;
    }
}

function removeAt(head, i) {
    if(head == null) {
        return head;
    }
    if(head.next == null) {
        return null;
    }
    let temp = head;
    let count = 0;
    while(temp.next != null && count < i-1) {
        temp = temp.next;
        count += 1;
    }
    if(temp.next == null && count <= i-1) {  //i is greater than length of linkedlist
        return head
    }
    //temp points at the  i-1th node
    let nodeTobeRemoved = temp.next;
    let nextOfRemoved = temp.next.next;
    temp.next = nextOfRemoved;
    nodeTobeRemoved.next = null;
    return head;
}

let head = null;
head = addAtHead(head, 10); //10 ->
head = addAtHead(head, 20); //20 -> 10 -> X;
head = addAtHead(head, 30); //30 -> 20 -> 10 -> x;
head = addAtHead(head, 40); //40-> 30->20->10->x;
head = addAtHead(head, 50); //50->40->30->20->10->x;
head = addAtTail(head, 100);
head = addAtTail(head, 90);
display(head) ;

// head = removeHead(head);
// display(head);

// head = removeTail(head);
// display(head);

// head = addAt(head, 3, 45);
 display(head);

head = removeAt(head, 5);
display(head)
