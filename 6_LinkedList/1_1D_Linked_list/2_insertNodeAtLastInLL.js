class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertAtEnd(head, x) {
    let node = new Node(x);

    // If the list is empty, return the new node as the head
    if (!head) {
        return node;
    }

    // Traverse to the end of the list
    let temp = head;
    while (temp.next) {
        temp = temp.next;
    }

    // Insert the new node at the end
    temp.next = node;

    // Return the head of the list
    return head;
}

console.log(insertAtEnd(null, 340));