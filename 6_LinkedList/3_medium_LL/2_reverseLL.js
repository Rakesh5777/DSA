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

var reverseList = function (head) {
    // Initialize pointers for previous, current, and next nodes
    let temp = head;
    let prev = null;
    let front = null;

    // Traverse the list
    while (temp) {
        // Store the next node
        front = temp.next;
        // Reverse the current node's pointer
        temp.next = prev;
        // Move the previous pointer to the current node
        prev = temp;
        // Move to the next node in the list
        temp = front;
    }

    // Return the new head of the reversed list
    return prev;
};

var reverseListWithExtraSpace = function (head) {
    // Initialize a temporary pointer to traverse the list
    let temp = head;
    // Create a new ListNode with the value of the head and set its next to null
    let ans = new ListNode(head?.val, null);

    // Traverse the list until the end
    while (temp?.next) {
        // Move to the next node
        temp = temp.next;
        // Create a new node with the current value and point it to the previous node
        const newNode = new ListNode(temp.val, ans);
        // Update the answer to the new node
        ans = newNode;
    }

    // Return the reversed list if the list is not empty, otherwise return the head
    return temp ? ans : head;
};