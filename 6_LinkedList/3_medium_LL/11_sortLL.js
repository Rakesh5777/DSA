// Function to sort the linked list using merge sort
var sortList = function (head) {
    // Base case: if the list is empty or has only one node, it's already sorted
    if (!head?.next) return head;

    // Find the middle of the linked list
    let middle = findMiddle(head);

    // Recursively sort the left and right halves
    let left = sortList(head);
    let right = sortList(middle);

    // Merge the sorted halves
    return mergeSortedLL(left, right);
};

// Function to find the middle of the linked list
function findMiddle(head) {
    let slow = head;
    let fast = head?.next;

    // Use two pointers to find the middle
    while (fast?.next?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Split the list into two halves
    let middle = slow.next;
    slow.next = null;
    return middle;
}

// Function to merge two sorted linked lists
function mergeSortedLL(head1, head2) {
    let dummy = new ListNode(-1, null);
    let temp = dummy;
    let t1 = head1;
    let t2 = head2;

    // Merge the two lists by comparing their nodes
    while (t1 && t2) {
        if (t1.val <= t2.val) {
            temp.next = t1;
            t1 = t1.next;
        } else {
            temp.next = t2;
            t2 = t2.next;
        }
        temp = temp.next;
    }

    // Append any remaining nodes
    temp.next = t1 || t2;

    return dummy.next;
}

// Time Complexity: O(n log n) due to the merge sort algorithm
// Space Complexity: O(log n) due to the recursion stack

// Test case
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}

// Create a linked list: 4 -> 2 -> 1 -> 3
let head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));

// Sort the linked list
head = sortList(head);

// Print the sorted linked list
printList(head); // Output: 1 -> 2 -> 3 -> 4

// Dry run:
// Initial list: 4 -> 2 -> 1 -> 3
// Find middle: 4 -> 2 and 1 -> 3
// Recursively sort left: 4 -> 2 -> 2 -> 4
// Recursively sort right: 1 -> 3 -> 1 -> 3
// Merge sorted halves: 1 -> 2 -> 3 -> 4



var sortListWithSpace = function (head) {
    // Initialize an empty array to store the values of the linked list nodes
    let array = [];
    let temp = head;

    // Traverse the linked list and push each node's value into the array
    while (temp) {
        array.push(temp.val);
        temp = temp.next;
    }

    // Sort the array in ascending order
    array = array.sort((a, b) => a - b);

    // Reset temp to the head of the linked list
    temp = head;
    let index = 0;

    // Traverse the linked list again and update each node's value with the sorted values from the array
    while (temp) {
        temp.val = array[index];
        index++;
        temp = temp.next;
    }

    // Return the head of the sorted linked list
    return head;
};

// Time Complexity: O(n log n) due to the sorting step
// Space Complexity: O(n) due to the array used to store the node values