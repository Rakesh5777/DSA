var oddEvenList = function (head) {
    // If the list is empty or has only one element, return the head
    if (!head && !head?.next) return head;

    // Initialize odd and even pointers
    let odd = head;
    let even = head.next;
    let evenHead = even; // Keep the head of the even list to attach later

    // Traverse the list, rearranging nodes
    while (even && even.next) {
        // Link odd nodes together
        odd.next = odd?.next?.next;
        // Link even nodes together
        even.next = even?.next?.next;

        // Move to the next odd and even nodes
        odd = odd.next;
        even = even.next;
    }

    // Attach the even list to the end of the odd list
    odd.next = evenHead;
    return head;
};

// Example usage:
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
head = oddEvenList(head);

// Output the rearranged list
let current = head;
while (current) {
    console.log(current.val);
    current = current.next;
}

// Time Complexity: O(n), where n is the number of nodes in the linked list.
// Space Complexity: O(1), since we are rearranging the nodes in place without using extra space.