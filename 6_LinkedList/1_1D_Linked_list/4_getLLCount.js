function getCount(head) {
    // Initialize count to 0
    let count = 0;

    // If the head is null, return count (which is 0)
    if (!head) return count;

    // Initialize temp to head
    let temp = head;

    // Since head is not null, set count to 1
    count = 1;

    // Traverse the linked list until the end
    while (temp.next) {
        // Increment count for each node
        count++;
        // Move to the next node
        temp = temp.next;
    }

    // Return the total count of nodes
    return count;
}