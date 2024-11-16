// Node class definition
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Function to segregate the linked list into 0s, 1s, and 2s
function segregate(head) {
    if (!head || !head.next) return head; // Base case: empty or single-node list

    // Create dummy nodes for 0, 1, and 2 sublists
    let zero = new Node(-1); // Dummy head for 0s
    let one = new Node(-1);  // Dummy head for 1s
    let two = new Node(-1);  // Dummy head for 2s

    // Pointers to traverse the sublists
    let zeroHead = zero;
    let oneHead = one;
    let twoHead = two;

    // Traverse the original list
    let current = head;
    while (current) {
        if (current.val === 0) {
            zeroHead.next = current;
            zeroHead = zeroHead.next;
        } else if (current.val === 1) {
            oneHead.next = current;
            oneHead = oneHead.next;
        } else {
            twoHead.next = current;
            twoHead = twoHead.next;
        }
        current = current.next; // Move to the next node
    }

    // Terminate the last list
    twoHead.next = null;

    // Link the lists together
    zeroHead.next = one.next ? one.next : two.next; // Link 0s to 1s or directly to 2s
    oneHead.next = two.next; // Link 1s to 2s

    // Return the head of the combined list
    return zero.next;
}

// Time Complexity: O(n) - We traverse the list once
// Space Complexity: O(1) - We use a constant amount of extra space

// Helper function to print the linked list
function printList(head) {
    let current = head;
    while (current) {
        process.stdout.write(current.val + " ");
        current = current.next;
    }
    console.log();
}

// Test case
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(0);
head.next.next.next = new Node(1);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(0);

console.log("Original list:");
printList(head);

head = segregate(head);

console.log("Segregated list:");
printList(head);

// Dry run:
// Original list: 1 -> 2 -> 0 -> 1 -> 2 -> 0
// After segregation:
// zero list: 0 -> 0
// one list: 1 -> 1
// two list: 2 -> 2
// Combined list: 0 -> 0 -> 1 -> 1 -> 2 -> 2