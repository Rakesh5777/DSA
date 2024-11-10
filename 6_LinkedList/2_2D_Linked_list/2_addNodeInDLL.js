export class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

function convertArrayToDLL(arr) {
    let head = new Node(arr[0]);
    let tail = null;
    let temp = head;

    for (let i = 1; i < arr.length; i++) {
        let current = new Node(arr[i]);
        current.prev = temp;
        temp.next = current;
        temp = current;
    }
    tail = temp;
    return head;
}
function addNode(head, p, x) {
    // Create a new node with the given data
    const node = new Node(x);
    let current = head;
    let count = 0;

    // Traverse the list to find the position to insert the new node
    while (current?.next && p != count) {
        current = current.next;
        count++;
    }

    // Adjust the pointers to insert the new node
    node.next = current.next;
    node.prev = current;
    current.next = node;

    // Return the head of the modified list
    return head;
}

console.log(addNode(convertArrayToDLL([1, 2, 3, 4], 0, 7)));