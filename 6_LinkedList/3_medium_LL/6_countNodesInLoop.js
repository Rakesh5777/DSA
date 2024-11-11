function countNodesinLoop(head) {
    let fast = head;
    let slow = head;
    let loop = false;

    // Detect loop using Floyd’s Cycle-Finding Algorithm
    while (fast?.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (slow === fast) {
            loop = true;
            break;
        }
    }

    // If no loop is found, return 0
    if (!loop) return 0;

    // Count the number of nodes in the loop
    let count = 1;
    slow = slow.next;

    // Move slow one step at a time and count the nodes until slow meets fast again
    while (slow !== fast) {
        slow = slow.next;
        count++;
    }

    return count;
}

// Time Complexity: O(n), where n is the number of nodes in the linked list
// Space Complexity: O(1)