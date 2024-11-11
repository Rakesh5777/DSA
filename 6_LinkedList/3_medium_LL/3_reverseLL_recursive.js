function reverseListRecursion(head) {
    // Base case: if head is null or only one node, return head
    if (!head || !head?.next) {
        return head;
    }

    // Recursively reverse the rest of the list
    let newHead = reverseListRecursion(head.next);

    // Example: 
    // If the list is 1 -> 2 -> 3 -> 4 -> 5, and we are at node 4:
    // head = 4, head.next = 5
    // After reversing the rest, newHead will be 5 -> 4 -> 3 -> 2 -> 1

    // Reverse the current node's pointer
    let front = head.next; // front = 5
    front.next = head; // 5 -> 4
    head.next = null; // 4 -> null

    // Return the new head of the reversed list
    return newHead;
}