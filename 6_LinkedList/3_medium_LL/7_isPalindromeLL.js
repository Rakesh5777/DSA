var isPalindrome = function (head) {
    let fast = head;
    let slow = head;

    // Use two pointers to find the middle of the linked list
    while (fast?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let mid = reverseLL(slow);
    let current = head;

    // Compare the first half and the reversed second half
    while (current && mid) {
        if (current.val != mid.val) return false;
        current = current.next;
        mid = mid.next;
    }
    return true;
};

function reverseLL(head) {
    let current = head;
    let front = null;
    let prev = null;

    // Reverse the linked list
    while (current) {
        front = current.next;
        current.next = prev;
        prev = current;
        current = front;
    }

    return prev;
}

/*
Time Complexity: O(n)
- Finding the middle of the linked list takes O(n) time.
- Reversing the second half of the linked list takes O(n) time.
- Comparing the two halves takes O(n) time.
- Therefore, the overall time complexity is O(n).

Space Complexity: O(1)
- We are using a constant amount of extra space for pointers.
- Therefore, the overall space complexity is O(1).

Example:
Input: 1 -> 2 -> 2 -> 1
Output: true

Input: 1 -> 2 -> 3 -> 2 -> 1
Output: true

Input: 1 -> 2
Output: false
*/


var isPalindrome = function (head) {
    let s = ''; // Initialize an empty string to store the linked list values
    let temp = head; // Temporary pointer to traverse the linked list

    // Traverse the linked list and append each value to the string
    while (temp) {
        s += temp.val;
        temp = temp.next;
    }

    // Check if the string is equal to its reverse
    return s === s.split("").reverse().join("");
};

/*
Time Complexity: O(n)
- We traverse the linked list once to build the string, which takes O(n) time.
- Reversing the string and comparing it also takes O(n) time.
- Therefore, the overall time complexity is O(n).

Space Complexity: O(n)
- We use an additional string to store the linked list values, which takes O(n) space.
- The space complexity for reversing the string is also O(n).
- Therefore, the overall space complexity is O(n).
*/