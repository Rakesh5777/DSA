var deleteMiddle = function (head) {
    // If the list has only one node, return null
    if (!head.next) return null;

    let slow = head;
    let fast = head.next;

    // Use two pointers to find the middle node
    while (fast?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Remove the middle node
    slow.next = slow?.next?.next;

    // Return the modified list
    return head;
};

/*
Time Complexity: O(n)
- The while loop runs until the fast pointer reaches the end of the list, which takes O(n) time.

Space Complexity: O(1)
- We are using a constant amount of extra space for the pointers (slow, fast).
*/

var deleteMiddleWithPrev = function (head) {
    // If the list has only one node, return null
    if (!head.next) return null;

    let slow = head;
    let fast = head;
    let prev = null;

    // Use two pointers to find the middle node
    while (fast?.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Remove the middle node
    prev.next = prev?.next?.next;

    // Return the modified list
    return head;
};

/*
Time Complexity: O(n)
- The while loop runs until the fast pointer reaches the end of the list, which takes O(n) time.

Space Complexity: O(1)
- We are using a constant amount of extra space for the pointers (slow, fast, prev).
*/