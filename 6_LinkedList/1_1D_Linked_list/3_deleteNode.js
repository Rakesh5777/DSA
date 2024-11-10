var deleteNode = function (node) {
    // Copy the value of the next node to the current node
    node.val = node.next.val;

    // Bypass the next node by pointing to the node after the next
    node.next = node.next.next;
};