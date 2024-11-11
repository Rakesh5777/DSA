var detectCycle = function (head) {
    let slow = head;
    let fast = head;
    let loop = false;

    // Traverse the linked list with two pointers
    while (fast?.next) {
        fast = fast.next.next; // Move fast pointer two steps
        slow = slow.next; // Move slow pointer one step

        if (slow === fast) { // If they meet, a cycle is detected
            loop = true;
            break;
        }
    }

    if (!loop) return null; // If no cycle is detected, return null

    slow = head; // Reset slow pointer to head

    // Find the starting point of the cycle
    while (slow != fast) {
        slow = slow.next; // Move slow pointer one step
        fast = fast.next; // Move fast pointer one step

        if (slow === fast) return slow; // When they meet, return the starting point of the cycle
    }

    return slow; // Return the starting point of the cycle
};

// Time Complexity: O(n), where n is the number of nodes in the linked list
// Space Complexity: O(1), as we are using only a constant amount of extra space

var detectCycleWithHashMap = function (head) {
    let temp = head; // Initialize a temporary pointer to traverse the linked list
    let set = new Set(); // Create a set to store visited nodes

    while (temp) { // Traverse the linked list
        if (set.has(temp)) { // If the current node is already in the set, a cycle is detected
            return temp; // Return the node where the cycle starts
        }
        set.add(temp); // Add the current node to the set
        temp = temp?.next; // Move to the next node
    }

    return null; // If no cycle is detected, return null
};