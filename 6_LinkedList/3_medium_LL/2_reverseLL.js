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