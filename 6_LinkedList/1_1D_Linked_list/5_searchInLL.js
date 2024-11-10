function searchKey(head, key) {
    // If the linked list is empty, return false
    if (!head) return false;

    // Initialize a temporary pointer to traverse the linked list
    let temp = head;

    // Check if the head node contains the key
    if (temp.data === key) return true;

    // Traverse the linked list until the end
    while (temp.next) {
        temp = temp.next;
        // Check if the current node contains the key
        if (temp.data === key) return true;
    }

    // If the key is not found in the linked list, return false
    return false;
}