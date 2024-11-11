function hasCycle(head) {
    // Initialize two pointers, slow and fast
    let slow = head;
    let fast = head;

    // Traverse the linked list with two pointers
    while (fast?.next) {
        // Move fast pointer two steps ahead
        fast = fast.next.next;
        // Move slow pointer one step ahead
        slow = slow.next;

        // If the fast pointer meets the slow pointer, a cycle is detected
        if (fast === slow) return true;
    }

    // If no cycle is detected, return false
    return false;
}


var hasCycleWithNSpace = function (head) {
    // Create a set to store visited nodes
    let set = new Set();
    let temp = head;

    // Traverse the linked list
    while (temp) {
        // If the current node is already in the set, a cycle is detected
        if (set.has(temp)) return true;
        // Add the current node to the set
        set.add(temp);
        // Move to the next node
        temp = temp?.next;
    }
    // If no cycle is detected, return false
    return false;
};