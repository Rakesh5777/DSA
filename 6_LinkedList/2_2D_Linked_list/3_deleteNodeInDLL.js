function deleteNode(head, x) {
    let count = 1;
    let current = head;

    // Traverse the list to find the x-th node
    while (count != x && current?.next) {
        current = current.next;
        count++;
    }

    // If the node to be deleted is the head node
    if (current === head) {
        head = current.next;
        if (head) {
            head.prev = null; // Update the previous pointer of the new head node
        }
    } else {
        // Fix the previous node's next pointer
        if (current.prev) {
            current.prev.next = current.next;
        }

        // Fix the next node's previous pointer
        if (current.next) {
            current.next.prev = current.prev;
        }
    }

    return head; // Return the updated head of the list
}