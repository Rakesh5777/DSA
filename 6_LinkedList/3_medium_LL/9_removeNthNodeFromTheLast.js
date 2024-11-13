var removeNthFromEnd = function (head, n) {
    let fast = head;
    let slow = head;

    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // If fast pointer reaches the end, remove the head node
    if (!fast) return head.next;

    // Move both pointers until fast reaches the end
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    // Skip the nth node from the end
    slow.next = slow?.next?.next;

    return head;
};



var removeNthFromEndNotOptimal = function (head, n) {
    let length = 0;
    let temp = head;

    while (temp) {
        length++;
        temp = temp?.next;
    }

    let element = length - n - 1;
    temp = head;

    while (element > 0) {
        temp = temp?.next;
        element--;
    }

    if (element === -1) {
        head = head?.next || null;
    } else {
        temp.next = temp?.next?.next || null;
    }

    return head;
};