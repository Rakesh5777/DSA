class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function reverseDLL(head) {
    // Initialize the current node to the head of the list
    let current = head;
    // Create a new head node for the reversed list
    let newHead = new DLLNode(current.data);
    // Set the next pointer of the new head to null
    newHead.next = null;

    // Traverse the original list
    while (current?.next) {
        // Move to the next node in the original list
        current = current.next;

        // Create a new node with the current data
        let node = new DLLNode(current.data);
        // Set the next pointer of the new node to the new head
        node.next = newHead;
        // Set the previous pointer of the new head to the current node
        newHead.prev = current;
        // Update the new head to the new node
        newHead = node;
    }

    // Return the new head of the reversed list
    return newHead;
}


function reverseDLLSwapMethod(head) {
    let current = head;
    let temp = null;

    // Traverse the list and swap the prev and next pointers
    while (current) {
        // Swap prev and next pointers
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;

        // Move to the next node (which was previously the prev node)
        current = current.prev;
    }

    // Return the new head of the reversed list
    // At the end, current will be null, so we return the previous node as the new head
    return temp ? temp.prev : head;
}