class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertAtEnd(head, x) {
    let node = new Node(x);

    if (!head) {
        return node;
    }

    let temp = head;
    while (temp.next) {
        temp = temp.next;
    }
    temp.next = node;

    return head;
}

console.log(insertAtEnd(null, 340));